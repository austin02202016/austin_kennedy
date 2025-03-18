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
            <h1 className="text-5xl sm:text-6xl font-normal tracking-tight text-zinc-100 mb-4">Hey I&apos;m Austin</h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              currently i&apos;m <span className="text-zinc-200">building a startup with friends in sf</span>
            </p>
          </div>

          {/* Current Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-6">what i&apos;m up to these days</h2>
            <div className="space-y-3 text-zinc-300 font-light">
              <p>
                founding team at Origami Agents
                <Link href="https://origamiagents.com" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </p>
              <p>
                telling stories on x, linkedin, and instagram at{" "}
                <span>Griot</span>
                <Link href="https://griotstories.com" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </p>
              <p>
                promoting college entrepreneurship at{" "}
                <span>Power Hour</span>
                <Link href="https://powerhour.vip" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </p>
              <p>
                scouting at{" "}
                <span>Soma Capital</span>
                <Link href="https://somacapital.com" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </p>
              <p>
                promoting young fitness{" "}
                <span>Illini Run Club</span>
                <Link href="https://www.instagram.com/illinirunclub/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </p>
              <p>
                documenting it all on my personal Instagram
                <Link href="https://www.instagram.com/austnkennedy/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </p>
            </div>
          </div>

          {/* Past Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-6">past-seasons</h2>
            <div className="space-y-3 text-zinc-300 font-light">
              <li className="flex items-center">
                interviewed young entrepreneurs at Proof of Concept
                <Link href="https://www.instagram.com/proofofconceptofficial/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                member of Phi Chi Theta business fraternity
                <Link href="https://www.pct-illinois.com/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                finance + computer science + commercial real estate degree at University of Illinois Urbana-Champaign
                <Link href="https://illinois.edu/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                caddied and had conversations with retired ceos at The Old Elm Club in Lake Forest
                <Link href="https://www.top100golfcourses.com/golf-course/old-elm" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                recruited speakers for Illinois Sports Business Conference
                <Link href="https://www.illinoissportsbusiness.net/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                knocked 1000s of doors as a sales rep at Blue Raven Solar
                <Link href="https://blueravensolar.com/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                brought REACH to the uiuc content-creation scene
                <Link href="https://www.uiucreach.com/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                learned a lot of what-not-to-do as co-founder of Defined Trajectory Personal Training
                <Link href="https://www.instagram.com/defined_trajectory/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
              <li className="flex items-center">
                stocked shelves in a freezer for three years at Mariano&apos;s
                <Link href="https://www.marianos.com/" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="inline-block ml-1 h-4 w-4 text-zinc-300 hover:text-zinc-100 transition-colors" />
                </Link>
              </li>
            </div>
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

