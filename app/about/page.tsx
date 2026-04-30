import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brain, Network, Coffee } from "lucide-react";

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
            <h1 className="mb-8">
              <Image
                src="/images/tkcblack.png"
                alt="The Knights Collective"
                width={800}
                height={60}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </h1>
            <p className="text-[#2c2627]/80 leading-relaxed max-w-[440px] font-medium">
              The Knights Collective (TKC) is a strategic chess circle designed
              to bring together professionals who value intellect, innovation,
              and strategic thinking.
            </p>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-3 translate-y-3 shadow-2xl z-0" />
            <div className="relative z-10 h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#2c2627]/10">
              <Image
                src="/images/aboutImg.jpeg"
                alt="Knight Chess Piece"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Quote uses the primary brand color for emphasis */}
            <div className="absolute -bottom-8 -left-8 bg-[#262626] border border-[#2c2627]/10 p-8 max-w-[340px] rounded-xl shadow-2xl hidden md:block z-20">
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
                      src="https://gdlknxdmtwzufzbllxkm.supabase.co/storage/v1/object/public/event-galleries/DAM08685.jpg.jpeg"
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
                      src="/images/Professionals.jpeg"
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
                image: "/images/bIhero.jpeg",
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

      {/* Primary Brand Color CTA */}
      <section
        id="your-first-move"
        className="bg-[#b75f20] py-24 text-center px-4"
      >
        <h2 className="font-bold text-4xl md:text-5xl leading-tight mb-8 text-white tracking-wide">
          Building Our Community  <br />
          <span className="italic font-normal text-[#2c2627]">a piece at a time</span>
        </h2>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
          className="inline-block bg-[#2c2627] text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-[#1A1A1A] hover:scale-105 transition-all duration-300 shadow-xl"
        >
          JOIN THE KNIGHTS COLLECTIVE TODAY
        </Link>
      </section>
    </div>
  );
}
