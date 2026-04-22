import type { Metadata } from "next"
import Link from "next/link"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Growth Eng Projects — Austin Kennedy",
  description:
    "Growth engineering projects — SEO, AEO, LinkedIn, web dev. Real numbers, zero paid spend.",
  alternates: {
    canonical: `${SITE_URL}/growth`,
  },
  openGraph: {
    title: "Growth Eng Projects — Austin Kennedy",
    description:
      "Growth engineering projects — SEO, AEO, LinkedIn, web dev.",
    url: `${SITE_URL}/growth`,
  },
  twitter: {
    card: "summary",
    title: "Growth Eng Projects — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

const projects = [
  {
    slug: "origami",
    company: "Origami (YC F24)",
    favicon: "/favicons/origami.png",
    role: "Founding Engineer",
    scope: "SEO/AEO, 0 → 1 Web Dev",
    stats: [
      { label: "Impressions", value: "42.2K" },
      { label: "Clicks", value: "3.53K" },
      { label: "CTR", value: "8.4%" },
      { label: "Avg Position", value: "8.3" },
    ],
    period: "Jan–Mar 2026",
  },
  {
    slug: "northlight",
    company: "Northlight (Backed by Neo)",
    favicon: "/favicons/northlight.ico",
    role: "Fractional Head of Content",
    scope: "LinkedIn, SEO/AEO, 0 → 1 Web Dev",
    stats: [
      { label: "LinkedIn Impr.", value: "163K" },
      { label: "Downloads", value: "+76%" },
      { label: "Unique Visitors", value: "2.5K" },
      { label: "Countries", value: "59" },
    ],
    period: "Mar–Apr 2026",
  },
]

export default function GrowthPage() {
  return (
    <InnerLayout title="GROWTH ENG PROJECTS">
      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/growth/${project.slug}`}
            className="block border border-zinc-200 rounded-sm p-6 hover:border-zinc-400 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.favicon} alt="" width={20} height={20} className="rounded" />
              <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                {project.company}
              </h2>
              <span className="text-xs text-zinc-400 flex-shrink-0 ml-auto">
                {project.period}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-1 ml-8">{project.role}</p>
            <p className="text-sm text-zinc-500 mb-4 ml-8">{project.scope}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ml-8">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-bold text-zinc-900 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </InnerLayout>
  )
}
