import { createClient, SupabaseClient } from "@supabase/supabase-js"

let _client: SupabaseClient | null = null

export function getSupabaseAdmin() {
  if (_client) return _client

  const url = process.env.NEXT_PUBLIC_FRESHMAN_SUPABASE_URL
  const key = process.env.FRESHMAN_SUPABASE_SERVICE_KEY

  if (!url || !key) {
    throw new Error("Missing Supabase env vars for freshman event")
  }

  _client = createClient(url, key)
  return _client
}
