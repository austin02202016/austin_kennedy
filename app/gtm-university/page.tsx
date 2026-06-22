import type { Metadata } from "next"
import Link from "next/link"
import { InnerLayout } from "@/components/inner-layout"
import { getBlogPost } from "@/lib/blog"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "GTM University — Austin Kennedy",
  description:
    "Go-to-market playbooks from how I actually run growth: SEO, AEO, outbound, and more. Each one ships a paste-into-Claude-Code version for agents.",
  alternates: {
    canonical: `${SITE_URL}/gtm-university`,
  },
  openGraph: {
    title: "GTM University — Austin Kennedy",
    description:
      "Go-to-market playbooks from how I actually run growth: SEO, AEO, outbound, and more.",
    url: `${SITE_URL}/gtm-university`,
  },
  twitter: {
    card: "summary",
    title: "GTM University — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

// Guides featured on GTM University. Listed guides may be password-gated — the
// listing shows only the title/description, and clicking through lands on the
// server-side password gate. The fully private outbound guide stays reachable
// by direct link only and is intentionally not listed here.
const GUIDE_SLUGS = ["how-to-set-up-seo-and-aeo-from-scratch"]

export default async function GtmUniversityPage() {
  const guides = (
    await Promise.all(GUIDE_SLUGS.map((slug) => getBlogPost(slug)))
  ).filter((g): g is NonNullable<typeof g> => g !== null)

  return (
    <InnerLayout title="GTM UNIVERSITY">
      <p className="text-zinc-500 text-sm mb-12 leading-relaxed">
        go-to-market playbooks from how i actually run growth — the same systems i
        use, written start to finish. each one has a &ldquo;for agents&rdquo;
        toggle: a prompt you can paste into claude code to have it do the whole
        thing for you. more coming.
      </p>

      <div className="space-y-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/blog/${guide.slug}`}
            className="block group border-b border-zinc-100 pb-5"
          >
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-500 transition-colors">
                {guide.title}
              </h3>
              <span className="text-xs text-zinc-400 flex-shrink-0">
                {guide.readingTime}
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </InnerLayout>
  )
}
