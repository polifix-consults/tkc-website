"use client";

import { useState, useEffect } from "react";
import { EventCard } from "./EventCard";
import type { Event } from "@/lib/database.types";

interface EventTabsProps {
  initialEvents: Event[];
}

export function EventTabs({ initialEvents }: EventTabsProps) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Filter events based on browser date
  const filteredEvents = initialEvents.filter((event) => {
    if (!event.event_date) return false;
    const eventDate = new Date(event.event_date);
    const referenceDate = currentDate || new Date(); // fallback to current server/client date during render

    if (activeTab === "upcoming") {
      return eventDate >= referenceDate;
    } else {
      return eventDate < referenceDate;
    }
  });

  // Sort events:
  // Upcoming: Ascending (soonest first)
  // Past: Descending (most recent first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const timeA = new Date(a.event_date!).getTime();
    const timeB = new Date(b.event_date!).getTime();
    return activeTab === "upcoming" ? timeA - timeB : timeB - timeA;
  });

  return (
    <div className="w-full">
      {/* Header Tab Layout */}
      <div className="flex flex-col items-center border-b border-black/10 pb-4 mb-12 gap-3 text-center">
        <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] tracking-tight">
          Events
        </h2>
        <div className="flex gap-8 text-sm font-semibold justify-center">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-4 relative transition-colors duration-200 ${
              activeTab === "upcoming"
                ? "text-[#2c2627]"
                : "text-[#2c2627]/50 hover:text-[#2c2627]/80"
            }`}
          >
            Upcoming
            {activeTab === "upcoming" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b75f20] rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-4 relative transition-colors duration-200 ${
              activeTab === "past"
                ? "text-[#2c2627]"
                : "text-[#2c2627]/50 hover:text-[#2c2627]/80"
            }`}
          >
            Past
            {activeTab === "past" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b75f20] rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Event Cards List */}
      <div className="flex flex-col gap-6">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              badgeText={
                activeTab === "upcoming"
                  ? index === 0
                    ? "FEATURED EVENT"
                    : "UPCOMING EVENT"
                  : "PAST EVENT"
              }
            />
          ))
        ) : (
          <div className="text-center py-16 border border-[#2c2627]/10 rounded-2xl bg-[#f2efe9]/40">
            <p className="text-[#2c2627]/60 font-medium">
              {activeTab === "upcoming"
                ? "No upcoming events at the moment. Please check back later!"
                : "No past events recorded yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
