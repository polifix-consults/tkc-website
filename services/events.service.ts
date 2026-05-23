import { supabase } from "@/lib/supabaseClient";
import type { Event } from "@/lib/database.types";

export const eventsService = {
  /**
   * Fetch the featured event
   */
  async getFeaturedEvent(): Promise<Event | null> {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_featured", true)
        .order("event_date", { ascending: true })
        .limit(1)
        .single();

      if (error) {
        if (error.code !== "PGRST116") { // 0 rows returned
          console.error("Error fetching featured event:", error.message);
        }
        return null;
      }
      return data;
    } catch (error) {
      console.error("Service error in getFeaturedEvent:", error);
      return null;
    }
  },

  /**
   * Fetch upcoming events (excluding past events)
   */
  async getUpcomingEvents(limit: number = 10): Promise<Event[]> {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "upcoming")
        // Alternatively, use event_date > now():
        // .gt("event_date", new Date().toISOString())
        .order("event_date", { ascending: true })
        .limit(limit);

      if (error) {
        console.error("Error fetching upcoming events:", error.message);
        return [];
      }
      return data ?? [];
    } catch (error) {
      console.error("Service error in getUpcomingEvents:", error);
      return [];
    }
  },

  /**
   * Fetch a specific event by its slug
   */
  async getEventBySlug(slug: string): Promise<Event | null> {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching event by slug:", error.message);
        return null;
      }
      return data;
    } catch (error) {
      console.error("Service error in getEventBySlug:", error);
      return null;
    }
  },

  /**
   * Fetch past events
   */
  async getPastEvents(limit: number = 6): Promise<Event[]> {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "past")
        .order("event_date", { ascending: false })
        .limit(limit);

      if (error) {
        console.error("Error fetching past events:", error.message);
        return [];
      }
      return data ?? [];
    } catch (error) {
      console.error("Service error in getPastEvents:", error);
      return [];
    }
  },

  /**
   * Fetch all events for tab filtering
   */
  async getAllEvents(): Promise<Event[]> {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: false });

      if (error) {
        console.error("Error fetching all events:", error.message);
        return [];
      }
      return data ?? [];
    } catch (error) {
      console.error("Service error in getAllEvents:", error);
      return [];
    }
  }
};
