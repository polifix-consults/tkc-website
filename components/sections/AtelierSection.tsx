import Image from "next/image";
import { Play } from "lucide-react";

export function AtelierSection() {
  const videos = [
    {
      num: "01",
      title: "The Sicilian Defense Reimagined",
      desc: "GM Alexander Thomas explores modern counters to aggressive openings.",
    },
    {
      num: "02",
      title: "Endgame Minimalism",
      desc: "Mastering the art of winning with just a single pawn advantage.",
    },
    {
      num: "03",
      title: "Psychology of the Clock",
      desc: "How to maintain composure when the pressure of time mounts.",
    },
  ];

  return (
    <section className="bg-tkc-black pt-24 pb-0">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-stretch h-full">
        
        {/* Left Content */}
        <div className="bg-[#0A0A0A] p-8 md:p-16 lg:pr-24 flex flex-col justify-center border-t border-tkc-border/40 min-h-[500px]">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#E0B547] mb-12">
            DIGITAL ATELIER
          </p>

          <div className="flex flex-col gap-10">
            {videos.map((vid) => (
              <div 
                key={vid.num} 
                className="group flex items-start justify-between cursor-pointer animate-fade-up relative"
              >
                <div className="flex items-start gap-8 pr-8">
                  <span className="font-body text-sm text-tkc-muted mt-1 w-6">{vid.num}</span>
                  <div>
                    <h4 className="font-display text-xl text-tkc-white mb-2 group-hover:text-[#E0B547] transition-colors duration-300">
                      {vid.title}
                    </h4>
                    <p className="font-body text-sm text-tkc-muted max-w-[320px] leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full border border-[#E0B547]/50 flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:bg-[#E0B547]/10 group-hover:border-[#E0B547]">
                  <Play size={10} className="text-[#E0B547] ml-0.5" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[400px] lg:min-h-[600px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1500" // Placeholder chess board macro
            alt="Chess board closeup"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 rounded-t-3xl lg:rounded-t-none lg:rounded-tl-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tkc-black/80 lg:from-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkc-black/40 lg:from-tkc-black/80 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
}
