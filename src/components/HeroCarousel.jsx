import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Two slides only — a single strong photo with a brand message, and a donate CTA.
// The impact stat ("20+ women trained") already lives in the Impact section right
// below, so it isn't repeated here.
const slides = [
    {
        id: 1,
        image: "/photos/Work In action.jpg",
        badge: null,
        title: <>Art, Skill &amp; Empowerment<br className="hidden md:block" /> for a Brighter Future</>,
        subtitle: "We are dedicated to preserving the ancient art of Mithila and empowering rural women with skills for a sustainable livelihood.",
        cta: { label: "Explore Courses", to: "/courses", variant: "maroon" },
    },
    {
        id: 2,
        image: "/photos/gallery2.jpg",
        badge: "Make a Difference",
        title: "Your Support Can Change a Life",
        subtitle: "Help us provide free training, art supplies and materials to women and girls in rural Bihar. Every donation matters.",
        cta: { label: "Donate Now", to: "/donate", variant: "gold" },
        secondaryCta: { label: "Learn More", to: "/about" },
    }
];

const SLIDE_DURATION = 6000;
const FADE_DURATION = 600;

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    // Bumped on every slide change to force a fresh mount of the single slide
    // container below, which restarts its fade/zoom animation cleanly.
    const [fadeKey, setFadeKey] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (!isPaused && slides.length > 1) {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
                setFadeKey((k) => k + 1);
            }, SLIDE_DURATION);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [current, isPaused]);

    const goTo = (index) => {
        setCurrent(index);
        setFadeKey((k) => k + 1);
    };
    const handleNext = () => goTo((current + 1) % slides.length);
    const handlePrev = () => goTo((current - 1 + slides.length) % slides.length);

    const slide = slides[current];

    return (
        <section
            className="relative text-white overflow-hidden"
            style={{ height: 'calc(85vh)', minHeight: '520px' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/*
              Only ONE slide is ever mounted at a time (keyed by fadeKey), unlike the
              previous version which stacked every slide as absolutely-positioned
              siblings and relied purely on opacity/z-index to hide the inactive ones.
              That's structurally safer against any future overlap regression.
            */}
            <div key={fadeKey} className="absolute inset-0 animate-heroFadeIn">
                <div
                    className="absolute inset-0 bg-cover bg-center animate-heroZoom"
                    style={{ backgroundImage: `url('${slide.image}')` }}
                />
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(20,6,6,0.6) 0%, rgba(20,6,6,0.35) 45%, rgba(20,6,6,0.7) 100%)' }}
                />

                {slide.badge && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 md:top-10 z-20">
                        <div className="inline-flex items-center gap-2 bg-[var(--color-gold)]/90 backdrop-blur-sm border border-[var(--color-gold)] text-white text-xs tracking-widest uppercase px-4 py-2 rounded-full font-bold shadow-lg">
                            <Sparkles size={14} />
                            {slide.badge}
                        </div>
                    </div>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight max-w-4xl"
                        style={{ fontFamily: "'Noto Serif', serif", textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
                    >
                        {slide.title}
                    </h1>
                    <p
                        className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={slide.cta.to}
                            className={`inline-block px-8 py-3 rounded font-bold transition-colors shadow-lg ${slide.cta.variant === 'gold'
                                    ? 'bg-[var(--color-gold)] text-[var(--color-dark)] hover:bg-[#b07d20]'
                                    : 'bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414]'
                                }`}
                        >
                            {slide.cta.label}
                        </Link>
                        {slide.secondaryCta && (
                            <Link
                                to={slide.secondaryCta.to}
                                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded font-bold transition-colors shadow-lg"
                            >
                                {slide.secondaryCta.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {slides.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-[var(--color-gold)] transition-colors duration-300 shadow-lg focus:outline-none border border-white/20"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-[var(--color-gold)] transition-colors duration-300 shadow-lg focus:outline-none border border-white/20"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                className={`rounded-full transition-all duration-300 focus:outline-none ${index === current ? 'w-8 h-2 bg-[var(--color-gold)]' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <style>{`
                @keyframes heroFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-heroFadeIn {
                    animation: heroFadeIn ${FADE_DURATION}ms ease-in-out;
                }
                @keyframes heroZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.08); }
                }
                .animate-heroZoom {
                    animation: heroZoom ${SLIDE_DURATION + FADE_DURATION}ms ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default HeroCarousel;
