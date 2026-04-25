import Image from "next/image";
import { Play } from "lucide-react";

export function AtelierSection() {
  const videos = [
    {
      num: "01",
      title: "The Opening Insight",
      desc: "Guest speakers and senior professionals share strategic leadership tips to kick off the session.",
    },
    {
      num: "02",
      title: "Strategic Thinking in Practice",
      desc: "Using the mechanics of chess as a tool to sharpen analytical skills and decision-making.",
    },
    {
      num: "03",
      title: "Networking & Reflection",
      desc: "Extracting lessons from the game while fostering connections among thought leaders and innovators.",
    },
  ];

  return (
    // Applying the dark secondary background (#2c2627) and enforcing font-sans (Public Sans)
    <section className="bg-[#2c2627] pt-24 pb-0 font-sans border-t border-[#31412d]/50">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-stretch h-full mx-auto">
        {/* Left Content */}
        <div className="bg-[#31412d]/10 p-8 md:p-16 lg:pr-24 flex flex-col justify-center min-h-[500px]">
          <p className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#c49671] mb-12">
            Monthly Insights
          </p>

          <div className="flex flex-col gap-10">
            {videos.map((vid) => (
              <div
                key={vid.num}
                className="group flex items-start justify-between cursor-pointer animate-fade-up relative"
              >
                <div className="flex items-start gap-8 pr-8">
                  <span className="text-sm text-[#f2efe9]/50 mt-1 w-6">
                    {vid.num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl text-[#f2efe9] mb-2 group-hover:text-[#c49671] transition-colors duration-300">
                      {vid.title}
                    </h4>
                    <p className="text-sm text-[#f2efe9]/70 max-w-[320px] leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full border border-[#c49671]/50 flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:bg-[#c49671]/10 group-hover:border-[#c49671]">
                  <Play
                    size={10}
                    className="text-[#c49671] ml-0.5"
                    fill="currentColor"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[400px] lg:min-h-[600px] w-full border-l border-[#31412d]/30">
          <Image
            src="/images/MonthlyInsight.jpeg"
            alt="Professionals engaging over a chess board"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 rounded-t-3xl lg:rounded-t-none lg:rounded-tl-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627]/80 lg:from-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c2627]/90 lg:from-[#2c2627]/80 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
