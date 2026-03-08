import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Admission', path: '/admission' },
        { name: 'Contact', path: '/contact' },
        { name: 'Join Us', path: '/join' },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-cream)] shadow-md' : 'bg-[var(--color-cream)] shadow-md'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 decoration-none">
                        <img src="/photos/logo.png" alt="Mithila KritiKala Logo" className="h-[50px] w-auto" />
                        <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-maroon)] tracking-wide">
                            Mithila KritiKala
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6">
                        <ul className="flex gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-[15px] font-medium transition-colors hover:text-[var(--color-maroon)] ${isActive ? 'text-[var(--color-maroon)] font-bold' : 'text-[var(--color-dark)]'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4 ml-4">
                            <Link to="/donate" className="bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] px-6 py-2 rounded font-medium transition-colors">
                                Donate
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden p-2 text-[var(--color-maroon)] focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`xl:hidden absolute top-20 left-0 w-full bg-[var(--color-cream)] shadow-lg border-t border-gray-200 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}
            >
                <ul className="flex flex-col px-4">
                    {navLinks.map((link) => (
                        <li key={link.name} className="border-b border-gray-100 last:border-0">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `block py-3 px-2 text-base font-medium transition-colors hover:bg-gray-50 hover:text-[var(--color-maroon)] ${isActive ? 'text-[var(--color-maroon)] font-bold' : 'text-[var(--color-dark)]'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="pt-4 pb-2">
                        <Link
                            to="/donate"
                            className="block w-full text-center bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-3 rounded font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Donate Now
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
