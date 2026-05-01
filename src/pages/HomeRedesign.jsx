import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Users, Heart, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ChevronLeft, ChevronRight, Sparkles, HandHeart, BookOpen } from 'lucide-react';
import AnnouncementBanner from '../components/AnnouncementBanner';

const courseStatus = {
    mithilaPainting: { status: "open", label: "Admissions Open" },
    cuttingStitching: { status: "closed", label: "Admissions Closed" }
};

const slides = [
    {
        id: 1,
        image: "/photos/Work In action.jpg",
        badge: null,
        title: <>Art, Skill &amp; Empowerment<br className="hidden md:block" /> for a Brighter Future</>,
        subtitle: "We are dedicated to preserving the ancient art of Mithila and empowering rural women with skills for a sustainable livelihood.",
        buttons: (
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link to="/courses" className="inline-block bg-[#8B1A1A] text-[#FAF7F2] hover:bg-[#5C1010] px-8 py-3 rounded font-bold transition-colors shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Explore Courses
                </Link>
            </div>
        )
    },
    {
        id: 2,
        image: "/photos/gallery3.jpg",
        badge: "Our Impact",
        title: "20+ Women Trained & Growing",
        subtitle: "Since July 2025, we have been transforming lives through art education and vocational training in Madhubani, Bihar.",
        buttons: (
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link to="/gallery" className="inline-block bg-[#8B1A1A] text-[#FAF7F2] hover:bg-[#5C1010] px-8 py-3 rounded font-bold transition-colors shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    See Our Work
                </Link>
            </div>
        )
    },
    {
        id: 3,
        image: "/photos/gallery2.jpg",
        badge: "Make a Difference",
        title: "Your Support Can Change a Life",
        subtitle: "Help us provide free training, art supplies and materials to women and girls in rural Bihar. Every donation matters.",
        buttons: (
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link to="/donate" className="inline-block bg-[#C9922A] text-[#1A0A0A] hover:bg-[#b07d20] px-8 py-3 rounded font-bold transition-colors shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Donate Now
                </Link>
                <Link to="/about" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded font-bold transition-colors shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Learn More
                </Link>
            </div>
        )
    }
];

const testimonials = [
    {
        quote: "Mithila KritiKala gave me the confidence and skills to contribute to my family's income while keeping our traditions alive.",
        name: "Sunita Kumari",
        year: "2024",
        course: "Mithila Painting",
    },
    {
        quote: "The environment is so supportive. It's not just an art class; it's a community of women lifting each other up.",
        name: "Arti Jha",
        year: "2024",
        course: "Mithila Painting",
    },
    {
        quote: "The Cutting & Stitching course helped me start my own small tailoring business.",
        name: "Poonam Devi",
        year: "2023",
        course: "Student",
    }
];

