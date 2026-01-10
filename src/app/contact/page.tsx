"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Mail, Instagram, Facebook, MessageCircle, Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="pt-0">
            <Section className="bg-linear-to-br from-[#5B189A] via-primary to-primary-hover text-white text-center py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase">Contact Us</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                        Have questions about the community or the FutureTech Program? We&apos;re here to help.
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto items-center">
                    <div className="px-4">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 text-slate-900 uppercase tracking-tighter">Get in <span className="text-primary italic">Touch</span></h2>
                        <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
                            We respond to all inquiries within 48 hours. Follow our social channels for real-time updates on Cohort 1.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-[#F3E8FF] text-primary rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">techqings@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-[#F3E8FF] text-primary rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                                    <Instagram className="w-8 h-8" />
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/techqings_" target="_blank" rel="noopener noreferrer" className="block">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Instagram</p>
                                        <p className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">@techqings_</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-[#F3E8FF] text-primary rounded-2xl flex items-center justify-center text-2xl group-hover:bg-green-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                                    <MessageCircle className="w-8 h-8" />
                                </div>
                                <div>
                                    <a href="https://chat.whatsapp.com/KFsq7gGFXDi832ip8Oj3jo" target="_blank" rel="noopener noreferrer" className="block">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Community</p>
                                        <p className="text-xl font-bold text-slate-900 group-hover:text-green-500 transition-colors">Join Our Community</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-[#F3E8FF] text-primary rounded-2xl flex items-center justify-center text-2xl group-hover:bg-green-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                                    <Send className="w-8 h-8" />
                                </div>
                                <div>
                                    <a href="https://wa.me/message/TFFG2ETW5L3CH1" target="_blank" rel="noopener noreferrer" className="block">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Direct</p>
                                        <p className="text-xl font-bold text-slate-900 group-hover:text-green-500 transition-colors">Message Us</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4">
                        <Card className="p-10 md:p-14 border border-slate-200 shadow-sm rounded-xl">
                            <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tight">Send a <span className="text-primary italic">Message</span></h3>
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Topic of Interest</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold appearance-none">
                                        <option>FutureTech Program Query</option>
                                        <option>Partnership Interest</option>
                                        <option>Volunteer as Mentor</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Your Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-medium placeholder:text-slate-400" placeholder="Tell us how we can help you..."></textarea>
                                </div>
                                <Button className="w-full py-4 font-black uppercase tracking-[0.3em] text-xs shadow-md rounded-lg">Send Message</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </main>
    );
}
