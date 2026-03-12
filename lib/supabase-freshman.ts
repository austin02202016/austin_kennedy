import { createClient, SupabaseClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://gyxhuepfojsnpdaiyboh.supabase.co"

let _client: SupabaseClient | null = null

export function getSupabaseAdmin() {
  if (_client) return _client

  const key = process.env.FRESHMAN_SUPABASE_SERVICE_KEY

  if (!key) {
    throw new Error("Missing FRESHMAN_SUPABASE_SERVICE_KEY env var")
  }

  _client = createClient(SUPABASE_URL, key)
  return _client
}
