"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'FutureTech', href: '/programs' },
        { name: 'Mentors', href: '/mentors' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-indigo-100 py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-lg bg-white/10 p-1 group-hover:scale-110 transition-transform">
                        <Image
                            src="/logo.png"
                            alt="TechQings Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={`font-black text-xl md:text-2xl tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-indigo-950'}`}>
                        TECHQINGS<span className="text-primary italic">AFRICA</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${pathname === link.href ? 'text-primary' : scrolled ? 'text-slate-600 hover:text-primary' : 'text-indigo-950 hover:text-primary'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/apply" className="px-6 py-2.5 text-xs uppercase tracking-widest shadow-none hover:shadow-lg">
                        Apply Now
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-indigo-100 shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-lg font-bold ${pathname === link.href ? 'text-primary' : 'text-slate-900'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/apply" className="w-full py-4 text-center" onClick={() => setIsOpen(false)}>Apply Now</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
