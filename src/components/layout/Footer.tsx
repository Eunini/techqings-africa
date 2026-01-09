import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/5 p-1">
                                <Image src="/images/logo.png" alt="TechQings Logo" fill className="object-contain" />
                            </div>
                            <span className="font-black text-2xl text-white tracking-tighter">
                                TECHQINGS<span className="text-primary italic">AFRICA</span>
                            </span>
                        </Link>
                        <p className="max-w-md mb-10 leading-relaxed text-sm">
                            TechQings Africa is a community-driven initiative empowering young African women with high-impact tech skills, elite mentorship, and career exposure to lead in future technology.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/share/1GYgdo8MbD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary hover:text-white transition-all">
                                <span className="sr-only">Facebook</span>
                                <span className="text-lg">f</span>
                            </a>
                            <a href="https://www.instagram.com/techqings_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary hover:text-white transition-all">
                                <span className="sr-only">Instagram</span>
                                <span className="text-lg">ig</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Community</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link href="/mentors" className="hover:text-primary transition-colors">Mentors</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/apply?type=mentor" className="hover:text-primary transition-colors">Partner with Us</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">The Program</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/programs" className="hover:text-primary transition-colors">FutureTech Program</Link></li>
                            <li><Link href="/programs#tracks" className="hover:text-primary transition-colors">Curriculum</Link></li>
                            <li><Link href="/apply" className="hover:text-primary transition-colors">Apply for Cohort 1</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Get in Touch</h4>
                        <p className="text-xs mb-6 opacity-70 leading-relaxed font-bold">techqings@gmail.com</p>
                        <div className="flex">
                            <input type="email" placeholder="Subscribe" className="bg-slate-900 border border-slate-800 rounded-l-xl px-4 py-2 w-full text-xs focus:outline-none focus:border-primary" />
                            <button className="bg-primary text-white px-4 py-2 rounded-r-xl text-xs font-black">Join</button>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
                    <p>&copy; {new Date().getFullYear()} TechQings Africa Community. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
