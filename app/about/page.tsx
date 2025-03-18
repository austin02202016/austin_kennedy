"use client"

import type React from "react"
import { PageLayout } from "@/components/page-layout"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="min-h-screen py-16 px-8 md:px-16 lg:px-24" >
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4">deep dive about me</h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              here&apos;s a detailed description of my life. long story short - i&apos;ve been down a lot of different rabbit
              holes.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-16" style={{ textTransform: "lowercase" }}>
            <TimelineItem
              year="2025"
              content="Joined the founding team of <span class='underline'>Origami Agents</span> in February as founding operations. Formed my personal LLC called <span class='underline'>Griot</span> for content creation and strategy. Built the <span class='underline'>Griot Customer Portal</span> for tracking Twitter performance and content idea generation. Started helping run <span class='underline'>Power Hour</span>, a society for college entrepreneurs."
            />

            <TimelineItem
              year="2024"
              content="Interned at <span class='underline'>Innovo Markets</span> and transitioned to a consultant role thereafter, ran a marathon, helped with the founding and growth of <span class='underline'>Illini Run Club</span>, started recording short-form reels for <span class='underline'>Proof of Concept</span>"
            />

            <TimelineItem
              year="2023"
              content="Went skydiving, worked a door-to-door sales job (very character building), started attending <span class='underline'>Luke Clancy</span>'s jam sessions and overdosed on the entrepreneurship pill"
            />

            <TimelineItem
              year="2022"
              content="Graduated high school at <span class='underline'>Notre Dame College Prep</span>, lost in sectional final for high school baseball final and retired, varsity bowler captain, managed the frozen department at <span class='underline'>Mariano's</span> in Harwood Heights"
            />

            <TimelineItem
              year="2021"
              content="Met my future roommates working at <span class='underline'>Mariano's</span>, most of my attention was directed towards getting more playing time for senior year baseball"
            />

            <TimelineItem
              year="2020"
              content="Covid - probably most disciplined I've been in my life. Lot of my attention went towards travel baseball and lifting. Got deeper into the 'motivational' and 'stoicism' space, started reading '<span class='underline'>Rich Dad, Poor Dad</span>', '<span class='underline'>12 Rules for Life</span>' and more similar books"
            />

            <TimelineItem
              year="2019"
              content="Made the freshman basketball team, got my first job at <span class='underline'>Habetler Bowl</span> in Jefferson Park, read '<span class='underline'>Can't Hurt Me</span>' by David Goggins and got deep into the self-help space, got big into the gym and science-based lifting"
            />

            <TimelineItem
              year="2018"
              content="Graduated from <span class='underline'>St. Celestine Elementary</span>, started playing baseball at <span class='underline'>Illinois Travel Baseball Club</span> in Mount Prospect. Played pretty much every sport in 8th grade - baseball, basketball, hockey, soccer, track and field, cross-country, and bowling"
            />

            <TimelineItem
              year="2003"
              content="Born in <span class='underline'>Elmwood Park</span> to some great parents. Shoutout Mom and Dad"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

interface TimelineItemProps {
  year: string
  content: string
}

function TimelineItem({ year, content }: TimelineItemProps) {
  return (
    <div className="border-b border-zinc-800/30 pb-8">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-normal tracking-tight text-zinc-100">{year}</h2>
      </div>
      <p className="text-zinc-400 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  )
}

