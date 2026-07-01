// Small hand-drawn-style line-art motifs inspired by real Mithila painting
// vocabulary (the fish as a fertility/prosperity symbol, radiating sun
// lines, the kachni border of fine repeating strokes). These are the
// site's differentiation anchor: structural decoration drawn from the
// org's own craft, not generic icon-pack glyphs.

// eslint-disable-next-line react/prop-types
export const FishMotif = ({ className = '', color = 'currentColor' }) => (
    <svg viewBox="0 0 64 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4 16c8-11 20-13 30-9 5 2 9 5 12 9-3 4-7 7-12 9-10 4-22 2-30-9Z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
        <path d="M46 16 58 9m-12 7 12 7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 16c4-4 10-6 16-5m-16 5c4 4 10 6 16 5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.4" fill={color} />
    </svg>
);

// eslint-disable-next-line react/prop-types
export const SunburstMotif = ({ className = '', color = 'currentColor' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="14" stroke={color} strokeWidth="2" />
        {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const inner = 20;
            const outer = i % 2 === 0 ? 46 : 34;
            return (
                <line
                    key={i}
                    x1={50 + Math.cos(angle) * inner}
                    y1={50 + Math.sin(angle) * inner}
                    x2={50 + Math.cos(angle) * outer}
                    y2={50 + Math.sin(angle) * outer}
                    stroke={color}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
            );
        })}
    </svg>
);

// A fine repeating triangle/dot strip in the style of a Mithila kachni
// border — used as a section divider instead of a plain flat rule.
// eslint-disable-next-line react/prop-types
export const KachniDivider = ({ className = '', color = 'var(--color-gold)' }) => (
    <svg viewBox="0 0 240 16" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="8" x2="240" y2="8" stroke={color} strokeWidth="1" opacity="0.5" />
        {Array.from({ length: 20 }).map((_, i) => (
            <path
                key={i}
                d={`M${i * 12} 8 l6 -6 l6 6 l-6 6 Z`}
                fill="none"
                stroke={color}
                strokeWidth="1.2"
            />
        ))}
        <circle cx="120" cy="8" r="3" fill={color} />
    </svg>
);

// Draws an animated hand-drawn ink frame inset from a photo's edge, like a
// border sketched around a print. Built from four plain CSS bars (not SVG
// stroke-dasharray) because that trick breaks down once the frame's aspect
// ratio is non-square — a <rect> stretched via preserveAspectRatio="none"
// combined with vector-effect="non-scaling-stroke" renders inconsistently
// across two of the four edges under non-uniform scaling. Scale transforms
// on plain divs don't have that failure mode.
// eslint-disable-next-line react/prop-types
export const FrameDraw = ({ className = '' }) => (
    <div className={`pointer-events-none absolute inset-3 ${className}`}>
        <div className="frame-draw-x absolute top-0 left-0 w-full h-[1.5px] bg-[var(--color-ink)]" style={{ animationDelay: '0ms', transformOrigin: 'left' }} />
        <div className="frame-draw-y absolute top-0 right-0 w-[1.5px] h-full bg-[var(--color-ink)]" style={{ animationDelay: '250ms', transformOrigin: 'top' }} />
        <div className="frame-draw-x absolute bottom-0 right-0 w-full h-[1.5px] bg-[var(--color-ink)]" style={{ animationDelay: '500ms', transformOrigin: 'right' }} />
        <div className="frame-draw-y absolute bottom-0 left-0 w-[1.5px] h-full bg-[var(--color-ink)]" style={{ animationDelay: '750ms', transformOrigin: 'bottom' }} />
    </div>
);
