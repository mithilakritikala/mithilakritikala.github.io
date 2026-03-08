const AboutUs = () => {
    return (
        <div className="pt-24 min-h-screen bg-white pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Story</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <img src="/photos/Off.jpg" alt="Women creating Mithila art together" className="w-full rounded-2xl shadow-lg" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-6">Preserving Art, Empowering Lives</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Mithila KritiKala Foundation was born from a simple idea: to use the power of traditional art to create a sustainable future for women in Madhubani, Bihar. We saw the incredible, centuries-old heritage of Mithila painting and the immense talent of local women, but also a lack of opportunity for them to turn their skills into a livelihood.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our mission is two-fold: to preserve the beautiful and intricate art of Mithila for future generations, and to provide rural women with the skills and platform they need to become financially independent. We believe that by empowering a woman, we empower her entire family and community.
                        </p>
                        <blockquote className="border-l-4 border-[var(--color-gold)] pl-6 italic text-lg text-gray-700 font-serif">
                            &quot;Art is not just a creation, it&apos;s a language that connects generations and empowers the soul.&quot;
                        </blockquote>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-4">Meet Our Team</h2>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-12"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[var(--color-cream)] rounded-2xl p-8 text-center shadow-sm">
                        <img src="/photos/founder.jpg" alt="Vishal Kumar Thakur" className="w-32 h-32 rounded-full mx-auto object-cover mb-6 shadow-md border-4 border-white" />
                        <h4 className="font-bold text-xl text-[var(--color-dark)] mb-2">Vishal Kumar Thakur</h4>
                        <p className="text-[var(--color-maroon)] font-medium">Founder & Managing Trustee</p>
                    </div>
                    <div className="bg-[var(--color-cream)] rounded-2xl p-8 text-center shadow-sm">
                        <img src="/photos/trustii.jpg" alt="Rakesh Kumar Thakur" className="w-32 h-32 rounded-full mx-auto object-cover mb-6 shadow-md border-4 border-white" />
                        <h4 className="font-bold text-xl text-[var(--color-dark)] mb-2">Rakesh Kumar Thakur</h4>
                        <p className="text-[var(--color-maroon)] font-medium">Trustee</p>
                    </div>
                    <div className="bg-[var(--color-cream)] rounded-2xl p-8 text-center shadow-sm">
                        <img src="/photos/trustee.jpg" alt="Babita Devi" className="w-32 h-32 rounded-full mx-auto object-cover mb-6 shadow-md border-4 border-white" />
                        <h4 className="font-bold text-xl text-[var(--color-dark)] mb-2">Babita Devi</h4>
                        <p className="text-[var(--color-maroon)] font-medium">Trustee & Training Head</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
