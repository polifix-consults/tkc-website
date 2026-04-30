-- 1. Rename start_time to event_date if it hasn't been renamed yet
DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='events' and column_name='start_time')
  THEN
      ALTER TABLE public.events RENAME COLUMN start_time TO event_date;
  END IF;
END $$;

-- 2. Add new columns
ALTER TABLE public.events 
  ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS short_description TEXT,
  ADD COLUMN IF NOT EXISTS description TEXT,
  ADD COLUMN IF NOT EXISTS venue_note TEXT,
  ADD COLUMN IF NOT EXISTS event_type TEXT,
  ADD COLUMN IF NOT EXISTS skill_level TEXT,
  ADD COLUMN IF NOT EXISTS audience TEXT,
  ADD COLUMN IF NOT EXISTS experience JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS who_should_attend JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS registration_link TEXT,
  ADD COLUMN IF NOT EXISTS contact_email TEXT,
  ADD COLUMN IF NOT EXISTS email_subject TEXT,
  ADD COLUMN IF NOT EXISTS email_body_template TEXT,
  ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS status TEXT CHECK (status IN ('upcoming', 'past')) DEFAULT 'upcoming',
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- 3. Populate existing rows with a slug to avoid null constraint violations
UPDATE public.events SET slug = 'event-' || id WHERE slug IS NULL;

-- 4. Set NOT NULL on slug now that all rows have one
ALTER TABLE public.events ALTER COLUMN slug SET NOT NULL;

-- 5. Auto-set status based on date for existing events
UPDATE public.events SET status = 'past' WHERE event_date < now();

-- 6. Insert dummy events
INSERT INTO public.events (
  title, slug, short_description, description, location, venue_note, 
  event_date, end_time, event_type, skill_level, audience, 
  experience, who_should_attend, registration_link, contact_email, 
  email_subject, email_body_template, is_featured, status, cover_image_url
) VALUES (
  'Grandmaster Chess Tournament',
  'grandmaster-chess-tournament',
  'A high-stakes tournament featuring top grandmasters.',
  'Join us for an exciting day of high-level chess matches. Watch top grandmasters compete for the championship title. There will be commentary, analysis, and opportunities to meet the players.',
  'Regina Public Library, Central Branch',
  'Parking available at the rear. Use the main entrance.',
  now() + interval '7 days',
  now() + interval '7 days' + interval '8 hours',
  'Tournament',
  'Advanced',
  'General Public',
  '["Live commentary by experts", "Meet and greet with grandmasters", "Food and drinks provided"]'::jsonb,
  '["Chess enthusiasts", "Aspiring players", "Fans of competitive chess"]'::jsonb,
  'https://forms.google.com/sample-registration-1',
  'contact@theknightclub.ca',
  'Registration for Grandmaster Tournament',
  'Hello, I would like to register for the upcoming tournament.',
  true,
  'upcoming',
  'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800'
),
(
  'Beginners Chess Workshop',
  'beginners-chess-workshop',
  'Learn the basics of chess in a friendly environment.',
  'Perfect for absolute beginners. We will cover the rules, how each piece moves, and basic strategies to get you started on your chess journey.',
  'Community Center, Room A',
  'Please arrive 15 minutes early.',
  now() + interval '14 days',
  now() + interval '14 days' + interval '2 hours',
  'Workshop',
  'Beginner',
  'Kids and Adults',
  '["Hands-on learning", "Practice matches", "Take-home guide"]'::jsonb,
  '["Complete beginners", "Parents with kids", "Anyone curious about chess"]'::jsonb,
  'https://forms.google.com/sample-registration-2',
  'contact@theknightclub.ca',
  'Registration for Beginners Workshop',
  'Hi, I am interested in joining the beginners workshop.',
  false,
  'upcoming',
  'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800'
) ON CONFLICT (slug) DO NOTHING;
