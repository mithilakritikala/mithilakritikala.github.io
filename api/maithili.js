// Vercel serverless function — this is the ONLY place the Gemini API key
// is ever read. It runs server-side, so the key never reaches the browser
// bundle. The frontend (src/components/MaithiliChat.jsx) calls this route
// instead of talking to Gemini directly.
//
// Local dev note: plain `npm run dev` (Vite) does not execute files in
// /api — only `vercel dev` or an actual Vercel deployment does. Until
// this route is reachable, MaithiliChat.jsx falls back to its offline
// keyword matcher automatically.

import knowledgeBase from '../src/data/maithili-knowledge.json' with { type: 'json' };

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

function buildSystemPrompt() {
    const facts = knowledgeBase.entries
        .map((entry) => `- ${entry.answer}`)
        .join('\n');

    return `You are Maithili, the friendly assistant for Mithila KritiKala, an NGO in Benipatti, Madhubani, Bihar that trains rural women in Mithila painting and tailoring.

Answer ONLY using the facts below. If something isn't covered by these facts, say you're not sure and point the visitor to the Contact page — never invent numbers, dates, policies, or claims about the NGO.
Never give tax or legal advice; for tax/legal questions, say to consult a professional or contact the NGO directly.
Keep answers short (2-4 sentences), warm, and in the same language the visitor wrote in (English or Hindi/Hinglish).

Known facts:
${facts}

Fallback when nothing matches: "${knowledgeBase.fallback}"`;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
    }

    const { message, history } = req.body || {};
    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Missing "message" in request body' });
    }

    // history: [{ role: 'user'|'model', text: string }, ...] — optional, capped so
    // requests stay small and cheap.
    const contents = [
        ...(Array.isArray(history) ? history.slice(-6) : []).map((turn) => ({
            role: turn.role === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }],
        })),
        { role: 'user', parts: [{ text: message }] },
    ];

    try {
        const response = await fetch(GEMINI_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': apiKey,
            },
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: buildSystemPrompt() }] },
                contents,
                generationConfig: {
                    temperature: 0.4,
                    maxOutputTokens: 300,
                },
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error('Gemini API error', response.status, errText);
            return res.status(502).json({ error: 'Upstream model error' });
        }

        const data = await response.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

        if (!reply) {
            return res.status(502).json({ error: 'Empty response from model' });
        }

        return res.status(200).json({ reply });
    } catch (err) {
        console.error('Maithili API handler error', err);
        return res.status(500).json({ error: 'Internal error' });
    }
}
