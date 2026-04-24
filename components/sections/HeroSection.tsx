import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-tkc-black pt-32 lg:pt-40 pb-16">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col max-w-[600px] z-10 pl-4 md:pl-8">
          <div className="flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E0B547]" />
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#E0B547]">
              THE TACTILE MACHINE
            </p>
          </div>

          <h1 
            className="animate-fade-up font-display font-normal text-[5rem] md:text-[5.5rem] leading-[1.05] tracking-tight text-tkc-white mb-8"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Master the <br />
            <span className="italic font-normal text-[#E0B547] pr-2">Quiet Craft.</span>
          </h1>

          <p 
            className="animate-fade-up font-body text-base md:text-lg text-tkc-muted leading-relaxed max-w-[480px] mb-12"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Step into the study of grandmasters. Experience chess not as a game, but as a prestigious pursuit of strategy and intellect.
          </p>

          <div 
            className="animate-fade-up flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-[#E0B547] text-tkc-black font-body font-medium text-sm px-8 py-3.5 rounded hover:brightness-110 transition-all duration-300"
            >
              Join the Club
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-tkc-white font-body text-sm hover:text-[#E0B547] transition-all duration-300"
            >
              Explore Strategy <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div 
          className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-2xl md:rounded-l-3xl lg:rounded-[40px] overflow-hidden ml-auto lg:translate-x-12 animate-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Image
            src="/images/hero_new.png"
            alt="The Black Knight"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-tkc-black/60 via-transparent to-tkc-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkc-black/40 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
}
