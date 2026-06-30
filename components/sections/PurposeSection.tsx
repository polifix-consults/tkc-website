import { Brain, Network, Coffee, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    icon: <Brain size={22} className="text-[#c49671]" />,
    title: "Strategic Thinking",
    description:
      "Use chess as a tool to sharpen analytical skills and decision-making.",
    image: "/images/teen_images/sideview of a kid playing chess.jpeg",
  },
  {
    icon: <Network size={22} className="text-[#c49671]" />,
    title: "Professional Networking",
    description:
      "Foster connections among thought leaders, innovators, and professionals.",
    image: "/images/teen_images/frontview of an adult playing chess with a kid.jpeg",
  },
  {
    icon: <Coffee size={22} className="text-[#c49671]" />,
    title: "Relaxed Excellence",
    description:
      "Provide a semi-casual environment that blends professionalism with the joy of play.",
    image: "/images/teen_images/side view of a black and asian teen playing chess.jpeg",
  }
];

export function PurposeSection() {
  return (
    <section className="bg-[#262626] py-24 border-b border-[#31412d]/50 font-sans">
      <div className="tkc-container max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="font-bold text-3xl md:text-4xl text-[#f2efe9] mb-4 tracking-wide">
            Our Purpose 
          </h2>
          <div className="w-16 h-1 bg-[#b75f20] mx-auto rounded-full" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {pillars.map((pillar, i) => (
            <Link
              key={i}
              href="/about"
              className="relative group w-full h-full animate-fade-up block"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* THE LAYERED SHADOW (Background Card) */}
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-2xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

              {/* MAIN CARD CONTAINER */}
              <div className="relative flex flex-col w-full h-full rounded-2xl overflow-hidden z-10 bg-[#242424] border border-[#f2efe9]/10">
                {/* Image Section */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Icon Badge floating on the bottom edge of the image */}
                  <div className="absolute bottom-4 left-6 w-10 h-10 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md border border-[#31412d] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {pillar.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col p-6 flex-grow">
                  <h3 className="font-bold text-xl text-[#f2efe9] mb-3 tracking-wide group-hover:text-[#b75f20] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#f2efe9]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
