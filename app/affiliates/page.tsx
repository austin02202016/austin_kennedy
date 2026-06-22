import type { Metadata } from "next"
import Link from "next/link"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Affiliate Links — Austin Kennedy",
  description:
    "Tools I use and recommend, with affiliate links. If you sign up through one of these I may earn a commission, at no extra cost to you.",
  alternates: {
    canonical: `${SITE_URL}/affiliates`,
  },
  openGraph: {
    title: "Affiliate Links — Austin Kennedy",
    description:
      "Tools I use and recommend, with affiliate links. I may earn a commission at no extra cost to you.",
    url: `${SITE_URL}/affiliates`,
  },
  twitter: {
    card: "summary",
    title: "Affiliate Links — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

// --- Server-side gate ------------------------------------------------------
// The password lives only on the server (env var, falling back to a constant).
// It is never sent to the client; the form posts the entered value to a Server
// Action which compares it here. On success we set an httpOnly cookie (not
// readable by client JS) holding an opaque flag, never the password itself.
const envPassword = process.env.AFFILIATES_PASSWORD
const AFFILIATES_PASSWORD =
  typeof envPassword === "string" && envPassword.length > 0
    ? envPassword
    : "DOLPHIN"
const COOKIE_NAME = "affiliates_unlocked"

async function unlock(formData: FormData) {
  "use server"
  const raw = formData.get("password")
  const entered = typeof raw === "string" ? raw : ""
  if (entered === AFFILIATES_PASSWORD) {
    const jar = await cookies()
    jar.set(COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/affiliates",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    redirect("/affiliates")
  }
  redirect("/affiliates?error=1")
}

interface Affiliate {
  title: string
  description: string
  link: string
  tag: string
}

const affiliates: Affiliate[] = [
  {
    title: "Origami",
    description:
      "AI-native growth tool I use for backlink and competitor research — pull any domain's backlink profile and find the sites linking to the competitors ranking above you, then turn that into an outreach list. The backbone of the authority work in my SEO/AEO playbook.",
    link: "https://origami.chat/?ref=partner-personal-Gul0fK",
    tag: "growth / seo",
  },
]

export default async function AffiliatesPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  const jar = await cookies()
  const unlocked = jar.get(COOKIE_NAME)?.value === "1"

  if (!unlocked) {
    return (
      <InnerLayout title="AFFILIATE LINKS">
        <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
          this page is password protected. enter the password to continue.
        </p>
        <form action={unlock} className="flex flex-col gap-3 max-w-xs">
          <input
            type="password"
            name="password"
            autoFocus
            autoComplete="off"
            placeholder="password"
            className="border border-zinc-200 rounded px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-zinc-900"
          />
          <button
            type="submit"
            className="px-3 py-2 text-sm font-mono rounded bg-zinc-900 text-white hover:bg-zinc-700 transition-colors w-fit"
          >
            Enter
          </button>
          {error && (
            <p className="text-xs text-red-500 font-mono">
              wrong password — try again.
            </p>
          )}
        </form>
      </InnerLayout>
    )
  }

  return (
    <InnerLayout title="AFFILIATE LINKS">
      <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
        tools i actually use and recommend. some of the links below are affiliate
        links — if you sign up through one i may earn a commission, at no extra
        cost to you. i only list things i&apos;d point a friend to anyway.
      </p>
      <p className="text-zinc-400 text-xs mb-12 leading-relaxed">
        more coming soon.
      </p>

      <div className="space-y-6">
        {affiliates.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="block group border-b border-zinc-100 pb-5"
          >
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-500 transition-colors">
                {item.title}
              </h3>
              <span className="text-xs text-zinc-400 uppercase flex-shrink-0">
                {item.tag}
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </InnerLayout>
  )
}
