import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brain, Network, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "About The Knights Collective",
};

export default function AboutPage() {
  return (
    <div className="bg-tkc-black min-h-screen pt-24 mt-8">
      {/* Hero Section */}
      <section className="tkc-container max-w-[1200px] mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#E0B547] mb-6">
              SPECIAL FEATURE <span className="mx-2">•</span> BRAND STORY
            </p>
            <h1 className="mb-8">
              <Image
                src="/images/tkclogo.png"
                alt="The Knights Collective"
                width={800}
                height={60}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </h1>
            <p className="font-body text-tkc-muted leading-relaxed max-w-[400px]">
              The Knight Club (est. 2026) is a private chess club designed to
              bring together professionals with a shared class of strategic
              thinking.
            </p>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about%20knights%20image.png"
                alt="Knight Chess Piece"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tkc-black/80 to-transparent" />
            </div>
            {/* Overlay Quote */}
            <div className="absolute -bottom-10 -left-10 bg-[#222222] p-8 max-w-[320px] rounded-xl border border-tkc-border shadow-2xl hidden md:block">
              <p className="font-display text-lg text-tkc-white leading-relaxed italic">
                "The goal is to create a space where the absolute giants of
                their domain converge... networking, robust intellect, and
                technically play against."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="tkc-container max-w-[1200px] py-16 border-t border-tkc-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-normal text-3xl text-tkc-white mb-6">
              Our Culture
            </h2>
            <p className="font-body text-sm text-tkc-muted leading-relaxed max-w-[380px]">
              Our culture centers around dedicated chess study. From tactical
              gameplay to mental conditioning we’re cultivating a space where
              intellectual rigor matches cultural refinement.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <span className="font-display text-2xl text-tkc-muted block mb-4">
                  01.
                </span>
                <h3 className="font-display font-normal text-xl text-tkc-white mb-3">
                  Shared Intellect
                </h3>
                <p className="font-body text-sm text-tkc-muted leading-relaxed">
                  Join a community of thought leaders who see chess not just as
                  a game, but a framework for strategic thinking and execution.
                </p>
              </div>
              <div className="relative w-48 h-36 shrink-0 rounded-lg overflow-hidden mt-6">
                <Image
                  src="https://gdlknxdmtwzufzbllxkm.supabase.co/storage/v1/object/public/event-galleries/DAM08685.jpg.jpeg"
                  alt="Culture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex gap-8 items-start flex-row-reverse">
              <div className="flex-1 text-right">
                <span className="font-display text-2xl text-tkc-muted block mb-4">
                  02.
                </span>
                <h3 className="font-display font-normal text-xl text-tkc-white mb-3">
                  Membership
                </h3>
                <p className="font-body text-sm text-tkc-muted leading-relaxed text-right md:ml-auto md:max-w-[80%]">
                  Membership is by invitation or application. It ensures the
                  environment remains perfectly curated for intellectual
                  exchange.
                </p>
              </div>
              <div className="relative w-48 h-36 shrink-0 rounded-lg overflow-hidden mt-6">
                <Image
                  src="https://gdlknxdmtwzufzbllxkm.supabase.co/storage/v1/object/public/event-galleries/board.jpeg"
                  alt="Culture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meetup Structure overlayed pattern */}
      <section className="py-24 relative overflow-hidden bg-[#1A1A1A]">
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[12rem] lg:text-[20rem] text-tkc-black/30 whitespace-nowrap pointer-events-none select-none z-0">
          KNIGHT
        </div>

        <div className="tkc-container max-w-[1200px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="max-w-[440px]">
            <h2 className="font-display text-4xl text-tkc-white mb-2 leading-tight">
              Meetup <br />
              <span className="italic text-[#E0B547]">Structure</span>
            </h2>
            <p className="font-body text-sm text-tkc-muted mb-10 leading-relaxed mt-6">
              Every gathering follows a carefully curated format. An evening of
              deep focus, networking, and the art of play.
            </p>

            <ul className="space-y-8">
              {[
                {
                  n: "1.",
                  t: "Opening Insight (15 mins)",
                  d: "Welcome, dialogue, and briefly diving into key topics of strategy.",
                },
                {
                  n: "2.",
                  t: "Main Play",
                  d: "Deeply focused chess gameplay without distractions.",
                },
                {
                  n: "3.",
                  t: "Networking & Reflection (30 mins)",
                  d: "Conversations over light refreshments. Sharing lessons from the game.",
                },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="font-display text-[#E0B547] text-xl shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <h4 className="font-display text-tkc-white text-lg mb-1">
                      {item.t}
                    </h4>
                    <p className="font-body text-xs text-tkc-muted">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#111111] border border-tkc-border/40 p-10 rounded-2xl shadow-xl flex flex-col justify-center">
            <h3 className="font-display text-[#E0B547] text-lg text-right mb-8">
              Make a Reservation
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-tkc-border/30 pb-4">
                <span className="font-body text-xs text-tkc-muted uppercase tracking-wider">
                  Schedule
                </span>
                <span className="font-body text-sm text-tkc-white text-right max-w-[200px]">
                  Every last Saturday of the Month
                </span>
              </div>
              <div className="flex justify-between border-b border-tkc-border/30 pb-4">
                <span className="font-body text-xs text-tkc-muted uppercase tracking-wider">
                  Time
                </span>
                <span className="font-body text-sm text-tkc-white">
                  10:30am - 12:45pm
                </span>
              </div>
              <div className="flex justify-between border-b border-tkc-border/30 pb-4">
                <span className="font-body text-xs text-tkc-muted uppercase tracking-wider">
                  Venue
                </span>
                <span className="font-body text-sm text-tkc-white text-right">
                  Regina Public Library
                </span>
              </div>
              <div className="flex justify-between border-b border-tkc-border/30 pb-4">
                <span className="font-body text-xs text-tkc-muted uppercase tracking-wider">
                  RSVP
                </span>
                <span className="font-body text-sm text-tkc-white">
                  Invite Only
                </span>
              </div>
            </div>
            {/* <button className="w-full mt-10 py-4 bg-[#1A1A1A] border border-tkc-border text-tkc-white font-body text-xs uppercase tracking-[0.15em] hover:bg-[#E0B547] hover:text-tkc-black hover:border-transparent transition-all">
              Login to reserve
            </button> */}
          </div>
        </div>
      </section>

      {/* Purpose Overlay on Chessboard */}
      <section className="relative py-24 bg-tkc-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1500')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-tkc-black via-tkc-black/80 to-tkc-black" />

        <div className="tkc-container max-w-[1000px] relative z-10 text-center">
          <h2 className="font-display text-4xl text-tkc-white mb-4 italic">
            Purpose
          </h2>
          <p className="font-body text-sm text-tkc-muted mb-16">
            A private society for the intellectually curious—innovators, and
            strategists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Brain size={20} className="text-[#E0B547]" />,
                title: "Strategic Mastery",
                desc: "Use chess as a tool to sharpen analytical skills and decision-making.",
              },
              {
                icon: <Network size={20} className="text-[#E0B547]" />,
                title: "Professional Networking",
                desc: "Foster connections among thought leaders, innovators, and policy professionals.",
              },
              {
                icon: <Coffee size={20} className="text-[#E0B547]" />,
                title: "Refined Excellence",
                desc: "Provide a semi-casual environment that blends professionalism with the joy of play.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-tkc-black/40 backdrop-blur-sm p-8 border border-tkc-border/40 rounded-xl hover:border-[#E0B547]/30 transition-all"
              >
                <div className="mb-6">{p.icon}</div>
                <h3 className="font-display text-lg text-tkc-white mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-xs leading-relaxed text-tkc-muted leading-loose">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Yellow CTA */}
      <section
        id="your-first-move"
        className="bg-[#E0B547] py-24 text-center text-[#111111]"
      >
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
          Your first move <br />
          <span className="italic font-semibold">starts here.</span>
        </h2>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
          className="inline-block bg-[#111111] text-[#E0B547] font-body text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:scale-105 transition-transform"
        >
          JOIN THE KNIGHTS COLLECTIVE
        </Link>
      </section>
    </div>
  );
}
