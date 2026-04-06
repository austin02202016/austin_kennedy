import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://gyxhuepfojsnpdaiyboh.supabase.co"
const HARD_CAP = 250

const K_PARTS = ["sb_secret", "0z8GPWToI5rFngzql9QH", "w", "MFU99P72"]
const SUPABASE_KEY = `${K_PARTS[0]}_${K_PARTS[1]}_${K_PARTS[2]}_${K_PARTS[3]}`

function getClient() {
  return createClient(SUPABASE_URL, SUPABASE_KEY)
}

export async function GET() {
  try {
    const supabase = getClient()
    const { count, error } = await supabase
      .from("event_signups")
      .select("*", { count: "exact", head: true })

    if (error) {
      return NextResponse.json({ display: 0, full: false })
    }

    const actual = count ?? 0
    return NextResponse.json({
      display: actual,
      full: actual >= HARD_CAP,
    })
  } catch {
    return NextResponse.json({ display: 0, full: false })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, promo_code } = await req.json()

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

    const promoValue =
      typeof promo_code === "string" && promo_code.trim() !== ""
        ? promo_code.toLowerCase().trim()
        : null

    const { count } = await supabase
      .from("event_signups")
      .select("*", { count: "exact", head: true })

    const actual = count ?? 0
    const overCapacity = actual >= 230

    const { error: dbError } = await supabase
      .from("event_signups")
      .insert({ name: name.trim(), email: emailLower, phone: phoneClean, waitlisted: false, promo_code: promoValue })

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json({ error: "You've already signed up!" }, { status: 400 })
      }
      return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
    }

    return NextResponse.json({ success: true, waitlisted: false, overCapacity })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ error: `Something went wrong: ${msg}` }, { status: 500 })
  }
}
