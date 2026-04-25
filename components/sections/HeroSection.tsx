import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    // The primary background color is now #b75f20. 
    // We are assuming Public Sans is configured as your default sans font in Tailwind.
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#b75f20] pt-32 lg:pt-40 pb-16 font-sans">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col max-w-[600px] z-10 pl-4 md:pl-8">
          <div className="flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            {/* Replaced the arbitrary gold with the approved #f2efe9 accent color[cite: 44, 47]. */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#f2efe9]" />
            <p className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#f2efe9]">
              The Knights Collective
            </p>
          </div>

          <h1 
            className="animate-fade-up font-bold text-[4rem] md:text-[4.5rem] leading-[1.05] tracking-tight text-[#f2efe9] mb-8"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Strategic Thinking & <br />
            {/* Highlight text uses the secondary #2c2627 color to contrast the primary background[cite: 41, 42]. */}
            <span className="italic font-normal text-[#2c2627] pr-2">Professional Networking.</span>
          </h1>

          <p 
            className="animate-fade-up text-base md:text-lg text-[#f2efe9]/90 leading-relaxed max-w-[480px] mb-12"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {/* Copy updated to accurately reflect the brand's mission[cite: 75]. */}
            A strategic chess circle designed to bring together professionals who value intellect, innovation, and strategic thinking.
          </p>

          <div 
            className="animate-fade-up flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Link
              href="/join"
              // Primary CTA utilizes the #2c2627 secondary color[cite: 41].
              className="inline-flex items-center justify-center bg-[#2c2627] text-[#f2efe9] font-medium text-sm px-8 py-3.5 rounded hover:bg-[#31412d] transition-all duration-300"
            >
              Join the Circle
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2c2627] font-semibold text-sm hover:text-[#f2efe9] transition-all duration-300"
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
            alt="The Knights Collective Chess"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlays adjusted to use the brand's dark secondary color instead of a generic black[cite: 41, 42]. */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627]/60 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
}