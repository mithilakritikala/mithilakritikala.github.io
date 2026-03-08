import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-maroon)] text-[var(--color-cream)] pt-16 pb-6 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Contact Info */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-[var(--color-gold)]">Mithila KritiKala</h3>
                        <p className="mb-6 opacity-90 leading-relaxed">
                            Empowering women through the art of Mithila painting and vocational training, preserving cultural heritage.
                        </p>
                        <div className="space-y-3 opacity-90">
                            <h4 className="text-lg font-serif font-semibold mt-4 mb-2">Contact Us</h4>
                            <p className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--color-gold)]" />
                                <a href="mailto:mithilakritikala@gmail.com" className="hover:text-[var(--color-gold)] transition-colors">mithilakritikala@gmail.com</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone size={18} className="text-[var(--color-gold)]" />
                                <a href="tel:+917903120432" className="hover:text-[var(--color-gold)] transition-colors">+91 7903120432</a>
                            </p>
                            <p className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-[var(--color-gold)] flex-shrink-0" />
                                <span>Kataiya Road Benipatti, Madhubani, Bihar</span>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Donate */}
                    <div className="md:pl-8">
                        <h4 className="text-xl font-serif font-semibold mb-4 text-[var(--color-gold)]">Make a Difference</h4>
                        <p className="mb-6 opacity-90 leading-relaxed">
                            Your small contribution will make a big difference in the lives of rural women. Support our mission to empower them.
                        </p>
                        <Link to="/donate" className="inline-block bg-[var(--color-gold)] text-[var(--color-dark)] font-bold py-3 px-8 rounded hover:bg-yellow-500 transition-colors">
                            Donate Now
                        </Link>
                    </div>

                    {/* Column 3: Social */}
                    <div className="md:pl-8">
                        <h4 className="text-xl font-serif font-semibold mb-4 text-[var(--color-gold)]">Connect with us</h4>
                        <p className="mb-6 opacity-90">Follow us on social media for updates and inspiring stories of our artists!</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] transition-colors" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal Registration Line */}
                <div className="border-t border-white/20 pt-8 pb-4 text-center">
                    <p className="text-xs text-[var(--color-cream)]/70 mb-2">
                        Registered NGO | 12A: AAKTM3093ME20251 | 80G: AAKTM3093MF20251 | NGO Darpan: BR/2025/0781443 | PAN: AAKTM3093M
                        {' '}-{' '}
                        <Link to="/transparency" className="text-[var(--color-gold)] hover:underline whitespace-nowrap">
                            View Certificates →
                        </Link>
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 mt-4">
                        <p>&copy; {new Date().getFullYear()} Mithila KritiKala. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link to="/policies/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="/policies/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
                            <Link to="/policies/payment-terms" className="hover:text-white transition-colors">Payment Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
