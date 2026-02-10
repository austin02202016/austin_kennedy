import type { Metadata } from "next"
import Link from "next/link"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Projects — Austin Kennedy",
  description:
    "Things I've built — from AI agents and MCP servers at Origami (YC F24) to personal projects in Next.js, Node, and Python.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects — Austin Kennedy",
    description:
      "From AI agents at Origami to open-source MCP servers. Here's what I've shipped.",
    url: `${SITE_URL}/projects`,
  },
  twitter: {
    card: "summary",
    title: "Projects — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

export default function ProjectsPage() {
  return (
    <InnerLayout title="STUFF I'VE BUILT">
      <p className="text-zinc-500 text-sm mb-12 leading-relaxed">
        from automating my own job to building core infrastructure at a yc startup — here&apos;s
        what i&apos;ve shipped.
      </p>

      {/* Origami Projects */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">At Origami (YC F24)</h2>
        <div className="space-y-6">
          <ProjectItem
            title="The Nest"
            description="mcp server with open-source front end that automated my entire operations job. cut call prep from 20 hours/week to 20 minutes/day. handles call prep, invoice sending, and billing tracking."
            technologies={["node.js", "mcp", "open-source"]}
            visitLink="https://github.com/austin02202016/the_nest_final"
          />
          <ProjectItem
            title="Origami AOL (Agent Orchestration Layer)"
            description="core product — workflow builder for go-to-market workflows with 21+ nodes in the library. the main thing we're shipping."
            technologies={["node.js", "react", "mcp", "typescript"]}
            visitLink="https://github.com/Origami-Agents/agent-orchestration-layer"
          />
          <ProjectItem
            title="TIS (The Intelligent Search)"
            description="research agent with mcp connectivity — a claygent replica with better functionality and screenshot tools. deployed on render with 3 sync api routes across 3 repositories."
            technologies={["node.js", "mcp", "render", "api"]}
            visitLink="https://github.com/Origami-Agents/origami-claygent"
          />
          <ProjectItem
            title="Money-Collector"
            description="system to track and collect revenue from clients. grew origami revenue from $5k/month to $65k, $57k, $47k, $62k/month. all run by me."
            technologies={["node.js", "stripe", "automation"]}
          />
          <ProjectItem
            title="ORYO-MCP"
            description="mcp server for workflow generation. used by instafleet, luthor, and other clients."
            technologies={["mcp", "node.js", "workflow"]}
            completed
          />
          <ProjectItem
            title="Cold Outbound Consultant"
            description="managed 25 client accounts for outbound campaigns. averaged 15-20% response rates."
            technologies={["automation", "crm", "outbound"]}
            completed
          />
        </div>
      </section>

      {/* Personal Projects */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">Personal Projects</h2>
        <div className="space-y-6">
          <ProjectItem
            title="Lever Brands"
            description="automated post creation and routing for brand content distribution."
            technologies={["next.js", "automation", "content"]}
          />
          <ProjectItem
            title="Griot Customer Portal"
            description="analytics dashboard for content creators to track twitter performance and generate content ideas."
            technologies={["next.js", "tailwindcss", "twitter api", "analytics"]}
          />
          <ProjectItem
            title="Oskee"
            description="ai chatbot that searches a directory of student entrepreneurs. built with andrew yatzkan."
            technologies={["next.js", "mongodb", "digital ocean", "openai"]}
          />
          <ProjectItem
            title="Innovo Markets"
            description="website for climatetech startup with data collection through hubspot&apos;s api."
            technologies={["next.js", "react.js", "hubspot api", "vercel"]}
          />
          <ProjectItem
            title="Write Like Them"
            description="helps copywriting agencies convert voice memos and text files to polished content."
            technologies={["next.js", "python", "assembly api", "flask"]}
          />
          <ProjectItem
            title="The Capital Club"
            description="beehiv workaround to collect multiple data points for new subscribers."
            technologies={["next.js", "react.js", "beehiv api", "vercel"]}
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-lg font-bold text-zinc-900 mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm text-zinc-500">
          <div>
            <span className="text-zinc-900 font-semibold">frontend</span>
            <p>react, next.js, tailwind</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">backend</span>
            <p>node.js, express, python</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">ai / agents</span>
            <p>claude api, mcp, openai</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">infra</span>
            <p>vercel, render, supabase, aws</p>
          </div>
        </div>
      </section>
    </InnerLayout>
  )
}

interface ProjectItemProps {
  title: string
  description: string
  technologies: string[]
  visitLink?: string
  completed?: boolean
}

function ProjectItem({ title, description, technologies, visitLink, completed }: ProjectItemProps) {
  return (
    <div className="border-b border-zinc-100 pb-5">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
          {completed && (
            <span className="text-[10px] text-zinc-400 border border-zinc-200 rounded px-1 py-0.5 leading-none">
              shipped
            </span>
          )}
        </div>
        {visitLink && (
          <Link
            href={visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors flex-shrink-0"
          >
            github &rarr;
          </Link>
        )}
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed mb-2">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-[11px] text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
