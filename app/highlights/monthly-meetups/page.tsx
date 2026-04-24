import type { Metadata } from "next";
import Image from "next/image";
import { getLastMeetup } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Monthly Meetups Highlights",
};

export default async function MeetupHighlightsPage() {
  const lastMeetup = await getLastMeetup();
  const images =
    lastMeetup?.event_media
      ?.filter((m) => m.media_type === "image")
      ?.map((m, idx) => ({
        src: m.media_url,
        span:
          idx % 4 === 0
            ? "col-span-12 md:col-span-5"
            : idx % 4 === 1
              ? "col-span-12 md:col-span-7"
              : idx % 4 === 2
                ? "col-span-12 md:col-span-7"
                : "col-span-12 md:col-span-5",
      })) ?? [];

  return (
    <div className="bg-tkc-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full max-w-[1400px] mx-auto rounded-[2rem] overflow-hidden mt-8">
        <Image
          src={
            lastMeetup?.cover_image_url ||
            "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1600"
          }
          alt="Monthly Meetups"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tkc-black/90 via-tkc-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-tkc-black via-transparent to-tkc-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="tkc-container w-full">
            <div className="max-w-[600px] animate-fade-up">
              <span className="inline-block bg-[#E0B547] text-tkc-black font-body text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6">
                MEETUP
              </span>
              <h1 className="font-display font-normal tracking-tight text-5xl md:text-7xl text-tkc-white mb-6 leading-tight">
                Monthly{" "}
                <span className="font-semibold italic pb-2">Meetups</span>
              </h1>
              <p className="font-body text-base text-tkc-muted/90 max-w-[400px]">
                Check out pictures and videos from our last meetups and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="tkc-container max-w-[1200px] py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display font-normal tracking-wide text-3xl text-tkc-white">
            Highlights
          </h2>
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-12 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={`Highlight ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-tkc-border/40 pointer-events-none rounded-2xl transition-colors duration-300 group-hover:border-[#E0B547]/30" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-tkc-border rounded-2xl">
            <p className="font-body text-tkc-muted">
              No meetup highlights available yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
