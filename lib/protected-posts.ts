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

export const PROTECTED_POST_SLUGS = new Set<string>(["how-to-do-outbound"])

export function isProtectedPost(slug: string): boolean {
  return PROTECTED_POST_SLUGS.has(slug)
}
