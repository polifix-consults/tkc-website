"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Swords,
  Castle,
  Shield,
  Trophy,
  Crown,
  Target,
} from "lucide-react";

const sliderImages = [
  "/images/bIhero.jpeg",
  "/images/strategic.jpeg",
  "/images/eventhh.jpeg",
  "/images/aboutImg.jpeg",
  "/images/Professionals.jpeg",
  "/images/relaxedex.jpeg",
  "/images/wholeroom.jpeg",
  "/images/professionalinsight.jpeg",
  "/images/sectionImg.jpeg",
  "/images/MonthlyInsight.jpeg",
  "/images/heronewImg.jpeg",
  "/images/profnsight.jpeg",
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // 1. Trigger the shuffle slide-out animation
      setIsShuffling(true);

      // 2. Wait for transition (700ms), then shift the active index and reset shuffle state
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % sliderImages.length);
        setIsShuffling(false);
      }, 700); // Matches the Tailwind transition duration (duration-700)
    }, 4000); // Shuffle every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Compute the index of the next 2 cards in the stack
  const next1Index = (activeIndex + 1) % sliderImages.length;
  const next2Index = (activeIndex + 2) % sliderImages.length;

  return (
    <section className="relative min-h-screen lg:h-[100dvh] flex items-center justify-center bg-white pt-28 pb-12 lg:pt-28 lg:pb-8 overflow-hidden font-sans">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col max-w-[600px] z-10 pl-4 md:pl-8">
          <div
            className="flex items-center gap-2 mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#2c2627]" />
            <p className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#2c2627]">
              WELCOME TO THE COMMUNITY
            </p>
          </div>

          <h1
            className="animate-fade-up font-bold text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] xl:text-[4.5rem] leading-[1.05] tracking-tight text-[#2c2627] mb-6"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Strategic <br />
            Thinking, <br />
            <span className="italic font-normal text-[#b75f20] pr-2">
              INTELLECT &
            </span>{" "}
            <br />
            <span className="italic font-normal text-[#b75f20]">
              INNOVATION.
            </span>
          </h1>

          <p
            className="animate-fade-up text-sm md:text-base text-[#2c2627]/85 leading-relaxed max-w-[460px] mb-8"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            The Knights Collective (TKC) is a strategic chess circle designed to
            bring together professionals who value intellect, innovation, and
            strategic thinking.
          </p>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
              className="inline-flex items-center justify-center bg-[#2c2627] text-white font-medium text-sm px-8 py-3.5 rounded hover:bg-[#b75f20] transition-all duration-300 shadow-md"
            >
              Join the community 
            </Link>
            <Link
              href="#strategy-video"
              className="inline-flex items-center gap-2 text-[#2c2627] font-semibold text-sm hover:text-[#b75f20] transition-all duration-300"
            >
              Explore Strategy <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image Container (Shuffling Slider & Floating Icons) */}
        <div
          className="relative h-[380px] md:h-[500px] lg:h-[550px] w-full max-w-[500px] lg:max-w-none ml-auto lg:translate-x-12 animate-fade-in group z-10 -rotate-2"
          style={{ animationDelay: "0.4s", opacity: 0 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* FLOATING THEMATIC CHESS & STRATEGY ICONS */}
          {/* 1. Swords (representing battle/tactics - top-left, front) */}
          <Swords
            size={44}
            className="absolute -top-10 -left-10 text-[#b75f20]/45 -rotate-12 z-20 transition-all duration-700 group-hover:scale-115 group-hover:-translate-y-2 group-hover:-translate-x-1 pointer-events-none"
          />
          {/* 2. Castle (representing Rook/fortification - bottom-left, behind) */}
          <Castle
            size={38}
            className="absolute -bottom-8 -left-8 text-[#2c2627]/30 rotate-12 z-0 transition-all duration-700 group-hover:scale-110 group-hover:translate-y-2 group-hover:-translate-x-1 pointer-events-none"
          />
          {/* 3. Shield (representing Bishop/defense - top-right, behind) */}
          <Shield
            size={36}
            className="absolute -top-12 -right-6 text-[#2c2627]/25 rotate-45 z-0 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-1 pointer-events-none"
          />
          {/* 4. Trophy (representing victory/checkmate - bottom-right, front) */}
          <Trophy
            size={42}
            className="absolute -bottom-10 -right-10 text-[#b75f20]/40 -rotate-12 z-20 transition-all duration-700 group-hover:scale-115 group-hover:translate-y-2 group-hover:translate-x-1 pointer-events-none"
          />
          {/* 5. Crown (representing King/Queen - mid-left, front) */}
          <Crown
            size={28}
            className="absolute top-1/2 -left-12 text-[#2c2627]/20 -translate-y-1/2 rotate-12 z-20 transition-all duration-700 group-hover:scale-120 group-hover:-translate-x-2 pointer-events-none"
          />
          {/* 6. Target (representing calculation/strategy - mid-right, behind) */}
          <Target
            size={32}
            className="absolute top-1/3 -right-12 text-[#b75f20]/30 -translate-y-1/2 -rotate-12 z-0 transition-all duration-700 group-hover:scale-120 group-hover:translate-x-2 pointer-events-none"
          />

          {/* THE LAYERED SHADOW (Background Card) */}
          <div className="absolute inset-0 bg-[#2c2627] rounded-[3rem] translate-x-3 translate-y-3 shadow-2xl z-0" />

          {/* MAIN SHUFFLE DECK */}
          <div className="relative w-full h-full rounded-[3rem] z-10">
            {sliderImages.map((src, i) => {
              const isTop = i === activeIndex;
              const isNext1 = i === next1Index;
              const isNext2 = i === next2Index;

              // Default state: hidden deck cards (scale down, transparent, bottom z-index)
              let cardStyles = "scale-90 opacity-0 z-0 pointer-events-none";

              if (isTop) {
                // Top active card slides off right and rotates slightly during shuffling
                cardStyles = isShuffling
                  ? "translate-x-[110%] rotate-6 scale-95 opacity-0 z-30 pointer-events-none"
                  : "translate-x-0 rotate-0 scale-100 opacity-100 z-30";
              } else if (isNext1) {
                // Second card scales up to the top active spot
                cardStyles = isShuffling
                  ? "translate-x-0 rotate-0 scale-100 opacity-100 z-30"
                  : "translate-x-2 translate-y-2 scale-[0.97] opacity-90 z-20";
              } else if (isNext2) {
                // Third card scales up to the second spot
                cardStyles = isShuffling
                  ? "translate-x-2 translate-y-2 scale-[0.97] opacity-90 z-20"
                  : "translate-x-4 translate-y-4 scale-[0.94] opacity-70 z-10";
              }

              return (
                <div
                  key={i}
                  className={`absolute inset-0 rounded-[3rem] overflow-hidden bg-transparent transition-all duration-700 ease-in-out ${cardStyles}`}
                >
                  <Image
                    src={src}
                    alt="The Knights Collective chess session"
                    fill
                    priority={isTop || isNext1}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle dark gradient overlay at bottom edge of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
