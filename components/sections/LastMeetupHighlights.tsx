import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight, ImageIcon } from "lucide-react";
import type { EventWithMedia } from "@/lib/queries";
import { formatEventDate, getTimeAgo } from "@/lib/queries";

interface LastMeetupHighlightsProps {
  event: EventWithMedia | null;
}

export function LastMeetupHighlights({ event }: LastMeetupHighlightsProps) {
  if (!event) {
    return (
      <section className="py-20 border-t border-[#31412d]/50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f2efe9]/70">No past events to display yet.</p>
        </div>
      </section>
    );
  }

  const images =
    event.event_media?.filter((m) => m.media_type === "image") || [];
  const formattedDate = formatEventDate(event.start_time);
  const timeAgo = getTimeAgo(event.start_time);

  return (
    <section className="py-20 border-t border-[#31412d]/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#c49671] text-[#2c2627] text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6">
              Last Meetup
            </span>
            <h2 className="font-semibold tracking-wide text-4xl md:text-5xl text-[#f2efe9] mb-6">
              {event.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[#f2efe9]/80">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#c49671]" />
                <span className="text-sm">
                  {formattedDate.full} • {timeAgo}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#c49671]" />
                <span className="text-sm">{event.location}</span>
              </div>
            </div>
          </div>

          <Link
            href={`/highlights/${event.id}`}
            className="group inline-flex items-center gap-2 bg-transparent border border-[#c49671] text-[#c49671] hover:bg-[#c49671] hover:text-[#2c2627] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            View Full Gallery
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Dynamic Editorial Grid (Bento Box Style) */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Image 1: Large feature, spans 2 cols & 2 rows on desktop */}
            {images[0] && (
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#2c2627] rounded-xl h-[300px] md:h-full border border-[#31412d]/30">
                <Image
                  src={images[0].media_url}
                  alt={`${event.title} highlight 1`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#2c2627]/0 group-hover:bg-[#2c2627]/20 transition-colors duration-500" />
              </div>
            )}

            {/* Image 2: Medium top right, spans 2 cols & 1 row */}
            {images[1] && (
              <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-[#2c2627] rounded-xl h-[250px] md:h-full border border-[#31412d]/30">
                <Image
                  src={images[1].media_url}
                  alt={`${event.title} highlight 2`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#2c2627]/0 group-hover:bg-[#2c2627]/20 transition-colors duration-500" />
              </div>
            )}

            {/* Image 3: Small bottom middle, spans 1 col & 1 row */}
            {images[2] && (
              <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#2c2627] rounded-xl h-[250px] md:h-full border border-[#31412d]/30">
                <Image
                  src={images[2].media_url}
                  alt={`${event.title} highlight 3`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#2c2627]/0 group-hover:bg-[#2c2627]/20 transition-colors duration-500" />
              </div>
            )}

            {/* Image 4 or "More Photos" card: Small bottom right, spans 1 col & 1 row */}
            {images.length > 3 && (
              <Link
                href={`/highlights/${event.id}`}
                className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#2c2627] rounded-xl h-[250px] md:h-full flex flex-col items-center justify-center border border-[#31412d] hover:border-[#c49671] transition-all duration-300"
              >
                {images[3] && (
                  <Image
                    src={images[3].media_url}
                    alt={`${event.title} highlight 4`}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                )}
                <div className="relative z-10 text-center">
                  <p className="text-4xl text-[#c49671] font-semibold mb-2">
                    +{Math.max(images.length - 3, 1)}
                  </p>
                  <p className="text-sm font-medium text-[#f2efe9] flex items-center gap-2">
                    <ImageIcon size={14} /> More Photos
                  </p>
                </div>
              </Link>
            )}
          </div>
        ) : (
          <div className="mt-12 p-16 text-center bg-[#2c2627] rounded-xl border border-[#31412d]">
            <ImageIcon className="mx-auto text-[#f2efe9]/50 mb-4" size={32} />
            <p className="text-[#f2efe9]/70 text-sm">
              Photographs for this meetup are currently being processed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
