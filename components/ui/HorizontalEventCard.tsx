import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Event } from "@/lib/database.types";
import { cn } from "@/lib/utils";

function formatCardDateInfo(dateStr: string) {
  const date = new Date(dateStr);
  const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
  
  return { time };
}

interface HorizontalEventCardProps {
  event: Event;
  href?: string;
  badgeText?: string;
}

export function HorizontalEventCard({ event, href, badgeText = "UPCOMING EVENT" }: HorizontalEventCardProps) {
  const dateInfo = formatCardDateInfo(event.start_time);
  const cardHref = href || `/highlights/monthly-meetups`;

  return (
    <Link href={cardHref} className="group block w-full">
      <article className="flex flex-col md:flex-row w-full h-full md:h-[240px] rounded-2xl overflow-hidden bg-[#222222] border border-transparent transition-all duration-500 ease-tkc hover:border-[#E0B547]/40">
        
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#E0B547] mb-4">
            {badgeText}
          </p>
          <h3 className="font-display font-normal tracking-wide text-2xl md:text-[1.75rem] text-tkc-white mb-4 group-hover:text-[#E0B547] transition-colors duration-300">
            {event.title}
          </h3>
          <p className="font-body text-sm text-tkc-muted mb-6">
            At {event.location}
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-tkc-white rounded-full p-1 text-tkc-black">
              <Clock size={12} strokeWidth={3} />
            </div>
            <span className="font-body text-xs text-tkc-muted">
              {dateInfo.time} - {dateInfo.time /* Mocking end time for now */}
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[45%] h-[200px] md:h-full overflow-hidden shrink-0">
          <Image
            src={event.cover_image_url || "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 ease-tkc group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tkc-black/80 to-transparent" />
          
          <div className="absolute bottom-6 right-6">
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-[#E0B547] flex items-center gap-2 group-hover:brightness-125 transition-all">
              HIGHLIGHTS OF LAST MEETUP <span>→</span>
            </p>
          </div>
        </div>

      </article>
    </Link>
  );
}
