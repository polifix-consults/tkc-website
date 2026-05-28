import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import type { Event } from "@/lib/database.types";
import { cn } from "@/lib/utils";

function formatCardDateInfo(dateStr: string | null) {
  if (!dateStr) return { time: "TBA", fullDate: "TBA" };
  const date = new Date(dateStr);
  const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "America/Toronto" }).toLowerCase();
  const fullDate = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Toronto" });
  return { time, fullDate };
}

interface EventCardProps {
  event: Event;
  href?: string;
  badgeText?: string;
}

export function EventCard({ event, href, badgeText = "UPCOMING EVENT" }: EventCardProps) {
  const dateInfo = formatCardDateInfo(event.date);
  const cardHref = href || `/events/${event.slug}`;

  return (
    <Link href={cardHref} className="relative group block w-full animate-fade-up font-sans">
      {/* OFFSET SHADOW */}
      <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
      
      <article className="relative z-10 flex flex-col md:flex-row w-full h-auto md:h-[270px] rounded-2xl overflow-hidden bg-white border border-[#2c2627]/10 transition-all duration-500">
        
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center min-w-0">
          <p className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#b75f20] mb-4 shrink-0">
            {badgeText}
          </p>
          <h3 className="font-bold tracking-wide text-2xl md:text-[1.75rem] text-[#2c2627] mb-2 group-hover:text-[#b75f20] transition-colors duration-300 line-clamp-1 md:line-clamp-2">
            {event.title}
          </h3>
          {event.short_description && (
            <p className="text-sm text-[#2c2627]/80 mb-4 line-clamp-2">
              {event.short_description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-auto w-full min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1 sm:max-w-[55%]">
              <MapPin size={14} className="text-[#b75f20] shrink-0" />
              <span className="font-medium text-xs text-[#2c2627]/70 truncate" title={event.location || "TBA"}>
                {event.location || "TBA"}
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0 shrink-0">
              <Clock size={14} className="text-[#b75f20] shrink-0" />
              <span className="font-medium text-xs text-[#2c2627]/70 truncate">
                {event.date_is_tbc ? "TBC" : `${dateInfo.fullDate} • ${dateInfo.time}`}
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[45%] h-[200px] md:h-full overflow-hidden shrink-0 bg-[#1A1A1A]">
          <Image
            src={event.cover_image_url || "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 ease-tkc group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2627]/80 to-transparent" />
          
          <div className="absolute bottom-6 right-6">
            <p className="font-semibold text-[10px] uppercase tracking-[0.15em] text-[#f2efe9] flex items-center gap-2 group-hover:text-[#b75f20] transition-all">
              VIEW DETAILS <span>→</span>
            </p>
          </div>
        </div>

        {/* TICKET NOTCHES & SEPARATORS */}
        {/* Desktop Layout (Vertical Tear-off Stub) */}
        <div className="absolute -top-[1px] right-[45%] translate-x-1/2 w-8 h-4 bg-white border-b border-l border-r border-[#2c2627]/10 rounded-b-full z-20 hidden md:block" />
        <div className="absolute -bottom-[1px] right-[45%] translate-x-1/2 w-8 h-4 bg-white border-t border-l border-r border-[#2c2627]/10 rounded-t-full z-20 hidden md:block" />
        <div className="absolute top-4 bottom-4 right-[45%] w-[1px] border-l-2 border-dashed border-[#2c2627]/15 z-20 hidden md:block" />

        {/* Mobile Layout (Horizontal Tear-off Stub) */}
        <div className="absolute bottom-[184px] -left-[1px] w-4 h-8 bg-white border-t border-b border-r border-[#2c2627]/10 rounded-r-full z-20 md:hidden" />
        <div className="absolute bottom-[184px] -right-[1px] w-4 h-8 bg-white border-t border-b border-l border-[#2c2627]/10 rounded-l-full z-20 md:hidden" />
        <div className="absolute left-4 right-4 bottom-[200px] h-[1px] border-t-2 border-dashed border-[#2c2627]/15 z-20 md:hidden" />

      </article>
    </Link>
  );
}
