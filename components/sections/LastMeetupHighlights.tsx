

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
      <section className="py-20 border-t border-tkc-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#a1a1aa] font-body">No past events to display yet.</p>
        </div>
      </section>
    );
  }

  const images = event.event_media?.filter((m) => m.media_type === "image") || [];
  const formattedDate = formatEventDate(event.start_time);
  const timeAgo = getTimeAgo(event.start_time);

  return (
    <section className="py-20 border-t border-tkc-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#E0B547] text-[#121212] font-body text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6">
              Last Meetup
            </span>
            <h2 className="font-display font-normal tracking-wide text-4xl md:text-5xl text-white mb-6">
              {event.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[#a1a1aa] font-body">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#E0B547]" />
                <span className="text-sm">
                  {formattedDate.full} • {timeAgo}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#E0B547]" />
                <span className="text-sm">{event.location}</span>
              </div>
            </div>
          </div>
          
          <Link
            href={`/highlights/${event.id}`}
            className="group inline-flex items-center gap-2 bg-transparent border border-[#E0B547] text-[#E0B547] hover:bg-[#E0B547] hover:text-[#121212] font-body font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            View Full Gallery 
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Dynamic Editorial Grid (Bento Box Style) */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            {/* Image 1: Large feature, spans 2 cols & 2 rows on desktop */}
            {images[0] && (
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#1a1a1a] rounded-xl h-[300px] md:h-full">
                <Image
                  src={images[0].media_url}
                  alt={`${event.title} highlight 1`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            )}

            {/* Image 2: Medium top right, spans 2 cols & 1 row */}
            {images[1] && (
              <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-[#1a1a1a] rounded-xl h-[250px] md:h-full">
                <Image
                  src={images[1].media_url}
                  alt={`${event.title} highlight 2`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            )}

            {/* Image 3: Small bottom middle, spans 1 col & 1 row */}
            {images[2] && (
              <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#1a1a1a] rounded-xl h-[250px] md:h-full">
                <Image
                  src={images[2].media_url}
                  alt={`${event.title} highlight 3`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            )}

            {/* Image 4 or "More Photos" card: Small bottom right, spans 1 col & 1 row */}
            {images.length > 3 && (
              <Link
                href={`/highlights/${event.id}`}
                className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#1a1a1a] rounded-xl h-[250px] md:h-full flex flex-col items-center justify-center border border-[#1a1a1a] hover:border-[#E0B547] transition-all duration-300"
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
                  <p className="font-display text-4xl text-[#E0B547] mb-2">
                    +{Math.max(images.length - 3, 1)}
                  </p>
                  <p className="font-body text-sm font-medium text-white flex items-center gap-2">
                    <ImageIcon size={14} /> More Photos
                  </p>
                </div>
              </Link>
            )}
          </div>
        ) : (
          <div className="mt-12 p-16 text-center bg-[#1a1a1a] rounded-xl border border-white/5">
            <ImageIcon className="mx-auto text-[#a1a1aa] mb-4 opacity-50" size={32} />
            <p className="text-[#a1a1aa] font-body text-sm">
              Photographs for this meetup are currently being processed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}