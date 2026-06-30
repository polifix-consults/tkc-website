"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChessKnight,
  ChessRook,
  ChessPawn,
  ChessBishop,
  ChessQueen,
  ChessKing,
  Play,
  RotateCcw,
  ArrowRight,
  Trophy
} from "lucide-react";

export function HeroSection() {
  const USE_VIDEO = false; // Set to true to show video, or false to show static youth chess image
  const [isPlaying, setIsPlaying] = useState(true);
  const [showCta, setShowCta] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getFloatingStyle = (
    baseYFactor: number,
    rotateDeg: number,
    hScale: number,
    hX: number,
    hY: number,
    hasPercentY: boolean = false
  ) => {
    const scrollYOffset = scrollY * baseYFactor;
    const currentScale = isHovered ? hScale : 1;
    const currentX = isHovered ? hX : 0;
    const currentY = scrollYOffset + (isHovered ? hY : 0);
    
    const translateStr = hasPercentY
      ? `translate(${currentX}px, calc(-50% + ${currentY}px))`
      : `translate(${currentX}px, ${currentY}px)`;

    return {
      transform: `${translateStr} rotate(${rotateDeg}deg) scale(${currentScale})`,
      transition: isHovered 
        ? "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)" 
        : "transform 0.1s ease-out",
    };
  };

  // Typing animation states
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "through chess.";

  useEffect(() => {
    let index = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1200);
        }
      }, 150);
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startTimeout);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowCta(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowCta(true);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setShowCta(false);
    }
  };

  return (
    <section className="relative min-h-screen lg:h-[100dvh] flex items-center justify-center bg-white pt-28 pb-12 lg:pt-28 lg:pb-8 overflow-hidden font-sans">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col max-w-[600px] z-10 pl-4 md:pl-8">
          <div
            className="flex items-center gap-2 mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <p className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#2c2627]">
              WELCOME TO TKC
            </p>
          </div>

          <h1
            className="animate-fade-up font-bold text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] xl:text-[4.5rem] leading-[1.05] tracking-tight text-[#2c2627] mb-6"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Empowering <br />
            Young Changemakers <br />
            <span className="italic font-normal text-[#b75f20] pr-1 inline-flex items-center min-w-[3em]">
              {typedText}
              {showCursor && (
                <span className="inline-block w-[2px] h-[0.8em] bg-[#b75f20] ml-1 align-middle animate-pulse" />
              )}
            </span>{" "}
            <br />
          </h1>

          <p
            className="animate-fade-up text-sm md:text-base text-[#2c2627]/85 leading-relaxed max-w-[460px] mb-8"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            The Knights Collective is a chess community dedicated to developing young leaders at the intersection of
            innovation and community impact, We create opportunities for youth to engage, learn, and lead, transforming ideas
            into action and potential into tangible outcomes.
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
            <button
              onClick={handlePlay}
              className="inline-flex items-center gap-2 text-[#2c2627] font-semibold text-sm hover:text-[#b75f20] transition-all duration-300 cursor-pointer"
            >
              Explore Strategy <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Right Video Container (Premium Card & Floating Icons) */}
        <div
          className="relative w-full aspect-[4/3] max-w-[540px] lg:max-w-[620px] ml-auto lg:translate-x-12 animate-fade-in group z-10 -rotate-2"
          style={{ animationDelay: "0.4s", opacity: 0 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* FLOATING THEMATIC CHESS & STRATEGY ICONS */}
          <ChessKnight
            size={44}
            className="absolute -top-10 -left-10 text-[#b75f20]/45 z-20 pointer-events-none"
            style={getFloatingStyle(-0.15, -12, 1.15, -4, -8)}
          />
          <ChessRook
            size={38}
            className="absolute -bottom-8 -left-8 text-[#2c2627]/30 z-0 pointer-events-none"
            style={getFloatingStyle(0.1, 12, 1.1, -4, 8)}
          />
          <ChessPawn
            size={36}
            className="absolute -top-12 -right-6 text-[#2c2627]/25 z-0 pointer-events-none"
            style={getFloatingStyle(-0.1, 45, 1.1, 4, -8)}
          />
          <ChessBishop
            size={42}
            className="absolute -bottom-10 -right-10 text-[#b75f20]/40 z-20 pointer-events-none"
            style={getFloatingStyle(0.12, -12, 1.15, 4, 8)}
          />
          <ChessQueen
            size={28}
            className="absolute top-1/2 -left-12 text-[#2c2627]/20 z-20 pointer-events-none"
            style={getFloatingStyle(-0.12, 12, 1.2, -8, 0, true)}
          />
          <ChessKing
            size={32}
            className="absolute top-1/3 -right-12 text-[#b75f20]/30 z-0 pointer-events-none"
            style={getFloatingStyle(0.08, -12, 1.2, 8, 0, true)}
          />

          {/* Underlay Shadow Card */}
          <div className="absolute inset-0 bg-[#2c2627] rounded-[2rem] md:rounded-[3rem] translate-x-3 translate-y-3 shadow-2xl z-0" />

          {/* Main Video/Image Frame */}
          <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#2c2627] z-10 shadow-lg">
            {USE_VIDEO ? (
              <>
                <video
                  ref={videoRef}
                  src="/videos/tkc intro.webm"
                  poster="/images/teen_images/two kids playing chess with a coke in his front.jpeg"
                  className="w-full h-full object-contain cursor-pointer"
                  onEnded={handleVideoEnded}
                  onClick={isPlaying ? handlePause : handlePlay}
                  controls={isPlaying && !showCta}
                  autoPlay
                  muted
                  playsInline
                />

                {/* Custom Play Overlay (Shown initially and when paused) */}
                {!isPlaying && !showCta && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-500 z-20"
                    onClick={handlePlay}
                  >
                    <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition-transform duration-300 shadow-xl group/play animate-fade-in">
                      <div className="flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-full bg-[#b75f20] text-white shadow-inner transition-colors duration-300 group-hover/play:bg-[#2c2627]">
                        <Play size={28} className="fill-current ml-1" />
                      </div>
                      {/* Rippling pulse animation */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#b75f20]/50 animate-ping opacity-75 pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* Dynamic Glassmorphic CTA Overlay (Shown when video ends) */}
                {showCta && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2c2627]/85 backdrop-blur-md p-6 md:p-12 text-center text-white z-30 transition-all duration-500 animate-fade-in">
                    <div className="max-w-[400px]">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#b75f20]/20 text-[#b75f20] mb-4">
                        <ChessQueen size={24} />
                      </div>
                      <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-white mb-4 tracking-tight leading-tight">
                        Uncover the Collective
                      </h3>
                      <p className="text-[11px] md:text-xs text-white/80 mb-6 leading-relaxed">
                        Our strategy extends beyond the chessboard. Discover the
                        community of professionals, tournaments, and curated events
                        that make up The Knight Collective.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                          href="/about"
                          className="inline-flex items-center justify-center gap-2 bg-[#b75f20] text-white font-medium text-xs px-6 py-3 rounded hover:bg-[#b75f20]/90 transition-all duration-300 shadow-md w-full sm:w-auto"
                        >
                          About the Community <ArrowRight size={14} />
                        </Link>
                        <button
                          onClick={handleReplay}
                          className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-xs px-5 py-3 rounded hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                        >
                          <RotateCcw size={14} /> Replay
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="relative w-full h-full bg-[#2c2627]">
                <Image
                  src="/images/teen_images/side view of a black and asian teen playing chess.jpeg"
                  alt="Young Minds Playing Chess"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
