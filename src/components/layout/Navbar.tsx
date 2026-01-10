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
                    <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-lg p-1 group-hover:scale-110 transition-transform">
                        <Image
                            src="/logo.png"
                            alt="TechQings Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={`font-black text-xl md:text-2xl tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                        TECHQINGS<span className="text-primary italic">AFRICA</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${pathname === link.href ? 'text-primary' : scrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'}`}
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
                    className={`md:hidden p-2 focus:outline-none transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-indigo-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 origin-top ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
                <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xl font-black uppercase tracking-tighter transition-colors ${pathname === link.href ? 'text-primary' : 'text-slate-900'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/apply" className="w-full py-5 text-center font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20" onClick={() => setIsOpen(false)}>Apply Now</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
