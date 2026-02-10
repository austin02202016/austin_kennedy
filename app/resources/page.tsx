import type { Metadata } from "next"
import Link from "next/link"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Recommended Resources — Austin Kennedy",
  description:
    "Tools I actually use — from AI coding assistants to social media scrapers, copywriting frameworks, books, and automation tools. With my commentary on each.",
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  openGraph: {
    title: "Recommended Resources — Austin Kennedy",
    description:
      "Tools I actually use for building, creating content, and writing. With my commentary.",
    url: `${SITE_URL}/resources`,
  },
  twitter: {
    card: "summary",
    title: "Recommended Resources — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

export default function ResourcesPage() {
  return (
    <InnerLayout title="RECOMMENDED RESOURCES">
      <p className="text-zinc-500 text-sm mb-12 leading-relaxed">
        tools i actually use (not just recommend), books that shaped how i think,
        and copywriting frameworks i come back to. with my commentary on each.
      </p>

      {/* AI & Coding Tools */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          AI &amp; Coding Tools
        </h2>
        <div className="space-y-6">
          <ToolItem
            title="Cursor"
            description="Basically just ChatGPT or any LLM integrated into your IDE. IDE is just fancy word for 'where you can write code and see if it actually works.' I love Cursor, a Ghost Energy Drink, and the Social Network soundtrack until 3am."
            link="https://cursor.sh"
            tag="coding"
          />
          <ToolItem
            title="Claude by Anthropic"
            description="Whenever I want to do any copywriting, script-writing or essentially anything that involves creativity I use Claude. They also have a feature called 'Projects.' SUPER VALUABLE for copywriting or whenever you want to give the LLM a ton of examples of 'what good actually looks like.'"
            link="https://claude.ai/new"
            tag="writing / creative"
          />
          <ToolItem
            title="ChatGPT by OpenAI"
            description="Whenever I want deep coding help, or just want 'brute-force' type of work I use GPT. They also have a 'Deep Research' feature that I use whenever I want to get a TON of information on any given subject."
            link="https://chatgpt.com/"
            tag="coding / research"
          />
          <ToolItem
            title="V0"
            description="Create a beautiful frontend in Next.js. Previews everything for you after a prompt. Like magic for UI."
            link="https://v0.dev/"
            tag="frontend"
          />
          <ToolItem
            title="Wispr Flow"
            description="Talk and it transcribes it. I use it when I'm on a walk and want to think out loud. Most products just have one very good thing in them — Wispr Flow's is that it's literally just tap, talk, and then everything else is cherry on top."
            link="https://wisprflow.com"
            tag="voice-to-text"
          />
        </div>
      </section>

      {/* Social Media & Content */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Social Media &amp; Content
        </h2>
        <div className="space-y-6">
          <ToolItem
            title="Apify"
            description="THE GOAT. Allows you to scrape data from applications like X, LinkedIn, Instagram, and TikTok. You can download all tweets via an API, and it outputs into a CSV. I got a script that can also output the transcripts for each of those — prob the most valuable piece on Instagram."
            link="https://apify.com/"
            tag="data scraping"
          />
          <ToolItem
            title="SnapInsta"
            description="Allows you to input any Instagram reel link and download it in an mp4 format."
            link="https://snapinst.app/"
            tag="instagram"
          />
          <ToolItem
            title="SnapTik"
            description="Allows you to input any TikTok URL and download it into an mp4 format."
            link="https://snaptik.app/"
            tag="tiktok"
          />
          <ToolItem
            title="Assembly AI"
            description="Allows you to input all mp3, m4a and all audio files and turn them into audio transcriptions. Even works for short mp4s. Great for repurposing podcasts into written content."
            link="https://www.assemblyai.com/"
            tag="audio transcription"
          />
          <ToolItem
            title="Podchaser"
            description="If you want to download a whole podcast audio that's on Spotify. They don't have my episodes cause I never got big enough smh (but pretty much every other one is on there)."
            link="https://www.podchaser.com/"
            tag="podcasts"
          />
          <ToolItem
            title="ManyChat"
            description="You know those like, 'Comment Free below and I'll send you this guide.' Then after you do they send it to you automatically. They use ManyChat for that."
            link="https://manychat.com/"
            tag="instagram DMs"
          />
        </div>
      </section>

      {/* Automation & Workflow */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Automation &amp; Workflows
        </h2>
        <div className="space-y-6">
          <ToolItem
            title="N8N"
            description="If you want to build a low-code workflow. When {x} happens I want {y} action to perform. I use it heavily at Origami for ingesting call transcripts, Slack mentions, and HubSpot events into our agent system."
            link="https://n8n.io/"
            tag="agents / low-code"
          />
          <ToolItem
            title="Zapier"
            description="Essentially every application has a Zapier integration. Whole idea is that when {x} occurs perform {y} action. Some examples: when a new customer is added in Hubspot, add a row to this Google Sheet. When this Zoom recording ends, send the transcript to ChatGPT, and send them a summary in Slack."
            link="https://zapier.com/"
            tag="automation"
          />
          <ToolItem
            title="HeyReach"
            description="Let's say you have a .csv or excel file with a bunch of LinkedIn accounts of people you want to message. You can pretty much upload that list to HeyReach and schedule out a bunch of 'connection' requests then after send them a message."
            link="https://heyreach.io/"
            tag="linkedin outbound"
          />
        </div>
      </section>

      {/* Business & Ops Tools */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Business &amp; Ops Stack
        </h2>
        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
          the tools i use day-to-day at origami. i used to jump between all of these
          manually — then i built an agent that does it for me.
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <StackItem name="Stripe" description="billing & invoicing" />
          <StackItem name="HubSpot" description="CRM & deal tracking" />
          <StackItem name="Vitally" description="customer success" />
          <StackItem name="Clerk" description="auth & user management" />
          <StackItem name="PostHog" description="product analytics" />
          <StackItem name="Supabase" description="database & backend" />
          <StackItem name="Slack" description="team communication" />
          <StackItem name="CircleBack" description="call transcripts" />
        </div>
      </section>

      {/* My Content Creation System */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          My Content Creation System
        </h2>
        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
          the low-friction system i use to create linkedin and social content.
          rooted in experience, not opinion.
        </p>
        <div className="space-y-3">
          <SystemStep
            number={1}
            text="Run a script that enters your Instagram account and outputs transcripts for every single one of your reels"
          />
          <SystemStep
            number={2}
            text="Throw those transcripts into a Claude Project"
          />
          <SystemStep
            number={3}
            text="Use something like Wispr Flow when on a walk, think out loud"
          />
          <SystemStep
            number={4}
            text="Say 'cook me up a post about [this topic], use the style of writing you see throughout all of these transcripts'"
          />
          <SystemStep
            number={5}
            text="Use Apify to download all tweets/content via API — outputs into a CSV with transcripts"
          />
        </div>
        <p className="text-zinc-400 text-xs mt-4 italic">
          the golden formula: posts rooted in things you&apos;ve done rather than your opinion.
        </p>
      </section>

      {/* Copywriting Frameworks */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Copywriting Frameworks
        </h2>
        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
          frameworks and quotes i come back to constantly. mostly from{" "}
          <span className="text-zinc-700 font-semibold">harry dry</span> and{" "}
          <span className="text-zinc-700 font-semibold">alex hormozi</span>.
        </p>

        <div className="space-y-8">
          <FrameworkBlock
            title="3 Questions About Your Finished Copy"
            author="Harry Dry"
            items={[
              "Can I visualize it?",
              "Can I falsify it? (Can you prove it true or false?)",
              "Can nobody else say this?",
            ]}
          />
          <FrameworkBlock
            title="3 Steps to Writing"
            author="Harry Dry"
            items={[
              "Who're you talking to?",
              "Having something to say.",
              "Saying it well.",
            ]}
          />
          <FrameworkBlock
            title="2 Questions Before Writing Copy"
            author="Harry Dry"
            items={[
              "What is someone's current attitude?",
              "What do I desire their post-attitude to be?",
            ]}
          />
          <FrameworkBlock
            title="Writing Tactics"
            author="Hormozi"
            items={[
              "Maximum comprehension",
              "Use less words",
              "Short words",
              "Vary sentence length",
              "Don't use adverbs",
              "You create conflict by having 'but's between every sentence",
            ]}
          />
        </div>

        {/* Quotes */}
        <div className="mt-8 space-y-4">
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
            Quotes I Keep Coming Back To
          </h3>
          <QuoteItem
            text="Taste, conviction, experience — the things that can't be outsourced to AI"
            author="Harry Dry"
          />
          <QuoteItem
            text="If a word isn't working for you, it's working against you"
            author="Kaplan's Law of Words"
          />
          <QuoteItem
            text="Two line paragraphs are like monkey-bars to a reader"
            author="Harry Dry"
          />
          <QuoteItem
            text="You don't talk, you point. Say things you can point to"
            author="Harry Dry"
          />
          <QuoteItem
            text="Persuasion = more good or less bad"
            author="Alex Hormozi"
          />
          <QuoteItem
            text="Accurately describe a prospect's pain in their own language, in their own experiences, you can persuade them to buy whatever your product is"
            author="Alex Hormozi"
          />
          <QuoteItem
            text="If you can ever make your customer feel like they're making a smart decision, you're doing something right"
            author="Harry Dry"
          />
          <QuoteItem
            text="Newsletters and posts should be more about the letter and less about the news"
            author="Unknown"
          />
        </div>
      </section>

      {/* Books */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Books That Shaped Me
        </h2>
        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
          started reading in high school. got deep into stoicism and self-help
          during covid. these are the ones that stuck.
        </p>
        <div className="space-y-6">
          <BookItem
            title="Can't Hurt Me"
            author="David Goggins"
            note="Read this in 2019 and it got me deep into the self-help space. Completely changed how I think about discipline and what's possible."
          />
          <BookItem
            title="12 Rules for Life"
            author="Jordan Peterson"
            note="One of the first books that got me thinking about meaning and responsibility. Packed it on every trip."
          />
          <BookItem
            title="Rich Dad Poor Dad"
            author="Robert Kiyosaki"
            note="Started reading this during covid. Shifted how I think about money and assets vs. liabilities."
          />
          <BookItem
            title="7 Habits of Highly Effective People"
            author="Stephen Covey"
            note="Read this multiple times in high school. The idea of 'begin with the end in mind' stuck with me."
          />
        </div>
      </section>

      {/* Podcasts I Listen To */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Podcasts That Influenced Me
        </h2>
        <div className="space-y-6">
          <BookItem
            title="Jesse Itzler Podcast"
            author="Jesse Itzler"
            note="Started listening at the beginning of 2025. It was very romantic to me, the idea of having 9 months to change my life. Later made content for him with SEI."
          />
          <BookItem
            title="My First Million"
            author="Sam Parr & Shaan Puri"
            note="Over 600k on YouTube and a top-ranked entrepreneurship podcast. Emailed back and forth with them about coming down to UIUC — even hosted a pitch competition inspired by them."
          />
          <BookItem
            title="Tim Ferriss Show"
            author="Tim Ferriss"
            note="Listened for tips on improving my own podcast. His interview style influenced how I ran my student founder interviews."
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">My Tech Stack</h2>
        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
          what i build with day-to-day.
        </p>
        <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm text-zinc-500">
          <div>
            <span className="text-zinc-900 font-semibold">frontend</span>
            <p>react, next.js, tailwind</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">backend</span>
            <p>node.js, express, python, fastapi</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">ai / agents</span>
            <p>claude api, mcp, openai, langchain, agno</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">infra</span>
            <p>vercel, render, supabase, railway, aws</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">database</span>
            <p>postgresql (via supabase)</p>
          </div>
          <div>
            <span className="text-zinc-900 font-semibold">auth</span>
            <p>clerk</p>
          </div>
        </div>
      </section>

      {/* Job Resources */}
      <section>
        <h2 className="text-lg font-bold text-zinc-900 mb-6">
          Other Resources
        </h2>
        <div className="space-y-6">
          <ToolItem
            title="Guide on Pacing in Copywriting"
            description="Learn how to control the rhythm and flow of your writing to keep readers engaged."
            link="https://www.notion.so/Pacing-in-Copywriting-The-Practical-Guide-1b6e73ee17ec804cb34bd2ecd4548371"
            tag="writing"
          />
          <ToolItem
            title="Application for Inflection Grants"
            description="A detailed example of a successful grant application. Use as a template."
            link="https://www.notion.so/Application-for-Inflection-Grants-181e73ee17ec8003976fd436b3f5eb27"
            tag="career"
          />
        </div>
      </section>
    </InnerLayout>
  )
}

interface ToolItemProps {
  title: string
  description: string
  link: string
  tag: string
}

function ToolItem({ title, description, link, tag }: ToolItemProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border-b border-zinc-100 pb-5"
    >
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-500 transition-colors">
          {title}
        </h3>
        <span className="text-xs text-zinc-400 uppercase flex-shrink-0">
          {tag}
        </span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </Link>
  )
}

function StackItem({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <div>
      <span className="text-sm font-semibold text-zinc-900">{name}</span>
      <p className="text-xs text-zinc-400">{description}</p>
    </div>
  )
}

function SystemStep({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xs font-bold text-zinc-300 mt-0.5 flex-shrink-0">
        {number}.
      </span>
      <p className="text-sm text-zinc-600 leading-relaxed">{text}</p>
    </div>
  )
}

function FrameworkBlock({
  title,
  author,
  items,
}: {
  title: string
  author: string
  items: string[]
}) {
  return (
    <div className="border-b border-zinc-100 pb-6">
      <h3 className="text-sm font-semibold text-zinc-900 mb-1">{title}</h3>
      <p className="text-xs text-zinc-400 mb-3">{author}</p>
      <ol className="space-y-1.5">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-zinc-600 flex items-start gap-2">
            <span className="text-zinc-300 flex-shrink-0">{index + 1}.</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}

function QuoteItem({ text, author }: { text: string; author: string }) {
  return (
    <div className="border-l-2 border-zinc-100 pl-4">
      <p className="text-sm text-zinc-600 italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-xs text-zinc-400 mt-1">— {author}</p>
    </div>
  )
}

function BookItem({
  title,
  author,
  note,
}: {
  title: string
  author: string
  note: string
}) {
  return (
    <div className="border-b border-zinc-100 pb-5">
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      <p className="text-xs text-zinc-400 mt-0.5">{author}</p>
      <p className="text-sm text-zinc-500 leading-relaxed mt-2">{note}</p>
    </div>
  )
}
