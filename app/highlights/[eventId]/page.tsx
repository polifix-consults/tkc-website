import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar, ArrowLeft } from "lucide-react";
import { getEventWithMedia, formatEventDate } from "@/lib/queries";
import { PhotoGallery } from "./PhotoGallery";

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventId: string }>;
}): Promise<Metadata> {
  const { eventId } = await params;
  const event = await getEventWithMedia(eventId);

  if (!event) {
    return { title: "Event Not Found" };
  }

  const date = new Date(event.start_time).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    title: event.title,
    description: `${event.title} at ${event.location} on ${date}. View the event gallery and highlights from The Knights Collective.`,
    openGraph: {
      title: `${event.title} | The Knights Collective`,
      description: `${event.title} at ${event.location} on ${date}.`,
      images: event.cover_image_url
        ? [
            {
              url: event.cover_image_url,
              width: 1200,
              height: 630,
              alt: event.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: `${event.title} — ${event.location}`,
      images: event.cover_image_url ? [event.cover_image_url] : [],
    },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = await getEventWithMedia(eventId);

  if (!event) {
    notFound();
  }

  const startDate = formatEventDate(event.start_time);
  const endDate = formatEventDate(event.end_time);
  const mediaCount = event.event_media?.length ?? 0;

  return (
    // Applied the dark secondary background (#2c2627) and enforced font-sans (Public Sans)
    <div className="pt-20 mt-[25rem] bg-[#2c2627] min-h-screen font-sans">
      {/* Event title overlay */}
      <section className="relative">
        <div className="absolute bottom-[14px] left-0 right-0 z-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c49671] mb-3">
              Event Highlight
            </p>
            <h1 className="font-semibold text-5xl md:text-6xl text-[#f2efe9] max-w-[800px] tracking-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Event Meta */}
      <section className="bg-[#31412d]/10 border-b border-[#31412d]/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center gap-8">
            {/* Date */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#c49671]/30 flex items-center justify-center flex-shrink-0 rounded-full">
                <Calendar size={14} className="text-[#c49671]" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#f2efe9]/50 mb-0.5">
                  Date
                </p>
                <p className="text-sm font-medium text-[#f2efe9]">
                  {startDate.weekday}, {startDate.full}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#c49671]/30 flex items-center justify-center flex-shrink-0 rounded-full">
                <Clock size={14} className="text-[#c49671]" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#f2efe9]/50 mb-0.5">
                  Time
                </p>
                <p className="text-sm font-medium text-[#f2efe9]">
                  {startDate.time} — {endDate.time}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#c49671]/30 flex items-center justify-center flex-shrink-0 rounded-full">
                <MapPin size={14} className="text-[#c49671]" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#f2efe9]/50 mb-0.5">
                  Location
                </p>
                <p className="text-sm font-medium text-[#f2efe9]">
                  {event.location}
                </p>
              </div>
            </div>

            {/* Media count */}
            {mediaCount > 0 && (
              <div className="ml-auto flex items-center gap-2">
                <span className="text-2xl text-[#c49671]/60">♞</span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#f2efe9]/50 mb-0.5">
                    Gallery
                  </p>
                  <p className="text-sm font-medium text-[#f2efe9]">
                    {mediaCount} photo{mediaCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {mediaCount > 0 ? (
            <>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c49671] mb-2">
                    Event Gallery
                  </p>
                  <h2 className="font-semibold text-3xl md:text-4xl text-[#f2efe9]">
                    Moments from the{" "}
                    <em className="text-[#c49671] font-normal italic">
                      Evening
                    </em>
                  </h2>
                </div>
                <span className="text-sm font-medium text-[#f2efe9]/50 hidden sm:block">
                  {String(mediaCount).padStart(2, "0")} frames
                </span>
              </div>

              {/* Standardized Divider instead of <GoldDivider /> */}
              <hr className="border-[#31412d]/50 mb-12" />

              <PhotoGallery media={event.event_media} />
            </>
          ) : (
            <div className="text-center py-24 bg-[#31412d]/5 rounded-2xl border border-[#31412d]/30">
              <span className="text-6xl text-[#c49671]/30 block mb-6">♟</span>
              <p className="text-2xl font-semibold text-[#f2efe9]/70 mb-2">
                Gallery coming soon
              </p>
              <p className="text-sm text-[#f2efe9]/40">
                Photos from this event will be added shortly.
              </p>
            </div>
          )}

          {/* Back link */}
          <div className="mt-16 pt-10 border-t border-[#31412d]/50">
            <Link
              href="/highlights"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#f2efe9]/60 hover:text-[#c49671] transition-colors duration-200 group"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Back to Archives
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
