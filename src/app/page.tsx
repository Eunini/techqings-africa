import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { programs } from "@/data/programs";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "TechQings Africa | The Future-Ready Tech Community for African Women",
  description: "Join TechQings Africa, a community empowering young African women through the FutureTech Program—an intensive 7-week track in AI, Cloud, and Cybersecurity.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-white via-indigo-50/30 to-white overflow-hidden border-b border-indigo-100">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto py-12 md:py-20 px-4">
          <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary rounded-full text-xs font-black mb-6 tracking-widest uppercase">
            A Future-Ready Community
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] text-balance">
            Empowering African Women for <span className="text-primary italic">High-Impact</span> Careers
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            TechQings Africa is more than just a community. We provide the skills, mentorship, and exposure you need to lead in future technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/programs" className="w-full sm:w-auto text-lg px-8 py-4">
              Explore FutureTech Program
            </Button>
            <Button href="/apply?type=mentor" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
              Join as a Mentor
            </Button>
          </div>
        </div>
      </Section>

      {/* Featured News / Impact */}
      <section className="bg-primary py-6 text-white overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 text-sm font-black uppercase tracking-widest opacity-90 font-ubuntu">
          <span>AI & Machine Learning</span>
          <span>•</span>
          <span>Cloud Engineering</span>
          <span>•</span>
          <span>Cybersecurity</span>
          <span>•</span>
          <span>DevOps Engineering</span>
          <span>•</span>
          <span>AI & Machine Learning</span>
          <span>•</span>
          <span>Cloud Engineering</span>
          <span>•</span>
          <span>Cybersecurity</span>
        </div>
      </section>

      {/* Why TechQings */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-gradient-to-tr from-indigo-600 to-purple-400 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/african-woman-tech.png"
                alt="Empowered African Woman in Tech"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Why TechQings Africa?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We bridge the gap between curiosity and career. Our community focuses on high-impact, future-ready skills that are shaping the global landscape.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                { title: "Specialized Tracks", desc: "Intensive focus on AI, Cloud, and Security." },
                { title: "Elite Mentorship", desc: "Learn directly from women in top global tech firms." },
                { title: "Career Exposure", desc: "Build a portfolio that stands out internationally." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] mt-1 font-black">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="secondary">Meet the Community</Button>
          </div>
        </div>
      </Section>

      {/* The Program Section */}
      <Section className="bg-gradient-to-br from-indigo-700 via-primary to-accent relative overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 text-center mb-16">
          <span className="text-white/90 font-black text-xs tracking-[0.2em] uppercase mb-4 block">The Flagship Program</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">The FutureTech Program</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our 7-week intensive curriculum designed for the next wave of African tech leaders.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = (Icons as any)[program.icon];
            return (
              <Card key={program.title} className="flex flex-col h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-8 group hover:bg-white/15 hover:scale-[1.02] transition-all duration-500">
                <div className="p-4 bg-white/10 rounded-2xl w-fit mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  {IconComponent && <IconComponent className="w-8 h-8 text-white transition-colors duration-500" />}
                </div>
                <h3 className="text-xl font-black mb-4 text-white">{program.track}</h3>
                <p className="text-white/80 text-sm mb-8 flex-grow leading-relaxed">{program.description}</p>
                <Button href="/programs" className="w-full text-sm bg-white text-primary hover:bg-white/90 shadow-none">View Track Details</Button>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-tr from-indigo-800 via-primary to-accent text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter">Ready to join the <span className="italic underline decoration-accent decoration-8">sisterhood</span>?</h2>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed px-4">
            Applications for Cohort 1 of the FutureTech Program are now open. Be part of the first wave of TechQings.
          </p>
          <Button href="/apply" className="text-lg px-12 py-5 shadow-2xl bg-white text-primary hover:bg-slate-50 transition-all font-black">
            Apply to FutureTech
          </Button>
        </div>
      </Section>
    </main>
  );
}
