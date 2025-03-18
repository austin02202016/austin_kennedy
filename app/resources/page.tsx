"use client"

import type React from "react"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4">Stuff I Wish I Knew About Sooner</h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light" style={{ textTransform: "lowercase" }}>
              Here&apos;s a collection of tools I actually use (not just recommend). These have saved me countless hours and
              helped me create better content.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-20" style={{ textTransform: "lowercase" }}>
            {/* Social Media Section */}
            <section>
              <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8">Social Media & Content</h2>

              <div className="space-y-10">
                <ToolItem
                  title="SnapInsta"
                  description="Download Instagram Reels"
                  details="Input any Instagram reel link and download it in mp4 format. Perfect for saving content for inspiration or repurposing."
                  link="https://snapinst.app/"
                  tags={["Instagram", "Download", "Content"]}
                />

                <ToolItem
                  title="SnapTik"
                  description="Download TikToks"
                  details="Input any TikTok URL and download it as an mp4. Great for saving trending content or inspiration for your own videos."
                  link="https://snapinst.app/"
                  tags={["TikTok", "Download", "Content"]}
                />

                <ToolItem
                  title="Apify"
                  description="Scrape Data"
                  details="THE GOAT. Scrape data from X, LinkedIn, Instagram, and TikTok. Perfect for market research and competitor analysis."
                  link="https://apify.com/"
                  tags={["Data", "Research", "Automation"]}
                />

                <ToolItem
                  title="Assembly AI"
                  description="Audio Transcription"
                  details="Convert mp3, m4a and audio files into text transcriptions. Even works for short mp4s. Great for repurposing podcast content."
                  link="https://www.assemblyai.com/playground/transcript/7af9e9b2-d70c-4f6f-a5d9-faba242503ea"
                  tags={["Audio", "Transcription", "Content"]}
                />
              </div>
            </section>

            {/* AI Section */}
            <section>
              <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8">AI & Coding Tools</h2>

              <div className="space-y-10">
                <ToolItem
                  title="V0"
                  description="Frontend Development"
                  details="Create beautiful frontends in Next.js with just a prompt. Previews everything for you instantly. It's like magic for UI development."
                  link="https://v0.dev/"
                  tags={["Frontend", "UI", "Next.js"]}
                />

                <ToolItem
                  title="Claude by Anthropic"
                  description="LLM for Writing/Creative Stuff"
                  details="My go-to for copywriting and creative work. Their 'Projects' feature is SUPER VALUABLE for giving the LLM examples of what good looks like."
                  link="https://claude.ai/new"
                  tags={["Writing", "Creative", "AI"]}
                />

                <ToolItem
                  title="ChatGPT by OpenAI"
                  description="LLM for Coding, Factual Work"
                  details="Perfect for deep coding help and research. The 'Deep Research' feature is amazing when you need tons of information on any subject."
                  link="https://chatgpt.com/"
                  tags={["Coding", "Research", "AI"]}
                />
              </div>
            </section>

            {/* Copywriting Section */}
            <section>
              <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8">Copywriting Resources</h2>

              <div className="space-y-10">
                <ResourceItem
                  title="Guide on Pacing"
                  details="Learn how to control the rhythm and flow of your writing to keep readers engaged from start to finish. This practical guide covers everything from sentence structure to emotional pacing."
                  link="https://www.notion.so/Pacing-in-Copywriting-The-Practical-Guide-1b6e73ee17ec804cb34bd2ecd4548371"
                  linkText="Read the guide"
                />
              </div>
            </section>

            {/* Job Applications Section */}
            <section>
              <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8">Job Application Resources</h2>

              <div className="space-y-10">
                <ResourceItem
                  title="Application for Inflection Grants"
                  details="A detailed example of a successful grant application. Use this as a template or reference when applying for similar opportunities."
                  link="https://www.notion.so/Application-for-Inflection-Grants-181e73ee17ec8003976fd436b3f5eb27"
                  linkText="View application example"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

interface ToolItemProps {
  title: string
  description: string
  details: string
  link: string
  tags: string[]
}

function ToolItem({ title, description, details, link, tags }: ToolItemProps) {
  return (
    <div className="border-b border-zinc-800/30 pb-8">
      <div className="mb-3">
        <h3 className="text-xl font-normal tracking-tight text-zinc-100">{title}</h3>
        <p className="text-zinc-400 text-sm font-light">{description}</p>
      </div>

      <div>
        <p className="text-zinc-400 mb-3 leading-relaxed font-light">{details}</p>

        <div className="flex flex-wrap gap-x-2 text-zinc-500 text-sm font-light mb-3">
          {tags.map((tag, index) => (
            <span key={index}>
              {tag}
              {index < tags.length - 1 ? " • " : ""}
            </span>
          ))}
        </div>

        <Link
          href={link}
          className="inline-flex items-center text-zinc-300 hover:text-zinc-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out {title}
        </Link>
      </div>
    </div>
  )
}

interface ResourceItemProps {
  title: string
  details: string
  link: string
  linkText: string
}

function ResourceItem({ title, details, link, linkText }: ResourceItemProps) {
  return (
    <div className="border-b border-zinc-800/30 pb-8">
      <div className="space-y-2">
        <h3 className="text-xl font-normal tracking-tight text-zinc-100">{title}</h3>
        <p className="text-zinc-400 leading-relaxed font-light">{details}</p>
        <Link
          href={link}
          className="inline-flex items-center text-zinc-300 hover:text-zinc-100 transition-colors mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </Link>
      </div>
    </div>
  )
}

