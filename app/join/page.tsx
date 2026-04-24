import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Join The Knight Club",
};

export default function JoinPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-[calc(100vh-100px)] pt-24 px-4 overflow-hidden relative">
      
      {/* Floating Side Nav Mock */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-50 mix-blend-difference hidden lg:flex">
        <p className="font-body text-[10px] text-tkc-muted uppercase tracking-[0.2em] transform rotate-90 origin-right translate-x-[45px] pb-6">
          THE TACTILE ARCHIVE
        </p>
        <div className="flex flex-col gap-4 mt-32 pr-4">
          <div className="w-8 h-8 rounded border border-tkc-muted/30 flex items-center justify-center text-tkc-muted hover:text-tkc-white cursor-pointer">
            <span className="text-xl leading-none">◫</span>
          </div>
          <div className="w-8 h-8 rounded border border-[#E0B547] text-[#E0B547] flex items-center justify-center bg-[#E0B547]/10 cursor-pointer">
            <span className="text-sm leading-none mr-0.5">★</span>
          </div>
        </div>
      </div>

      <div className="tkc-container max-w-[1200px] h-full flex flex-col justify-center pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 lg:pr-24">
          
          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl text-tkc-white leading-[1.1] mb-6">
              Enter the <br />
              <span className="italic text-[#E0B547] font-semibold">Grandmaster's <br /> Study.</span>
            </h1>
            <p className="font-body text-tkc-muted text-sm md:text-base leading-relaxed mb-12 max-w-[420px]">
              Open to professionals across industries who share a passion for chess and strategic thinking. Members may invite guests occasionally to expand the circle.
            </p>

            {/* Structure Card */}
            <div className="relative bg-[#151515] rounded-2xl p-8 border border-tkc-border/40 overflow-hidden shadow-2xl">
              <h3 className="font-display text-[#E0B547] text-lg mb-6">Meetup Structure</h3>
              
              <ul className="relative z-10 space-y-6">
                {[
                  { icon: "♆", t: "Opening Insight (15 mins)", d: "Welcome and a short strategic or leadership tip from guest speakers/senior professionals." },
                  { icon: "♙", t: "Main Play", d: "Friendly matches, mini-tournaments, or themed challenges." },
                  { icon: "🎓", t: "Networking & Reflection (30 mins)", d: "Conversations over light refreshments. sharing lessons from the game." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#E0B547] text-xl shrink-0 leading-none mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="font-body text-tkc-white text-sm font-medium mb-1">{item.t}</h4>
                      <p className="font-body text-[11px] text-tkc-muted/80 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-8 left-0 right-0 h-[150px] opacity-20 pointer-events-none grayscale blend-screen pt-4">
                <Image 
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600" 
                  alt="Chess pieces" 
                  fill 
                  className="object-contain object-bottom scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-transparent bg-opacity-80" />
              </div>
              <p className="absolute bottom-6 left-8 font-body text-[8px] uppercase tracking-[0.2em] text-[#E0B547] z-20">THE TACTILE ARCHIVE</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-1" />
          <div className="lg:col-span-6 flex items-center animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="bg-[#111111] p-8 md:p-12 rounded-3xl border border-tkc-border/30 w-full relative overflow-hidden shadow-xl">
              <div className="absolute top-4 -right-12 font-display text-[15rem] text-tkc-white/[0.02] leading-none pointer-events-none select-none">
                ♞
              </div>

              <form className="relative z-10 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-[10px] uppercase tracking-wider text-tkc-muted/80">FIRST NAME</label>
                    <input type="text" placeholder="e.g. Mikhail" className="bg-[#0A0A0A] border border-tkc-border/40 rounded-lg px-4 py-3.5 text-sm text-tkc-white focus:outline-none focus:border-[#E0B547] transition-colors placeholder:text-tkc-muted/40" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-[10px] uppercase tracking-wider text-tkc-muted/80">LAST NAME</label>
                    <input type="text" placeholder="e.g. Tal" className="bg-[#0A0A0A] border border-tkc-border/40 rounded-lg px-4 py-3.5 text-sm text-tkc-white focus:outline-none focus:border-[#E0B547] transition-colors placeholder:text-tkc-muted/40" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="font-body text-[10px] uppercase tracking-wider text-tkc-muted/80">PROFESSION / INDUSTRY</label>
                  <select className="appearance-none bg-[#0A0A0A] border border-tkc-border/40 rounded-lg px-4 py-3.5 text-sm text-tkc-white focus:outline-none focus:border-[#E0B547] transition-colors cursor-pointer outline-none w-full">
                    <option value="" disabled selected className="text-tkc-muted/40">Select industry</option>
                    <option value="tech">Technology & Software</option>
                    <option value="finance">Finance & Investment</option>
                    <option value="health" selected>Healthcare & Medicine</option>
                    <option value="law">Law & Policy</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-[38px] text-[#E0B547] pointer-events-none" size={16} />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-body text-[10px] uppercase tracking-wider text-tkc-muted/80 mb-1">EXPERIENCE LEVEL</label>
                  
                  {['Beginner', 'Intermediate', 'Advanced / Club Player'].map((level, i) => (
                    <label key={level} className="flex items-center gap-4 bg-[#0A0A0A] border border-tkc-border/40 rounded-lg px-5 py-4 cursor-pointer hover:border-[#E0B547]/50 transition-all group">
                      <div className="relative w-4 h-4 rounded-full border border-tkc-muted/50 group-hover:border-[#E0B547] flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#E0B547]' : 'bg-transparent'}`} />
                      </div>
                      <span className="font-body text-sm text-tkc-white">{level}</span>
                      <input type="radio" name="level" className="hidden" defaultChecked={i === 0} />
                    </label>
                  ))}
                </div>

                <button type="button" className="w-full mt-4 bg-[#E0B547] text-[#111111] font-body font-medium text-sm py-4 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  Complete Registration <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
