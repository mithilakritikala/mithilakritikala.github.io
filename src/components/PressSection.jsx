import { Newspaper, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import { KachniDivider } from './MithilaMotif';

// Add the channel name, date, and link here once confirmed — until then this
// stays truthful (a real photo, no invented outlet name) rather than empty.
const pressItems = [
    {
        outlet: null, // TODO: channel name
        date: null,   // TODO: coverage date
        title: 'A local news channel visited our training center to cover our work.',
        link: null,   // TODO: article/video link, once available
        image: '/photos/press-news-visit.jpg',
    },
];

const PressSection = () => {
    if (pressItems.length === 0) return null;

    return (
        <section className="py-20 bg-white border-t border-[var(--color-ink)]/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-[var(--color-maroon)] mb-2">
                        <Newspaper size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest">In the News</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-maroon)]" style={{ fontFamily: 'var(--font-display)' }}>
                        Press Coverage
                    </h2>
                    <KachniDivider className="w-40 h-3 mx-auto mt-5" />
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pressItems.map((item, idx) => {
                        const Wrapper = item.link ? 'a' : 'div';
                        const linkProps = item.link
                            ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                            : {};
                        return (
                            <Reveal key={idx} delay={idx * 100} as={Wrapper} {...linkProps} className="group bg-[var(--color-paper)] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                {item.image && (
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                )}
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-gold)] mb-2">
                                        {item.outlet || 'Coverage details coming soon'}{item.date ? ` · ${item.date}` : ''}
                                    </p>
                                    <h3 className="font-semibold text-[var(--color-ink)] mb-3 flex-grow">{item.title}</h3>
                                    {item.link && (
                                        <span className="inline-flex items-center gap-1 text-[var(--color-maroon)] font-medium text-sm group-hover:underline">
                                            Read / Watch <ExternalLink size={14} />
                                        </span>
                                    )}
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PressSection;
