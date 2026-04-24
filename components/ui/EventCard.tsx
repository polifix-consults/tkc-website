import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import type { Event } from "@/lib/database.types";
import { cn } from "@/lib/utils";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    year: date.getFullYear(),
    time: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    full: date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

interface EventCardProps {
  event: Event;
  variant?: "default" | "highlight";
  href?: string;
}

export function EventCard({ event, variant = "default", href }: EventCardProps) {
  const date = formatDate(event.start_time);
  const cardHref = href || `/highlights/${event.id}`;

  return (
    <Link href={cardHref} className="group block">
      <article
        className={cn(
          "relative overflow-hidden bg-tkc-surface border border-tkc-border rounded-tkc",
          "transition-all duration-500 ease-tkc",
          "hover:border-tkc-gold/40 hover:shadow-gold hover:-translate-y-1"
        )}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={event.cover_image_url || "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 ease-tkc group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-card" />

          {/* Date badge */}
          <div className="absolute top-4 left-4 bg-tkc-black/80 border border-tkc-border backdrop-blur-sm px-3 py-2 text-center min-w-[52px]">
            <p className="font-display text-2xl font-normal text-tkc-gold leading-none">
              {date.day}
            </p>
            <p className="font-body text-[9px] uppercase tracking-[0.15em] text-tkc-muted mt-0.5">
              {date.month}
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-tkc-gold/0 border border-tkc-gold/0 flex items-center justify-center transition-all duration-300 group-hover:bg-tkc-gold/10 group-hover:border-tkc-gold/40">
            <ArrowUpRight
              size={14}
              className="text-tkc-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-display-sm text-tkc-white mb-3 group-hover:text-tkc-cream transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-tkc-gold flex-shrink-0" />
              <span className="font-body text-body-sm text-tkc-muted truncate">
                {event.location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-tkc-gold flex-shrink-0" />
              <span className="font-body text-body-sm text-tkc-muted">
                {date.time}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-tkc-border">
            <span className="font-body text-caption uppercase tracking-[0.12em] text-tkc-gold/70 group-hover:text-tkc-gold transition-colors duration-300">
              View Details →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
