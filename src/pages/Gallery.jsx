import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const allImages = [
    { src: "/photos/Work In action.jpg", category: "events", objectPosition: "center top" },
    { src: "/photos/gallery3.jpg", category: "mithila", objectPosition: "center top" },
    { src: "/photos/gallery2.jpg", category: "stitching", objectPosition: "center top" },
    { src: "/photos/gallery7.jpg", category: "events", objectPosition: "center" },
    { src: "/photos/gallery1.jpg", category: "mithila", objectPosition: "center" },
    { src: "/photos/gallery4.jpg", category: "stitching", objectPosition: "center" },
    { src: "/photos/gallery5.jpg", category: "events", objectPosition: "center" },
    { src: "/photos/gallery6.jpg", category: "mithila", objectPosition: "center" },
];

const categories = [
    { key: "all", label: "All" },
    { key: "mithila", label: "Mithila Painting" },
    { key: "stitching", label: "Cutting & Stitching" },
    { key: "events", label: "Events" },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxIdx, setLightboxIdx] = useState(null);

    const filtered = activeCategory === "all" ? allImages : allImages.filter(img => img.category === activeCategory);

    const openLightbox = (idx) => setLightboxIdx(idx);
    const closeLightbox = () => setLightboxIdx(null);
    const prev = () => setLightboxIdx((i) => (i === 0 ? filtered.length - 1 : i - 1));
    const next = () => setLightboxIdx((i) => (i === filtered.length - 1 ? 0 : i + 1));

    return (
        <div className="pt-24 min-h-screen bg-[var(--color-cream)] pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <PageHeader
                    eyebrow="From the Studio"
                    title="Our Gallery"
                    subtitle="A collection of moments from our classes, workshops, and the beautiful art created by our talented students."
                />

                {/* Category Filter */}
                <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 border ${activeCategory === cat.key
                                    ? 'bg-[var(--color-maroon)] text-white border-[var(--color-maroon)]'
                                    : 'bg-white text-[var(--color-ink)]/70 border-[var(--color-ink)]/10 hover:border-[var(--color-maroon)] hover:text-[var(--color-maroon)]'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </Reveal>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filtered.map((img, index) => (
                        <Reveal
                            key={img.src}
                            delay={(index % 4) * 80}
                            className="aspect-square bg-gray-200 rounded-sm overflow-hidden group relative shadow-sm cursor-pointer"
                            as="div"
                        >
                            <div onClick={() => openLightbox(index)} className="w-full h-full">
                                <img
                                    src={img.src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    style={{ objectPosition: img.objectPosition }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn size={32} className="text-white" />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIdx !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors z-10"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <X size={28} />
                    </button>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-[var(--color-gold)] rounded-full p-3 transition-colors z-10 hidden md:flex"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <img
                        src={filtered[lightboxIdx].src}
                        alt="Gallery full view"
                        className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                        style={{ objectPosition: filtered[lightboxIdx].objectPosition }}
                    />
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-[var(--color-gold)] rounded-full p-3 transition-colors z-10 hidden md:flex"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                        {lightboxIdx + 1} / {filtered.length}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Gallery;
