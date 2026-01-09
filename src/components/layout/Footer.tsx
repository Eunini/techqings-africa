import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-slate-400 py-24 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mt-48 -mr-48"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
                    <div className="md:col-span-12 lg:col-span-5">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white/5 p-1.5 group-hover:scale-110 transition-transform">
                                <Image src="/logo.png" alt="TechQings Logo" fill className="object-contain" />
                            </div>
                            <span className="font-black text-2xl text-white tracking-tighter uppercase">
                                TECHQINGS<span className="text-primary italic">AFRICA</span>
                            </span>
                        </Link>
                        <p className="max-w-md mb-10 leading-relaxed text-sm font-medium">
                            TechQings Africa is a community-driven initiative empowering young African women with high-impact tech skills, elite mentorship, and career exposure to lead in future technology.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/share/1GYgdo8MbD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary group transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="w-5 h-5 group-hover:text-white transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/techqings_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary group transition-all duration-300">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Community</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> Our Story</Link></li>
                            <li><Link href="/mentors" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> Mentors</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> Contact</Link></li>
                            <li><Link href="/apply?type=mentor" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> Partner</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Program</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/programs" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> FutureTech</Link></li>
                            <li><Link href="/programs#tracks" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> Curriculum</Link></li>
                            <li><Link href="/apply" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform"></span> Join Cohort 1</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Newsletter</h4>
                        <p className="text-xs mb-8 opacity-70 leading-relaxed font-bold uppercase tracking-widest">Stay updated on our journey</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full text-xs font-bold text-white focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/50 transition-all"
                            />
                            <button className="absolute right-2 top-2 bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-all">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                    <p>&copy; {new Date().getFullYear()} TechQings Africa Community. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
