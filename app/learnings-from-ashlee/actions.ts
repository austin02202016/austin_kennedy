"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  ASHLEE_GATE_COOKIE,
  ASHLEE_PATH,
  isValidAshleeKey,
} from "@/lib/ashlee-rules"

// Server-side key check. The entered key is verified here (by attempting to
// decrypt the content) and never reaches the client. On success we store the
// key in an httpOnly + secure cookie so the page stays unlocked for this
// browser without re-entry; the cookie is unreadable from client JS and is
// only ever sent back to the server over HTTPS to decrypt on subsequent loads.
export async function unlockAshlee(formData: FormData) {
  const raw = formData.get("key")
  const entered = (typeof raw === "string" ? raw : "").trim()

  if (isValidAshleeKey(entered)) {
    const jar = await cookies()
    jar.set(ASHLEE_GATE_COOKIE, entered, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: ASHLEE_PATH,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    redirect(ASHLEE_PATH)
  }

  redirect(`${ASHLEE_PATH}?error=1`)
}
