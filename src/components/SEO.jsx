import { useEffect } from 'react';

const SITE_URL = 'https://mithilakritikala.com';
const DEFAULT_IMAGE = `${SITE_URL}/photos/hero-women-with-paintings.jpg`;

function setMeta(attr, key, content) {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(href) {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function setPageJsonLd(data) {
    const id = 'page-jsonld';
    let el = document.getElementById(id);
    if (!data) {
        if (el) el.remove();
        return;
    }
    if (!el) {
        el = document.createElement('script');
        el.id = id;
        el.type = 'application/ld+json';
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
}

// Updates document.title + the description/canonical/OG/Twitter meta tags
// for the current route. Necessary because this is a client-rendered SPA —
// without this, every page would keep whatever title/description index.html
// shipped for "/", which is bad for both search engines and social sharing
// of subpages (About/Courses/Gallery/etc. would all look identical to "/").
// eslint-disable-next-line react/prop-types
const SEO = ({ title, description, path = '', image, jsonLd }) => {
    useEffect(() => {
        const fullTitle = title ? `${title} | Mithila KritiKala` : 'Mithila KritiKala';
        const url = `${SITE_URL}${path}`;
        const img = image || DEFAULT_IMAGE;

        document.title = fullTitle;
        setMeta('name', 'description', description);
        setCanonical(url);

        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:url', url);
        setMeta('property', 'og:image', img);

        setMeta('name', 'twitter:title', fullTitle);
        setMeta('name', 'twitter:description', description);
        setMeta('name', 'twitter:image', img);

        setPageJsonLd(jsonLd);
        return () => setPageJsonLd(null);
    }, [title, description, path, image, jsonLd]);

    return null;
};

export default SEO;
