"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  POST_GATE_COOKIE,
  isProtectedPost,
  isValidPostPassword,
} from "@/lib/protected-posts"

// Server-side password check for gated posts. The password is compared here on
// the server and never reaches the client. On success we set an httpOnly cookie
// holding an opaque flag (not the password).
export async function unlockPost(formData: FormData) {
  const rawPassword = formData.get("password")
  const entered = typeof rawPassword === "string" ? rawPassword : ""

  const rawSlug = formData.get("slug")
  const slug = typeof rawSlug === "string" ? rawSlug : ""

  // Only ever redirect back to a known gated post (avoids open redirects).
  const safeSlug = isProtectedPost(slug) ? slug : ""

  if (isValidPostPassword(entered)) {
    const jar = await cookies()
    jar.set(POST_GATE_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    redirect(safeSlug ? `/blog/${safeSlug}` : "/blog")
  }

  redirect(safeSlug ? `/blog/${safeSlug}?error=1` : "/blog")
}
