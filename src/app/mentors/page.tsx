import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import MobileCarousel from "@/components/ui/MobileCarousel";
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

            <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-24 lg:py-32">
                <MobileCarousel>
                    {mentors.map((mentor) => (
                        <div key={mentor.name} className="group relative">
                            {/* Card background with gradient border */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                            
                            <Card className="relative p-0 overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                {/* Top accent bar with gradient */}
                                <div className="h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>
                                
                                <div className="p-4 sm:p-6 md:p-8 text-center">
                                    {/* Avatar with creative background */}
                                    <div className="relative mb-4 sm:mb-6 md:mb-8">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-200/20 w-48 h-48 rounded-full blur-xl mx-auto"></div>
                                        {mentor.image.startsWith('/') ? (
                                            <div className="relative w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
                                                <Image
                                                    src={mentor.image}
                                                    alt={mentor.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg text-4xl sm:text-6xl md:text-7xl transform group-hover:scale-110 transition-transform duration-500">
                                                {mentor.image}
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Name */}
                                    <h3 className="text-base sm:text-lg md:text-lg font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">{mentor.name}</h3>
                                    
                                    {/* Role with colored badge */}
                                    <div className="inline-block mb-2 sm:mb-3">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] bg-gradient-to-r from-primary/10 to-pink-100 text-primary px-3 py-1.5 rounded-full">{mentor.role}</p>
                                    </div>
                                    
                                    {/* Company */}
                                    <p className="text-xs font-bold text-slate-500 mb-3 sm:mb-4 md:mb-6 uppercase tracking-widest">{mentor.company}</p>
                                    
                                    {/* Track pill */}
                                    <div className="inline-block py-1.5 px-3 sm:py-2 sm:px-4 bg-gradient-to-r from-primary/90 to-purple-600 text-white text-xs font-black rounded-full mb-3 sm:mb-4 md:mb-6 uppercase tracking-widest shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300">
                                        {mentor.track}
                                    </div>
                                    
                                    {/* Bio */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-3 sm:mb-4 md:mb-6 h-auto group-hover:text-slate-700 transition-colors duration-300">{mentor.bio}</p>
                                    
                                    {/* Bottom accent line */}
                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full mx-auto group-hover:w-24 transition-all duration-500"></div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </MobileCarousel>
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