const HomeRedesign = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        if (!isPaused) {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
        return resetTimeout;
    }, [current, isPaused]);

    const handleNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        // Hide the main footer
        const mainFooter = document.querySelector('footer:not(.home-redesign-footer)');
        if (mainFooter) mainFooter.style.display = 'none';
        
        // Add scroll animation observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
        
        return () => {
            if (mainFooter) mainFooter.style.display = '';
            observer.disconnect();
        };
    }, []);

    const socialLinks = [
        { href: "https://www.facebook.com/profile.php?id=61578616140715", icon: <Facebook size={20} />, label: "Facebook" },
        { href: "https://www.instagram.com/mithilakritikala/", icon: <Instagram size={20} />, label: "Instagram" },
        { 
            href: "https://x.com/m_kritikala", 
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            ), 
            label: "X (Twitter)" 
        },
        { href: "https://www.linkedin.com/company/mithila-kritikala/", icon: <Linkedin size={20} />, label: "LinkedIn" },
    ];

    return (
        <div className="pt-20" style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A0A0A' }}>
            <style>{`
                @keyframes heroProgress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .scroll-animate {
                    opacity: 0;
                }
                /* Dot pattern for sections */
                .pattern-dots {
                    background-image: radial-gradient(#8B1A1A 1.5px, transparent 1.5px);
                    background-size: 30px 30px;
                }
                .playfair {
                    font-family: 'Playfair Display', serif;
                }
            `}</style>
            
            <AnnouncementBanner />

            {/* 1. Hero Carousel */}
            <section
                className="relative text-white overflow-hidden"
                style={{ height: 'calc(85vh)', minHeight: '480px' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform ease-out"
                            style={{
                                backgroundImage: `url('${slide.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transform: index === current ? 'scale(1.10)' : 'scale(1)',
                                transitionDuration: index === current ? '6000ms' : '0ms',
                            }}
                        />
                        <div className="absolute inset-0 bg-black/50" />

                        {slide.badge && (
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
                                <div className="inline-flex items-center gap-2 bg-[#C9922A]/90 backdrop-blur-sm border border-[#C9922A] text-white text-xs tracking-widest uppercase px-4 py-2 rounded-full font-bold shadow-lg">
                                    <Sparkles size={14} className="text-white" />
                                    {slide.badge}
                                </div>
                            </div>
                        )}

                        <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-16 lg:px-24 z-10">
                            <div className="max-w-4xl">
                                <h1
                                    className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight playfair"
                                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                                >
                                    {slide.title}
                                </h1>
                                <div className="border-l-4 border-[#C9922A] pl-6 mb-8">
                                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                                        {slide.subtitle}
                                    </p>
                                </div>
                                {slide.buttons}
                            </div>
                        </div>
                    </div>
                ))}

                <button onClick={handlePrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-[#C9922A] transition-colors duration-300 shadow-lg focus:outline-none border border-white/20">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-[#C9922A] transition-colors duration-300 shadow-lg focus:outline-none border border-white/20">
                    <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-6 left-6 md:left-16 z-30 flex items-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`rounded-full transition-all duration-300 focus:outline-none border-2 border-[#C9922A] ${index === current ? 'w-4 h-4 bg-[#C9922A]' : 'w-4 h-4 bg-transparent hover:bg-[#C9922A]/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
                    <div
                        key={`${current}-${isPaused}`}
                        className="h-full bg-[#C9922A]"
                        style={{
                            animation: isPaused ? 'none' : 'heroProgress 5s linear forwards',
                            width: isPaused ? undefined : '0%',
                        }}
                    />
                </div>
            </section>

            {/* 2. Stats Bar */}
            <section className="bg-[#8B1A1A] border-t-2 border-[#C9922A] py-12 scroll-animate">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#C9922A]/30">
                        <div className="text-center px-4">
                            <h3 className="text-4xl md:text-[2.5rem] playfair text-[#C9922A] mb-2 font-bold">20+</h3>
                            <p className="text-white text-xs md:text-sm uppercase tracking-wider">Women Trained</p>
                        </div>
                        <div className="text-center px-4">
                            <h3 className="text-4xl md:text-[2.5rem] playfair text-[#C9922A] mb-2 font-bold">2</h3>
                            <p className="text-white text-xs md:text-sm uppercase tracking-wider">Skill Courses</p>
                        </div>
                        <div className="text-center px-4">
                            <h3 className="text-4xl md:text-[2.5rem] playfair text-[#C9922A] mb-2 font-bold">1</h3>
                            <p className="text-white text-xs md:text-sm uppercase tracking-wider">District Reached</p>
                        </div>
                        <div className="text-center px-4 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-[2rem] playfair text-[#C9922A] mb-2 font-bold leading-tight">Est. July 2025</h3>
                            <p className="text-white text-xs md:text-sm uppercase tracking-wider mt-auto">Year Founded</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Vision Section */}
            <section className="py-24 bg-[#FAF7F2] relative scroll-animate">
                <div className="absolute inset-0 pattern-dots opacity-[0.04]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl playfair text-[#1A0A0A] font-bold">Our Vision</h2>
                        <div className="w-24 h-1.5 bg-[#C9922A] mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 border-l-4 border-[#C9922A]">
                            <div className="mb-6 text-[#8B1A1A]">
                                <Palette size={36} />
                            </div>
                            <h3 className="text-2xl playfair font-bold mb-4 text-[#1A0A0A]">Preserve Tradition</h3>
                            <p className="text-gray-700 leading-relaxed">Keeping the ancient art of Mithila painting alive for future generations through dedicated teaching and practice.</p>
                        </div>
                        <div className="bg-white p-8 border-l-4 border-[#C9922A]">
                            <div className="mb-6 text-[#8B1A1A]">
                                <Users size={36} />
                            </div>
                            <h3 className="text-2xl playfair font-bold mb-4 text-[#1A0A0A]">Empower Women</h3>
                            <p className="text-gray-700 leading-relaxed">Providing economic opportunities and skill development to women and girls in rural Bihar through art education.</p>
                        </div>
                        <div className="bg-white p-8 border-l-4 border-[#C9922A]">
                            <div className="mb-6 text-[#8B1A1A]">
                                <Heart size={36} />
                            </div>
                            <h3 className="text-2xl playfair font-bold mb-4 text-[#1A0A0A]">Build Community</h3>
                            <p className="text-gray-700 leading-relaxed">Creating a supportive community where traditional arts flourish and women support each other&apos;s growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Founder Quote section */}
            <section className="py-24 bg-[#5C1010] relative overflow-hidden scroll-animate">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-[8rem] text-[#C9922A] absolute -top-10 -left-6 opacity-40 playfair leading-none select-none">&quot;</div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
                        <div className="md:col-span-8 md:pl-16">
                            <p className="text-white text-xl md:text-2xl leading-relaxed playfair italic mb-8">
                                &quot;Our vision is to preserve the ancestral art form of our region while simultaneously creating sustainable livelihood opportunities for local women. The dedication of our community has transformed the lives of dozens of families across Madhubani.&quot;
                            </p>
                            <div>
                                <p className="text-[#C9922A] font-bold text-lg">Vishal Kumar Thakur</p>
                                <p className="text-[#C9922A]/80 uppercase tracking-wide text-sm mt-1">Founder & Managing Trustee</p>
                            </div>
                        </div>
                        <div className="md:col-span-4 flex justify-center md:justify-end">
                            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#C9922A] shadow-2xl">
                                <img src="/photos/founder.jpg" alt="Vishal Kumar Thakur" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Gallery Preview */}
            <section className="py-24 bg-white scroll-animate">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl playfair text-[#1A0A0A] font-bold">A Glimpse of Our Work</h2>
                        <div className="w-24 h-1.5 bg-[#C9922A] mx-auto mt-6"></div>
                    </div>
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {[
                            { src: "/photos/Work In action.jpg", label: "Art Class" },
                            { src: "/photos/gallery3.jpg", label: "Mithila Painting" },
                            { src: "/photos/gallery2.jpg", label: "Community" },
                            { src: "/photos/gallery7.jpg", label: "Exhibition" }
                        ].map((photo, i) => (
                            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-lg">
                                <img src={photo.src} alt={photo.label} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[#8B1A1A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white playfair text-xl font-bold">{photo.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link to="/gallery" className="inline-block border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white px-8 py-3 rounded font-bold transition-colors">
                            View Full Gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. Courses Preview */}
            <section className="py-24 bg-[#FAF7F2] scroll-animate">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl playfair text-[#1A0A0A] font-bold">Our Courses</h2>
                        <div className="w-24 h-1.5 bg-[#C9922A] mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Mithila Painting Card */}
                        <div className={`bg-white rounded-lg shadow-lg relative flex flex-col group ${courseStatus.mithilaPainting.status === 'closed' ? 'opacity-60 grayscale-[0.2]' : ''}`}>
                            <div className="h-[6px] w-full bg-[#8B1A1A] rounded-t-lg" />
                            <div className="relative">
                                <img src="/photos/mithila-painting.png" alt="Mithila Painting" className="w-full h-[200px] object-cover" />
                                <span className={`absolute top-4 right-4 ${courseStatus.mithilaPainting.status === 'open' ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'} font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide shadow-md`}>
                                    {courseStatus.mithilaPainting.label}
                                </span>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold playfair text-[#1A0A0A] mb-3 group-hover:text-[#8B1A1A] transition-colors">Mithila Painting</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">Learn the ancient art of Mithila with traditional techniques and natural colors.</p>
                                </div>
                                <div>
                                    <Link to="/courses" className="inline-block text-[#8B1A1A] font-bold border-b-2 border-[#8B1A1A] pb-1 hover:text-[#C9922A] hover:border-[#C9922A] transition-colors">View Details →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Cutting & Stitching Card */}
                        <div className={`bg-white rounded-lg shadow-lg relative flex flex-col group ${courseStatus.cuttingStitching.status === 'closed' ? 'opacity-60 grayscale-[0.2]' : ''}`}>
                            <div className="h-[6px] w-full bg-[#C9922A] rounded-t-lg" />
                            <div className="relative">
                                <img src="/photos/stiching.png" alt="Cutting & Stitching" className="w-full h-[200px] object-cover" />
                                <span className={`absolute top-4 right-4 ${courseStatus.cuttingStitching.status === 'open' ? 'text-green-800 bg-green-100' : 'text-amber-800 bg-amber-100'} font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide shadow-md`}>
                                    {courseStatus.cuttingStitching.label}
                                </span>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold playfair text-[#1A0A0A] mb-3 group-hover:text-[#8B1A1A] transition-colors">Cutting & Stitching</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">Master cutting and stitching to create beautiful garments and textiles.</p>
                                </div>
                                <div>
                                    <Link to="/courses" className="inline-block text-[#8B1A1A] font-bold border-b-2 border-[#8B1A1A] pb-1 hover:text-[#C9922A] hover:border-[#C9922A] transition-colors">View Details →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Testimonials */}
            <section className="py-24 bg-[#FAF7F2] scroll-animate">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl playfair text-[#1A0A0A] font-bold">Voices of Empowerment</h2>
                        <div className="w-24 h-1.5 bg-[#C9922A] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-white p-8 relative border-l-4 border-[#C9922A]">
                                <div className="text-8xl text-[#8B1A1A] absolute -top-4 left-4 opacity-10 playfair leading-none select-none">&quot;</div>
                                <p className="text-gray-700 italic mb-8 relative z-10 pt-4 text-lg leading-relaxed">
                                    {t.quote}
                                </p>
                                <div className="relative z-10">
                                    <p className="playfair text-xl font-bold text-[#8B1A1A]">{t.name}</p>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{t.course} {t.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Get Involved */}
            <section className="py-24 bg-[#8B1A1A] scroll-animate">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl playfair text-white font-bold">Get Involved</h2>
                        <div className="w-24 h-1.5 bg-[#C9922A] mx-auto mt-6 mb-8"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">Join us in our mission to preserve traditional art and empower women. Your support can change lives.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-xl text-center flex flex-col">
                            <div className="w-16 h-16 mx-auto bg-[#FAF7F2] rounded-full flex items-center justify-center mb-6 text-[#C9922A]">
                                <HandHeart size={32} />
                            </div>
                            <h3 className="text-2xl playfair font-bold text-[#1A0A0A] mb-4">Make a Donation</h3>
                            <p className="text-gray-600 mb-8 flex-grow">Your donations help us provide free training, art supplies, and materials to women and girls in Madhubani.</p>
                            <Link to="/donate" className="inline-block bg-[#C9922A] text-[#1A0A0A] hover:bg-[#b07d20] py-3 px-6 rounded font-bold transition-colors w-full">
                                Donate
                            </Link>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl text-center flex flex-col">
                            <div className="w-16 h-16 mx-auto bg-[#FAF7F2] rounded-full flex items-center justify-center mb-6 text-[#C9922A]">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl playfair font-bold text-[#1A0A0A] mb-4">Volunteer</h3>
                            <p className="text-gray-600 mb-8 flex-grow">We are always looking for passionate individuals to help with teaching, workshops, and digital marketing.</p>
                            <Link to="/join" className="inline-block border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white py-3 px-6 rounded font-bold transition-colors w-full">
                                Become a Volunteer
                            </Link>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl text-center flex flex-col">
                            <div className="w-16 h-16 mx-auto bg-[#FAF7F2] rounded-full flex items-center justify-center mb-6 text-[#C9922A]">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-2xl playfair font-bold text-[#1A0A0A] mb-4">Share our Story</h3>
                            <p className="text-gray-600 mb-8 flex-grow">Help us reach more people by sharing our mission. Follow us on social media and spread the word.</p>
                            <div className="flex justify-center gap-3 text-[#8B1A1A] mt-auto">
                                <a href="https://www.facebook.com/profile.php?id=61578616140715" className="w-12 h-12 rounded-full border-2 border-[#8B1A1A] flex items-center justify-center hover:bg-[#8B1A1A] hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="https://www.instagram.com/mithilakritikala/" className="w-12 h-12 rounded-full border-2 border-[#8B1A1A] flex items-center justify-center hover:bg-[#8B1A1A] hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="https://x.com/m_kritikala" className="w-12 h-12 rounded-full border-2 border-[#8B1A1A] flex items-center justify-center hover:bg-[#8B1A1A] hover:text-white transition-colors" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/mithila-kritikala/" className="w-12 h-12 rounded-full border-2 border-[#8B1A1A] flex items-center justify-center hover:bg-[#8B1A1A] hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Custom Footer for Redesign */}
            <footer className="home-redesign-footer bg-[#8B1A1A] text-[#FAF7F2] pt-16 pb-6 border-t-2 border-[#C9922A]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <h3 className="text-3xl playfair font-bold mb-4 text-[#C9922A]">Mithila KritiKala</h3>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                Empowering women through the art of Mithila painting and vocational training, preserving cultural heritage.
                            </p>
                            <div className="space-y-3 opacity-90">
                                <h4 className="text-xl playfair font-semibold mt-4 mb-2 text-[#C9922A]">Contact Us</h4>
                                <p className="flex items-center gap-3">
                                    <Mail size={18} className="text-[#C9922A]" />
                                    <a href="mailto:contact@mithilakritikala.com" className="hover:text-[#C9922A] transition-colors">contact@mithilakritikala.com</a>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={18} className="text-[#C9922A]" />
                                    <a href="tel:+917903120432" className="hover:text-[#C9922A] transition-colors">+91 7903120432</a>
                                </p>
                                <p className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-1 text-[#C9922A] flex-shrink-0" />
                                    <span>Kataiya Road Benipatti, Madhubani, Bihar</span>
                                </p>
                            </div>
                        </div>

                        <div className="md:pl-8">
                            <h4 className="text-2xl playfair font-bold mb-4 text-[#C9922A]">Make a Difference</h4>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                Your small contribution will make a big difference in the lives of rural women. Support our mission to empower them.
                            </p>
                            <Link to="/donate" className="inline-block bg-[#C9922A] text-[#1A0A0A] font-bold py-3 px-8 rounded hover:bg-[#b07d20] transition-colors">
                                Donate Now
                            </Link>
                        </div>

                        <div className="md:pl-8">
                            <h4 className="text-2xl playfair font-bold mb-4 text-[#C9922A]">Connect with us</h4>
                            <p className="mb-6 opacity-90">Follow us on social media for updates and inspiring stories of our artists!</p>
                            <div className="flex gap-4 flex-wrap">
                                {socialLinks.map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C9922A] hover:text-[#1A0A0A] transition-colors"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-8 pb-4 text-center">
                        <p className="text-xs text-[#FAF7F2]/70 mb-2">
                            Registered NGO | 12A: AAKTM3093ME20251 | 80G: AAKTM3093MF20251 | NGO Darpan: BR/2025/0781443 | PAN: AAKTM3093M
                            {' '}-{' '}
                            <Link to="/transparency" onClick={() => window.scrollTo(0, 0)} className="text-[#C9922A] hover:underline whitespace-nowrap">
                                View Certificates →
                            </Link>
                        </p>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FAF7F2]/60 mt-6">
                            <p>&copy; {new Date().getFullYear()} Mithila KritiKala. All rights reserved.</p>
                            <div className="flex gap-6">
                                <Link to="/policies/privacy-policy" className="hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</Link>
                                <Link to="/policies/refund-policy" className="hover:text-white transition-colors uppercase tracking-wider">Refund Policy</Link>
                                <Link to="/policies/payment-terms" className="hover:text-white transition-colors uppercase tracking-wider">Payment Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomeRedesign;
