import { Link } from 'react-router-dom';
import { Palette, Users, Heart, Facebook, Instagram, Linkedin } from 'lucide-react';
import AnnouncementBanner from '../components/AnnouncementBanner';
import Hero from '../components/Hero';
import ImpactCounter from '../components/ImpactCounter';
import Testimonials from '../components/Testimonials';
import PressSection from '../components/PressSection';
import Reveal from '../components/Reveal';
import { FishMotif, KachniDivider } from '../components/MithilaMotif';

const courseStatus = {
    mithilaPainting: { status: "open", label: "Admissions Open" },
    cuttingStitching: { status: "closed", label: "Admissions Closed" }
};

const visionItems = [
    {
        index: '01',
        icon: Palette,
        title: 'Preserve Tradition',
        text: 'Keeping the ancient art of Mithila painting alive for future generations through dedicated teaching and practice.',
    },
    {
        index: '02',
        icon: Users,
        title: 'Empower Women',
        text: 'Providing economic opportunities and skill development to women and girls in rural Bihar through art education.',
    },
    {
        index: '03',
        icon: Heart,
        title: 'Build Community',
        text: "Creating a supportive community where traditional arts flourish and women support each other's growth.",
    },
];

const galleryPreview = [
    { src: '/photos/Work In action.jpg', label: 'Students Learning', size: 'lg:col-span-7 h-[280px] md:h-[420px]' },
    { src: '/photos/gallery3.jpg', label: 'Art Class', size: 'lg:col-span-5 h-[280px] md:h-[420px]' },
    { src: '/photos/gallery2.jpg', label: 'Trustee with Students', size: 'lg:col-span-5 h-[220px] md:h-[260px]' },
    { src: '/photos/gallery7.jpg', label: 'Trustee', size: 'lg:col-span-7 h-[220px] md:h-[260px]' },
];

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ eyebrow, title }) => (
    <div className="text-center mb-16">
        {eyebrow && (
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                {eyebrow}
            </p>
        )}
        <h2 className="text-3xl md:text-5xl text-[var(--color-maroon)] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
        </h2>
        <KachniDivider className="w-40 h-3 mx-auto mt-5" />
    </div>
);

const Home = () => {
    return (
        <div className="pt-20" style={{ fontFamily: 'var(--font-body)' }}>
            <AnnouncementBanner />

            <Hero />

            <ImpactCounter />

            {/* Vision Section — an editorial numbered list rather than three equal cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Reveal>
                        <SectionHeading eyebrow="Why We Exist" title="Our Vision" />
                    </Reveal>

                    <div className="divide-y divide-[var(--color-ink)]/10">
                        {visionItems.map((item, idx) => (
                            <Reveal key={item.title} delay={idx * 120} className="flex items-start gap-6 md:gap-10 py-10">
                                <span
                                    className="text-4xl md:text-6xl text-[var(--color-gold)]/30 font-semibold leading-none shrink-0"
                                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                                >
                                    {item.index}
                                </span>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon size={22} className="text-[var(--color-maroon)]" />
                                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-ink)]/70 leading-relaxed max-w-xl">{item.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section — asymmetric brick layout instead of a uniform 4-up grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionHeading eyebrow="From the Studio" title="A Glimpse of Our Work" />
                    </Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {galleryPreview.map((photo, idx) => (
                            <Reveal key={photo.src} delay={idx * 100} className={`group relative overflow-hidden rounded-sm ${photo.size}`}>
                                <img
                                    src={photo.src}
                                    alt={photo.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <span className="text-white font-medium" style={{ fontFamily: 'var(--font-display)' }}>{photo.label}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="text-center mt-12">
                        <Link to="/gallery" className="inline-flex items-center gap-2 border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] px-8 py-3 rounded-sm font-semibold transition-colors">
                            View Full Gallery
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-24 bg-[var(--color-paper)]">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionHeading eyebrow="Learn a Craft" title="Our Courses" />
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {[
                            { key: 'mithilaPainting', img: '/photos/mithila-painting.png', title: 'Mithila Painting', text: 'Learn the ancient art of Mithila with traditional techniques and natural colors.' },
                            { key: 'cuttingStitching', img: '/photos/stiching.png', title: 'Cutting & Stitching', text: 'Master cutting and stitching to create beautiful garments and textiles.' },
                        ].map((course, idx) => (
                            <Reveal
                                key={course.key}
                                delay={idx * 150}
                                className={`bg-white shadow-lg overflow-hidden flex flex-col relative hover:-translate-y-1 transition-transform duration-300 ${courseStatus[course.key].status === 'closed' ? 'opacity-70 grayscale-[0.25]' : ''}`}
                            >
                                <div className="relative">
                                    <img src={course.img} alt={course.title} className="w-full h-64 object-cover" />
                                    <span
                                        className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wide border-2 border-dashed ${courseStatus[course.key].status === 'open' ? 'text-green-800 border-green-700 bg-white/90' : 'text-red-700 border-red-600 bg-white/90'}`}
                                        style={{ transform: 'rotate(-6deg)' }}
                                    >
                                        {courseStatus[course.key].label}
                                    </span>
                                </div>
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <FishMotif className="w-8 h-4 text-[var(--color-terracotta)]" />
                                            <h3 className="text-2xl font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>{course.title}</h3>
                                        </div>
                                        <p className="text-[var(--color-ink)]/70 mb-6">{course.text}</p>
                                    </div>
                                    <Link to="/courses" className="text-[var(--color-maroon)] font-bold hover:underline self-start">View Details &rarr;</Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            <PressSection />

            {/* Get Involved Section */}
            <section className="py-24 bg-[var(--color-ink)] text-[var(--color-cream)]">
                <div className="container mx-auto px-4">
                    <Reveal className="text-center mb-16">
                        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">Join the Mission</p>
                        <h2 className="text-3xl md:text-5xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>Get Involved</h2>
                        <KachniDivider className="w-40 h-3 mx-auto mt-5 mb-6" color="var(--color-gold)" />
                        <p className="text-lg text-[var(--color-cream)]/70 max-w-2xl mx-auto">Join us in our mission to preserve traditional art and empower women. Your support can change lives.</p>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-gold)]/20">
                        <Reveal className="text-center flex flex-col items-center px-6 py-8 md:py-0">
                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Make a Donation</h3>
                            <p className="text-[var(--color-cream)]/70 mb-8 flex-grow">Your donations help us provide free training, art supplies, and materials to women and girls in Madhubani.</p>
                            <Link to="/donate" className="inline-block border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] py-2 px-6 text-base rounded-sm font-semibold transition-colors w-full">
                                Donate
                            </Link>
                        </Reveal>
                        <Reveal delay={120} className="text-center flex flex-col items-center px-6 py-8 md:py-0">
                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Volunteer</h3>
                            <p className="text-[var(--color-cream)]/70 mb-8 flex-grow">We are always looking for passionate individuals to help with teaching, workshops, and digital marketing.</p>
                            <Link to="/join" className="inline-block border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] py-2 px-6 text-base rounded-sm font-semibold transition-colors w-full">
                                Become a Volunteer
                            </Link>
                        </Reveal>
                        <Reveal delay={240} className="text-center flex flex-col items-center px-6 py-8 md:py-0">
                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Share our Story</h3>
                            <p className="text-[var(--color-cream)]/70 mb-8 flex-grow">Help us reach more people by sharing our mission. Follow us on social media and spread the word.</p>
                            <div className="flex justify-center gap-4 text-[var(--color-gold)] mt-auto">
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
