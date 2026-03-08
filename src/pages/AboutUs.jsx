const AboutUs = () => {
    const timeline = [
        { date: "July 18, 2025", text: "Mithila KritiKala Foundation officially registered in Madhubani, Bihar" },
        { date: "August 2025", text: "12A & 80G registration received from Income Tax Department" },
        { date: "August 2025", text: "Registered on NGO Darpan portal (NITI Aayog, Govt. of India)" },
        { date: "September 2025", text: "First batch of Cutting & Stitching launched (15+ women enrolled)" },
        { date: "November 2025", text: "First batch of Mithila Painting launched" },
        { date: "December 2025", text: "First batch of Cutting & Stitching successfully completed ✓" },
        { date: "February 2026", text: "Second batch of Cutting & Stitching begins" },
        { date: "Coming Soon", text: "Expanding to more villages in Madhubani district" },
    ];

    const values = [
        { icon: "🔍", title: "Transparency", desc: "We are a fully registered, verified NGO. All our certificates and financials are publicly available." },
        { icon: "💪", title: "Empowerment", desc: "We believe every woman deserves economic independence and the dignity that comes with it." },
        { icon: "🎨", title: "Preservation", desc: "We are committed to keeping the ancient art of Mithila alive for future generations." },
    ];

    return (
        <div className="pt-24 min-h-screen bg-white pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Story</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                </div>

                {/* Founder Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <img src="/photos/Off.jpg" alt="Women creating Mithila art together" className="w-full rounded-2xl shadow-lg" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-6">Preserving Art, Empowering Lives</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Vishal Kumar Thakur, a young social entrepreneur from Madhubani, Bihar, founded Mithila KritiKala on July 18, 2025 with a deeply personal mission.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Growing up in rural Bihar, Vishal witnessed something that troubled him deeply — talented women in his community, skilled in the centuries-old art of Mithila painting and needlework, sitting idle at home, financially dependent on others for even their basic needs. He believed that if these women had the right training, platform, and support, they could earn their own livelihood and reclaim their dignity.
                        </p>
                        <blockquote className="border-l-4 border-[var(--color-gold)] pl-6 italic text-lg text-gray-700 font-serif mb-4">
                            &quot;It was painful to see women with so much talent and potential waiting for someone else to provide for them. I knew that if we could channel their existing skills into structured training, they could become truly self-reliant.&quot;
                            <footer className="text-sm font-sans font-semibold text-[var(--color-maroon)] mt-2 not-italic">— Vishal Kumar Thakur</footer>
                        </blockquote>
                        <p className="text-gray-600 leading-relaxed">
                            That belief became Mithila KritiKala — a foundation dedicated to preserving the ancient art of Mithila painting while empowering rural women with skills for a sustainable, independent livelihood.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Journey</h2>
                        <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto"></div>
                    </div>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-maroon)]/20"></div>
                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative flex gap-6 items-start pl-2">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-maroon)] border-4 border-[var(--color-gold)] flex-shrink-0 flex items-center justify-center z-10">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div className="bg-[var(--color-cream)] rounded-xl p-5 flex-grow shadow-sm border border-[var(--color-gold)]/20">
                                        <p className="text-[var(--color-gold)] font-bold text-sm uppercase tracking-widest mb-1">{item.date}</p>
                                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-4">Meet Our Team</h2>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-12"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-[var(--color-cream)] rounded-2xl p-8 text-center shadow-sm">
                        <img src="/photos/founder.jpg" alt="Vishal Kumar Thakur" className="w-32 h-32 rounded-full mx-auto object-cover mb-6 shadow-md border-4 border-white" />
                        <h4 className="font-bold text-xl text-[var(--color-dark)] mb-2">Vishal Kumar Thakur</h4>
                        <p className="text-[var(--color-maroon)] font-medium">Founder &amp; Managing Trustee</p>
                    </div>
                    <div className="bg-[var(--color-cream)] rounded-2xl p-8 text-center shadow-sm">
                        <img src="/photos/trustii.jpg" alt="Rakesh Kumar Thakur" className="w-32 h-32 rounded-full mx-auto object-cover mb-6 shadow-md border-4 border-white" />
                        <h4 className="font-bold text-xl text-[var(--color-dark)] mb-2">Rakesh Kumar Thakur</h4>
                        <p className="text-[var(--color-maroon)] font-medium">Trustee</p>
                    </div>
                    <div className="bg-[var(--color-cream)] rounded-2xl p-8 text-center shadow-sm">
                        <img src="/photos/trustee.jpg" alt="Babita Devi" className="w-32 h-32 rounded-full mx-auto object-cover mb-6 shadow-md border-4 border-white" />
                        <h4 className="font-bold text-xl text-[var(--color-dark)] mb-2">Babita Devi</h4>
                        <p className="text-[var(--color-maroon)] font-medium">Trustee &amp; Training Head</p>
                    </div>
                </div>

                {/* Our Values */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Values</h2>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((v) => (
                        <div key={v.title} className="bg-[var(--color-cream)] rounded-2xl p-8 shadow-sm border-t-4 border-[var(--color-gold)]">
                            <div className="text-4xl mb-4">{v.icon}</div>
                            <h3 className="text-xl font-serif font-bold text-[var(--color-maroon)] mb-3">{v.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
