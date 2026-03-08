// src/components/Testimonials.jsx
const Testimonials = () => {
    const testimonials = [
        {
            quote: "This training gave me the confidence and skill to earn on my own.",
            name: "Sunita Devi",
            year: "2023",
            course: "Student",
        },
        {
            quote: "I never thought I could paint professionally. Mithila KritiKala changed that.",
            name: "Rekha Kumari",
            year: "2022",
            course: "Student",
        },
        {
            quote: "The Cutting & Stitching course helped me start my own small tailoring business.",
            name: "Poonam Devi",
            year: "2023",
            course: "Student",
        }
    ];

    return (
        <section className="py-20 bg-[var(--color-cream)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-maroon)] font-bold">Voices of Empowerment</h2>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[var(--color-maroon)] relative">
                            <div className="text-6xl text-[var(--color-gold)] absolute top-4 left-4 opacity-50 font-serif leading-none">&quot;</div>
                            <p className="text-gray-700 italic mb-6 relative z-10 pl-6 mt-4">
                                {t.quote}
                            </p>
                            <div className="border-t border-gray-100 pt-4 pl-6">
                                <p className="font-bold text-[var(--color-dark)]">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.course} {t.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
