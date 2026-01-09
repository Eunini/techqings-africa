"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

import { submitApplication } from '../actions/apply';

function ApplyForm() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<'learner' | 'mentor'>('learner');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [prefilledTrack, setPrefilledTrack] = useState('AI & Machine Learning');

    useEffect(() => {
        const type = searchParams.get('type');
        if (type === 'mentor') setActiveTab('mentor');

        const track = searchParams.get('track');
        if (track) {
            // Map slugs to display names
            const trackMap: { [key: string]: string } = {
                'ai-machine-learning': 'AI & Machine Learning',
                'cloud-devops-engineering': 'Cloud / DevOps Engineering',
                'cybersecurity': 'Cybersecurity'
            };
            if (trackMap[track]) setPrefilledTrack(trackMap[track]);
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitApplication(formData);
            if (result.success) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Failed to submit application.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('A connection error occurred. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-20 px-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-100">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Application Received!</h2>
                <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed mb-10">
                    Thank you for joining the TechQings Africa sisterhood. We've sent a confirmation email to your inbox.
                </p>
                <Button href="/" className="bg-slate-900 text-white px-12 py-4 shadow-xl">Back to Home</Button>
            </div>
        );
    }

    return (
        <form className="grid grid-cols-1 gap-8" onSubmit={handleSubmit}>
            <div className="flex justify-center mb-8">
                <nav className="inline-flex p-1 bg-slate-100 border border-slate-300 rounded-lg" aria-label="Application Type Toggle">
                    <button
                        type="button"
                        onClick={() => setActiveTab('learner')}
                        className={`px-6 py-2 rounded-md text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'learner' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Enroll Learner
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('mentor')}
                        className={`px-6 py-2 rounded-md text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'mentor' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Join Mentor
                    </button>
                </nav>
            </div>

            <h2 className="text-2xl font-black mb-4 text-center text-slate-900 uppercase tracking-tight">
                {activeTab === 'learner' ? 'FutureTech Enrollment' : 'Mentor Network Registry'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">First Name <span className="text-red-500">*</span></label>
                    <input required name="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold" placeholder="Amina" />
                </div>
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Last Name <span className="text-red-500">*</span></label>
                    <input required name="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold" placeholder="Oke" />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Email Address <span className="text-red-500">*</span></label>
                <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold" placeholder="hello@example.com" />
            </div>

            {/* Hidden field for active tab type */}
            <input type="hidden" name="type" value={activeTab} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Interested Track <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select required name="track" value={prefilledTrack} onChange={(e) => setPrefilledTrack(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold appearance-none">
                            <option>AI & Machine Learning</option>
                            <option>Cloud / DevOps Engineering</option>
                            <option>Cybersecurity</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <CheckCircle2 className="w-5 h-5 opacity-0" /> {/* Just a spacer */}
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Phone Number (WhatsApp) <span className="text-red-500">*</span></label>
                    <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold" placeholder="+234 ..." />
                </div>
            </div>

            <div>
                {activeTab === 'learner' ? (
                    <>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Your Tech Motivation <span className="text-red-500">*</span></label>
                        <textarea required name="motivation" rows={4} className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium" placeholder="Tell us why you want to join this cohort..."></textarea>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Session Preference <span className="text-red-500">*</span></label>
                                <select required name="sessionPreference" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>Tuesday & Thursday</option>
                                    <option>Weekends (Sat-Sun)</option>
                                    <option>Either</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Do you have a PC? <span className="text-red-500">*</span></label>
                                <select required name="hasPC" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Do you have reliable internet? <span className="text-red-500">*</span></label>
                                <select required name="hasInternet" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Are you a student or working? <span className="text-red-500">*</span></label>
                                <select required name="occupation" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>Student</option>
                                    <option>Working / Employed</option>
                                    <option>Self-employed</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Years of experience (tech) <span className="text-slate-400">(optional)</span></label>
                                <input name="yearsExperience" type="number" min={0} className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium" placeholder="0" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">LinkedIn Profile URL <span className="text-red-500">*</span></label>
                        <input required name="linkedin" type="url" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold" placeholder="https://linkedin.com/in/yourprofile" />

                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 mt-6">Your Mentoring Bio <span className="text-red-500">*</span></label>
                        <textarea required name="mentorBio" rows={4} className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium" placeholder="Tell us about your experience, expertise, and what you want to mentor..."></textarea>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Session Preference <span className="text-red-500">*</span></label>
                                <select required name="sessionPreference" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>Tuesday & Thursday</option>
                                    <option>Weekends (Sat-Sun)</option>
                                    <option>Either</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Are you a student or working? <span className="text-red-500">*</span></label>
                                <select required name="occupation" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>Student</option>
                                    <option>Working / Employed</option>
                                    <option>Self-employed</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Primary expertise area <span className="text-red-500">*</span></label>
                                <select required name="expertise" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>AI & Machine Learning</option>
                                    <option>Cloud / DevOps Engineering</option>
                                    <option>Cybersecurity</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">How many mentees can you mentor? <span className="text-red-500">*</span></label>
                                <select required name="menteeCapacity" className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-bold">
                                    <option>1</option>
                                    <option>2-3</option>
                                    <option>4-5</option>
                                    <option>6+</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Years in tech <span className="text-red-500">*</span></label>
                                <input required name="yearsInTech" type="number" min={0} className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium" placeholder="0" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Years mentoring experience <span className="text-slate-400">(optional)</span></label>
                                <input name="yearsMentoring" type="number" min={0} className="w-full px-6 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium" placeholder="0" />
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Honeypot field for anti-spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 shadow-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-bold">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </div>
            )}

            <Button
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary text-white hover:bg-primary/90 text-sm font-black uppercase tracking-[0.3em] shadow-md mt-4 disabled:opacity-70 rounded-lg"
            >
                {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Processing Application...
                    </span>
                ) : (
                    `Submit ${activeTab === 'learner' ? 'Enrollment' : 'Registry'}`
                )}
            </Button>
        </form>
    );
}

export default function Apply() {
    return (
        <main className="pt-0">
            <header>
                <Section className="bg-linear-to-br from-primary via-primary/80 to-purple-600 text-white text-center py-24 md:py-32 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    <div className="relative z-10 px-4">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">Join the Sisterhood</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                            Step into the future of tech. Apply to the FutureTech Program or lead as a industry mentor.
                        </p>
                    </div>
                </Section>
            </header>

            <Section className="bg-white pb-32">
                <div className="max-w-3xl mx-auto -mt-20 relative z-20 px-4">
                    <Card className="p-8 md:p-16 border border-slate-200 shadow-sm rounded-xl bg-white">
                        <Suspense fallback={<div className="flex items-center justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>}>
                            <ApplyForm />
                        </Suspense>

                        <p className="text-center text-[10px] text-slate-400 mt-12 uppercase tracking-[0.3em] font-black">
                            Deadline for Cohort 1: January 30th, 2026.
                        </p>
                    </Card>
                </div>
            </Section>
        </main>
    );
}
