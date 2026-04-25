import type { Metadata } from "next";
import Image from "next/image";
import { HorizontalEventCard } from "@/components/ui/HorizontalEventCard";
import { getLastMeetup } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Event Archives | The Knights Collective",
  description:
    "Check out pictures and videos from past meetups and events of The Knights Collective.",
};

export const revalidate = 60; // revalidate every minute if not relying on client fetches completely

export default async function HighlightsPage() {
  const lastMeetup = await getLastMeetup();

  return (
    // Applied the dark secondary background (#2c2627) and enforced font-sans (Public Sans)
    <div className="bg-[#2c2627] min-h-screen pt-20 font-sans">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full max-w-[1400px] mx-auto rounded-[2rem] overflow-hidden mt-8 border border-[#31412d]/30">
        <Image
          src="/images/eventhh.jpeg"
          alt="Event Highlights"
          fill
          className="object-cover object-right-bottom ml-32 md:ml-64 scale-125"
          priority
        />
        {/* Adjusted gradients to strictly use the secondary brand color */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c2627]/90 via-[#2c2627]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627] via-transparent to-[#2c2627]/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
            <div className="max-w-[600px] animate-fade-up">
              <span className="inline-block bg-[#c49671] text-[#2c2627] text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6">
                Archives
              </span>
              <h1 className="font-semibold tracking-tight text-5xl md:text-7xl text-[#f2efe9] mb-6 leading-tight">
                Event{" "}
                <span className="font-normal italic text-[#c49671]">
                  Highlights
                </span>
              </h1>
              <p className="text-base text-[#f2efe9]/80 max-w-[400px] leading-relaxed">
                Check out pictures and videos from past meetups and events of
                our strategic chess circle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="max-w-[1000px] mx-auto px-4 md:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-semibold tracking-wide text-3xl text-[#f2efe9]">
            Latest Meetup
          </h2>
        </div>

        {lastMeetup ? (
          <>
            <div className="flex flex-col gap-6">
              <HorizontalEventCard
                key={lastMeetup.id}
                event={lastMeetup}
                href={`/highlights/${lastMeetup.id}`}
                badgeText="HIGHLIGHTS"
              />
            </div>
          </>
        ) : (
          <div className="text-center py-20 border border-[#31412d]/50 rounded-2xl bg-[#31412d]/5">
            <p className="text-[#f2efe9]/70">No past events recorded yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
