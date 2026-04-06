"use server"

import { getSupabaseAdmin } from "@/lib/supabase-freshman"

const HARD_CAP = 250

export async function getSignupCount() {
  try {
    const supabase = getSupabaseAdmin()
    const { count, error } = await supabase
      .from("event_signups")
      .select("*", { count: "exact", head: true })

    if (error) {
      console.error("Count query error:", error)
      return { display: 0, actual: 0, full: false }
    }

    const actual = count ?? 0
    return { display: actual, actual, full: actual >= HARD_CAP }
  } catch (e) {
    console.error("getSignupCount failed:", e)
    return { display: 0, actual: 0, full: false }
  }
}

export async function submitSignup(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  if (!name || !email || !phone) {
    return { error: "All fields are required." }
  }

  const emailLower = email.toLowerCase().trim()

  if (!emailLower.endsWith("@illinois.edu")) {
    return { error: "Please use your @illinois.edu email." }
  }

  const phoneClean = phone.replace(/\D/g, "")
  if (phoneClean.length < 10) {
    return { error: "Please enter a valid phone number." }
  }

  try {
    const { actual } = await getSignupCount()
    const overCapacity = actual >= 230

    const supabase = getSupabaseAdmin()
    const { error: dbError } = await supabase
      .from("event_signups")
      .insert({ name: name.trim(), email: emailLower, phone: phoneClean, waitlisted: false })

    if (dbError) {
      if (dbError.code === "23505") {
        return { error: "You've already signed up!" }
      }
      console.error("Signup error:", dbError)
      return { error: "Something went wrong. Try again." }
    }

    return { success: true, waitlisted: false, overCapacity }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error("submitSignup failed:", msg)
    return { error: `Something went wrong: ${msg}` }
  }
}
