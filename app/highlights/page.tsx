import type { Metadata } from "next";
import Image from "next/image";
import { HorizontalEventCard } from "@/components/ui/HorizontalEventCard";
import { getLastMeetup } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Event Highlights",
  description:
    "Check out pictures and videos from our last meetups and events.",
};

export const revalidate = 60; // revalidate every minute if not relying on client fetches completely

export default async function HighlightsPage() {
  const lastMeetup = await getLastMeetup();

  return (
    <div className="bg-tkc-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full max-w-[1400px] mx-auto rounded-[2rem] overflow-hidden mt-8">
        <Image
          src="/images/eventhh.jpeg" // Close up of gold chess piece
          alt="Event Highlights"
          fill
          className="object-cover object-right-bottom ml-32 md:ml-64 scale-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tkc-black/90 via-tkc-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-tkc-black via-transparent to-tkc-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="tkc-container w-full">
            <div className="max-w-[600px] animate-fade-up">
              <span className="inline-block bg-[#E0B547] text-tkc-black font-body text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6">
                MEETUPS
              </span>
              <h1 className="font-display font-normal tracking-tight text-5xl md:text-7xl text-tkc-white mb-6 leading-tight">
                Event <span className="font-semibold italic">Highlights</span>
              </h1>
              <p className="font-body text-base text-tkc-muted/90 max-w-[400px]">
                Check out pictures and videos from our last meetups and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="tkc-container max-w-[1000px] py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display font-normal tracking-wide text-3xl text-tkc-white">
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
          <div className="text-center py-20 border border-tkc-border rounded-2xl">
            <p className="font-body text-tkc-muted">
              No past events recorded yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
