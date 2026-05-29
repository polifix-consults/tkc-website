import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Swords, 
  Castle, 
  Shield, 
  Trophy, 
  Crown, 
  Target 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About The Knights Collective",
};

export default function AboutPage() {
  return (
    // Applying the dark secondary background (#2c2627) and enforcing font-sans (Public Sans)
    <div className="bg-white min-h-screen pt-32 font-sans">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#b75f20] mb-6">
              Our Vision <span className="mx-2">•</span> Brand Story
            </p>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#2c2627] tracking-tight mb-8">
              The Knights Collective
            </h1>
            <p className="text-[#2c2627]/80 leading-relaxed max-w-[440px] font-medium">
              The Knights Collective (TKC) is a strategic chess circle designed
              to bring together professionals who value intellect, innovation,
              and strategic thinking.
            </p>
          </div>

          <div
            className="relative animate-fade-in group"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {/* FLOATING THEMATIC CHESS & STRATEGY ICONS */}
            <Swords
              size={40}
              className="absolute -top-8 -left-8 text-[#b75f20]/45 -rotate-12 z-20 transition-all duration-700 group-hover:scale-110 pointer-events-none"
            />
            <Castle
              size={36}
              className="absolute -bottom-8 -left-6 text-[#2c2627]/30 rotate-12 z-0 transition-all duration-700 group-hover:scale-110 pointer-events-none"
            />
            <Shield
              size={32}
              className="absolute -top-10 -right-6 text-[#2c2627]/25 rotate-45 z-0 transition-all duration-700 group-hover:scale-110 pointer-events-none"
            />
            <Trophy
              size={38}
              className="absolute -bottom-8 -right-8 text-[#b75f20]/40 -rotate-12 z-20 transition-all duration-700 group-hover:scale-110 pointer-events-none"
            />
            <Crown
              size={26}
              className="absolute top-1/2 -left-10 text-[#2c2627]/20 -translate-y-1/2 rotate-12 z-20 transition-all duration-700 group-hover:scale-110 pointer-events-none"
            />
            <Target
              size={30}
              className="absolute top-1/3 -right-10 text-[#b75f20]/30 -translate-y-1/2 -rotate-12 z-0 transition-all duration-700 group-hover:scale-110 pointer-events-none"
            />
            <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-3 translate-y-3 shadow-2xl z-0" />
            <div className="relative z-10 h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#2c2627]/10">
              <Image
                src="/images/relaxedex.jpeg"
                alt="Knight Chess Piece"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Quote uses the primary brand color for emphasis */}
            <div className="absolute -bottom-8 -left-8 bg-[#262626]/70 backdrop-blur-sm border border-[#2c2627]/10 p-8 max-w-[340px] rounded-xl shadow-2xl hidden md:block z-20">
              <p className="text-lg text-white leading-relaxed italic font-medium">
                "A space where the timeless game of chess becomes a catalyst for
                networking, collaboration, creativity, and leadership
                development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-[#262626] py-24 border-y border-[#31412d]/50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-[#f2efe9] mb-6 tracking-wide">
                Our Culture
              </h2>
              <div className="h-1 w-16 bg-[#b75f20] rounded-full mb-6" />
              <div className="space-y-4 text-sm text-[#f2efe9]/80 leading-relaxed max-w-[440px]">
                <p>
                  Our culture is rooted in intentionality, curiosity, and thoughtful engagement.
                </p>
                <p>
                  We value respect, openness, and inclusivity, ensuring that every participant feels seen, heard, and comfortable at the board. Whether you are experienced or just beginning, your presence adds to the richness of the experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <span className="text-2xl text-[#b75f20] font-bold block mb-4">
                    01.
                  </span>
                  <h3 className="font-semibold text-xl text-[#f2efe9] mb-3">
                    Community-Driven
                  </h3>
                  <p className="text-sm text-[#f2efe9]/70 leading-relaxed">
                    Open to professionals across industries who share a passion
                    for chess and strategic thinking, fostering friendships that
                    extend far beyond the chessboard.
                  </p>
                </div>
                <div className="relative mt-6 shrink-0">
                  <div className="absolute inset-0 bg-[#b75f20] rounded-lg translate-x-2 translate-y-2 z-0" />
                  <div className="relative w-48 h-36 rounded-lg overflow-hidden border border-[#2c2627]/10 z-10 bg-white">
                    <Image
                      src="/images/communitydriven.jpeg"
                      alt="Culture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start flex-row-reverse">
                <div className="flex-1 text-right">
                  <span className="text-2xl text-[#b75f20] font-bold block mb-4">
                    02.
                  </span>
                  <h3 className="font-semibold text-xl text-[#f2efe9] mb-3">
                    Wisdom & Perspective
                  </h3>
                  <p className="text-sm text-[#f2efe9]/70 leading-relaxed text-right md:ml-auto md:max-w-[80%]">
                    We invite senior professionals to share insights and thoughts
                    in a relaxed manner, enriching every meetup with deep industry
                    wisdom and leadership perspective.
                  </p>
                </div>
                <div className="relative mt-6 shrink-0">
                  <div className="absolute inset-0 bg-[#b75f20] rounded-lg -translate-x-2 translate-y-2 z-0" />
                  <div className="relative w-48 h-36 rounded-lg overflow-hidden border border-[#2c2627]/10 z-10 bg-white">
                    <Image
                      src="/images/wandp.jpeg"
                      alt="Culture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Purpose Highlights */}
      <section className="py-24 bg-[#f2efe9]">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] mb-4 tracking-wide">
            Our Purpose
          </h2>
          <div className="relative max-w-5xl mx-auto mt-16">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#d5d2cb] transform -translate-x-1/2 hidden md:block" />

            {[
              {
                subtitle: "01. Principle",
                title: "Strategic Thinking & Connections",
                desc: "To create a space where individuals can develop strategic thinking, engage in meaningful conversations, and build genuine connections through the game of chess.",
                image: "/images/strategic.jpeg",
              },
              {
                subtitle: "02. Principle",
                title: "Diverse & Inclusive Community",
                desc: "We are committed to fostering a community that is diverse, inclusive, and accessible, welcoming people from different backgrounds, experiences, and levels of play. We believe stronger thinking emerges when different perspectives meet.",
                image: "/images/diverse.jpeg",
              },
            ].map((p, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row items-center w-full mb-24 last:mb-0 animate-fade-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Center Dot (Desktop only) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#b75f20] rounded-full hidden md:block z-10 shadow-[0_0_0_4px_#f2efe9]" />

                  {/* Left Block */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:justify-end md:pr-16 lg:pr-24 order-2 md:order-1 mt-8 md:mt-0' : 'justify-start md:justify-end md:pr-16 lg:pr-24 order-1 md:order-1'}`}>
                    {isEven ? (
                      <div className="text-left md:text-right w-full max-w-md">
                        <p className="text-[#b75f20] text-sm font-bold mb-2 tracking-wide">{p.subtitle}</p>
                        <h3 className="text-[#2c2627] text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                        <p className="text-[#2c2627]/70 text-sm leading-relaxed font-medium">{p.desc}</p>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-lg h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl border border-[#2c2627]/5">
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Right Block */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:pl-16 lg:pl-24 order-1 md:order-2' : 'justify-start md:pl-16 lg:pl-24 order-2 md:order-2 mt-8 md:mt-0'}`}>
                    {isEven ? (
                      <div className="relative w-full max-w-lg h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl border border-[#2c2627]/5">
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="text-left w-full max-w-md">
                        <p className="text-[#b75f20] text-sm font-bold mb-2 tracking-wide">{p.subtitle}</p>
                        <h3 className="text-[#2c2627] text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                        <p className="text-[#2c2627]/70 text-sm leading-relaxed font-medium">{p.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-24 bg-white border-t border-[#2c2627]/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-up">
            {/* <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#b75f20] mb-6">
              Leadership <span className="mx-2">•</span> Board of Directors
            </p> */}
            <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] tracking-wide mb-4">
              The TKC Team
            </h2>
            <div className="w-16 h-1 bg-[#b75f20] mx-auto rounded-full" />
          </div>

          {/* Members List */}
          <div className="flex flex-col gap-16 max-w-[1000px] mx-auto">
            {/* Member Card 1: Joshua Adejumo */}
            <div className="relative group w-full animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative z-10 flex flex-col md:flex-row w-full rounded-2xl overflow-hidden bg-white border border-[#2c2627]/10 transition-all duration-500 min-w-0">
                <div className="relative w-full md:w-[32%] h-[320px] md:h-auto min-h-[280px] overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src="/images/adejumo.jpeg"
                    alt="Joshua Adejumo"
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl text-[#2c2627] mb-1 group-hover:text-[#b75f20] transition-colors duration-300">
                    Joshua Adejumo
                  </h3>
                  <p className="font-semibold text-xs uppercase tracking-wider text-[#b75f20] mb-4">
                    Director of Community and Stakeholder Partnerships
                  </p>
                  <div className="text-sm text-[#2c2627]/85 leading-relaxed font-medium space-y-4">
                    <p>
                      Joshua Adejumo is an executive health and safety leader with over a decade of experience designing and implementing world-class occupational health and safety (OHS) management systems. As the Managing Partner of ADE Safety Consulting, he specializes in bridging the gap between complex regulatory frameworks and proactive corporate leadership.
                    </p>
                    <p>
                      Currently an MSc candidate with Distinction in Occupational Safety Management at the University of Central Missouri (USA), Josh holds top-tier international designations, including CSP, CHSC, and CMIOSH, among others. He is a member of The National Society of Leadership and Success (USA). His career features a proven track record of steering major hazard prevention programs across high-stakes industries, including Drilling Oil & Gas, Mining, Heavy Construction, infrastructure and large-scale industrial projects.
                    </p>
                    <p>
                      Known for treating risk calculation with the precision of a strategist, Josh is dedicated to helping organizations build resilient safety cultures where proactive hazard identification drives operational performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Member Card 2: Rajat */}
            <div className="relative group w-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-[#2c2627] rounded-2xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative z-10 flex flex-col md:flex-row w-full rounded-2xl overflow-hidden bg-white border border-[#2c2627]/10 transition-all duration-500 min-w-0">
                <div className="relative w-full md:w-[32%] h-[320px] md:h-auto min-h-[280px] overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src="/images/rajat.jpeg"
                    alt="Rajat Tokas"
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl text-[#2c2627] mb-1 group-hover:text-[#b75f20] transition-colors duration-300">
                    Rajat Tokas
                  </h3>
                  <p className="font-semibold text-xs uppercase tracking-wider text-[#b75f20] mb-4">
                    Director of Operations and Strategy
                  </p>
                  <div className="text-sm text-[#2c2627]/85 leading-relaxed font-medium space-y-4">
                    <p>
                      Rajat is a strategy and management consulting professional with expertise in strategic planning, project management, business development, and capacity building. Over the past nine years, he has advised and worked closely with public and private sector organizations, including government departments, multilateral organizations, industry associations, educational institutions, and private enterprises. He currently provides strategic planning, performance management, and reporting services to the Government of Saskatchewan.
                    </p>
                    <p>
                      Outside of work, Rajat is passionate about chess and its ability to bring community together. He believes chess is a powerful educational tool that helps individuals of all ages build valuable skills including critical thinking and problem-solving. Through his involvement with TKC, he is committed to promoting a welcoming and inclusive chess community that encourages new ways to connect and learn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Member Card 3: Olubunmi Ayantunji */}
            <div className="relative group w-full animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative z-10 flex flex-col md:flex-row w-full rounded-2xl overflow-hidden bg-white border border-[#2c2627]/10 transition-all duration-500 min-w-0">
                <div className="relative w-full md:w-[32%] h-[320px] md:h-auto min-h-[280px] overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src="/images/olabunmi.webp"
                    alt="Olubunmi Ayantunji"
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl text-[#2c2627] mb-1 group-hover:text-[#b75f20] transition-colors duration-300">
                    Olubunmi Ayantunji
                  </h3>
                  <p className="font-semibold text-xs uppercase tracking-wider text-[#b75f20] mb-4">
                    Executive Director
                  </p>
                  <div className="text-sm text-[#2c2627]/85 leading-relaxed font-medium space-y-4">
                    <p>
                      Olubunmi Ayantunji is a Legal Practitioner, Policy Expert, and Government Relations Advisor. He holds a Master's degree in Legislative Studies and Policy from the University of Benin Nigeria and a Master of Public Administration (MPA) from the Johnson Shoyama Graduate School of Public Policy (University of Regina).
                    </p>
                    <p>
                      He has served on the board of the Institute of Public Administration of Canada (IPAC) and has almost a decade of experience in the Public service in Nigeria, Ghana and the Provincial Government of Saskatchewan in Canada.
                    </p>
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
