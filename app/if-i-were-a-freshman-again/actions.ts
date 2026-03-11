"use server"

import { supabaseAdmin } from "@/lib/supabase-freshman"

const HARD_CAP = 230
const DISPLAY_OFFSET = 50

export async function getSignupCount() {
  const { count } = await supabaseAdmin
    .from("event_signups")
    .select("*", { count: "exact", head: true })

  const actual = count ?? 0
  return { display: actual + DISPLAY_OFFSET, actual, full: actual >= HARD_CAP }
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

  const { actual } = await getSignupCount()
  const waitlisted = actual >= HARD_CAP

  const { error: dbError } = await supabaseAdmin
    .from("event_signups")
    .insert({ name: name.trim(), email: emailLower, phone: phoneClean, waitlisted })

  if (dbError) {
    if (dbError.code === "23505") {
      return { error: "You've already signed up!" }
    }
    console.error("Signup error:", dbError)
    return { error: "Something went wrong. Try again." }
  }

  return { success: true, waitlisted }
}
