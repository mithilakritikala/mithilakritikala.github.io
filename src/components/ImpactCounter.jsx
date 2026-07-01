import { useEffect, useState, useRef } from 'react';

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
        <div ref={ref} className="flex flex-col items-center justify-center px-4 py-2 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-[var(--color-gold)]/40 flex items-center justify-center text-2xl mb-4">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-gold)] mb-2">
                {prefix}{count}{suffix}
            </div>
            <div className="text-sm md:text-base uppercase tracking-wide text-[var(--color-cream)]/90 font-medium">{label}</div>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const StaticStat = ({ icon, value, label }) => (
    <div className="flex flex-col items-center justify-center px-4 py-2 text-center">
        <div className="w-14 h-14 rounded-full bg-white/10 border border-[var(--color-gold)]/40 flex items-center justify-center text-2xl mb-4">
            {icon}
        </div>
        <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-gold)] mb-2 leading-tight">{value}</div>
        <div className="text-sm md:text-base uppercase tracking-wide text-[var(--color-cream)]/90 font-medium">{label}</div>
    </div>
);

const ImpactCounter = () => {
    return (
        <section
            className="py-16 border-t-2 border-[var(--color-gold)]"
            style={{ background: 'linear-gradient(180deg, var(--color-maroon) 0%, #5C1010 100%)' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-[var(--color-gold)]/20">
                    <Counter end={20} suffix="+" label="Women Trained" icon="🎨" duration={1500} />
                    <Counter end={2} label="Courses Offered" icon="🖌️" duration={1000} />
                    <Counter end={1} label="District Reached" icon="📍" duration={1000} />
                    <StaticStat icon="📅" value="Est. July 2025" label="Year Founded" />
                </div>
            </div>
        </section>
    );
};

export default ImpactCounter;
