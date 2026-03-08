import { Link } from 'react-router-dom';
import { Palette, Users, Heart, Facebook, Instagram, Linkedin } from 'lucide-react';
import AnnouncementBanner from '../components/AnnouncementBanner';
import HeroCarousel from '../components/HeroCarousel';
import ImpactCounter from '../components/ImpactCounter';
import Testimonials from '../components/Testimonials';

const courseStatus = {
    mithilaPainting: { status: "open", label: "Admissions Open" },
    cuttingStitching: { status: "closed", label: "Admissions Closed" }
};

const Home = () => {
    return (
        <div className="pt-20">
            <AnnouncementBanner />

            {/* Hero Carousel */}
            <HeroCarousel />

            <ImpactCounter />

            {/* Vision Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-maroon)] font-bold">Our Vision</h2>
                        <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center bg-[#FDF6EC] p-8 rounded-xl shadow-sm border-t-4 border-[var(--color-gold)]">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--color-maroon)] shadow-sm">
                                <Palette size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Preserve Tradition</h3>
                            <p className="text-gray-600">Keeping the ancient art of Mithila painting alive for future generations through dedicated teaching and practice.</p>
                        </div>
                        <div className="text-center bg-[#FDF6EC] p-8 rounded-xl shadow-sm border-t-4 border-[var(--color-gold)]">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--color-maroon)] shadow-sm">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Empower Women</h3>
                            <p className="text-gray-600">Providing economic opportunities and skill development to women and girls in rural Bihar through art education.</p>
                        </div>
                        <div className="text-center bg-[#FDF6EC] p-8 rounded-xl shadow-sm border-t-4 border-[var(--color-gold)]">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--color-maroon)] shadow-sm">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Build Community</h3>
                            <p className="text-gray-600">Creating a supportive community where traditional arts flourish and women support each other&apos;s growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Founder Strip */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center md:justify-end">
                            <img src="/photos/founder.jpg" alt="Vishal Kumar Thakur" className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-[var(--color-cream)]" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-serif text-[var(--color-dark)] font-bold mb-2">Vishal Kumar Thakur</h2>
                            <p className="text-[var(--color-maroon)] font-medium mb-6">Founder & Managing Trustee</p>
                            <p className="text-gray-600 leading-relaxed italic border-l-4 border-[var(--color-gold)] pl-4 md:pl-6">
                                &quot;Our vision is to preserve the ancestral art form of our region while simultaneously creating sustainable livelihood opportunities for local women. The dedication of our community has transformed the lives of dozens of families across Madhubani.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-20 bg-[var(--color-cream)]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-maroon)] font-bold">A Glimpse of Our Work</h2>
                        <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <img src="/photos/Work In action.jpg" alt="Students learning" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
                        <img src="/photos/gallery3.jpg" alt="Art class" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
                        <img src="/photos/gallery2.jpg" alt="Trustee with students" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
                        <img src="/photos/gallery7.jpg" alt="Trustee" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/gallery" className="inline-block border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] px-8 py-3 rounded font-bold transition-colors">
                            View Full Gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-maroon)] font-bold">Our Courses</h2>
                        <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 ${courseStatus.mithilaPainting.status === 'closed' ? 'opacity-60 grayscale-[0.2]' : ''}`}>
                            <img src="/photos/mithila-painting.png" alt="Mithila Painting" className="w-full h-64 object-cover" />
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-3">Mithila Painting</h3>
                                    <p className="text-gray-600 mb-6">Learn the ancient art of Mithila with traditional techniques and natural colors.</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`${courseStatus.mithilaPainting.status === 'open' ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'} font-medium px-3 py-1 rounded-full text-sm`}>{courseStatus.mithilaPainting.label}</span>
                                    <Link to="/courses" className="text-[var(--color-maroon)] font-bold hover:underline">View Details →</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 ${courseStatus.cuttingStitching.status === 'closed' ? 'opacity-60 grayscale-[0.2]' : ''}`}>
                            <img src="/photos/stiching.png" alt="Cutting & Stitching" className="w-full h-64 object-cover" />
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-3">Cutting & Stitching</h3>
                                    <p className="text-gray-600 mb-6">Master cutting and stitching to create beautiful garments and textiles.</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`${courseStatus.cuttingStitching.status === 'open' ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'} font-medium px-3 py-1 rounded-full text-sm`}>{courseStatus.cuttingStitching.label}</span>
                                    <Link to="/courses" className="text-[var(--color-maroon)] font-bold hover:underline">View Details →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Get Involved Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-maroon)] font-bold">Get Involved</h2>
                        <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Join us in our mission to preserve traditional art and empower women. Your support can change lives.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[var(--color-cream)] p-8 rounded-xl text-center shadow-sm h-full flex flex-col">
                            <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4">Make a Donation</h3>
                            <p className="text-gray-600 mb-8 flex-grow">Your donations help us provide free training, art supplies, and materials to women and girls in Madhubani.</p>
                            <Link to="/donate" className="inline-block border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] py-2 px-6 text-base rounded font-bold transition-colors w-full">
                                Donate
                            </Link>
                        </div>
                        <div className="bg-[var(--color-cream)] p-8 rounded-xl text-center shadow-sm h-full flex flex-col">
                            <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4">Volunteer</h3>
                            <p className="text-gray-600 mb-8 flex-grow">We are always looking for passionate individuals to help with teaching, workshops, and digital marketing.</p>
                            <Link to="/join" className="inline-block border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] py-2 px-6 text-base rounded font-bold transition-colors w-full">
                                Become a Volunteer
                            </Link>
                        </div>
                        <div className="bg-[var(--color-cream)] p-8 rounded-xl text-center shadow-sm h-full flex flex-col">
                            <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4">Share our Story</h3>
                            <p className="text-gray-600 mb-8 flex-grow">Help us reach more people by sharing our mission. Follow us on social media and spread the word.</p>
                            <div className="flex justify-center gap-4 text-[var(--color-maroon)] mt-auto">
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-maroon)] flex items-center justify-center hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-maroon)] flex items-center justify-center hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-maroon)] flex items-center justify-center hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] transition-colors" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-maroon)] flex items-center justify-center hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)] transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
