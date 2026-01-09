import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { mentors } from "@/data/mentors";

export const metadata: Metadata = {
    title: "Mentors & Tutors | TechQings Africa",
    description: "Meet the industry experts from Google, Microsoft, and AWS who mentor our FutureTech participants.",
};

export default function Mentors() {
    return (
        <main>
            <Section className="bg-slate-900 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Mentors</h1>
                <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                    Learn from industry leaders who are passionate about scaling African female talent.
                </p>
            </Section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor) => (
                        <Card key={mentor.name} className="text-center p-8 bg-slate-50/50 border-indigo-50/50">
                            <div className="text-6xl mb-6 bg-white shadow-inner w-24 h-24 rounded-full flex items-center justify-center mx-auto border-4 border-white">
                                {mentor.image}
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-slate-900">{mentor.name}</h3>
                            <p className="text-primary font-bold text-xs mb-2 uppercase tracking-widest">{mentor.role}</p>
                            <p className="text-slate-500 text-[10px] font-black mb-4 uppercase tracking-[0.2em]">{mentor.company}</p>
                            <div className="inline-block py-1 px-3 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-wider">
                                {mentor.track}
                            </div>
                            <p className="text-sm text-muted leading-relaxed">{mentor.bio}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-indigo-50/50">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 text-center shadow-xl border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mt-16 -mr-16"></div>
                    <h2 className="text-3xl font-extrabold mb-6 text-slate-900">Want to give back?</h2>
                    <p className="text-lg text-muted mb-10 leading-relaxed">
                        Join our private network of mentors and help shape the next wave of tech leaders. Your expertise is the bridge they need.
                    </p>
                    <Button href="/apply?type=mentor" className="px-10 py-4 shadow-xl">Join the Mentor Network</Button>
                </div>
            </Section>
        </main>
    );
}
