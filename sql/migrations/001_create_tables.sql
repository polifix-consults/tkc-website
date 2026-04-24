-- ============================================================================
-- The Knight Club - Database Schema Migration
-- ============================================================================
-- This migration creates the core tables for The Knight Club website:
-- 1. events: Stores meetup and event information
-- 2. event_media: Stores gallery images/videos for events
-- 3. club_registrations: Stores member registration data
-- ============================================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- TABLE: events
-- Purpose: Stores all meetup and event information
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  cover_image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  -- Index for common queries
  CONSTRAINT valid_time CHECK (end_time > start_time)
);

CREATE INDEX idx_events_start_time ON public.events(start_time DESC);
CREATE INDEX idx_events_created_at ON public.events(created_at DESC);

-- ============================================================================
-- TABLE: event_media
-- Purpose: Stores gallery media (images/videos) for each event
-- FK to: events table
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.event_media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT valid_media_url CHECK (char_length(media_url) > 0)
);

CREATE INDEX idx_event_media_event_id ON public.event_media(event_id);
CREATE INDEX idx_event_media_sort_order ON public.event_media(event_id, sort_order ASC);

-- ============================================================================
-- TABLE: club_registrations
-- Purpose: Stores member registrations and join requests
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.club_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT,
  profession TEXT NOT NULL,
  experience_level TEXT NOT NULL CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT valid_name CHECK (char_length(full_name) > 0),
  CONSTRAINT valid_profession CHECK (char_length(profession) > 0)
);

CREATE INDEX idx_registrations_created_at ON public.club_registrations(created_at DESC);

-- ============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================================================
-- Events table - publicly readable
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "events_public_read" ON public.events
  FOR SELECT USING (true);

-- Event media table - publicly readable
ALTER TABLE public.event_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "event_media_public_read" ON public.event_media
  FOR SELECT USING (true);

-- Club registrations - only insertable (no direct reads)
ALTER TABLE public.club_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "registrations_insert_only" ON public.club_registrations
  FOR INSERT WITH CHECK (true);

-- ============================================================================
-- SAMPLE DATA (for development/testing)
-- ============================================================================
-- Uncomment this section to populate with sample data

-- INSERT INTO public.events (title, location, description, start_time, end_time, cover_image_url)
-- VALUES (
--   'Monthly Meetup: Chess Strategy 101',
--   'Room CE-1, Regina Public Library',
--   'Join us for a deep dive into fundamental chess strategies and tactics.',
--   NOW() - INTERVAL '7 days',
--   NOW() - INTERVAL '7 days' + INTERVAL '2 hours',
--   'https://images.unsplash.com/photo-1570716662a2d5cb386c7b2b5f5f5f5f5f5f5f5f?q=80&w=1500'
-- );

-- INSERT INTO public.events (title, location, description, start_time, end_time, cover_image_url)
-- VALUES (
--   'Upcoming: Monthly Meetup - Opening Theory',
--   'Room CE-1, Regina Public Library',
--   'Explore the most popular chess openings and their strategic importance.',
--   NOW() + INTERVAL '7 days',
--   NOW() + INTERVAL '7 days' + INTERVAL '2 hours',
--   'https://images.unsplash.com/photo-1609710228159-0da9b7ebb9be?q=80&w=1500'
-- );

-- ============================================================================
-- COMMENTS FOR DOCUMENTATION
-- ============================================================================
COMMENT ON TABLE public.events IS 'Stores all meetup and event information for The Knight Club';
COMMENT ON COLUMN public.events.cover_image_url IS 'Thumbnail image URL for event card display (from Supabase Storage)';
COMMENT ON COLUMN public.events.start_time IS 'Event start time in UTC timezone';

COMMENT ON TABLE public.event_media IS 'Gallery media (images/videos) associated with each event';
COMMENT ON COLUMN public.event_media.sort_order IS 'Display order in the photo gallery (0-indexed)';

COMMENT ON TABLE public.club_registrations IS 'Member registrations and join requests';
COMMENT ON COLUMN public.club_registrations.experience_level IS 'Chess experience level: beginner, intermediate, or advanced';
