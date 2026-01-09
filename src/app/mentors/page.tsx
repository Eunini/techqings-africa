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
            <Section className="bg-gradient-to-br from-[#5B189A] via-primary to-primary-hover text-white text-center py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mt-32 -mr-16"></div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative z-10 uppercase">Our Mentors</h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
                    Learn from industry leaders who are passionate about scaling African female talent.
                </p>
            </Section>

            <Section className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor) => (
                        <Card key={mentor.name} className="text-center p-10 bg-[#F3E8FF]/20 border-primary/10 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-[2rem] group">
                            <div className="text-6xl mb-8 bg-white shadow-xl shadow-primary/5 w-28 h-28 rounded-full flex items-center justify-center mx-auto border-4 border-white transition-transform group-hover:scale-110">
                                {mentor.image}
                            </div>
                            <h3 className="text-xl font-black mb-1 text-slate-900 uppercase tracking-tight">{mentor.name}</h3>
                            <p className="text-primary font-black text-xs mb-2 uppercase tracking-[0.2em]">{mentor.role}</p>
                            <p className="text-slate-400 text-[10px] font-black mb-6 uppercase tracking-[0.3em]">{mentor.company}</p>
                            <div className="inline-block py-2 px-4 bg-primary text-white text-[10px] font-black rounded-xl mb-8 uppercase tracking-widest shadow-lg shadow-primary/20">
                                {mentor.track}
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">{mentor.bio}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-white pb-24">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#5B189A] via-primary to-[#7A25D9] rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mt-24 -mr-24 blur-2xl"></div>
                    <h2 className="text-3xl md:text-4xl font-black mb-8 text-white uppercase tracking-tighter">Want to <span className="italic underline decoration-white/30 decoration-8">give back</span>?</h2>
                    <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-medium">
                        Join our private network of mentors and help shape the next wave of tech leaders. Your expertise is the bridge they need.
                    </p>
                    <Button href="/apply?type=mentor" className="px-12 py-5 bg-slate-900 text-white hover:bg-slate-800 text-lg font-black shadow-2xl transition-all">Join the Mentor Network</Button>
                </div>
            </Section>
        </main>
    );
}
