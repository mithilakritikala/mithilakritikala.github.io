import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { KachniDivider, FishMotif } from './MithilaMotif';

const Footer = () => {
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
        <footer className="bg-[var(--color-ink)] text-[var(--color-cream)] pt-16 pb-6 mt-16" style={{ fontFamily: 'var(--font-body, var(--font-sans))' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Contact Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FishMotif className="w-9 h-4 text-[var(--color-gold)]" />
                            <h3 className="text-2xl font-semibold text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-display, var(--font-serif))' }}>Mithila KritiKala</h3>
                        </div>
                        <p className="mb-6 opacity-80 leading-relaxed">
                            Empowering women through the art of Mithila painting and vocational training, preserving cultural heritage.
                        </p>
                        <div className="space-y-3 opacity-90">
                            <h4 className="text-lg font-semibold mt-4 mb-2" style={{ fontFamily: 'var(--font-display, var(--font-serif))' }}>Contact Us</h4>
                            <p className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--color-gold)]" />
                                <a href="mailto:contact@mithilakritikala.com" className="hover:text-[var(--color-gold)] transition-colors">contact@mithilakritikala.com</a>
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
                        <h4 className="text-xl font-semibold mb-4 text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-display, var(--font-serif))' }}>Make a Difference</h4>
                        <p className="mb-6 opacity-80 leading-relaxed">
                            Your small contribution will make a big difference in the lives of rural women. Support our mission to empower them.
                        </p>
                        <Link to="/donate" className="inline-block bg-[var(--color-gold)] text-[var(--color-ink)] font-bold py-3 px-8 rounded-sm hover:bg-[#b07d20] transition-colors">
                            Donate Now
                        </Link>
                    </div>

                    {/* Column 3: Social */}
                    <div className="md:pl-8">
                        <h4 className="text-xl font-semibold mb-4 text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-display, var(--font-serif))' }}>Connect with us</h4>
                        <p className="mb-6 opacity-80">Follow us on social media for updates and inspiring stories of our artists!</p>
                        <div className="flex gap-4 flex-wrap">
                            {socialLinks.map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors"
                                    aria-label={label}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-8 opacity-60">
                    <KachniDivider className="w-48 h-3" color="var(--color-gold)" />
                </div>

                {/* Legal Registration Line */}
                <div className="pt-2 pb-4 text-center">
                    <p className="text-xs text-[var(--color-cream)]/70 mb-2">
                        Registered NGO | 12A: AAKTM3093ME20251 | 80G: AAKTM3093MF20251 | NGO Darpan: BR/2025/0781443 | PAN: AAKTM3093M
                        {' '}-{' '}
                        <Link to="/transparency" onClick={() => window.scrollTo(0, 0)} className="text-[var(--color-gold)] hover:underline whitespace-nowrap">
                            View Certificates →
                        </Link>
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-cream)]/50 mt-4">
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
