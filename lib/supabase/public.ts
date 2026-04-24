import { createClient } from "@supabase/supabase-js";
import type { Database } from "../database.types";

/**
 * Creates a public Supabase client for read-only queries
 * Does NOT use cookies, so routes using this client can be statically rendered
 * Use this for public data like events, photos, etc.
 */
export function createPublicClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
