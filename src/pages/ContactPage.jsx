import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            </div>
        </div>
    );
};

export default ContactPage;
