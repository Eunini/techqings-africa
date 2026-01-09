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
                <nav className="inline-flex p-1.5 bg-slate-50 border border-indigo-50 rounded-2xl shadow-inner" aria-label="Application Type Toggle">
                    <button
                        type="button"
                        onClick={() => setActiveTab('learner')}
                        className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'learner' ? 'bg-white text-primary shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Enroll Learner
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('mentor')}
                        className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'mentor' ? 'bg-white text-primary shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
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
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">First Name</label>
                    <input required name="firstName" type="text" className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-bold" placeholder="Amina" />
                </div>
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Last Name</label>
                    <input required name="lastName" type="text" className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-bold" placeholder="Oke" />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Email Address</label>
                <input required name="email" type="email" className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-bold" placeholder="hello@example.com" />
            </div>

            {/* Hidden field for active tab type */}
            <input type="hidden" name="type" value={activeTab} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Interested Track</label>
                    <div className="relative">
                        <select required name="track" value={prefilledTrack} onChange={(e) => setPrefilledTrack(e.target.value)} className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-bold appearance-none">
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
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Phone Number</label>
                    <input required name="phone" type="tel" className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-bold" placeholder="+234 ..." />
                </div>
            </div>

            {activeTab === 'learner' ? (
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Your Tech Motivation</label>
                    <textarea required name="motivation" rows={5} className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-medium" placeholder="Tell us why you want to join this cohort..."></textarea>
                </div>
            ) : (
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">LinkedIn Profile URL</label>
                    <input required name="linkedin" type="url" className="w-full px-6 py-5 rounded-2xl border border-indigo-50 bg-indigo-50/20 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-bold" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
            )}

            {/* Honeypot field for anti-spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-bold">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </div>
            )}

            <Button
                disabled={status === 'loading'}
                className="w-full py-6 bg-slate-900 text-white hover:bg-slate-800 text-sm font-black uppercase tracking-[0.3em] shadow-xl shadow-primary/20 mt-4 disabled:opacity-70"
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
                <Section className="bg-gradient-to-br from-indigo-700 via-primary to-accent text-white text-center py-24 md:py-32 relative overflow-hidden">
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
                    <Card className="p-8 md:p-16 border border-indigo-50 shadow-[0_32px_64px_-16px_rgba(79,70,229,0.1)] rounded-[3rem] bg-white">
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
