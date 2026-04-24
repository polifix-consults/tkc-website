import { createClient } from "./supabase/server";
import type { Event, EventMedia } from "./database.types";

/**
 * EventWithMedia: An event with its associated media items
 */
export interface EventWithMedia extends Event {
  event_media: EventMedia[];
}

/**
 * Fetch the most recent past event with all its associated media
 * @returns The most recent completed event or null if none exist
 */
export async function getLastMeetup(): Promise<EventWithMedia | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("events")
      .select(
        `
        *,
        event_media (
          id,
          event_id,
          media_url,
          media_type,
          sort_order
        )
      `,
      )
      .lt("start_time", new Date().toISOString()) // past events only
      .order("start_time", { ascending: false }) // most recent first
      .order("sort_order", { referencedTable: "event_media", ascending: true })
      .limit(1)
      .single();

    if (error || !data) {
      console.error("Error fetching last meetup:", error?.message);
      return null;
    }

    return data as EventWithMedia;
  } catch (error) {
    console.error("Error in getLastMeetup:", error);
    return null;
  }
}

/**
 * Fetch multiple past events with pagination support
 * @param limit Number of events to fetch
 * @param offset Number of events to skip (for pagination)
 * @returns Array of past events ordered by most recent first
 */
export async function getPastEvents(
  limit: number = 6,
  offset: number = 0,
): Promise<Event[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .lt("start_time", new Date().toISOString()) // past events only
      .order("start_time", { ascending: false }) // most recent first
      .range(offset, offset + limit - 1);

    if (error) {
      console.error("Error fetching past events:", error.message);
      return [];
    }

    return data ?? [];
  } catch (error) {
    console.error("Error in getPastEvents:", error);
    return [];
  }
}

/**
 * Fetch upcoming events
 * @param limit Number of events to fetch
 * @returns Array of upcoming events ordered by soonest first
 */
export async function getUpcomingEvents(limit: number = 6): Promise<Event[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .gt("start_time", new Date().toISOString()) // future events only
      .order("start_time", { ascending: true }) // soonest first
      .limit(limit);

    if (error) {
      console.error("Error fetching upcoming events:", error.message);
      return [];
    }

    return data ?? [];
  } catch (error) {
    console.error("Error in getUpcomingEvents:", error);
    return [];
  }
}

/**
 * Fetch a specific event by ID with all its media
 * @param eventId The UUID of the event
 * @returns The event with all associated media or null if not found
 */
export async function getEventWithMedia(
  eventId: string,
): Promise<EventWithMedia | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("events")
      .select(
        `
        *,
        event_media (
          id,
          event_id,
          media_url,
          media_type,
          sort_order
        )
      `,
      )
      .eq("id", eventId)
      .order("sort_order", { referencedTable: "event_media", ascending: true })
      .single();

    if (error || !data) {
      console.error("Error fetching event with media:", error?.message);
      return null;
    }

    return data as EventWithMedia;
  } catch (error) {
    console.error("Error in getEventWithMedia:", error);
    return null;
  }
}

/**
 * Format event date in a human-readable way
 * @param dateStr ISO 8601 date string
 * @returns Object with formatted date parts
 */
export function formatEventDate(dateStr: string) {
  const date = new Date(dateStr);

  return {
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    full: date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    short: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    monthYear: date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
  };
}

/**
 * Check if an event is happening (between start and end time)
 * @param startTime ISO 8601 start time
 * @param endTime ISO 8601 end time
 * @returns true if event is currently happening
 */
export function isEventHappening(startTime: string, endTime: string): boolean {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);

  return now >= start && now <= end;
}

/**
 * Calculate how long ago an event happened
 * @param dateStr ISO 8601 date string
 * @returns Human-readable time difference (e.g., "2 weeks ago")
 */
export function getTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 604800)} weeks ago`;

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
