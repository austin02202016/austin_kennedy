import type { ReactNode } from "react"
import type { Metadata } from "next"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "My Story — Austin Kennedy",
  description:
    "The full timeline of Austin Kennedy — from Elmwood Park to UIUC to founding engineer at Origami (YC F24) in San Francisco. A self-taught engineer's journey.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "My Story — Austin Kennedy",
    description:
      "The full timeline from Elmwood Park to UIUC to founding engineer at a YC startup in San Francisco.",
    url: `${SITE_URL}/about`,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "My Story — Austin Kennedy",
    description:
      "From Elmwood Park to founding engineer at Origami (YC F24) in San Francisco.",
    creator: "@astnkennedy",
  },
}

export default function AboutPage() {
  return (
    <InnerLayout title="MY STORY">
      <p className="text-zinc-500 text-sm mb-12 leading-relaxed">
        i&apos;m a 22-year-old founding engineer at a yc startup in san francisco.
        i moved across the country to build something real with close friends.
        here&apos;s the full timeline.
      </p>

      <div className="space-y-8">
        <TimelineItem year="2026">
          season 3 began january 18th. launched origami&apos;s self-serve product and got our{" "}
          <strong>first payment from a stranger</strong> — the hardest dollar.
          75 users in week one. now focused on content and product in parallel.
          still hosting events, still building in public. 14 weeks to go.
        </TimelineItem>

        <TimelineItem year="2025">
          the year i actually &quot;did the thing.&quot; started january with a few hundred dollars in
          chicago, working out of{" "}
          <InlineLink href="https://1871.com/">1871</InlineLink>. took a gap from{" "}
          <InlineLink href="https://illinois.edu/">uiuc</InlineLink> to join{" "}
          <InlineLink href="https://origami.chat">Origami (YC F24)</InlineLink> in san francisco
          as founding operations. taught myself engineering on the job working alongside the team — no cs
          degree, just obsession and practice. within months, grew origami revenue from{" "}
          <strong>$5k/month to $65k/month</strong>. built{" "}
          <InlineLink href="https://github.com/austin02202016/the_nest_final">The Nest</InlineLink>,
          an mcp server that automated my own job — cut prep time from 20 hours/week to 20 minutes/day.
          made content for{" "}
          <InlineLink href="https://www.instagram.com/jesseitzler/">Jesse Itzler</InlineLink> during
          SEI. posted 33 reels on instagram. hosted 6 hangouts for entrepreneurial friends. flew back
          and forth between sf and champaign to finish my last 5 classes. officially{" "}
          <strong>graduated from Gies College of Business</strong> with a finance degree in december.
          the single best decision of the year: moving from being the ceiling of my environment in
          champaign to the floor of a new one in san francisco.
        </TimelineItem>

        <TimelineItem year="2024">
          interned at Innovo Markets and transitioned to a consultant role. ran a marathon.
          helped found{" "}
          <InlineLink href="https://www.instagram.com/illinirunclub/">Illini Run Club</InlineLink>.
          started recording short-form reels for{" "}
          <InlineLink href="https://www.instagram.com/proofofconceptofficial/">Proof of Concept</InlineLink>.
          scouting at{" "}
          <InlineLink href="https://somacapital.com">Soma Capital</InlineLink>. in december,
          accepted the role at origami and made the decision to move to sf.
        </TimelineItem>

        <TimelineItem year="2023">
          went skydiving. knocked 1000s of doors as a sales rep at{" "}
          <InlineLink href="https://blueravensolar.com/">Blue Raven Solar</InlineLink> — very
          character building. started attending Luke Clancy&apos;s jam sessions for entrepreneurs and
          fell deep into the startup world. started hosting casual rooftop hangouts for{" "}
          <InlineLink href="https://powerhour.vip">student entrepreneurs</InlineLink> at uiuc.
        </TimelineItem>

        <TimelineItem year="2022">
          graduated high school at Notre Dame College Prep. lost in the sectional final for baseball
          and retired. varsity bowler captain. managed the frozen department at{" "}
          <InlineLink href="https://www.marianos.com/">Mariano&apos;s</InlineLink> in Harwood Heights.
          recruited speakers for{" "}
          <InlineLink href="https://www.illinoissportsbusiness.net/">
            Illinois Sports Business Conference
          </InlineLink>. started an interview channel — &quot;school of hard knocks&quot; style talks
          with student founders and creators. after dozens of interviews, realized: these people had no
          idea who each other were. so i started bringing them together.
        </TimelineItem>

        <TimelineItem year="2021">
          met my future roommates working at{" "}
          <InlineLink href="https://www.marianos.com/">Mariano&apos;s</InlineLink>. most of my
          attention was directed towards getting more playing time for senior year baseball. stocked
          shelves in a freezer for three years straight.
        </TimelineItem>

        <TimelineItem year="2020">
          covid — probably most disciplined i&apos;ve been in my life. lot of my attention went
          towards travel baseball and lifting. got deeper into the &apos;motivational&apos; and
          &apos;stoicism&apos; space. started reading Rich Dad Poor Dad, 12 Rules for Life,
          Can&apos;t Hurt Me.
        </TimelineItem>

        <TimelineItem year="2019">
          made the freshman basketball team. got my first job at Habetler Bowl in Jefferson Park.
          read Can&apos;t Hurt Me by David Goggins and got deep into the self-help space. got big into
          the gym and science-based lifting.
        </TimelineItem>

        <TimelineItem year="2018">
          graduated from St. Celestine Elementary. started playing baseball at Illinois Travel Baseball
          Club in Mount Prospect. played pretty much every sport in 8th grade — baseball, basketball,
          hockey, soccer, track and field, cross-country, and bowling.
        </TimelineItem>

        <TimelineItem year="2003">
          born in Elmwood Park to some great parents. shoutout Mom and Dad.
        </TimelineItem>
      </div>

      {/* Other stuff */}
      <div className="mt-14 border-t border-zinc-100 pt-8">
        <h2 className="text-lg font-bold text-zinc-900 mb-4">Other Things</h2>
        <div className="space-y-3 text-sm text-zinc-500">
          <p>
            member of{" "}
            <InlineLink href="https://www.pct-illinois.com/">Phi Chi Theta</InlineLink> business
            fraternity
          </p>
          <p>
            brought{" "}
            <InlineLink href="https://www.uiucreach.com/">REACH</InlineLink> to the uiuc
            content-creation scene
          </p>
          <p>
            learned a lot of what-not-to-do as co-founder of{" "}
            <InlineLink href="https://www.instagram.com/defined_trajectory/">
              Defined Trajectory
            </InlineLink>{" "}
            Personal Training
          </p>
          <p>
            caddied and had conversations with retired ceos at{" "}
            <InlineLink href="https://www.top100golfcourses.com/golf-course/old-elm">
              The Old Elm Club
            </InlineLink>{" "}
            in Lake Forest
          </p>
          <p>
            finance degree from{" "}
            <InlineLink href="https://illinois.edu/">
              Gies College of Business, University of Illinois
            </InlineLink>
          </p>
          <p>
            documenting it all on{" "}
            <InlineLink href="https://www.instagram.com/austnkennedy/">
              personal Instagram
            </InlineLink>
          </p>
        </div>
      </div>
    </InnerLayout>
  )
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-900 font-semibold underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
    >
      {children}
    </a>
  )
}

interface TimelineItemProps {
  year: string
  children: ReactNode
}

function TimelineItem({ year, children }: TimelineItemProps) {
  return (
    <div className="border-b border-zinc-100 pb-6">
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-sm font-bold text-zinc-900 flex-shrink-0">{year}</span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{children}</p>
    </div>
  )
}
