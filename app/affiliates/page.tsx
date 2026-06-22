import type { Metadata } from "next"
import Link from "next/link"
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

export default function AffiliatesPage() {
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
