import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "/photos/Work In action.jpg",
        badge: null,
        title: <>Art, Skill &amp; Empowerment<br className="hidden md:block" /> for a Brighter Future</>,
        subtitle: "We are dedicated to preserving the ancient art of Mithila and empowering rural women with skills for a sustainable livelihood.",
        buttons: (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses" className="inline-block bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] px-8 py-3 rounded font-bold transition-colors shadow-lg">
                    Explore Courses
                </Link>
            </div>
        )
    },
    {
        id: 2,
        image: "/photos/gallery3.jpg",
        badge: "Our Impact",
        title: "20+ Women Trained & Growing",
        subtitle: "Since July 2025, we have been transforming lives through art education and vocational training in Madhubani, Bihar.",
        buttons: (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gallery" className="inline-block bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] px-8 py-3 rounded font-bold transition-colors shadow-lg">
                    See Our Work
                </Link>
            </div>
        )
    },
    {
        id: 3,
        image: "/photos/gallery2.jpg",
        badge: "Make a Difference",
        title: "Your Support Can Change a Life",
        subtitle: "Help us provide free training, art supplies and materials to women and girls in rural Bihar. Every donation matters.",
        buttons: (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate" className="inline-block bg-[#C9922A] text-white hover:bg-[#b07d20] px-8 py-3 rounded font-bold transition-colors shadow-lg">
                    Donate Now
                </Link>
                <Link to="/about" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded font-bold transition-colors shadow-lg">
                    Learn More
                </Link>
            </div>
        )
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        if (!isPaused) {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
        return resetTimeout;
    }, [current, isPaused]);

    const handleNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section
            className="relative text-white overflow-hidden"
            style={{ height: 'calc(85vh)', minHeight: '480px' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background image with Ken Burns effect */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform ease-out"
                        style={{
                            backgroundImage: `url('${slide.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: index === current ? 'scale(1.10)' : 'scale(1)',
                            transitionDuration: index === current ? '6000ms' : '0ms',
                        }}
                    />
                    {/* Gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)'
                        }}
                    />

                    {/* Badge at top-left */}
                    {slide.badge && (
                        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
                            <div className="inline-flex items-center gap-2 bg-[#C9922A]/90 backdrop-blur-sm border border-[#C9922A] text-white text-xs tracking-widest uppercase px-4 py-2 rounded-full font-bold shadow-lg">
                                <Sparkles size={14} className="text-white" />
                                {slide.badge}
                            </div>
                        </div>
                    )}

                    {/* Text content — floating directly on image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight max-w-4xl"
                            style={{
                                fontFamily: "'Noto Serif', serif",
                                textShadow: '0 2px 20px rgba(0,0,0,0.5)'
                            }}
                        >
                            {slide.title}
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            {slide.subtitle}
                        </p>
                        {slide.buttons}
                    </div>
                </div>
            ))}

            {/* Left Arrow */}
            <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-[#C9922A] transition-colors duration-300 shadow-lg focus:outline-none border border-white/20"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-[#C9922A] transition-colors duration-300 shadow-lg focus:outline-none border border-white/20"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full transition-all duration-300 focus:outline-none ${index === current
                                ? 'w-8 h-2 bg-[#C9922A]'
                                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-30">
                <div
                    key={`${current}-${isPaused}`}
                    className="h-full bg-[#C9922A]"
                    style={{
                        animation: isPaused ? 'none' : 'heroProgress 5s linear forwards',
                        width: isPaused ? undefined : '0%',
                    }}
                />
            </div>

            <style>{`
                @keyframes heroProgress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default HeroCarousel;
