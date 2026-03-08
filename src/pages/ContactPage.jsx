import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', subject: '', message: ''
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(form.subject || 'Website Inquiry');
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:mithilakritikala@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="pt-24 min-h-screen bg-white pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Contact Us</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about our programs, or want to partner with us? Reach out through any of the channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Contact Information */}
                    <div className="bg-[var(--color-cream)] p-8 md:p-12 rounded-2xl shadow-sm h-full">
                        <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-8">Get In Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                <div className="bg-[var(--color-maroon)]/10 p-3 rounded-full text-[var(--color-maroon)]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <a href="mailto:mithilakritikala@gmail.com" className="text-gray-600 hover:text-[var(--color-maroon)] transition-colors">
                                        mithilakritikala@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                <div className="bg-[var(--color-maroon)]/10 p-3 rounded-full text-[var(--color-maroon)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <a href="tel:+917903120432" className="text-gray-600 hover:text-[var(--color-maroon)] transition-colors">
                                        +91 7903120432
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                <div className="bg-[var(--color-maroon)]/10 p-3 rounded-full text-[var(--color-maroon)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Kataiya Road Benipatti,<br />
                                        Madhubani, Bihar<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="w-full h-64 md:h-80 lg:h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114631.57946115865!2d85.9080536!3d26.3644485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd0f8c35b8dd%3A0xe5a3c990710baee5!2sBenipatti%2C%20Bihar!5e0!3m2!1sen!2sin!4v1703080000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mithila KritiKala Location Map"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-8 text-center">Send Us a Message</h2>

                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-xl font-bold text-[var(--color-maroon)] mb-2">Message Sent!</h3>
                            <p className="text-gray-600">Thank you! We will get back to you within 24 hours.</p>
                            <button
                                className="mt-6 text-[var(--color-maroon)] underline text-sm"
                                onClick={() => setSubmitted(false)}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-maroon)] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-maroon)] transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-maroon)] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-maroon)] transition-colors bg-white"
                                    >
                                        <option value="">Select a subject</option>
                                        <option>General Inquiry</option>
                                        <option>Course Admission</option>
                                        <option>Volunteer</option>
                                        <option>Donation</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-maroon)] transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--color-maroon)] text-white font-bold py-4 rounded-lg hover:bg-[#6b1414] transition-colors text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
