import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About TechQings Africa | Our Mission & Vision",
    description: "Learn about TechQings Africa, a community dedicated to bridging the gender gap in specialized tech fields across Africa.",
};

export default function About() {
    return (
        <main>
            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-indigo-700 via-primary to-accent text-white text-center py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mt-32 -mr-16"></div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative z-10">Our Story</h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
                    Founded on the principle of collective growth, TechQings Africa is a sanctuary for ambitious African women in tech.
                </p>
            </Section>

            {/* Mission & Vision */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 border-l-4 border-primary pl-4 uppercase tracking-tighter">Our Mission</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            To empower 10,000 young African women with future-ready tech skills and professional mentorship by 2030, fostering a generation of leaders in AI, Cloud, and Security.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 border-l-4 border-primary pl-4 uppercase tracking-tighter">Our Vision</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            A tech-forward Africa where women lead global innovations, breaking barriers and creating solutions that matter.
                        </p>
                    </div>
                </div>
            </Section>

            {/* The Problem */}
            <Section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-primary relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

                <div className="max-w-4xl mx-auto relative z-10 px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">Why We Exist</h2>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mx-auto max-w-2xl font-medium">
                            The gender gap in specialized tech roles is a global challenge. In Africa, we're turning this challenge into an opportunity for growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { val: "90%", label: "Specialization Gap" },
                            { val: "65%", label: "Mentorship Deficit" },
                            { val: "Global", label: "Opportunity Impact" }
                        ].map((stat, i) => (
                            <div key={i} className="p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-center transform hover:-translate-y-2 transition-all duration-300 group hover:bg-white/15">
                                <div className="text-5xl font-black text-white mb-4 leading-none">{stat.val}</div>
                                <p className="text-xs font-black text-white/70 uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section className="bg-white">
                <h2 className="text-3xl md:text-4xl font-black mb-16 text-center text-slate-900 uppercase tracking-tighter">Our Core <span className="text-primary italic">Values</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                    {[
                        { title: "Boldness", desc: "Pursuing ambitious goals with confidence." },
                        { title: "Sisterhood", desc: "A safe space for collective African excellence." },
                        { title: "Mastery", desc: "Commitment to world-class technical standards." },
                        { title: "Impact", desc: "Building solutions for our local communities." }
                    ].map((val) => (
                        <article key={val.title} className="text-center p-10 bg-indigo-50/30 rounded-3xl hover:bg-white border border-transparent hover:border-indigo-100 shadow-sm hover:shadow-xl transition-all group">
                            <h3 className="text-xl font-black mb-4 text-primary uppercase tracking-tight group-hover:scale-110 transition-transform">{val.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{val.desc}</p>
                        </article>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-white pb-20">
                <div className="bg-gradient-to-br from-indigo-600 via-primary to-accent rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mb-32 -mr-32"></div>

                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter relative z-10 uppercase">Ready to start your <span className="italic underline decoration-white/30 decoration-8">journey</span>?</h2>
                    <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed relative z-10 font-medium">Whether you're starting your journey or looking to mentor, TechQings Africa welcomes you.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Button href="/apply" className="bg-white text-primary hover:bg-slate-50 px-12 py-5 text-lg font-black shadow-xl">Apply to Program</Button>
                        <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10 px-12 py-5 text-lg font-black tracking-widest uppercase">Partner with Us</Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
