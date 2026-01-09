"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Contact() {
    return (
        <main className="pt-10">
            <Section className="bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.1),transparent)]"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed px-4">
                        Have questions about the community or the FutureTech Program? We're here to help.
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="px-4">
                        <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Get in Touch</h2>
                        <p className="text-lg text-muted mb-10 leading-relaxed">
                            We respond to all inquiries within 48 hours. Follow our social channels for real-time updates on Cohort 1.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-indigo-50 text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors">📧</div>
                                <div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="font-bold text-slate-900">techqings@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-indigo-50 text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors">📸</div>
                                <div>
                                    <a href="https://www.instagram.com/techqings_" target="_blank" rel="noopener noreferrer" className="block">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Instagram</p>
                                        <p className="font-bold text-slate-900 hover:text-primary transition-colors">@techqings_</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-indigo-50 text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors">f</div>
                                <div>
                                    <a href="https://facebook.com/share/1GYgdo8MbD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="block">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Facebook</p>
                                        <p className="font-bold text-slate-900 hover:text-primary transition-colors">View Profile</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4">
                        <Card className="p-8 md:p-10 border-indigo-50 shadow-2xl shadow-indigo-50">
                            <h3 className="text-xl font-bold mb-8 text-slate-900">Send a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Subject</label>
                                    <select className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium">
                                        <option>FutureTech Program Query</option>
                                        <option>Partnership Interest</option>
                                        <option>Volunteer as Mentor</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Your Message</label>
                                    <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button className="w-full py-5 font-black uppercase tracking-[0.2em] text-xs">Send Message</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </main>
    );
}
