import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Brain, 
  Crown, 
  Trophy, 
  Users, 
  Lightbulb, 
  Compass, 
  Heart, 
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Area of Impact | The Knights Collective",
};

export default function AreaOfImpactPage() {
  return (
    <div className="bg-white min-h-screen text-[#2c2627] font-sans pb-24">
      {/* 1. Event Details Style Hero Section */}
      <div className="relative w-full group mb-24">
        {/* Deck Shadow Card (Signature underlay) */}
        <div className="absolute inset-0 bg-[#2c2627] rounded-b-[2rem] md:rounded-b-[3rem] translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 shadow-2xl z-0" />
        
        {/* Main Card */}
        <section className="relative w-full h-[75vh] md:h-[80vh] min-h-[480px] bg-white rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden z-10 border-b border-[#2c2627]/10 shadow-lg">
          <div className="absolute inset-0">
            <Image
              src="/images/teen_images/a kid watching multiple kids playing chess on two chessboards.jpeg"
              alt="Youth Chess Group"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Top Vignette for Navbar Legibility (Light for dark text navbar) */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />

          {/* Bottom Vignette for text contrast (Dark gradient overlay) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute inset-0 flex items-end pb-16 z-20">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 min-w-0">
              <div className="max-w-3xl text-left min-w-0">
                <span className="inline-block bg-[#b75f20] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full mb-5 shadow-md shrink-0">
                  Empowerment • Strategy • Leadership
                </span>
                
                <h1 className="font-bold tracking-tight text-3xl md:text-5xl text-white mb-5 leading-tight">
                  Empowering young people through chess, strategy and leadership.
                </h1>
                
                <p className="text-sm md:text-base text-white/90 mb-8 leading-relaxed font-medium max-w-2xl">
                  At the core of our work is a commitment to youth empowerment. We provide young people (ages 6-16) with platforms to develop leadership skills through chess, engage in meaningful discussions, and contribute strategically to real-world solutions. Through mentorship, capacity building, and collaborative initiatives, we are building a generation ready to lead.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
                    className="bg-[#b75f20] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-white hover:text-[#b75f20] transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    Join a Program <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/about"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-white hover:text-[#2c2627] transition-all duration-300 flex items-center gap-2"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Core Focus Areas */}
      <section className="bg-[#f2efe9] py-24 border-y border-[#2c2627]/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#b75f20] mb-4">
              Our Vision in Action
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] tracking-tight mb-4">
              Our Core Focus Areas
            </h2>
            <div className="h-1 w-16 bg-[#b75f20] rounded-full mx-auto" />
            <p className="text-sm text-[#2c2627]/70 mt-6 max-w-lg mx-auto">
              How we use the strategic framework of chess to build leaders, expand minds, and foster meaningful community solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {[
              {
                icon: <Users size={24} />,
                title: "Youth Empowerment",
                desc: "Mentorship and leadership development designed to build capability, agency, and ownership in young minds."
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Practical Strategy & Innovation",
                desc: "Cultivating critical thinking, strategic planning, and adaptive decision-making skills applicable in everyday life."
              },
              {
                icon: <Compass size={24} />,
                title: "Community Collaboration",
                desc: "Connecting strategic thinking with local initiatives to foster collaborative problem-solving and shared growth."
              },
              {
                icon: <Heart size={24} />,
                title: "Inclusive & Safe Space",
                desc: "An environment designed to nurture confidence and ensure every participant feels valued, included, and heard."
              }
            ].map((focus, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#2c2627]/10 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Floating subtle hover decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#b75f20]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex gap-6 items-start relative z-10">
                  <div className="flex-shrink-0 rounded-xl bg-[#f2efe9] p-4 text-[#b75f20] transition-colors duration-300 group-hover:bg-[#b75f20] group-hover:text-white">
                    {focus.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#2c2627] mb-2 group-hover:text-[#b75f20] transition-colors duration-300">
                      {focus.title}
                    </h3>
                    <p className="text-sm text-[#2c2627]/75 leading-relaxed font-medium">
                      {focus.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20 animate-fade-up">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#b75f20] mb-4">
              Program Description
            </p>
            <h2 className="font-bold text-2xl md:text-3xl text-[#2c2627] tracking-tight mb-4 max-w-3xl mx-auto leading-snug">
              Our Chess programs are designed to equip young people with practical skills in leadership, strategy, critical thinking, and innovation.
            </h2>
            <div className="h-1 w-16 bg-[#b75f20] rounded-full mx-auto" />
            <p className="text-sm text-[#2c2627]/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Participants gain hands-on experience, mentorship, and exposure to real-world challenges, preparing them to become impactful leaders in their communities and beyond. Our programs include:
            </p>
          </div>

          <div className="flex flex-col gap-16 max-w-[1000px] mx-auto">
            {/* Card 1: NextGen Strategy Lab */}
            <div className="relative group w-full animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {/* Offset shadow */}
              <div className="absolute inset-0 bg-[#b75f20] rounded-3xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              {/* Card content */}
              <div className="relative z-10 flex flex-col lg:flex-row w-full rounded-3xl overflow-hidden bg-white border border-[#2c2627]/10 transition-all duration-500 min-w-0">
                {/* Image */}
                <div className="relative w-full lg:w-[35%] h-[300px] lg:h-auto min-h-[260px] overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src="/images/teen_images/sideview of a kid playing chess.jpeg"
                    alt="NextGen Strategy Lab Student"
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="rounded-2xl bg-[#b75f20]/10 p-4 text-[#b75f20]">
                        <Crown size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#b75f20]">
                        #TKCNextGen
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl text-[#2c2627] mb-2 group-hover:text-[#b75f20] transition-colors duration-300">
                      The Knights Collective NextGen Strategy Lab
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#b75f20] mb-4">
                      Chess Master Class for Youths aged 6–16
                    </p>
                    <p className="text-sm text-[#2c2627]/75 leading-relaxed font-medium mb-6">
                      A strategic and educational, four-week program (2 hours each Saturday) where youth learn chess fundamentals and strategy while building focus, discipline, and confidence. The program is led by experienced facilitators using a structured curriculum. It is ideal for beginners and youths looking to strengthen their skills, with interactive sessions, mentorship, and mini-tournaments.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {["Ages 6–16", "2h Saturdays", "Four-week program", "Beginner-friendly"].map((detail, idx) => (
                        <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full bg-[#f2efe9] text-[#2c2627]/80">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: STEM Strategy Lab (Accent Theme - Image right on LG) */}
            <div className="relative group w-full animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {/* Offset shadow */}
              <div className="absolute inset-0 bg-[#2c2627] rounded-3xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              {/* Card content */}
              <div className="relative z-10 flex flex-col lg:flex-row-reverse w-full rounded-3xl overflow-hidden bg-[#b75f20] border border-[#b75f20]/10 transition-all duration-500 min-w-0">
                {/* Image */}
                <div className="relative w-full lg:w-[35%] h-[300px] lg:h-auto min-h-[260px] overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src="/images/teen_images/two kids playing chess with a coke in his front.jpeg"
                    alt="STEM Strategy Lab Collaboration"
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="rounded-2xl bg-white/20 p-4 text-white">
                        <Brain size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">
                        #TKC-SSL
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-2">
                      The Knights Collective STEM Strategy Lab
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-4">
                      Chess and STEM program for Youths aged 6-16
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed font-medium mb-6">
                      An interdisciplinary learning space where chess meets science, technology, engineering, and mathematics. Participants explore problem-solving, logic, and analytical thinking through hands-on challenges, coding exercises, and innovation-driven activities inspired by chess strategies.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {["Chess + STEM", "Ages 6-16", "Coding exercises", "Hands-on play"].map((detail, idx) => (
                        <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full bg-white/25 text-white">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Chess Professional Event */}
            <div className="relative group w-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {/* Offset shadow */}
              <div className="absolute inset-0 bg-[#f2efe9] rounded-3xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              {/* Card content */}
              <div className="relative z-10 flex flex-col lg:flex-row w-full rounded-3xl overflow-hidden bg-[#262626] border border-[#2c2627]/10 transition-all duration-500 min-w-0">
                {/* Image */}
                <div className="relative w-full lg:w-[35%] h-[300px] lg:h-auto min-h-[260px] overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src="/images/teen_images/side view of a black and asian teen playing chess.jpeg"
                    alt="Youth Chess Match"
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between text-[#f2efe9]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="rounded-2xl bg-white/10 p-4 text-[#b75f20]">
                        <Trophy size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#b75f20]">
                        #TKCChessMeet
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl text-[#f2efe9] mb-2 group-hover:text-[#b75f20] transition-colors duration-300">
                      Chess Professional Event
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#b75f20] mb-4">
                      Professional Chess & Networking Platform
                    </p>
                    <p className="text-sm text-[#f2efe9]/80 leading-relaxed font-medium mb-6">
                      A high-impact, competitive platform bringing together emerging talents, experienced players, and professionals. This event features tournaments, exhibitions, guest speakers, and networking opportunities designed to expose participants to the professional side of chess and leadership development.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {["Tournaments", "Exhibitions", "Guest speakers", "Networking"].map((detail, idx) => (
                        <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-[#f2efe9]/90">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
