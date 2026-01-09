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
            <Section className="bg-slate-900 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Story</h1>
                <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                    Founded on the principle of collective growth, TechQings Africa is a sanctuary for ambitious African women in tech.
                </p>
            </Section>

            {/* Mission & Vision */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 border-l-4 border-primary pl-4">Our Mission</h2>
                        <p className="text-lg text-muted leading-relaxed">
                            To empower 10,000 young African women with future-ready tech skills and professional mentorship by 2030, fostering a generation of leaders in AI, Cloud, and Security.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 border-l-4 border-primary pl-4">Our Vision</h2>
                        <p className="text-lg text-muted leading-relaxed">
                            A tech-forward Africa where women lead global innovations, breaking barriers and creating solutions that matter.
                        </p>
                    </div>
                </div>
            </Section>

            {/* The Problem */}
            <Section className="bg-indigo-50/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-6 text-slate-900">Why We Exist</h2>
                        <p className="text-lg text-muted leading-relaxed">
                            The gender gap in specialized tech roles is a global challenge. In Africa, we're turning this challenge into an opportunity for growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { val: "90%", label: "Specialization Gap" },
                            { val: "65%", label: "Mentorship Deficit" },
                            { val: "Global", label: "Opportunity Impact" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 bg-white border border-indigo-100 rounded-2xl shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-black text-primary mb-3 leading-none">{stat.val}</div>
                                <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section className="bg-white">
                <h2 className="text-3xl font-extrabold mb-12 text-center text-slate-900 underline decoration-indigo-200 decoration-8 underline-offset-8">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Boldness", desc: "Pursuing ambitious goals with confidence." },
                        { title: "Sisterhood", desc: "A safe space for collective African excellence." },
                        { title: "Mastery", desc: "Commitment to world-class technical standards." },
                        { title: "Impact", desc: "Building solutions for our local communities." }
                    ].map((val) => (
                        <article key={val.title} className="text-center p-8 bg-slate-50 rounded-2xl hover:bg-white border border-transparent hover:border-indigo-100 shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold mb-4 text-primary">{val.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
                        </article>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-white pb-20">
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mb-32 -mr-32"></div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Community</h2>
                    <p className="text-lg mb-10 opacity-90 max-w-xl mx-auto">Whether you're starting your journey or looking to mentor, TechQings Africa welcomes you.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Button href="/apply" className="bg-white text-primary hover:bg-indigo-50 px-8">Apply to Program</Button>
                        <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10 px-8">Partner with Us</Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
