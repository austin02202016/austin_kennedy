import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { FAQSchema } from "@/components/blog/Schema"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Austin Kennedy — Founding Engineer at Origami (YC F24)",
  description:
    "Personal website of Austin Kennedy. Founding Engineer at Origami (YC F24). Self-taught engineer, UIUC grad, community builder in San Francisco.",
  alternates: {
    canonical: SITE_URL,
  },
}

const faqData = [
  {
    question: "Who is Austin Kennedy?",
    answer:
      "Austin Kennedy is a Founding Engineer at Origami (YC F24), a YC-backed AI startup in San Francisco. He is a self-taught software engineer who graduated from the University of Illinois Urbana-Champaign (UIUC) with a Finance degree from Gies College of Business.",
  },
  {
    question: "What is Origami?",
    answer:
      "Origami is a Y Combinator (Fall 2024) backed startup building AI-powered prospecting and go-to-market automation tools. Austin Kennedy serves as a Founding Engineer, building AI agents and MCP (Model Context Protocol) servers.",
  },
  {
    question: "What does Austin Kennedy build?",
    answer:
      "Austin builds AI agents, MCP servers, and automation tools at Origami. Notable projects include The Nest (an open-source MCP server) and internal AI tools that cut operations time from 20 hours/week to 20 minutes/day.",
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema questions={faqData} />
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-[640px] text-center">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <Image
              src="/austin-profile.jpg"
              alt="Austin Kennedy"
              width={72}
              height={72}
              className="rounded-full object-cover w-[72px] h-[72px]"
            />
            <h1 className="text-xl font-bold text-zinc-900 font-mono tracking-tight mt-4">
              Austin Kennedy
            </h1>
            <p className="text-sm text-zinc-500 font-mono mt-1.5 leading-snug">
              founding engineer,{" "}
              <a
                href="https://origami.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                origami (yc f24)
              </a>
            </p>
            <p className="text-sm text-zinc-500 font-mono italic mt-0.5 leading-snug">
              self-taught eng. uiuc grad. building in sf.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-100 my-10" />

          {/* Two Column Layout */}
          <div className="inline-flex flex-col sm:flex-row gap-10 sm:gap-20 font-mono text-left">
            {/* Left Column — Pages */}
            <div className="space-y-4">
              <Link
                href="/blog"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} my thoughts (blog)
              </Link>
              <Link
                href="/about"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} my story
              </Link>
              <Link
                href="/projects"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} projects
              </Link>
              <Link
                href="/resources"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} recommended resources
              </Link>
              <Link
                href="/podcasts"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} past podcasts
              </Link>
            </div>

            {/* Right Column — Socials + Get in Touch */}
            <div className="space-y-4">
              <a
                href="https://x.com/astnkennedy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} x.com
              </a>
              <a
                href="https://www.linkedin.com/in/austnkennedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} linkedin
              </a>
              <a
                href="https://www.instagram.com/austnkennedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} instagram
              </a>
              <div className="border-t border-zinc-100 my-2" />

              <a
                href="https://sleep-on-my-couch-2ejt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-zinc-900 hover:text-zinc-500 transition-colors"
              >
                {">"} sleep on my couch
              </a>

              <div className="flex items-center gap-2">
                <Link
                  href="/chat"
                  className="text-base text-zinc-900 hover:text-zinc-500 transition-colors"
                >
                  {">"} get in touch
                </Link>
                <span className="bg-blue-500 text-white text-[11px] font-semibold rounded-full min-w-[24px] h-5 flex items-center justify-center leading-none px-1">
                  +2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
