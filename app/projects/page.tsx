"use client"

import type React from "react"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4" >
              A Finance Major&apos;s Attempt at Coding
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light" style={{ textTransform: "lowercase" }}>
              a collection of applications i&apos;ve built, from ai chatbots to data collection tools.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-16" style={{ textTransform: "lowercase" }}>
            <ProjectItem
              title="griot customer portal"
              description="analytics dashboard for content creators to track twitter performance and generate content ideas"
              technologies={["next.js", "tailwindcss", "twitter api", "analytics", "content generation"]}
              visitLink="#"
            />

            <ProjectItem
              title="oskee"
              description="ai chatbot that searches directory of student entrepreneurs, built with andrew yatzkan"
              technologies={["next.js", "tailwindcss", "mongodb", "digital ocean", "open ai"]}
              visitLink="#"
            />

            <ProjectItem
              title="innovo markets"
              description="website for climatetech startup, data collection through hubspot's api"
              technologies={["next.js", "tailwindcss", "react.js", "hubspot api", "vercel"]}
              visitLink="#"
            />

            <ProjectItem
              title="write like them"
              description="helps copywriting agencies convert voice memos/text files to content"
              technologies={["next.js", "python", "assembly api", "ubuntu", "flask", "vercel"]}
              visitLink="#"
            />

            <ProjectItem
              title="the capital club"
              description="beehiv workaround to collect multiple data points for new subscribers"
              technologies={["next.js", "tailwindcss", "react.js", "beehiv api", "vercel"]}
              visitLink="#"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

interface ProjectItemProps {
  title: string
  description: string
  technologies: string[]
  visitLink: string
}

function ProjectItem({ title, description, technologies, visitLink }: ProjectItemProps) {
  return (
    <div className="border-b border-zinc-800/30 pb-12" style={{ textTransform: "lowercase" }}>
      <div className="mb-4">
        <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-2">{title}</h2>
        <p className="text-zinc-400 font-light mb-4">{description}</p>

        <h3 className="text-sm font-medium text-zinc-300 mb-2">technologies</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-zinc-500 text-sm font-light">
              {tech}
              {index < technologies.length - 1 ? " • " : ""}
            </span>
          ))}
        </div>

        <Link
          href={visitLink}
          className="inline-flex items-center text-zinc-300 hover:text-zinc-100 transition-colors no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit project
        </Link>
      </div>
    </div>
  )
}

