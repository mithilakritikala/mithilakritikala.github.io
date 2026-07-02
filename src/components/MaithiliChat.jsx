import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Send } from 'lucide-react';
import knowledgeBase from '../data/maithili-knowledge.json';
import MaithiliAvatar from './MaithiliAvatar';

// Scores each FAQ entry by how many of its keywords appear in the user's
// message, and returns the best match (or null if nothing scores > 0).
// This is the offline fallback — it can only ever return text that's
// already written in maithili-knowledge.json, so it can't fabricate facts.
// Used whenever /api/maithili (the Gemini-backed route) isn't reachable —
// e.g. during plain `npm run dev`, which doesn't run Vercel functions.
function findBestMatch(message) {
    const normalized = message.toLowerCase();
    let best = null;
    let bestScore = 0;

    for (const entry of knowledgeBase.entries) {
        let score = 0;
        for (const keyword of entry.keywords) {
            if (normalized.includes(keyword.toLowerCase())) score += 1;
        }
        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    }

    return bestScore > 0 ? best : null;
}

async function askGemini(message, priorMessages) {
    const history = priorMessages
        .filter((m) => m.role === 'user' || m.role === 'bot')
        .map((m) => ({ role: m.role === 'user' ? 'user' : 'model', text: m.text }));

    const response = await fetch('/api/maithili', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
    });

    if (!response.ok) throw new Error(`API responded ${response.status}`);
    const data = await response.json();
    if (!data.reply) throw new Error('Empty reply');
    return data.reply;
}

const WELCOME_MESSAGE = {
    role: 'bot',
    text: "Namaste! I'm Maithili 🎨 Ask me about our courses, admission, fees, donations, or how to get in touch.",
};

const MaithiliChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [isThinking, setIsThinking] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen, isThinking]);

    const handleSend = async (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || isThinking) return;

        const priorMessages = messages;
        setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
        setInput('');
        setIsThinking(true);

        try {
            const reply = await askGemini(trimmed, priorMessages);
            setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
        } catch {
            // Offline / API not deployed yet / Gemini error — fall back to the
            // local keyword matcher so the widget still answers something useful.
            const match = findBestMatch(trimmed);
            const replyText = match ? match.answer : knowledgeBase.fallback;
            setMessages((prev) => [...prev, { role: 'bot', text: replyText, showContactLink: !match }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="mb-4 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden" style={{ height: '480px' }}>
                    <div className="bg-[var(--color-maroon)] text-[var(--color-cream)] px-5 py-4 flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[var(--color-cream)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <MaithiliAvatar size={38} />
                        </div>
                        <div className="flex-grow">
                            <p className="font-serif font-bold text-lg leading-tight">Maithili</p>
                            <p className="text-xs text-[var(--color-cream)]/80">Mithila KritiKala Assistant</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-[var(--color-cream)]/80 hover:text-white flex-shrink-0">
                            <X size={22} />
                        </button>
                    </div>

                    <div ref={scrollRef} className="flex-grow overflow-y-auto px-4 py-4 space-y-3 bg-[var(--color-cream)]/40">
                        {messages.map((m, idx) => (
                            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-[var(--color-maroon)] text-white rounded-br-sm'
                                            : 'bg-white border border-gray-200 text-gray-700 rounded-bl-sm'
                                        }`}
                                >
                                    <p>{m.text}</p>
                                    {m.showContactLink && (
                                        <Link to="/contact" onClick={() => setIsOpen(false)} className="inline-block mt-2 text-[var(--color-maroon)] font-bold text-xs underline">
                                            Go to Contact page →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isThinking && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-maroon)]/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-maroon)]/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-maroon)]/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSend} className="border-t border-gray-100 p-3 flex items-center gap-2 bg-white">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about courses, fees, donating..."
                            className="flex-grow px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[var(--color-maroon)]"
                        />
                        <button
                            type="submit"
                            disabled={isThinking}
                            aria-label="Send message"
                            className="w-10 h-10 flex-shrink-0 rounded-full bg-[var(--color-maroon)] text-white flex items-center justify-center hover:bg-[#6b1414] transition-colors disabled:opacity-50"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Close Maithili chat' : 'Open Maithili chat'}
                className="w-16 h-16 rounded-full bg-[var(--color-cream)] border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] shadow-xl flex items-center justify-center hover:scale-105 transition-transform ml-auto overflow-hidden"
            >
                {isOpen ? <X size={26} /> : <MaithiliAvatar size={56} />}
            </button>
        </div>
    );
};

export default MaithiliChat;
