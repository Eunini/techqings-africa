"use client";

import { useState } from 'react';
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Apply() {
    const [activeTab, setActiveTab] = useState<'learner' | 'mentor'>('learner');

    return (
        <main>
            <header>
                <Section className="bg-slate-50 text-center relative overflow-hidden">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">Join TechQings Africa</h1>
                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                        Apply to the <span className="text-primary font-bold">FutureTech Program</span> or register as a Mentor to impact the sisterhood.
                    </p>

                    <div className="flex justify-center mt-12 mb-4">
                        <nav className="inline-flex p-1.5 bg-white border border-indigo-100 rounded-full shadow-sm" aria-label="Application Type Toggle">
                            <button
                                onClick={() => setActiveTab('learner')}
                                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'learner' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-primary'}`}
                            >
                                Enroll as Learner
                            </button>
                            <button
                                onClick={() => setActiveTab('mentor')}
                                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'mentor' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-primary'}`}
                            >
                                Join as Mentor
                            </button>
                        </nav>
                    </div>
                </Section>
            </header>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <Card className="p-8 md:p-12 border-indigo-50 shadow-2xl shadow-indigo-100 relative">
                        <h2 className="text-2xl font-bold mb-10 text-center text-slate-900 underline decoration-primary/20 decoration-4 underline-offset-8">
                            {activeTab === 'learner' ? 'FutureTech Program Enrollment' : 'Mentor Network Registration'}
                        </h2>

                        <form className="grid grid-cols-1 gap-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="Amina" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="Oke" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                                <input type="email" className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="hello@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Interested Track</label>
                                <select className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium">
                                    <option>AI & Machine Learning</option>
                                    <option>Cloud / DevOps Engineering</option>
                                    <option>Cybersecurity</option>
                                </select>
                            </div>

                            {activeTab === 'learner' ? (
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Your Motivation</label>
                                    <textarea rows={5} className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="Tell us about your tech goals..."></textarea>
                                </div>
                            ) : (
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">LinkedIn Profile URL</label>
                                    <input type="url" className="w-full px-5 py-4 rounded-xl border border-indigo-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="https://linkedin.com/in/yourprofile" />
                                </div>
                            )}

                            <Button className="w-full py-5 uppercase tracking-[0.2em] text-xs font-black shadow-primary/20 mt-4">
                                Submit {activeTab === 'learner' ? 'Enrollment' : 'Registration'}
                            </Button>
                        </form>

                        <p className="text-center text-[10px] text-muted mt-10 uppercase tracking-widest">
                            Deadline for Cohort 1: January 30th, 2026.
                        </p>
                    </Card>
                </div>
            </Section>
        </main>
    );
}
