import { Newspaper, ExternalLink } from 'lucide-react';

// Add real coverage here once details (channel name, date, link, photos) are
// confirmed. Each item: { outlet, date, title, link, image }. Section renders
// nothing if this stays empty, so it won't show a half-built section live.
const pressItems = [
    // {
    //   outlet: "Channel Name",
    //   date: "Month Year",
    //   title: "Segment title or description",
    //   link: "https://...",
    //   image: "/photos/press/example.jpg",
    // },
];

const PressSection = () => {
    if (pressItems.length === 0) return null;

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-[var(--color-maroon)] mb-2">
                        <Newspaper size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest">In the News</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-maroon)] font-bold">Press Coverage</h2>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pressItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-[var(--color-cream)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            {item.image && (
                                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-6 flex-grow flex flex-col">
                                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-gold)] mb-2">
                                    {item.outlet} · {item.date}
                                </p>
                                <h3 className="font-bold text-[var(--color-dark)] mb-3 flex-grow">{item.title}</h3>
                                <span className="inline-flex items-center gap-1 text-[var(--color-maroon)] font-medium text-sm group-hover:underline">
                                    Read / Watch <ExternalLink size={14} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PressSection;
