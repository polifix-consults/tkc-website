"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { EventCard } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";
import type { Event } from "@/lib/database.types";

const PAGE_SIZE = 6;

interface HighlightsGridProps {
  initialEvents: Event[];
  initialCount: number;
}

export function HighlightsGrid({ initialEvents, initialCount }: HighlightsGridProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialEvents.length < initialCount);

  const loadMore = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .lte("start_time", new Date().toISOString())
        .order("start_time", { ascending: false })
        .range(events.length, events.length + PAGE_SIZE - 1);

      if (error) throw error;

      const newEvents = data ?? [];
      const updated = [...events, ...newEvents];
      setEvents(updated);
      setHasMore(newEvents.length === PAGE_SIZE && updated.length < initialCount);
    } catch (err) {
      console.error("Load more error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="mt-14 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={loadMore}
            loading={loading}
            className="min-w-[220px]"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Loading Archives...
              </>
            ) : (
              "Load More Archives"
            )}
          </Button>
        </div>
      )}

      {!hasMore && events.length > PAGE_SIZE && (
        <div className="mt-14 text-center">
          <p className="font-body text-caption uppercase tracking-[0.15em] text-tkc-muted/50">
            — All archives loaded —
          </p>
        </div>
      )}
    </div>
  );
}
