
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar, ArrowLeft } from "lucide-react";
import { getEventWithMedia, formatEventDate } from "@/lib/queries";
import { PhotoGallery } from "./PhotoGallery";
import { GoldDivider } from "@/components/ui/Typography";

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
    description: `${event.title} at ${event.location} on ${date}. View the event gallery and highlights from The Knight Club.`,
    openGraph: {
      title: `${event.title} | The Knight Club`,
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
    <div className="pt-20 mt-[20rem]">
      {/* Back Link */}
      <div className="tkc-container mb-8">
        <Link
          href="/archives"
          className="flex items-center gap-2 text-tkc-gold hover:text-tkc-gold/80"
        >
          
        </Link>
      </div>

      {/* Event title overlay */}
      <section className="relative">
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="tkc-container pb-10">
            <p className="font-body text-caption uppercase tracking-[0.2em] text-tkc-gold mb-3">
              Event Highlight
            </p>
            <h1 className="font-display font-normal text-display-lg text-tkc-white max-w-[800px]">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Event Meta */}
      <section className="bg-tkc-dark border-b border-tkc-border">
        <div className="tkc-container py-8">
          <div className="flex flex-wrap items-center gap-8">
            {/* Date */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-tkc-gold/30 flex items-center justify-center flex-shrink-0">
                <Calendar size={14} className="text-tkc-gold" />
              </div>
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.15em] text-tkc-muted mb-0.5">
                  Date
                </p>
                <p className="font-body text-body-sm text-tkc-white">
                  {startDate.weekday}, {startDate.full}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-tkc-gold/30 flex items-center justify-center flex-shrink-0">
                <Clock size={14} className="text-tkc-gold" />
              </div>
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.15em] text-tkc-muted mb-0.5">
                  Time
                </p>
                <p className="font-body text-body-sm text-tkc-white">
                  {startDate.time} — {endDate.time}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-tkc-gold/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-tkc-gold" />
              </div>
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.15em] text-tkc-muted mb-0.5">
                  Location
                </p>
                <p className="font-body text-body-sm text-tkc-white">
                  {event.location}
                </p>
              </div>
            </div>

            {/* Media count */}
            {mediaCount > 0 && (
              <div className="ml-auto flex items-center gap-2">
                <span className="font-display text-2xl text-tkc-gold/40">♞</span>
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.15em] text-tkc-muted mb-0.5">
                    Gallery
                  </p>
                  <p className="font-body text-body-sm text-tkc-white">
                    {mediaCount} photo{mediaCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="tkc-section bg-tkc-black">
        <div className="tkc-container">
          {mediaCount > 0 ? (
            <>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <p className="font-body text-caption uppercase tracking-[0.2em] text-tkc-gold mb-2">
                    Event Gallery
                  </p>
                  <h2 className="font-display font-normal text-display-md text-tkc-white">
                    Moments from the{" "}
                    <em className="gold-text not-italic">Evening</em>
                  </h2>
                </div>
                <span className="font-mono text-body-sm text-tkc-muted hidden sm:block">
                  {String(mediaCount).padStart(2, "0")} frames
                </span>
              </div>

              <GoldDivider className="mb-12" />

              <PhotoGallery media={event.event_media} />
            </>
          ) : (
            <div className="text-center py-24">
              <span className="font-display text-6xl text-tkc-gold/20 block mb-6">
                ♟
              </span>
              <p className="font-display text-display-sm text-tkc-muted mb-2">
                Gallery coming soon
              </p>
              <p className="font-body text-body-sm text-tkc-muted/60">
                Photos from this event will be added shortly.
              </p>
            </div>
          )}

          {/* Back link */}
          <div className="mt-16 pt-10 border-t border-tkc-border">
            <Link
              href="/highlights"
              className="inline-flex items-center gap-3 font-body text-caption uppercase tracking-[0.15em] text-tkc-muted hover:text-tkc-gold transition-colors duration-200 group"
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

