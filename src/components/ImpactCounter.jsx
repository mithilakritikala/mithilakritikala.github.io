import { useEffect, useState, useRef } from 'react';
import { KachniDivider } from './MithilaMotif';

// eslint-disable-next-line react/prop-types
const Counter = ({ end, duration, suffix = "", prefix = "", label, icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(end);
        };
        window.requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return (
        <div ref={ref} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-[var(--color-gold)]/40 flex items-center justify-center text-xl shrink-0 mt-1">
                {icon}
            </div>
            <div>
                <div
                    className="text-4xl md:text-5xl font-bold text-[var(--color-gold)] leading-none mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {prefix}{count}{suffix}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-[var(--color-cream)]/80 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    {label}
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const StaticStat = ({ icon, value, label }) => (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10 border border-[var(--color-gold)]/40 flex items-center justify-center text-xl shrink-0 mt-1">
            {icon}
        </div>
        <div>
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] leading-tight mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {value}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-[var(--color-cream)]/80 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                {label}
            </div>
        </div>
    </div>
);

const ImpactCounter = () => {
    return (
        <section
            className="relative overflow-hidden py-16 md:py-20"
            style={{ background: 'linear-gradient(135deg, var(--color-maroon) 0%, #5C1010 100%)' }}
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Heading column */}
                    <div className="lg:col-span-4">
                        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                            Our Impact
                        </p>
                        <h2
                            className="text-3xl md:text-4xl text-[var(--color-cream)] font-semibold leading-tight"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            The story,
                            <br />
                            <span className="italic text-[var(--color-gold)]" style={{ fontWeight: 500 }}>in numbers.</span>
                        </h2>
                        <KachniDivider className="w-32 h-3 mt-5" color="rgba(201,146,42,0.55)" />
                    </div>

                    {/* Stats grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                            <Counter end={20} suffix="+" label="Women Trained" icon="🎨" duration={1500} />
                            <Counter end={2} label="Courses Offered" icon="🖌️" duration={1000} />
                            <Counter end={1} label="District Reached" icon="📍" duration={1000} />
                            <StaticStat icon="📅" value="Est. July 2025" label="Year Founded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCounter;
