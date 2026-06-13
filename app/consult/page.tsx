import type { Metadata } from "next"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Consulting — Austin Kennedy",
  description:
    "Book a 1:1 consulting call with Austin Kennedy. Choose a 30-minute or 1-hour session to go deep on AI agents, growth engineering, content, or startups.",
  alternates: {
    canonical: `${SITE_URL}/consult`,
  },
  openGraph: {
    title: "Consulting — Austin Kennedy",
    description:
      "Book a 30-minute or 1-hour consulting call to go deep on AI agents, growth engineering, content, or startups.",
    url: `${SITE_URL}/consult`,
  },
  twitter: {
    card: "summary",
    title: "Consulting — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

const CALENDLY_BASE = "https://calendly.com/austin-trygriot"

const sessions = [
  {
    name: "30 Minute Consulting",
    duration: "30 min",
    blurb: "a focused session to work through one specific problem or question.",
    // Confirmed live event slug
    url: `${CALENDLY_BASE}/30min`,
  },
  {
    name: "1 Hour Consulting",
    duration: "60 min",
    blurb: "a deep dive — strategy, a full review, or working through something end to end.",
    url: `${CALENDLY_BASE}/30-minute-meeting-clone`,
  },
]

export default function ConsultPage() {
  return (
    <InnerLayout title="CONSULTING">
      <p className="text-zinc-500 text-sm mb-10 leading-relaxed">
        book a paid 1:1 with me. pick the length that fits — ai agents, growth engineering, content,
        or whatever you&apos;re building.
      </p>

      <div className="space-y-4">
        {sessions.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-zinc-200 p-5 hover:border-zinc-400 transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-zinc-900">{s.name}</h2>
                <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{s.blurb}</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-zinc-400 border border-zinc-200 rounded-full px-3 py-1">
                {s.duration}
              </span>
            </div>
            <span className="inline-block mt-4 text-sm text-zinc-900">{">"} book this call</span>
          </a>
        ))}
      </div>
    </InnerLayout>
  )
}
