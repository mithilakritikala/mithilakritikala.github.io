import { useState } from 'react';
import { Palette, Scissors, Share2, Camera, HeartHandshake } from 'lucide-react';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Volunteer Application – ${formData.role}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ARole: ${formData.role}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:contact@mithilakritikala.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="pt-24 min-h-[70vh] bg-gray-50 pb-20 flex flex-col items-center">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Join Us / Volunteer</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Share your skills for a great cause. We are always looking for passionate individuals to help empower women through art and vocational training.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Section 1: Volunteer Roles */}
                    <div>
                        <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-6">We need help in these areas:</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-maroon)]/10 flex items-center justify-center flex-shrink-0">
                                    <Palette className="text-[var(--color-maroon)]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-dark)]">Art Teacher</h3>
                                    <p className="text-gray-600">Teach Mithila painting techniques to enrolled women.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-maroon)]/10 flex items-center justify-center flex-shrink-0">
                                    <Scissors className="text-[var(--color-maroon)]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-dark)]">Stitching Trainer</h3>
                                    <p className="text-gray-600">Assist in cutting & stitching sessions.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-maroon)]/10 flex items-center justify-center flex-shrink-0">
                                    <Share2 className="text-[var(--color-maroon)]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-dark)]">Digital Marketing</h3>
                                    <p className="text-gray-600">Help manage Instagram, Facebook, and content creation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-maroon)]/10 flex items-center justify-center flex-shrink-0">
                                    <Camera className="text-[var(--color-maroon)]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-dark)]">Photographer/Videographer</h3>
                                    <p className="text-gray-600">Document classes and student progress.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-maroon)]/10 flex items-center justify-center flex-shrink-0">
                                    <HeartHandshake className="text-[var(--color-maroon)]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-dark)]">Fundraising & Outreach</h3>
                                    <p className="text-gray-600">Help connect donors and spread awareness.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Volunteer Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-6">Apply to Volunteer</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Select Role *</label>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none bg-white"
                                >
                                    <option value="" disabled>Select a role...</option>
                                    <option value="Art Teacher">Art Teacher</option>
                                    <option value="Stitching Trainer">Stitching Trainer</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Photographer/Videographer">Photographer/Videographer</option>
                                    <option value="Fundraising & Outreach">Fundraising & Outreach</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer? *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[var(--color-maroon)] text-[var(--color-cream)] font-bold py-3 rounded hover:bg-[#6b1414] transition-colors mt-4"
                            >
                                Send Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
