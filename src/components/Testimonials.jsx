// src/components/Testimonials.jsx
//
// Real trainee testimonials go here once collected (with confirmed consent —
// see project notes). Left empty rather than filled with placeholder/demo
// content, since the org was only founded in July 2025.
import { KachniDivider, FishMotif } from './MithilaMotif';
import Reveal from './Reveal';

const testimonials = [];

const Testimonials = () => {
    if (testimonials.length === 0) {
        return (
            <section className="py-24 bg-[var(--color-paper)]" style={{ fontFamily: 'var(--font-body)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal>
                        <FishMotif className="w-14 h-7 text-[var(--color-terracotta)] mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl text-[var(--color-maroon)] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                            Voices of Empowerment
                        </h2>
                        <KachniDivider className="w-40 h-3 mx-auto mt-5 mb-8" />
                        <p className="text-[var(--color-ink)]/70 max-w-xl mx-auto text-lg">
                            We&apos;re gathering stories from our trainees — real voices from Mithila KritiKala will appear here soon.
                        </p>
                    </Reveal>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-[var(--color-paper)]" style={{ fontFamily: 'var(--font-body)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-[var(--color-maroon)] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                        Voices of Empowerment
                    </h2>
                    <KachniDivider className="w-40 h-3 mx-auto mt-5" />
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <Reveal key={idx} delay={idx * 120} className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[var(--color-maroon)] relative">
                            <div className="text-6xl text-[var(--color-gold)] absolute top-4 left-4 opacity-50 leading-none" style={{ fontFamily: 'var(--font-display)' }}>&quot;</div>
                            <p className="text-gray-700 italic mb-6 relative z-10 pl-6 mt-4">
                                {t.quote}
                            </p>
                            <div className="border-t border-gray-100 pt-4 pl-6">
                                <p className="font-bold text-[var(--color-dark)]">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.course} {t.year}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
