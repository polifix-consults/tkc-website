export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
          title: string;
          location: string;
          start_time: string;
          end_time: string;
          cover_image_url: string;
        };
        Insert: {
          id?: string;
          title: string;
          location: string;
          start_time: string;
          end_time: string;
          cover_image_url: string;
        };
        Update: Partial<Database["public"]["Tables"]["events"]["Insert"]>;
      };
      event_media: {
        Row: {
          id: string;
          event_id: string;
          media_url: string;
          media_type: string;
          sort_order: number;
        };
        Insert: {
          id?: string;
          event_id: string;
          media_url: string;
          media_type: string;
          sort_order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["event_media"]["Insert"]>;
      };
      club_registrations: {
        Row: {
          id: string;
          full_name: string;
          profession: string;
          experience_level: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          profession: string;
          experience_level: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["club_registrations"]["Insert"]>;
      };
    };
  };
}

export type Event = Database["public"]["Tables"]["events"]["Row"];
export type EventMedia = Database["public"]["Tables"]["event_media"]["Row"];
export type ClubRegistration = Database["public"]["Tables"]["club_registrations"]["Row"];
