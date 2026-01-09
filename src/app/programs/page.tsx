import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { programs, cohortInfo } from "@/data/programs";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
    title: "The FutureTech Program | Specialized Tech Tracks for African Women",
    description: "Explore our AI, Cloud, and Cybersecurity tracks. A 7-week intensive program by TechQings Africa designed for high-impact career growth.",
};

export default function Programs() {
    return (
        <main>
            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-indigo-700 via-primary to-accent text-center relative overflow-hidden text-white py-24 md:py-32">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mt-32 -mr-16"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -mb-20 -ml-20"></div>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight relative z-10 transition-all duration-700">
                    The <span className="text-white italic">FutureTech</span> Program
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed relative z-10">
                    An intensive 7-week journey to bridge the gap into specialized, high-demand tech fields.
                </p>
            </Section>

            {/* Program Details */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-8 text-slate-900 tracking-tight">Program Breakdown</h2>
                        <div className="space-y-4">
                            {[
                                { label: "Commitment", value: cohortInfo.duration },
                                { label: "Learning Format", value: cohortInfo.format },
                                { label: "Flexible Times", value: cohortInfo.schedule },
                                { label: "Open Cohort", value: `Cohort ${cohortInfo.number}` },
                                { label: "Apply By", value: cohortInfo.deadline },
                            ].map((item) => (
                                <div key={item.label} className="flex justify-between border-b border-indigo-100 pb-4 items-center group">
                                    <span className="font-black text-slate-400 text-xs uppercase tracking-widest group-hover:text-primary transition-colors">{item.label}</span>
                                    <span className="font-bold text-slate-900">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <Button href="/apply" className="px-10 py-5 text-lg shadow-xl shadow-primary/20">Start Application</Button>
                            <Button href="/apply?type=mentor" variant="secondary" className="px-10 py-5 text-lg">Sponsor a Track</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                        <Card className="bg-indigo-700 mt-6 shadow-2xl border border-white/10 relative z-10">
                            <Icons.Users className="w-8 h-8 text-white mb-4" />
                            <h3 className="font-black text-white mb-2">Mentorship</h3>
                            <p className="text-xs text-white/70 leading-relaxed">Connect with women leading tech at Fortune 500 companies.</p>
                        </Card>
                        <Card className="bg-primary shadow-2xl border border-white/10 relative z-10">
                            <Icons.Briefcase className="w-8 h-8 text-white mb-4" />
                            <h3 className="font-black text-white mb-2">Real-World Projects</h3>
                            <p className="text-xs text-white/80 leading-relaxed">Build a portfolio that translates to global job markets.</p>
                        </Card>
                        <Card className="bg-white border-indigo-100 shadow-xl relative z-10">
                            <Icons.Award className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-black text-indigo-950 mb-2">Certification</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">Validate your skills with our industry-endorsed certificate.</p>
                        </Card>
                        <Card className="bg-indigo-50 border-primary/10 shadow-xl mt-[-1.5rem] md:mt-[-2.5rem] relative z-10">
                            <Icons.MessageSquare className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-black text-slate-900 mb-2">Community</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">Join a lifetime alumni network of African tech leaders.</p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Tracks */}
            <Section className="bg-gradient-to-tr from-primary via-indigo-600 to-primary relative overflow-hidden py-24">
                <div className="absolute top-0 left-0 w-full h-full bg-[white/5] backdrop-blur-[2px]"></div>

                <div className="relative z-10 text-center mb-20">
                    <span className="text-white/90 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Specialized Curriculum</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Choose Your Path</h2>
                    <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-lg">
                        Choose a specialization that aligns with your long-term goals. Every track is led by a domain expert.
                    </p>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((p) => {
                        const IconComponent = (Icons as any)[p.icon];
                        return (
                            <Card key={p.track} className="p-10 border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl group hover:bg-white/15 transition-all duration-500 flex flex-col h-full">
                                <div className="p-4 bg-white/10 rounded-2xl w-fit mb-8 group-hover:bg-white/20 transition-colors duration-500">
                                    {IconComponent && <IconComponent className="w-8 h-8 text-white transition-colors duration-500" />}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter">{p.track}</h3>
                                <p className="text-white/80 mb-8 text-sm leading-relaxed flex-grow font-medium">{p.description}</p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-xs font-black text-white/90 uppercase tracking-widest leading-none bg-white/5 py-2.5 px-4 rounded-xl shadow-inner"><Icons.Check className="w-3.5 h-3.5 text-white" /> Curriculum by Experts</li>
                                    <li className="flex items-center gap-3 text-xs font-black text-white/90 uppercase tracking-widest leading-none bg-white/5 py-2.5 px-4 rounded-xl shadow-inner"><Icons.Check className="w-3.5 h-3.5 text-white" /> Practical Capstone</li>
                                </ul>
                                <Button href={`/apply?track=${p.track.toLowerCase().replace(/ & /g, '-')}`} className="w-full bg-white text-primary hover:bg-slate-50 shadow-lg shadow-white/10">Enroll in Track</Button>
                            </Card>
                        );
                    })}
                </div>
            </Section>
        </main>
    );
}
