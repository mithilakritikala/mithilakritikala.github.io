import { useEffect, useRef, useState } from 'react';

// Fades + rises children into place the first time they scroll into view.
// Shared by every Home-page section instead of each one re-implementing
// its own IntersectionObserver.
// eslint-disable-next-line react/prop-types
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
