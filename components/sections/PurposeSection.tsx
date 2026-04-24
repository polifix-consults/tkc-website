import { Brain, Network, Coffee, Users } from "lucide-react";

const pillars = [
  {
    icon: <Brain size={20} className="text-[#E0B547]" />,
    title: "Strategic Thinking",
    description: "Use chess as a tool to sharpen analytical skills and decision-making.",
  },
  {
    icon: <Network size={20} className="text-[#E0B547]" />,
    title: "Professional Networking",
    description: "Foster connections among thought leaders, innovators, and policy professionals.",
  },
  {
    icon: <Coffee size={20} className="text-[#E0B547]" />,
    title: "Relaxed Excellence",
    description: "Provide a semi-casual environment that blends professionalism with the joy of play.",
  },
  {
    icon: <Users size={20} className="text-[#E0B547]" />,
    title: "Our Culture",
    description: "A learning-oriented, community-driven space where senior professionals share insights and wisdom.",
  },
];

export function PurposeSection() {
  return (
    <section className="bg-tkc-black py-24 border-b border-tkc-border/30">
      <div className="tkc-container max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="font-display font-normal text-display-md text-tkc-white mb-2 tracking-wide">
            Our Purpose & Culture
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#E0B547]/50 flex items-center justify-center mb-6 transition-colors duration-400 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {pillar.icon}
              </div>
              
              <h3 className="font-display text-xl text-tkc-white mb-4 tracking-wide group-hover:text-[#E0B547] transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="font-body text-sm text-tkc-muted text-balance px-4 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
