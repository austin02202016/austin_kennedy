import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://gyxhuepfojsnpdaiyboh.supabase.co"
const HARD_CAP = 230
const DISPLAY_OFFSET = 50

function getClient() {
  const key =
    process.env.FRESHMAN_SUPABASE_SERVICE_KEY ||
    process.env.NEXT_PUBLIC_FRESHMAN_SUPABASE_SERVICE_KEY
  if (!key) throw new Error("Missing service key")
  return createClient(SUPABASE_URL, key)
}

export async function GET() {
  try {
    const supabase = getClient()
    const { count, error } = await supabase
      .from("event_signups")
      .select("*", { count: "exact", head: true })

    if (error) {
      return NextResponse.json({ display: DISPLAY_OFFSET, full: false })
    }

    const actual = count ?? 0
    return NextResponse.json({
      display: actual + DISPLAY_OFFSET,
      full: actual >= HARD_CAP,
    })
  } catch {
    return NextResponse.json({ display: DISPLAY_OFFSET, full: false })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json()

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const emailLower = email.toLowerCase().trim()
    if (!emailLower.endsWith("@illinois.edu")) {
      return NextResponse.json({ error: "Please use your @illinois.edu email." }, { status: 400 })
    }

    const phoneClean = phone.replace(/\D/g, "")
    if (phoneClean.length < 10) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 })
    }

    const supabase = getClient()

    const { count } = await supabase
      .from("event_signups")
      .select("*", { count: "exact", head: true })

    const actual = count ?? 0
    const waitlisted = actual >= HARD_CAP

    const { error: dbError } = await supabase
      .from("event_signups")
      .insert({ name: name.trim(), email: emailLower, phone: phoneClean, waitlisted })

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json({ error: "You've already signed up!" }, { status: 400 })
      }
      return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
    }

    return NextResponse.json({ success: true, waitlisted })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ error: `Something went wrong: ${msg}` }, { status: 500 })
  }
}
