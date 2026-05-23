"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Swords, 
  Castle, 
  Shield, 
  Trophy, 
  Crown, 
  Target, 
  Play, 
  RotateCcw, 
  ArrowRight 
} from "lucide-react";

export function StrategyVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section 
      id="strategy-video" 
      className="relative bg-[#fcfbf9] py-24 md:py-32 overflow-hidden border-b border-black/10 font-sans"
    >
      <div className="tkc-container max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b75f20]" />
            <p className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#b75f20]">
              Strategy In Motion
            </p>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2c2627] mb-6 tracking-tight">
            The Art of the Move
          </h2>
          <p className="text-sm md:text-base text-[#2c2627]/75 leading-relaxed">
            Delve into the strategic vision, intellect, and collaborative energy of The Knights Collective. Click play below to watch our story.
          </p>
        </div>

        {/* Video Player Container with Slant and Layers */}
        <div className="relative max-w-[850px] mx-auto w-full group rotate-1 hover:rotate-0 transition-transform duration-700 ease-in-out">
          
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

          {/* Underlay Shadow Card */}
          <div className="absolute inset-0 bg-[#2c2627] rounded-[2rem] md:rounded-[3rem] translate-x-3 translate-y-3 shadow-2xl z-0" />

          {/* Main Video Frame */}
          <div className="relative w-full aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#2c2627] z-10 shadow-lg">
            <video
              ref={videoRef}
              src="/videos/tkc intro.webm"
              poster="/images/relaxedex.jpeg"
              className="w-full h-full object-contain"
              onEnded={handleVideoEnded}
              onClick={isPlaying ? handlePause : handlePlay}
              controls={isPlaying && !showCta}
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
                <div className="max-w-[500px]">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#b75f20]/20 text-[#b75f20] mb-4">
                    <Crown size={24} />
                  </div>
                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 tracking-tight leading-tight">
                    Uncover the Collective
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 mb-8 leading-relaxed">
                    Our strategy extends beyond the chessboard. Discover the community of professionals, tournaments, and curated events that make up The Knight Club.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center gap-2 bg-[#b75f20] text-white font-medium text-sm px-8 py-3.5 rounded hover:bg-[#b75f20]/90 transition-all duration-300 shadow-md w-full sm:w-auto"
                    >
                      About the Club <ArrowRight size={16} />
                    </Link>
                    <button
                      onClick={handleReplay}
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-sm px-6 py-3.5 rounded hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                    >
                      <RotateCcw size={16} /> Replay
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
