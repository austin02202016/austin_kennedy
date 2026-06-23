// Password-gated blog posts.
//
// A post listed here is excluded from the public surface (index, sitemap,
// related posts, static generation) and is served only at its direct URL behind
// a server-side password gate (see app/blog/[slug]/page.tsx + actions.ts). The
// password is verified on the server and never shipped to the client; an
// httpOnly cookie holds only an opaque "unlocked" flag.

export const POST_GATE_COOKIE = "post_unlocked"

const envPassword = process.env.POST_GATE_PASSWORD
export const POST_GATE_PASSWORD =
  typeof envPassword === "string" && envPassword.length > 0
    ? envPassword
    : "DOLPHIN"

// Additional accepted passwords beyond POST_GATE_PASSWORD. Any of these unlocks
// a gated post. Comparison is case-insensitive (see isValidPostPassword).
const EXTRA_POST_GATE_PASSWORDS = ["Origami", "COLETTE"]

export function isValidPostPassword(entered: string): boolean {
  const normalized = entered.trim().toLowerCase()
  if (normalized.length === 0) return false
  return [POST_GATE_PASSWORD, ...EXTRA_POST_GATE_PASSWORDS].some(
    (valid) => valid.toLowerCase() === normalized,
  )
}

export const PROTECTED_POST_SLUGS = new Set<string>([
  "how-to-do-outbound",
  "how-to-set-up-seo-and-aeo-from-scratch",
  "how-to-set-up-a-linode-vm",
])

export function isProtectedPost(slug: string): boolean {
  return PROTECTED_POST_SLUGS.has(slug)
}
