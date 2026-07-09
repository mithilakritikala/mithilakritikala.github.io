import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ShieldCheck, Landmark, FileCheck2, Clock3, UserRound } from 'lucide-react';
import AnnouncementBanner from '../components/AnnouncementBanner';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ImpactCounter from '../components/ImpactCounter';
import Testimonials from '../components/Testimonials';
import PressSection from '../components/PressSection';
import Reveal from '../components/Reveal';
import { KachniDivider } from '../components/MithilaMotif';

const trustBadges = [
    { icon: ShieldCheck, label: '12A Registered' },
    { icon: ShieldCheck, label: '80G Certified' },
    { icon: Landmark, label: 'NGO Darpan Listed' },
    { icon: FileCheck2, label: 'PAN Verified' },
];

const courses = [
    {
        index: '01',
        img: '/photos/course-mithila-painting.jpg',
        title: 'Mithila Painting',
        text: 'Learn the ancient art of Mithila with traditional techniques and natural colors — from first sketches to commercial-grade artwork.',
        meta: [
            { icon: Clock3, label: '4 months' },
            { icon: UserRound, label: 'Babita Devi' },
        ],
        status: { open: true, label: 'Admissions Open' },
    },
    {
        index: '02',
        img: '/photos/course-stitching.jpg',
        title: 'Cutting & Stitching',
        text: 'Master cutting and stitching to create beautiful garments — practical skills for a tailoring business or textile work.',
        meta: [
            { icon: Clock3, label: '4 months / batch' },
        ],
        status: { open: false, label: 'Batch In Progress' },
    },
];

const galleryPreview = [
    { src: '/photos/gallery-group-with-art.jpg', label: 'Proud Artists', size: 'lg:col-span-7 h-[280px] md:h-[420px]' },
    { src: '/photos/gallery-panchmukhi-hanuman.jpg', label: 'Student Artwork', size: 'lg:col-span-5 h-[280px] md:h-[420px]' },
    { src: '/photos/course-stitching.jpg', label: 'Cutting & Stitching', size: 'lg:col-span-5 h-[220px] md:h-[260px]' },
    { src: '/photos/gallery-showcase-3.jpg', label: 'Finished Work', size: 'lg:col-span-7 h-[220px] md:h-[260px]' },
];

const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61578616140715', icon: <Facebook size={20} />, label: 'Facebook' },
    { href: 'https://www.instagram.com/mithilakritikala/', icon: <Instagram size={20} />, label: 'Instagram' },
    {
        href: 'https://x.com/m_kritikala',
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        label: 'X (Twitter)',
    },
    { href: 'https://www.linkedin.com/company/mithila-kritikala/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
];

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ eyebrow, title, subtitle, light = false }) => (
    <div className="text-center mb-14 md:mb-16">
        {eyebrow && (
            <p className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-[var(--color-gold)]' : 'text-[var(--color-terracotta)]'}`}>
                {eyebrow}
            </p>
        )}
        <h2
            className={`text-3xl md:text-5xl font-semibold ${light ? 'text-[var(--color-cream)]' : 'text-[var(--color-maroon)]'}`}
            style={{ fontFamily: 'var(--font-display)' }}
        >
            {title}
        </h2>
        <KachniDivider className="w-40 h-3 mx-auto mt-5" color={light ? 'var(--color-gold)' : undefined} />
        {subtitle && (
            <p className={`mt-6 text-lg max-w-2xl mx-auto ${light ? 'text-[var(--color-cream)]/70' : 'text-[var(--color-ink)]/70'}`}>
                {subtitle}
            </p>
        )}
    </div>
);

