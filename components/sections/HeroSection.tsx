import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white pt-32 lg:pt-40 pb-16 font-sans">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col max-w-[600px] z-10 pl-4 md:pl-8">
          <div
            className="flex items-center gap-2 mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#2c2627]" />
            <p className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#2c2627]">
              WELCOME TO TKC
            </p>
          </div>

          <h1
            className="animate-fade-up font-bold text-[4rem] md:text-[4.5rem] leading-[1.05] tracking-tight text-[#2c2627] mb-8"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            The Knights <br />
            <span className="italic font-normal text-[#b75f20] pr-2">
              Collective
            </span>
          </h1>

          <p
            className="animate-fade-up text-base md:text-lg text-[#2c2627]/90 leading-relaxed max-w-[480px] mb-12"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            A Chess community fostering strategy, connection, and thoughtful
            engagement, one piece at a time.
          </p>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
              className="inline-flex items-center justify-center bg-[#b75f20] text-white font-medium text-sm px-8 py-3.5 rounded hover:bg-[#2c2627] transition-all duration-300"
            >
              Join the Community
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2c2627] font-semibold text-sm hover:text-[#b75f20] transition-all duration-300"
            >
              Explore Strategy <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div
          className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-2xl md:rounded-l-3xl lg:rounded-[40px] ml-auto lg:translate-x-12 animate-fade-in group"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {/* THE LAYERED SHADOW (Background Card) */}
          <div className="absolute inset-0 bg-[#2c2627] rounded-2xl md:rounded-l-3xl lg:rounded-[40px] translate-x-3 translate-y-3 shadow-2xl z-0" />

          {/* MAIN IMAGE CONTAINER */}
          <div className="relative w-full h-full rounded-2xl md:rounded-l-3xl lg:rounded-[40px] overflow-hidden z-10 border border-[#f2efe9]/10">
            <Image
              src="/images/bIhero.jpeg"
              alt="The Knights Collective Strategy Session"
              fill
              className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* THE BLENDING LAYERS */}
            {/* 1. Color Grading Overlay */}
            <div className="absolute inset-0 bg-[#2c2627]/40 mix-blend-multiply" />

            {/* 2. Gradient/Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627]/80 via-transparent to-[#2c2627]/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
