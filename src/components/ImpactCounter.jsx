import { useEffect, useState, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Counter = ({ end, duration, suffix = "", prefix = "", label, icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
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
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end); // Ensure exact finish
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-gold)] mb-2">
                {prefix}{count}{suffix}
            </div>
            <div className="text-lg text-[var(--color-cream)] font-medium">
                {label}
            </div>
        </div>
    );
}

const ImpactCounter = () => {
    return (
        <section className="bg-[var(--color-maroon)] py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Counter end={150} suffix="+" label="Women Trained" icon="🎨" duration={2000} />
                    <Counter end={5} suffix="+" label="Years of Service" icon="📅" duration={1500} />
                    <Counter end={2} label="Courses Offered" icon="🖌️" duration={1000} />
                    <Counter end={1} label="District Reached" icon="📍" duration={1000} />
                </div>
            </div>
        </section>
    );
};

export default ImpactCounter;
