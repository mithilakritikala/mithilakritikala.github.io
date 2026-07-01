import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FishMotif, FrameDraw } from './MithilaMotif';

// Real photos only — no stock/AI imagery. Crossfades slowly in the photo
// column while the text column stays put, so nothing ever competes with
// the headline for attention (unlike a text-over-photo carousel).
const photos = ['/photos/Work In action.jpg', '/photos/gallery3.jpg'];
const PHOTO_DURATION = 7000;

const Hero = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setPhotoIndex((prev) => (prev + 1) % photos.length);
            setFadeKey((k) => k + 1);
        }, PHOTO_DURATION);
        return () => clearTimeout(timeoutRef.current);
    }, [photoIndex]);

    return (
        <section
            className="bg-paper-grain relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-paper)', fontFamily: 'var(--font-body)' }}
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Text column */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <FishMotif className="w-10 h-5 text-[var(--color-terracotta)]" />
                            <span
                                className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)]"
                            >
                                Mithila KritiKala &mdash; Benipatti, Madhubani
                            </span>
                        </div>

                        <h1
                            className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl text-[var(--color-ink)] mb-6"
                            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                        >
                            Ancient Lines,
                            <br />
                            <span className="italic text-[var(--color-maroon)]" style={{ fontWeight: 500 }}>
                                New Livelihoods.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--color-ink)]/75 max-w-xl leading-relaxed mb-10">
                            We teach rural women the centuries-old craft of Mithila painting and practical
                            tailoring skills &mdash; turning tradition into income, and income into independence.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link
                                to="/courses"
                                className="group inline-flex items-center gap-2 bg-[var(--color-maroon)] text-[var(--color-cream)] px-8 py-4 rounded-sm font-semibold hover:bg-[#6b1414] transition-colors"
                            >
                                Explore Courses
                                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Link>
                            <Link
                                to="/donate"
                                className="relative inline-flex items-center px-1 py-4 font-semibold text-[var(--color-ink)] hover:text-[var(--color-maroon)] transition-colors after:content-[''] after:absolute after:left-1 after:right-1 after:bottom-3 after:h-[2px] after:bg-[var(--color-gold)] after:origin-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300"
                            >
                                Support Our Work
                            </Link>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-white/60 border border-[var(--color-ink)]/10 rounded-full pl-2 pr-4 py-1.5">
                            <span className="w-7 h-7 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-sm">
                                🎨
                            </span>
                            <span className="text-sm font-medium text-[var(--color-ink)]/80">
                                20+ women trained since July 2025
                            </span>
                        </div>
                    </div>

                    {/* Photo column */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative aspect-[4/5] max-w-md mx-auto">
                            <div key={fadeKey} className="absolute inset-0 rounded-sm overflow-hidden reveal is-visible" style={{ animationDuration: '1.1s' }}>
                                <div
                                    className="w-full h-full bg-cover bg-center animate-paper-drift"
                                    style={{ backgroundImage: `url('${photos[photoIndex]}')` }}
                                />
                            </div>
                            <FrameDraw />

                            {/* Hand-lettered paper tag */}
                            <div
                                className="absolute -bottom-5 -left-5 bg-[var(--color-cream)] border border-[var(--color-ink)]/10 shadow-lg px-5 py-3 rounded-sm"
                                style={{ transform: 'rotate(-4deg)' }}
                            >
                                <p
                                    className="italic text-lg text-[var(--color-maroon)] leading-none"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Est. July 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
