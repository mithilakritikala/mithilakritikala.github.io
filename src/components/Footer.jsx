import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// Deliberately does NOT repeat the Donate CTA or social icons — those
// already live in the "Get Involved" section right above this. Footer's
// job here is just: who we are, how to reach us, where else to go, and
// the legal/registration line. Maroon background (not ink) so it reads as
// a distinct band instead of merging into the dark section above it.
const quickLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Courses', to: '/courses' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Admission', to: '/admission' },
    { label: 'Transparency', to: '/transparency' },
];

const Footer = () => {
    return (
        <footer className="bg-[var(--color-maroon)] text-[var(--color-cream)] pt-14 pb-6" style={{ fontFamily: 'var(--font-body, var(--font-sans))' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 mb-10">
                    {/* Brand + contact */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[var(--color-gold)] mb-3" style={{ fontFamily: 'var(--font-display, var(--font-serif))' }}>
                            Mithila KritiKala
                        </h3>
                        <p className="mb-5 opacity-80 leading-relaxed max-w-md">
                            Empowering rural women through the art of Mithila painting and vocational training, preserving cultural heritage since July 2025.
                        </p>
                        <div className="space-y-2.5 opacity-90 text-sm">
                            <p className="flex items-center gap-3">
                                <Mail size={16} className="text-[var(--color-gold)] shrink-0" />
                                <a href="mailto:contact@mithilakritikala.com" className="hover:text-[var(--color-gold)] transition-colors">contact@mithilakritikala.com</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone size={16} className="text-[var(--color-gold)] shrink-0" />
                                <a href="tel:+917903120432" className="hover:text-[var(--color-gold)] transition-colors">+91 7903120432</a>
                            </p>
                            <p className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 text-[var(--color-gold)] shrink-0" />
                                <span>Kataiya Road Benipatti, Madhubani, Bihar</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-4 text-[var(--color-gold)]">Quick Links</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} onClick={() => window.scrollTo(0, 0)} className="opacity-80 hover:opacity-100 hover:text-[var(--color-gold)] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Legal Registration Line */}
                <div className="pt-6 border-t border-[var(--color-gold)]/20 text-center">
                    <p className="text-xs text-[var(--color-cream)]/70 mb-2">
                        Registered NGO | 12A: AAKTM3093ME20251 | 80G: AAKTM3093MF20251 | NGO Darpan: BR/2025/0781443 | PAN: AAKTM3093M
                        {' '}-{' '}
                        <Link to="/transparency" onClick={() => window.scrollTo(0, 0)} className="text-[var(--color-gold)] hover:underline whitespace-nowrap">
                            View Certificates →
                        </Link>
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[var(--color-cream)]/50 mt-4">
                        <p>&copy; {new Date().getFullYear()} Mithila KritiKala. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link to="/policies/privacy-policy" className="hover:text-[var(--color-cream)] transition-colors">Privacy Policy</Link>
                            <Link to="/policies/refund-policy" className="hover:text-[var(--color-cream)] transition-colors">Refund Policy</Link>
                            <Link to="/policies/payment-terms" className="hover:text-[var(--color-cream)] transition-colors">Payment Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
