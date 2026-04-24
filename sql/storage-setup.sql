-- ============================================================================
-- Supabase Storage Bucket Setup
-- ============================================================================
-- This script creates the storage buckets for The Knight Club website
-- NOTE: This is a documentation guide. Storage buckets are created via UI/API
-- ============================================================================

-- ============================================================================
-- BUCKET: event-covers
-- Purpose: Store event cover/thumbnail images for cards
-- ============================================================================
-- Steps in Supabase Dashboard:
-- 1. Go to Storage → Buckets
-- 2. Create new bucket: "event-covers"
-- 3. Set to PUBLIC
-- 4. File size limit: 10 MB
-- 5. Allowed MIME types: image/jpeg, image/png, image/webp

-- Example bucket structure:
-- event-covers/
--   ├── 2024/
--   │   ├── monthly-meetup-jan.jpg
--   │   ├── tournament-feb.jpg
--   │   └── atelier-mar.jpg
--   └── 2025/
--       └── ...

-- ============================================================================
-- BUCKET: event-galleries
-- Purpose: Store full resolution images and videos for event galleries
-- ============================================================================
-- Steps in Supabase Dashboard:
-- 1. Go to Storage → Buckets
-- 2. Create new bucket: "event-galleries"
-- 3. Set to PUBLIC
-- 4. File size limit: 50 MB
-- 5. Allowed MIME types: image/*, video/mp4, video/webm

-- Example bucket structure:
-- event-galleries/
--   ├── event-123/
--   │   ├── img_001.jpg
--   │   ├── img_002.jpg
--   │   ├── img_003.jpg
--   │   └── video_recap.mp4
--   ├── event-456/
--   │   ├── img_001.jpg
--   │   └── ...
--   └── ...

-- ============================================================================
-- RLS POLICIES FOR STORAGE BUCKETS
-- ============================================================================

-- Event covers bucket - everyone can read, only authenticated can write
-- CREATE POLICY "Public read access on event-covers"
-- ON storage.objects FOR SELECT
-- USING (bucket_id = 'event-covers');

-- Event galleries bucket - everyone can read, only authenticated can write
-- CREATE POLICY "Public read access on event-galleries"
-- ON storage.objects FOR SELECT
-- USING (bucket_id = 'event-galleries');

-- ============================================================================
-- PUBLIC URL FORMAT
-- ============================================================================
-- Use this format in your application to reference stored files:
-- https://YOUR_SUPABASE_URL/storage/v1/object/public/event-covers/2024/monthly-meetup-jan.jpg
-- https://YOUR_SUPABASE_URL/storage/v1/object/public/event-galleries/event-123/img_001.jpg
