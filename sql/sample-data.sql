-- ============================================================================
-- The Knight Club - Sample Data
-- ============================================================================
-- Use this script to populate your database with test/demo data
-- Replace image URLs with your actual Supabase Storage URLs
-- ============================================================================

-- ============================================================================
-- Sample Events
-- ============================================================================

-- Past Event: Monthly Meetup (2 weeks ago)
INSERT INTO public.events (
  title, 
  location, 
  description, 
  start_time, 
  end_time, 
  cover_image_url
) VALUES (
  'Monthly Meetup: Chess Strategy 101',
  'Room CE-1, Regina Public Library',
  'An engaging session exploring fundamental chess strategies, tactical patterns, and game analysis with members of all levels.',
  NOW() - INTERVAL '14 days',
  NOW() - INTERVAL '14 days' + INTERVAL '2 hours',
  'https://your-supabase-url.supabase.co/storage/v1/object/public/event-covers/2025/jan-meetup.jpg'
);

-- Past Event: Atelier Session (3 weeks ago)
INSERT INTO public.events (
  title, 
  location, 
  description, 
  start_time, 
  end_time, 
  cover_image_url
) VALUES (
  'Winter Atelier: Advanced Endgames',
  'Room CE-1, Regina Public Library',
  'An intensive masterclass focusing on endgame techniques and practical problem-solving.',
  NOW() - INTERVAL '21 days',
  NOW() - INTERVAL '21 days' + INTERVAL '3 hours',
  'https://your-supabase-url.supabase.co/storage/v1/object/public/event-covers/2025/jan-atelier.jpg'
);

-- Upcoming Event: Monthly Meetup (Next week)
INSERT INTO public.events (
  title, 
  location, 
  description, 
  start_time, 
  end_time, 
  cover_image_url
) VALUES (
  'Monthly Meetup: Opening Theory Deep Dive',
  'Room CE-1, Regina Public Library',
  'Explore the most popular chess openings, their strategic importance, and how to choose the right opening for your play style.',
  NOW() + INTERVAL '7 days',
  NOW() + INTERVAL '7 days' + INTERVAL '2 hours',
  'https://your-supabase-url.supabase.co/storage/v1/object/public/event-covers/2025/feb-meetup.jpg'
);

-- Upcoming Event: Tournament (Next month)
INSERT INTO public.events (
  title, 
  location, 
  description, 
  start_time, 
  end_time, 
  cover_image_url
) VALUES (
  'The Knight Club Tournament 2025',
  'Room CE-1, Regina Public Library',
  'An exciting tournament featuring members of all skill levels competing in a series of rapid and blitz games.',
  NOW() + INTERVAL '30 days',
  NOW() + INTERVAL '30 days' + INTERVAL '5 hours',
  'https://your-supabase-url.supabase.co/storage/v1/object/public/event-covers/2025/tournament.jpg'
);

-- ============================================================================
-- Sample Event Media (Gallery images for the past meetup)
-- ============================================================================
-- Get the first (most recent past) event's ID:
-- SELECT id FROM events WHERE start_time < NOW() ORDER BY start_time DESC LIMIT 1;

-- Then insert media for that event (replace EVENT_ID with the actual UUID):
-- INSERT INTO public.event_media (event_id, media_url, media_type, sort_order) VALUES
-- ('EVENT_ID', 'https://your-supabase-url.supabase.co/storage/v1/object/public/event-galleries/event-123/img_001.jpg', 'image', 0),
-- ('EVENT_ID', 'https://your-supabase-url.supabase.co/storage/v1/object/public/event-galleries/event-123/img_002.jpg', 'image', 1),
-- ('EVENT_ID', 'https://your-supabase-url.supabase.co/storage/v1/object/public/event-galleries/event-123/img_003.jpg', 'image', 2),
-- ('EVENT_ID', 'https://your-supabase-url.supabase.co/storage/v1/object/public/event-galleries/event-123/img_004.jpg', 'image', 3),
-- ('EVENT_ID', 'https://your-supabase-url.supabase.co/storage/v1/object/public/event-galleries/event-123/img_005.jpg', 'image', 4),
-- ('EVENT_ID', 'https://your-supabase-url.supabase.co/storage/v1/object/public/event-galleries/event-123/video_recap.mp4', 'video', 5);

-- ============================================================================
-- Sample Club Registrations
-- ============================================================================

INSERT INTO public.club_registrations (
  full_name, 
  email, 
  profession, 
  experience_level, 
  phone,
  message
) VALUES (
  'John Smith',
  'john@example.com',
  'Software Engineer',
  'intermediate',
  '+1-306-555-0100',
  'Very interested in joining the club and improving my chess skills.'
),
(
  'Sarah Johnson',
  'sarah@example.com',
  'Business Analyst',
  'beginner',
  '+1-306-555-0101',
  'New to chess but excited to learn from experienced members.'
),
(
  'Michael Chen',
  'michael@example.com',
  'Mathematics Teacher',
  'advanced',
  '+1-306-555-0102',
  'Looking to connect with other chess enthusiasts in Regina.'
);

-- ============================================================================
-- HELPFUL QUERIES FOR TESTING
-- ============================================================================

-- View all upcoming events:
-- SELECT * FROM public.events WHERE start_time > NOW() ORDER BY start_time ASC;

-- View all past events:
-- SELECT * FROM public.events WHERE start_time < NOW() ORDER BY start_time DESC;

-- Get the most recent past event:
-- SELECT * FROM public.events WHERE start_time < NOW() ORDER BY start_time DESC LIMIT 1;

-- Get event with all its media:
-- SELECT 
--   e.*,
--   json_agg(json_build_object(
--     'id', em.id,
--     'media_url', em.media_url,
--     'media_type', em.media_type,
--     'sort_order', em.sort_order
--   ) ORDER BY em.sort_order) as event_media
-- FROM public.events e
-- LEFT JOIN public.event_media em ON e.id = em.event_id
-- WHERE e.id = 'YOUR_EVENT_ID'
-- GROUP BY e.id;

-- View all registrations:
-- SELECT * FROM public.club_registrations ORDER BY created_at DESC;

-- Count registrations by experience level:
-- SELECT experience_level, COUNT(*) FROM public.club_registrations GROUP BY experience_level;