const Home = () => {
    return (
        <div className="pt-20" style={{ fontFamily: 'var(--font-body)' }}>
            <SEO
                title="Mithila Painting &amp; Tailoring Training NGO in Madhubani, Bihar"
                description="Mithila KritiKala trains rural women in Madhubani, Bihar in Mithila (Madhubani) painting and tailoring, free of cost. A 12A/80G registered NGO — see our courses, impact, and how to donate or volunteer."
                path="/"
            />
            <AnnouncementBanner />

            <Hero />

            <ImpactCounter />

            {/* Trust strip — registration proof right under the impact numbers,
                because credibility is what turns "impressive stats" into
                "stats I believe." */}
            <div className="bg-[var(--color-paper)] py-5 border-b border-[var(--color-ink)]/10">
                <div className="container mx-auto px-4">
                    <Reveal className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                        {trustBadges.map(({ icon: Icon, label }) => (
                            <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]/70">
                                <Icon size={16} className="text-[var(--color-maroon)]" />
                                {label}
                            </span>
                        ))}
                        <Link to="/transparency" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-maroon)] hover:underline">
                            View Certificates &rarr;
                        </Link>
                    </Reveal>
                </div>
            </div>

            {/* Courses — window-niche cards: arch-masked photo set into a white
                frame with a ghost index numeral, like paintings in an alcove. */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionHeading
                            eyebrow="What We Do"
                            title="Our Courses"
                            subtitle="Preserving tradition and empowering women, one course at a time."
                        />
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {courses.map((course, idx) => (
                            <Reveal
                                key={course.title}
                                delay={idx * 150}
                                className={`group relative bg-[var(--color-paper)] p-5 pb-8 shadow-lg rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${course.status.open ? '' : 'opacity-80'}`}
                            >
                                {/* Ghost index numeral */}
                                <span
                                    className="absolute top-6 right-6 text-7xl italic font-semibold leading-none text-[var(--color-maroon)]/10 group-hover:text-[var(--color-maroon)]/20 transition-colors select-none pointer-events-none z-10"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {course.index}
                                </span>

                                <div className="arch-mask relative overflow-hidden h-64 md:h-72">
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <span
                                        className={`absolute bottom-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wide border-2 border-dashed bg-white/95 ${course.status.open ? 'text-green-800 border-green-700' : 'text-amber-800 border-amber-600'}`}
                                        style={{ transform: 'rotate(-5deg)' }}
                                    >
                                        {course.status.label}
                                    </span>
                                </div>

                                <div className="px-3 pt-7">
                                    <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                        {course.title}
                                    </h3>
                                    <p className="text-[var(--color-ink)]/70 mb-5 leading-relaxed">{course.text}</p>
                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6">
                                        {course.meta.map(({ icon: Icon, label }) => (
                                            <span key={label} className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink)]/60">
                                                <Icon size={15} className="text-[var(--color-gold)]" />
                                                {label}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to="/courses"
                                        className="inline-flex items-center gap-2 text-[var(--color-maroon)] font-bold group-hover:gap-3 transition-all"
                                    >
                                        View Details <span>&rarr;</span>
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission strip — one strong line, terracotta, between the concrete
                (courses) and the visual (gallery). */}
            <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'var(--color-terracotta)' }}>
                <div className="bg-paper-grain absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="container mx-auto px-6 relative">
                    <Reveal className="max-w-3xl mx-auto text-center">
                        <p
                            className="text-2xl md:text-4xl italic text-[var(--color-cream)] leading-snug"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Every painting sold and every garment stitched is a step toward a woman&apos;s independence.
                        </p>
                        <KachniDivider className="w-40 h-3 mx-auto mt-8" color="rgba(253,246,236,0.6)" />
                    </Reveal>
                </div>
            </section>

            {/* Gallery preview — asymmetric brick mosaic with paper-tag captions */}
            <section className="py-24 bg-[var(--color-paper)]">
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                <span
                                    className="absolute bottom-4 left-4 bg-[var(--color-cream)] text-[var(--color-maroon)] italic text-sm md:text-base px-3 py-1 shadow-md"
                                    style={{ fontFamily: 'var(--font-display)', transform: 'rotate(-2deg)' }}
                                >
                                    {photo.label}
                                </span>
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

            <Testimonials />

            <PressSection />

            {/* Get Involved — three numbered paths on ink */}
            <section className="py-24 bg-[var(--color-ink)] text-[var(--color-cream)] relative overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <Reveal>
                        <SectionHeading
                            light
                            eyebrow="Join the Mission"
                            title="Three Ways to Help"
                            subtitle="Join us in our mission to preserve traditional art and empower women. Your support can change lives."
                        />
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:divide-x divide-[var(--color-gold)]/20 max-w-6xl mx-auto">
                        <Reveal className="group text-center flex flex-col items-center px-8">
                            <span className="text-6xl italic font-semibold leading-none text-[var(--color-gold)]/25 group-hover:text-[var(--color-gold)]/60 transition-colors mb-4 select-none" style={{ fontFamily: 'var(--font-display)' }}>01</span>
                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Make a Donation</h3>
                            <p className="text-[var(--color-cream)]/70 mb-8 flex-grow">Your donations help us provide free training, art supplies, and materials to women and girls in Madhubani.</p>
                            <Link to="/donate" className="inline-block bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[#b07d20] py-3 px-6 rounded-sm font-bold transition-colors w-full">
                                Donate
                            </Link>
                        </Reveal>
                        <Reveal delay={120} className="group text-center flex flex-col items-center px-8">
                            <span className="text-6xl italic font-semibold leading-none text-[var(--color-gold)]/25 group-hover:text-[var(--color-gold)]/60 transition-colors mb-4 select-none" style={{ fontFamily: 'var(--font-display)' }}>02</span>
                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Volunteer</h3>
                            <p className="text-[var(--color-cream)]/70 mb-8 flex-grow">We are always looking for passionate individuals to help with teaching, workshops, and digital marketing.</p>
                            <Link to="/join" className="inline-block border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] py-[10px] px-6 rounded-sm font-bold transition-colors w-full">
                                Become a Volunteer
                            </Link>
                        </Reveal>
                        <Reveal delay={240} className="group text-center flex flex-col items-center px-8">
                            <span className="text-6xl italic font-semibold leading-none text-[var(--color-gold)]/25 group-hover:text-[var(--color-gold)]/60 transition-colors mb-4 select-none" style={{ fontFamily: 'var(--font-display)' }}>03</span>
                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Share Our Story</h3>
                            <p className="text-[var(--color-cream)]/70 mb-8 flex-grow">Help us reach more people by sharing our mission. Follow us on social media and spread the word.</p>
                            <div className="flex justify-center gap-3 text-[var(--color-gold)] mt-auto">
                                {socialLinks.map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full border border-[var(--color-gold)]/60 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] hover:-translate-y-1 transition-all"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
