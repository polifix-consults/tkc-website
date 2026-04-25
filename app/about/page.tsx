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
    <div className="bg-[#2c2627] min-h-screen pt-24 mt-8 font-sans">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c49671] mb-6">
              Our Vision <span className="mx-2">•</span> Brand Story
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
            <p className="text-[#f2efe9]/80 leading-relaxed max-w-[440px]">
              The Knights Collective (TKC) is a strategic chess circle designed
              to bring together professionals who value intellect, innovation,
              and strategic thinking.
            </p>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#31412d]/50">
              <Image
                src="/images/about%20knights%20image.png"
                alt="Knight Chess Piece"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627]/90 to-transparent" />
            </div>
            {/* Overlay Quote uses the primary brand color for emphasis */}
            <div className="absolute -bottom-10 -left-10 bg-[#b75f20] p-8 max-w-[340px] rounded-xl shadow-2xl hidden md:block">
              <p className="text-lg text-[#f2efe9] leading-relaxed italic font-medium">
                "A space where the timeless game of chess becomes a catalyst for
                networking, collaboration, creativity, and leadership
                development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 border-t border-[#31412d]/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-semibold text-3xl text-[#f2efe9] mb-6">
              Our Culture
            </h2>
            <p className="text-sm text-[#f2efe9]/80 leading-relaxed max-w-[380px]">
              Our culture is professional yet approachable. We are
              learning-oriented, sharing strategies and celebrating creativity,
              while remaining community-driven by building friendships beyond
              the board.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <span className="text-2xl text-[#c49671] font-bold block mb-4">
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
              <div className="relative w-48 h-36 shrink-0 rounded-lg overflow-hidden mt-6 border border-[#31412d]/50">
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
                <span className="text-2xl text-[#c49671] font-bold block mb-4">
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
              <div className="relative w-48 h-36 shrink-0 rounded-lg overflow-hidden mt-6 border border-[#31412d]/50">
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

      {/* Meetup Structure */}
      <section className="py-24 relative overflow-hidden bg-[#31412d]/10 border-y border-[#31412d]/30">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="max-w-[440px]">
            <h2 className="font-bold text-4xl text-[#f2efe9] mb-2 leading-tight">
              Meetup <br />
              <span className="italic font-normal text-[#c49671]">
                Structure
              </span>
            </h2>
            <p className="text-sm text-[#f2efe9]/80 mb-10 leading-relaxed mt-6">
              Every gathering follows a carefully curated format. An evening of
              deep focus, networking, and the art of play.
            </p>

            <ul className="space-y-8">
              {[
                {
                  n: "1.",
                  t: "Opening Insight (15 mins)",
                  d: "Welcome and a short strategic or leadership tip from guest speakers and senior professionals.",
                },
                {
                  n: "2.",
                  t: "Main Play (45 mins)",
                  d: "Friendly matches, mini-tournaments, or themed challenges focused on skill development.",
                },
                {
                  n: "3.",
                  t: "Networking & Reflection (30 mins)",
                  d: "Conversations over light refreshments, sharing lessons extracted from the game.",
                },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="font-bold text-[#c49671] text-xl shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#f2efe9] text-lg mb-1">
                      {item.t}
                    </h4>
                    <p className="text-xs text-[#f2efe9]/70">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#2c2627] border border-[#c49671]/30 p-10 rounded-2xl shadow-xl flex flex-col justify-center">
            <h3 className="font-semibold text-[#c49671] text-lg text-right mb-8">
              Join the Circle
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-[#31412d]/50 pb-4">
                <span className="text-xs text-[#f2efe9]/60 uppercase font-bold tracking-wider">
                  Frequency
                </span>
                <span className="text-sm text-[#f2efe9] font-medium text-right max-w-[200px]">
                  Monthly (Every last Saturday)
                </span>
              </div>
              <div className="flex justify-between border-b border-[#31412d]/50 pb-4">
                <span className="text-xs text-[#f2efe9]/60 uppercase font-bold tracking-wider">
                  Time
                </span>
                <span className="text-sm font-medium text-[#f2efe9]">
                  10:30am - 11:45am
                </span>
              </div>
              <div className="flex justify-between border-b border-[#31412d]/50 pb-4">
                <span className="text-xs text-[#f2efe9]/60 uppercase font-bold tracking-wider">
                  Venue
                </span>
                <span className="text-sm font-medium text-[#f2efe9] text-right">
                  Room CE-1, Regina Public Library
                </span>
              </div>
              <div className="flex justify-between border-b border-[#31412d]/50 pb-4">
                <span className="text-xs text-[#f2efe9]/60 uppercase font-bold tracking-wider">
                  Membership
                </span>
                <span className="text-sm font-medium text-[#f2efe9]">
                  Open to Professionals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Overlay on Chessboard */}
      <section className="relative py-24 bg-[#2c2627]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1500')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627] via-[#2c2627]/80 to-[#2c2627]" />

        <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-semibold text-4xl text-[#f2efe9] mb-4">
            Purpose
          </h2>
          <p className="text-sm text-[#f2efe9]/70 mb-16">
            Sharpening minds and building connections beyond the board.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Brain size={20} className="text-[#c49671]" />,
                title: "Strategic Thinking",
                desc: "Use chess as a tool to sharpen analytical skills and decision-making.",
              },
              {
                icon: <Network size={20} className="text-[#c49671]" />,
                title: "Professional Networking",
                desc: "Foster connections among thought leaders, innovators, and policy professionals.",
              },
              {
                icon: <Coffee size={20} className="text-[#c49671]" />,
                title: "Relaxed Excellence",
                desc: "Provide a semi-casual environment that blends professionalism with the joy of play.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[#2c2627]/60 backdrop-blur-sm p-8 border border-[#31412d]/80 rounded-xl hover:border-[#c49671] transition-all duration-300"
              >
                <div className="mb-6 bg-[#31412d]/30 w-12 h-12 rounded-full flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-lg text-[#f2efe9] mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-[#f2efe9]/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Brand Color CTA */}
      <section
        id="your-first-move"
        className="bg-[#b75f20] py-24 text-center px-4"
      >
        <h2 className="font-bold text-4xl md:text-5xl leading-tight mb-8 text-[#f2efe9]">
          Your first move <br />
          <span className="italic font-normal">starts here.</span>
        </h2>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
          className="inline-block bg-[#2c2627] text-[#f2efe9] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-[#31412d] hover:scale-105 transition-all duration-300"
        >
          JOIN THE KNIGHTS COLLECTIVE
        </Link>
      </section>
    </div>
  );
}
