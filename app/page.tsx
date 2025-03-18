"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Profile Section */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-normal tracking-tight text-zinc-100 mb-4">hey i&apos;m austin</h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              currently i&apos;m{" "}
              <span className="text-zinc-200">
                building a startup in sf with friends
              </span>
            </p>
          </div>

          {/* Current Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-6">what i&apos;m up to these days</h2>
            <div className="space-y-3 text-zinc-300 font-light">
              <p>
                founding team at <span>origami agents</span>
              </p>
              <p>
                telling stories on x, linkedin, and instagram at <span>griot</span>
              </p>
              <p>
                promoting college entrepreneurship at <span>power hour</span>
              </p>
              <p>
                scouting at <span>soma capital</span>
              </p>
              <p>
                promoting young fitness <span>illini run club</span>
              </p>
            </div>
          </div>

          {/* Past Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-6">past-seasons</h2>
            <ul className="space-y-3 text-zinc-400 font-light">
              <li>
                interviewed young entrepreneurs at <span>proof of concept</span>
              </li>
              <li>
                member of <span>phi chi theta</span> business fraternity
              </li>
              <li>
                finance + computer science + commercial real estate degree at university of illinois urbana-champaign
              </li>
              <li>
                caddied and had conversations with retired ceos at the <span>old elm club</span> in lake forest
              </li>
              <li>
                recruited speakers for <span>illinois sports business conference</span>
              </li>
              <li>
                knocked 1000s of doors as a sales rep at <span>blue raven solar</span>
              </li>
              <li>
                brought reach to the uiuc content-creation scene
              </li>
              <li>
                learned a lot of what-not-to-do as co-founder of <span>defined trajectory personal training</span>
              </li>
              <li>
                stocked shelves in a freezer for three years at <span>marianos</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border-t border-zinc-800/50 pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-zinc-400 font-light">
              <Link href="/projects" className="flex items-center hover:text-zinc-100 transition-colors">
                coding projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/podcasts" className="flex items-center hover:text-zinc-100 transition-colors">
                podcasts
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/short-form" className="flex items-center hover:text-zinc-100 transition-colors">
                short-form
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/about" className="flex items-center hover:text-zinc-100 transition-colors">
                my life
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/resources" className="flex items-center hover:text-zinc-100 transition-colors">
                resources
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}