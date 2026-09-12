import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { COLLEGES, EVENT } from "@/app/how-to-make-10k-a-month-in-college/event"

// Signups live in the Content Machine Supabase project, table personal_event_signups.
// The site holds only the publishable key; RLS blocks direct table access and the two
// SECURITY DEFINER RPCs below are the only doors (count + insert).
const SUPABASE_URL = process.env.EVENTS_SUPABASE_URL || "https://xlecylcpqjepebhxurev.supabase.co"
const SUPABASE_KEY = process.env.EVENTS_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_Fk5dVmSwFsyN2dgiW2tcfA_sfe8jClf"

function getClient() {
  return createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } })
}

export async function GET() {
  try {
    const { data, error } = await getClient().rpc("personal_event_signup_count", { p_event: EVENT.key })
    if (error) {
      console.error("10k count error:", error)
      return NextResponse.json({ display: 0, full: false })
    }
    const actual = Number(data ?? 0)
    return NextResponse.json({ display: actual + EVENT.displayOffset, full: actual >= EVENT.seats })
  } catch (e) {
    console.error("10k count failed:", e)
    return NextResponse.json({ display: 0, full: false })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, college, promo_code } = await req.json()

    if (!name || !email || !phone || !college) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const emailLower = String(email).toLowerCase().trim()
    if (!emailLower.endsWith("@illinois.edu")) {
      return NextResponse.json({ error: "Please use your @illinois.edu email." }, { status: 400 })
    }

    const phoneClean = String(phone).replace(/\D/g, "")
    if (phoneClean.length < 10) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 })
    }

    if (!(COLLEGES as readonly string[]).includes(String(college))) {
      return NextResponse.json({ error: "Please pick your college." }, { status: 400 })
    }

    const promoValue =
      typeof promo_code === "string" && promo_code.trim() !== "" ? promo_code.toLowerCase().trim() : null

    const { data, error } = await getClient().rpc("personal_event_signup_insert", {
      p_event: EVENT.key,
      p_name: String(name).trim().slice(0, 200),
      p_email: emailLower,
      p_phone: phoneClean,
      p_college: String(college),
      p_promo_code: promoValue,
    })

    if (error) {
      console.error("10k signup error:", error)
      return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
    }

    const result = data as { ok: boolean; reason?: string; count?: number }
    if (!result?.ok) {
      if (result?.reason === "duplicate") {
        return NextResponse.json({ error: "You've already signed up!" }, { status: 400 })
      }
      return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 400 })
    }

    // count includes this signup; warn once the room is close to full
    const overCapacity = (result.count ?? 0) > EVENT.warnAt
    return NextResponse.json({ success: true, waitlisted: false, overCapacity })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error("10k signup failed:", msg)
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
  }
}
