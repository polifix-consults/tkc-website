import { Brain, Network, Coffee, Users } from "lucide-react";

const pillars = [
  {
    // Using the supporting color #c49671 for icons
    icon: <Brain size={20} className="text-[#c49671]" />,
    title: "Strategic Thinking",
    description:
      "Use chess as a tool to sharpen analytical skills and decision-making.",
  },
  {
    icon: <Network size={20} className="text-[#c49671]" />,
    title: "Professional Networking",
    description:
      "Foster connections among thought leaders, innovators, and policy professionals.",
  },
  {
    icon: <Coffee size={20} className="text-[#c49671]" />,
    title: "Relaxed Excellence",
    description:
      "Provide a semi-casual environment that blends professionalism with the joy of play.",
  },
  {
    icon: <Users size={20} className="text-[#c49671]" />,
    title: "Our Culture",
    description:
      "A learning-oriented, community-driven space where senior professionals share insights and wisdom.",
  },
];

export function PurposeSection() {
  return (
    // Applied the dark secondary background (#2c2627) and enforced font-sans (Public Sans)
    <section className="bg-[#2c2627] py-24 border-b border-[#31412d]/50 font-sans">
      <div className="tkc-container max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="font-bold text-3xl md:text-4xl text-[#f2efe9] mb-2 tracking-wide">
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
              {/* Icon Container: Uses the dark green accent (#31412d) for the border, switching to #c49671 on hover */}
              <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#31412d] group-hover:border-[#c49671] flex items-center justify-center mb-6 transition-colors duration-400 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                {pillar.icon}
              </div>

              <h3 className="font-semibold text-xl text-[#f2efe9] mb-4 tracking-wide group-hover:text-[#c49671] transition-colors duration-300">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#f2efe9]/80 text-balance px-4 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
