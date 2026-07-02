import { Link } from 'react-router-dom';
import { FishMotif, SunburstMotif } from './MithilaMotif';

// Hero v2 — a static layered collage instead of a timed carousel: one large
// photo in a Mithila window-arch mask with an offset ink echo-outline, a
// small overlapping paper-bordered snapshot, and a headline that rises in
// word by word. No slide timer at all, so the old overlap class of bug is
// structurally impossible.

// eslint-disable-next-line react/prop-types
const StaggerWords = ({ text, startDelay = 0 }) => (
    <>
        {/* eslint-disable-next-line react/prop-types */}
        {text.split(' ').map((word, i) => (
            <span
                key={i}
                className="hero-word"
                style={{ animationDelay: `${startDelay + i * 110}ms` }}
            >
                {word}
                {' '}
            </span>
        ))}
    </>
);

const tickerItems = [
    'Mithila Painting',
    'Cutting & Stitching',
    'Women-Led Training',
    'Benipatti · Madhubani',
    'Est. July 2025',
];

const Hero = () => {
    return (
        <section
            className="bg-paper-grain relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-paper)', fontFamily: 'var(--font-body)' }}
        >
            {/* Faint rotating sunburst watermark behind the collage */}
            <SunburstMotif className="animate-spin-slower pointer-events-none absolute -top-28 -right-28 w-[480px] h-[480px] text-[var(--color-terracotta)]/10" />

            <div className="container mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
                    {/* Text column */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6 hero-word" style={{ animationDelay: '0ms' }}>
                            <FishMotif className="w-10 h-5 text-[var(--color-terracotta)]" />
                            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)]">
                                Mithila KritiKala &mdash; Benipatti, Madhubani
                            </span>
                        </div>

                        <h1
                            className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-[4.25rem] text-[var(--color-ink)] mb-6"
                            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                        >
                            <StaggerWords text="Ancient Lines," startDelay={120} />
                            <br />
                            <span className="italic text-[var(--color-maroon)]" style={{ fontWeight: 500 }}>
                                <StaggerWords text="New Livelihoods." startDelay={400} />
                            </span>
                        </h1>

                        <p
                            className="reveal is-visible text-lg md:text-xl text-[var(--color-ink)]/75 max-w-xl leading-relaxed mb-10"
                            style={{ animationDelay: '700ms' }}
                        >
                            We teach rural women the centuries-old craft of Mithila painting and practical
                            tailoring skills &mdash; turning tradition into income, and income into independence.
                        </p>

                        <div className="reveal is-visible flex flex-wrap items-center gap-4 mb-10" style={{ animationDelay: '850ms' }}>
                            <Link
                                to="/courses"
                                className="group inline-flex items-center gap-2 bg-[var(--color-maroon)] text-[var(--color-cream)] px-8 py-4 rounded-sm font-semibold hover:bg-[#6b1414] transition-colors shadow-md"
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

                        <div className="reveal is-visible inline-flex items-center gap-2 bg-white/60 border border-[var(--color-ink)]/10 rounded-full pl-2 pr-4 py-1.5" style={{ animationDelay: '1000ms' }}>
                            <span className="w-7 h-7 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-sm">
                                🎨
                            </span>
                            <span className="text-sm font-medium text-[var(--color-ink)]/80">
                                20+ women trained since July 2025
                            </span>
                        </div>
                    </div>

                    {/* Collage column */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <div className="relative max-w-[280px] sm:max-w-md mx-auto lg:ml-auto lg:mr-6 mb-20 sm:mb-24 lg:mb-0">
                            {/* Ink echo outline, offset behind the arch */}
                            <div className="arch-mask absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border-[1.5px] border-[var(--color-ink)]/35" aria-hidden="true" />

                            {/* Main photo in a Mithila window-arch */}
                            <div className="arch-mask relative overflow-hidden aspect-[4/5] shadow-xl reveal is-visible" style={{ animationDelay: '150ms' }}>
                                <div
                                    className="w-full h-full bg-cover bg-center animate-paper-drift"
                                    style={{ backgroundImage: "url('/photos/hero-women-with-paintings.jpg')" }}
                                />
                                {/* Gold arch rim */}
                                <div className="arch-mask absolute inset-0 border-4 border-[var(--color-gold)]/60 pointer-events-none" />
                            </div>

                            {/* Overlapping paper-bordered snapshot */}
                            <div className="animate-float-soft absolute -bottom-10 left-2 sm:-left-6 md:-left-12 w-32 sm:w-40 md:w-52 bg-[var(--color-cream)] p-2 pb-3 shadow-2xl rounded-sm border border-[var(--color-ink)]/10">
                                <img
                                    src="/photos/hero-teaching-detail.jpg"
                                    alt="A trainee learning Mithila painting technique"
                                    className="w-full h-24 sm:h-28 md:h-36 object-cover rounded-sm"
                                />
                                <p
                                    className="italic text-center text-[var(--color-maroon)] text-xs sm:text-sm md:text-base mt-2 leading-none"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Est. July 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Craft ticker along the hero's bottom edge */}
            <div className="relative border-y-2 border-[var(--color-gold)] bg-[var(--color-maroon)] py-3 overflow-hidden">
                <div className="animate-marquee-loop flex w-max whitespace-nowrap">
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                            {tickerItems.map((item) => (
                                <span key={`${copy}-${item}`} className="flex items-center text-[var(--color-cream)]/90 text-sm font-medium tracking-[0.18em] uppercase">
                                    <span className="px-6">{item}</span>
                                    <FishMotif className="w-8 h-4 text-[var(--color-gold)]" />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
