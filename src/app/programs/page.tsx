import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { programs, cohortInfo } from "@/data/programs";

export const metadata: Metadata = {
    title: "The FutureTech Program | Specialized Tech Tracks for African Women",
    description: "Explore our AI, Cloud, and Cybersecurity tracks. A 7-week intensive program by TechQings Africa designed for high-impact career growth.",
};

export default function Programs() {
    return (
        <main>
            {/* Hero Section */}
            <Section className="bg-indigo-50/50 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mt-32 -mr-16"></div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-tight">The FutureTech Program</h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                    An intensive 7-week journey to bridge the gap into specialized, high-demand tech fields.
                </p>
            </Section>

            {/* Program Details */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">Program Breakdown</h2>
                        <div className="space-y-4">
                            {[
                                { label: "Commitment", value: cohortInfo.duration },
                                { label: "Learning Format", value: cohortInfo.format },
                                { label: "Flexible Times", value: cohortInfo.schedule },
                                { label: "Open Cohort", value: `Cohort ${cohortInfo.number}` },
                                { label: "Apply By", value: cohortInfo.deadline },
                            ].map((item) => (
                                <div key={item.label} className="flex justify-between border-b border-indigo-50 pb-3 items-center">
                                    <span className="font-bold text-slate-500 text-sm uppercase tracking-wide">{item.label}</span>
                                    <span className="font-semibold text-primary">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <Button href="/apply" className="px-8 py-4">Start Application</Button>
                            <Button href="/apply?type=mentor" variant="secondary" className="px-8 py-4">Sponsor a Track</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <Card className="bg-slate-900 mt-6 shadow-xl">
                            <h3 className="font-bold text-indigo-400 mb-2">Mentorship</h3>
                            <p className="text-xs text-indigo-50/70 leading-relaxed">Connect with women leading tech at Fortune 500 companies.</p>
                        </Card>
                        <Card className="bg-primary shadow-xl">
                            <h3 className="font-bold text-white mb-2 text-balance">Real-World Projects</h3>
                            <p className="text-xs text-white/80 leading-relaxed">Build a portfolio that translates to global job markets.</p>
                        </Card>
                        <Card className="bg-indigo-50 border-indigo-100 shadow-xl">
                            <h3 className="font-bold text-indigo-900 mb-2">Certification</h3>
                            <p className="text-xs text-indigo-800/70 leading-relaxed">Validate your skills with our industry-endorsed certificate.</p>
                        </Card>
                        <Card className="bg-white border-primary/10 shadow-xl mt-[-1.5rem] md:mt-[-2.5rem]">
                            <h3 className="font-bold text-slate-900 mb-2">Community</h3>
                            <p className="text-xs text-muted leading-relaxed">Join a lifetime alumni network of African tech leaders.</p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Tracks */}
            <Section className="bg-slate-50">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Specialized Curriculum</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Choose Your Path</h2>
                    <p className="text-muted max-w-2xl mx-auto leading-relaxed">Choose a specialization that aligns with your long-term goals. Every track is led by a domain expert.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((p) => (
                        <Card key={p.track} className="p-8 border-none bg-white shadow-sm hover:shadow-xl group">
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{p.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{p.track}</h3>
                            <p className="text-muted mb-8 text-sm leading-relaxed">{p.description}</p>
                            <ul className="space-y-3 mb-10 text-xs font-semibold text-slate-600">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Curriculum by Experts</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Practical Capstone</li>
                            </ul>
                            <Button href={`/apply?track=${p.track.toLowerCase().replace(/ & /g, '-')}`} variant="outline" className="w-full">Enroll in Track</Button>
                        </Card>
                    ))}
                </div>
            </Section>
        </main>
    );
}
