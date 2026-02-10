import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { SITE_URL } from "@/lib/constants"
import { FAQSchema } from "@/components/blog/Schema"

export const metadata: Metadata = {
  title: "The Self-Taught Engineer Guide — Austin Kennedy",
  description:
    "How I went from zero engineering knowledge to founding engineer at a YC startup in 8 months. The exact tools, stack, and 80/20 lessons — no CS degree required.",
  alternates: {
    canonical: `${SITE_URL}/guide`,
  },
  openGraph: {
    title: "The Self-Taught Engineer Guide — Austin Kennedy",
    description:
      "How I went from zero engineering knowledge to founding engineer at a YC startup in 8 months. The exact tools, stack, and 80/20 lessons.",
    url: `${SITE_URL}/guide`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Self-Taught Engineer Guide — Austin Kennedy",
    description:
      "Zero to founding engineer at a YC startup in 8 months. The full playbook.",
    creator: "@astnkennedy",
  },
}

const guideFAQ = [
  {
    question: "How do I become a self-taught software engineer?",
    answer:
      "Start by building real projects, not watching tutorials. Pick one stack (Next.js + Node.js is a great start), deploy to Vercel, and iterate. Use AI tools like Cursor and Claude to accelerate your learning. The key is shipping — build something every week.",
  },
  {
    question: "What tools do self-taught engineers use in 2026?",
    answer:
      "The modern self-taught engineer stack includes: Cursor (AI-powered IDE), Claude and ChatGPT (for coding help), V0 (for frontend generation), Vercel (for deployment), Supabase (for database), and n8n (for automation workflows).",
  },
  {
    question: "Can you become an engineer without a CS degree?",
    answer:
      "Yes. Austin Kennedy became a founding engineer at Origami (YC F24) with a Finance degree. The key is building real projects, working alongside experienced engineers, and going deep on one stack rather than dabbling in everything.",
  },
]

export default function GuidePage() {
  return (
    <>
      <FAQSchema questions={guideFAQ} />
      <div className="min-h-screen bg-white font-mono">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
          >
            &larr; Back to home
          </Link>

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            THE SELF-TAUGHT ENGINEER GUIDE
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4">
            how i went from zero engineering knowledge to founding engineer at a
            yc startup in 8 months. the exact tools, stack, and 80/20 lessons.
            no cs degree required.
          </p>
          <p className="text-zinc-400 text-xs mb-12">
            by{" "}
            <a
              href="https://x.com/astnkennedy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 underline underline-offset-2"
            >
              austin kennedy
            </a>{" "}
            · founding engineer @{" "}
            <a
              href="https://origami.chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 underline underline-offset-2"
            >
              origami (yc f24)
            </a>
          </p>

          {/* Table of Contents */}
          <nav className="mb-14 border border-zinc-100 rounded-md p-5">
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
              Table of Contents
            </h2>
            <div className="space-y-2">
              <TOCLink href="#context" label="0. Context — Who This Is For" />
              <TOCLink href="#stack" label="1. The Stack (Pick One, Go Deep)" />
              <TOCLink href="#tools" label="2. The Tools That Changed Everything" />
              <TOCLink href="#phases" label="3. The Three Phases" />
              <TOCLink href="#agents" label="4. How I Built 6 AI Agents" />
              <TOCLink href="#deploy" label="5. Deploying Everything" />
              <TOCLink href="#copywriter" label="6. The AI Copywriter (Side Project)" />
              <TOCLink href="#mistakes" label="7. Mistakes I Made" />
              <TOCLink href="#still-learning" label="8. What I'm Still Learning" />
              <TOCLink href="#resources" label="9. Every Resource I Used" />
            </div>
          </nav>

          {/* --- SECTION 0: CONTEXT --- */}
          <Section id="context" title="0. Context — Who This Is For">
            <P>
              Eight months ago I knew nothing about engineering. I had a Finance
              degree from UIUC. I was building $200 websites for small
              businesses. I didn&apos;t know what an API was.
            </P>
            <P>
              Now I&apos;m a founding engineer at{" "}
              <ExtLink href="https://origami.chat">Origami (YC F24)</ExtLink>{" "}
              doing everything from back-end infrastructure to design engineering to
              AI agent development. I built 6 AI agents that automated my
              entire operations job — went from 40+ hours of manual work to about
              10.
            </P>
            <P>
              I&apos;m not claiming to be the best at any of this. But I learned
              the 80/20 of all these things, and most of the practical lessons
              are in this guide.
            </P>
            <P>
              <strong>This guide is for you if:</strong>
            </P>
            <UL>
              <li>You don&apos;t have a CS degree (neither do I)</li>
              <li>You want to learn engineering fast, not &quot;properly&quot;</li>
              <li>You&apos;re willing to build ugly things and ship them</li>
              <li>You want to know what tools actually matter in 2026</li>
            </UL>
            <P>
              <strong>This guide is NOT for you if:</strong>
            </P>
            <UL>
              <li>You want a comprehensive CS education</li>
              <li>You&apos;re already a senior engineer</li>
              <li>You want theory before practice</li>
            </UL>
          </Section>

          {/* --- SECTION 1: THE STACK --- */}
          <Section id="stack" title="1. The Stack (Pick One, Go Deep)">
            <P>
              The single biggest mistake beginners make is dabbling. They learn a
              bit of Python, then switch to Go, then try Rust, then wonder why
              they can&apos;t build anything.
            </P>
            <P>
              <strong>Pick one stack. Go deep. Build 10 things with it.</strong>
            </P>
            <P>Here&apos;s the stack I use every day at a YC startup:</P>

            <div className="my-6 grid grid-cols-2 gap-y-4 gap-x-6">
              <StackItem
                name="Frontend"
                tools="React, Next.js, Tailwind CSS"
              />
              <StackItem
                name="Backend"
                tools="Node.js, Express, Python"
              />
              <StackItem
                name="Database"
                tools="PostgreSQL via Supabase"
              />
              <StackItem name="Auth" tools="Clerk" />
              <StackItem
                name="AI / Agents"
                tools="Claude API, MCP, OpenAI"
              />
              <StackItem
                name="Hosting"
                tools="Vercel (frontend), Render (backend)"
              />
            </div>

            <P>
              <strong>Why this stack?</strong> Next.js is the most
              popular React framework. Supabase gives you a Postgres database
              with a nice UI and JS client. Vercel deploys your frontend in one
              click. And everything is in TypeScript/JavaScript, which means one
              language for your entire application.
            </P>
            <Callout>
              If I was starting from zero today, I&apos;d learn JavaScript/TypeScript
              and nothing else for 6 months. Depth beats breadth when you&apos;re
              self-taught.
            </Callout>
          </Section>

          {/* --- SECTION 2: THE TOOLS --- */}
          <Section id="tools" title="2. The Tools That Changed Everything">
            <P>
              The tools available in 2026 are insane. They didn&apos;t exist when most
              senior engineers learned to code. Use them shamelessly.
            </P>

            <ToolCard
              name="Cursor"
              url="https://cursor.com"
              tagline="AI-first code editor"
              description="Basically ChatGPT integrated into your IDE (IDE is just a fancy word for 'where you can write code and see if it actually works'). Press Cmd+I to open Agent Mode — it can search your codebase, edit files across your project, and run terminal commands autonomously. I use Opus 4.6 as my model — it's really, really good for complex tasks."
              tip="Use Plan Mode (Shift+Tab) before building anything complex. It researches your codebase first so it doesn't hallucinate."
            />

            <ToolCard
              name="Claude by Anthropic"
              url="https://claude.ai"
              tagline="LLM for writing and creative work"
              description="Whenever I want to do any copywriting, script-writing, or anything that involves creativity, I use Claude. They have a feature called 'Projects' — SUPER VALUABLE for when you want to give the LLM a ton of examples of 'what good actually looks like.' I also use the Claude API directly in my AI agents."
              tip="For coding inside Cursor, use Claude Opus 4.6. For standalone creative work, use Claude in the browser with Projects."
            />

            <ToolCard
              name="ChatGPT by OpenAI"
              url="https://chatgpt.com"
              tagline="LLM for coding and factual work"
              description="Whenever I want deep coding help, or just want 'brute-force' type of work, I use GPT. They also have a 'Deep Research' feature that I use whenever I want to get a TON of information on any given subject."
              tip="Use Deep Research before starting any project to understand the landscape of libraries and approaches."
            />

            <ToolCard
              name="V0 by Vercel"
              url="https://v0.dev"
              tagline="AI frontend generator"
              description="Create a beautiful frontend in Next.js from a prompt. It previews everything for you, uses React + Tailwind + Shadcn UI, and you can deploy to Vercel in one click. Over 4 million people have used it. When I need a UI fast, I start here."
              tip="Paste a screenshot of a design you like and say 'make this.' V0 can work from images."
            />

            <ToolCard
              name="Chrome DevTools MCP"
              url="https://github.com/nicholasgriffintn/chrome-devtools-mcp"
              tagline="AI-powered browser debugging"
              description="This is a game-changer for design engineering. It gives your AI agent (in Cursor) direct access to your live Chrome browser — it can inspect the DOM, check CSS, analyze network requests, and even click through your app. I use it to iterate on design by having the AI see what the page actually looks like, not just what the code says."
              tip="Pair this with screenshots in Cursor. Take a screenshot of the bug, paste it in, and let the AI fix it with live browser context."
            />

            <ToolCard
              name="Supabase"
              url="https://supabase.com"
              tagline="Database + auth + storage"
              description="PostgreSQL via Supabase is working incredibly well for us. You get a full Postgres database with a nice dashboard, JavaScript client, and real-time subscriptions. It's basically Firebase but with a real database."
              tip="Use the Supabase JS client for reads and the service_role key for writes from your backend."
            />
          </Section>

          {/* --- SECTION 3: THE THREE PHASES --- */}
          <Section id="phases" title="3. The Three Phases">
            <P>
              Looking back, my learning happened in three distinct phases. Each
              one required a different approach.
            </P>

            <PhaseCard
              number="01"
              title="Build Ugly Things (Months 1-2)"
              description="Your only goal is to ship something. It doesn't matter if the code is terrible. It doesn't matter if you'd be embarrassed for anyone to see it. The point is proving to yourself that you can make a computer do what you want."
            >
              <UL>
                <li>Build a personal website with Next.js and deploy it on Vercel</li>
                <li>Build a simple CRUD app (todo list, notes app, anything)</li>
                <li>Connect to a database (Supabase) and read/write data</li>
                <li>Use an AI API (Claude or OpenAI) for one feature</li>
              </UL>
              <Callout>
                I started by building $200 websites for small businesses. The code
                was awful. But each one was a problem I&apos;d never solved before, and
                every bug I fixed was a concept I&apos;d never encountered. Client work
                forced me to ship.
              </Callout>
            </PhaseCard>

            <PhaseCard
              number="02"
              title="Build Alongside Better People (Months 3-5)"
              description="This is where the real acceleration happens. You need to be in an environment where you're the worst engineer in the room. Reading production code teaches you how problems get solved in the real world."
            >
              <UL>
                <li>Join a startup, open-source project, or find a mentor</li>
                <li>Read more code than you write — study how production apps are structured</li>
                <li>Learn Git properly (push more, brother)</li>
                <li>Start building features end-to-end: database → API → frontend</li>
              </UL>
              <Callout>
                At Origami, I was surrounded by engineers who had years of
                experience I didn&apos;t. I learned more in my first month than in a
                year of solo study. The environment matters more than the curriculum.
              </Callout>
            </PhaseCard>

            <PhaseCard
              number="03"
              title="Build Things That Automate Your Job (Months 6-8)"
              description="Now you have enough context to see the opportunities. Look at where your team spends time on repetitive work. Build agents and tools that eliminate it. This is where engineering becomes magic."
            >
              <UL>
                <li>Identify your team&apos;s most repetitive workflows</li>
                <li>Build internal tools and AI agents to automate them</li>
                <li>Learn deployment, monitoring, and making things reliable</li>
                <li>Ship something that saves real hours every week</li>
              </UL>
              <P>
                Here&apos;s what my project stack looked like by this phase — each
                one building on the last:
              </P>
              <div className="space-y-3 my-4">
                <ProjectSnapshot
                  name="TIS (The Intelligent Search)"
                  detail="Claygent replica with better functionality + screenshot tools. Deployed on Render with 3 sync API routes across 3 separate repos."
                />
                <ProjectSnapshot
                  name="ORYO-MCP"
                  detail="MCP Server for workflow generation. Working for real clients like Instafleet, Luthor, and more."
                />
                <ProjectSnapshot
                  name="Cold Outbound Consultant"
                  detail="Managed 25 client accounts and their cold outbound process. Clients averaged 15-20% response rates."
                />
                <ProjectSnapshot
                  name="Money-Collector"
                  detail="We were collecting $5k/month when I joined. After building a system to track billing and collect cash, we rose to $65k, $57k, $47k, $62k/month — all run by me."
                />
                <ProjectSnapshot
                  name="The Nest"
                  detail="I hated all my admin + account management work, so I built an MCP server with an open-source front end to automate call prep, invoice sending, and billing tracking. Essentially automated my job."
                />
              </div>
              <Callout>
                Engineering 12-13 hours a day was the norm in this phase. The
                first version of everything was a CLI tool only I could use. That
                was fine — it proved the concept. Every week I was stacking more
                proof that I could actually ship. Ship ugly, iterate fast.
              </Callout>
            </PhaseCard>
          </Section>

          {/* --- SECTION 4: THE AI AGENTS --- */}
          <Section id="agents" title="4. How I Built 6 AI Agents">
            <P>
              Two months into my role at Origami, I was spending 2-3 hours every
              day on tasks I didn&apos;t want to do — and that a computer could handle
              far more reliably. So I built{" "}
              <ExtLink href="https://github.com/austin02202016/the_nest_final">
                The Nest
              </ExtLink>{" "}
              — a set of reactive agents that automated my entire operations job.
            </P>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              What Each Agent Does
            </h3>

            <AgentCard
              name="Call Prep Agent"
              problem="Hunting through transcripts from 8 separate meetings to remember one detail a prospect mentioned."
              solution="After every Zoom call, CircleBack sends a webhook → n8n processes the transcript → the agent extracts key points, pain points, and action items → everything lands in Supabase. Before my next call, I just ask 'prep me for my call with [client].'"
            />
            <AgentCard
              name="Transcript Agent"
              problem="Manually transferring context across the org. Copy-pasting transcripts, pinging teammates for details."
              solution="Transcripts automatically land in a PostgreSQL database via n8n. They're vectorized for semantic search. Anyone on the team can query any conversation instantly."
            />
            <AgentCard
              name="Onboarding Agent"
              problem="Every closed deal meant a half-day of manual setup across Clerk, Stripe, HubSpot, Vitally, email, and Slack."
              solution="Agent picks up new deal events from HubSpot, creates the customer in Stripe, sets up the Clerk organization, configures Vitally, creates the Slack channel, and sends the welcome email. Zero manual work."
            />
            <AgentCard
              name="Billing Agent"
              problem="Navigating to Stripe, finding the right customer, creating invoices, tracking payments."
              solution="Agent handles invoice creation, payment tracking, and sends follow-ups automatically. Grew Origami revenue from $5k/month to $65k/month with this system."
            />
            <AgentCard
              name="CRM Agent"
              problem="Keeping HubSpot up to date with deal stages, contact info, and activity logs."
              solution="Auto-updates HubSpot deal properties, syncs external IDs, and logs activities after every customer interaction."
            />
            <AgentCard
              name="Slack Bot Agent"
              problem="Team members pinging me for information I'd already documented somewhere."
              solution="Listens for @Bot mentions in Slack, queries the knowledge base, and responds with context. Saved hours of back-and-forth."
            />

            <h3 className="text-base font-bold text-zinc-900 mt-10 mb-4">
              The Architecture
            </h3>
            <P>Here&apos;s how it all fits together:</P>
            <div className="my-6 space-y-3 text-sm text-zinc-600">
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">1.</span>
                <span>
                  <strong className="text-zinc-900">Triggers</strong> — Zoom
                  calls (CircleBack webhooks), Slack mentions, HubSpot deal
                  events
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">2.</span>
                <span>
                  <strong className="text-zinc-900">Ingestion (n8n)</strong> —
                  Workflows listen for events, parse data, and write tasks to
                  Supabase
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">3.</span>
                <span>
                  <strong className="text-zinc-900">Router (Node.js)</strong> —
                  Picks up tasks, determines which agent should handle them
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">4.</span>
                <span>
                  <strong className="text-zinc-900">Agent Workers (Python + Agno)</strong>{" "}
                  — Specialized agents execute tasks, update CRMs, send emails,
                  create follow-ups
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">5.</span>
                <span>
                  <strong className="text-zinc-900">Notifications</strong> —
                  Results fire back into Slack, HubSpot timelines, and email
                </span>
              </div>
            </div>

            <h3 className="text-base font-bold text-zinc-900 mt-10 mb-4">
              Tech Used
            </h3>
            <div className="my-4 grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
              <StackItem name="Workflows" tools="n8n (self-hosted or cloud)" />
              <StackItem name="Database" tools="Supabase (PostgreSQL)" />
              <StackItem name="Agent Framework" tools="Agno (Python)" />
              <StackItem name="Router" tools="Node.js + Express" />
              <StackItem name="LLM" tools="Claude API + OpenAI" />
              <StackItem name="Integrations" tools="Stripe, HubSpot, Clerk, Vitally, Slack" />
              <StackItem name="Frontend" tools="Next.js + Clerk + Supabase" />
              <StackItem name="Deployment" tools="Vercel (frontend), Render (backend)" />
            </div>

            <Callout>
              The code is open source:{" "}
              <ExtLink href="https://github.com/austin02202016/the_nest_final">
                github.com/austin02202016/the_nest_final
              </ExtLink>
            </Callout>
          </Section>

          {/* --- SECTION 5: DEPLOYING --- */}
          <Section id="deploy" title="5. Deploying Everything">
            <P>
              Deployment used to scare me. Now it&apos;s the easiest part. Here&apos;s
              exactly what I use:
            </P>

            <h3 className="text-base font-bold text-zinc-900 mt-6 mb-4">
              Frontend → Vercel
            </h3>
            <UL>
              <li>Link your GitHub repo to{" "}
                <ExtLink href="https://vercel.com">Vercel</ExtLink>
              </li>
              <li>Set your environment variables</li>
              <li>Every push to main auto-deploys</li>
              <li>That&apos;s it. Seriously.</li>
            </UL>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              Backend → Render
            </h3>
            <UL>
              <li>Go to{" "}
                <ExtLink href="https://render.com">Render</ExtLink>, click
                New → Web Service
              </li>
              <li>Connect your GitHub repo</li>
              <li>Set build command: <code className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded">npm install</code></li>
              <li>Set start command: <code className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded">node app.js</code></li>
              <li>Every push auto-deploys, just like Vercel</li>
            </UL>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              Design Iteration → Chrome DevTools MCP + Screenshots
            </h3>
            <P>
              This is my secret weapon for design engineering. Add the{" "}
              <ExtLink href="https://github.com/nicholasgriffintn/chrome-devtools-mcp">
                Chrome DevTools MCP server
              </ExtLink>{" "}
              to Cursor. Now your AI agent can:
            </P>
            <UL>
              <li>See your live browser (inspect DOM, CSS, network)</li>
              <li>Take screenshots and compare them to your design</li>
              <li>Fix layout issues by seeing what&apos;s actually rendered</li>
              <li>Click through your app like a real user</li>
            </UL>
            <P>
              Pair this with taking screenshots and pasting them directly into
              Cursor with Opus 4.6. The model sees the visual bug and fixes it
              in context. This workflow is incredibly fast.
            </P>
          </Section>

          {/* --- SECTION 6: THE AI COPYWRITER --- */}
          <Section id="copywriter" title="6. The AI Copywriter (Side Project)">
            <P>
              My copywriting background (from freelancing and running content for
              Jesse Itzler with SEI) helped me spot an opportunity: personal
              branding agencies need to produce a lot of content that sounds like
              their clients, not like AI slop.
            </P>
            <P>
              So I built an AI copywriter using Next.js + the Claude API. The key
              insight:
            </P>
            <Callout>
              Use Claude&apos;s Projects feature to feed it dozens of examples of your
              client&apos;s actual writing style. Then when you prompt it, it mimics
              their voice — not generic AI voice.
            </Callout>
            <P>The workflow I built:</P>
            <div className="my-4 space-y-3 text-sm text-zinc-600">
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">1.</span>
                <span>Run a script to grab all their Instagram reel transcripts via{" "}
                  <ExtLink href="https://apify.com">Apify</ExtLink>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">2.</span>
                <span>Throw those transcripts into a Claude Project as context</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">3.</span>
                <span>Use{" "}
                  <ExtLink href="https://wisprflow.com">Wispr Flow</ExtLink>{" "}
                  to think out loud on a walk — capture ideas via voice
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-300 flex-shrink-0 font-bold">4.</span>
                <span>
                  Prompt Claude: &quot;Cook me up a post about [topic], using the
                  writing style from these transcripts&quot;
                </span>
              </div>
            </div>
            <P>
              This went from $200 websites to applications worth thousands.
              The copywriting background + engineering skills was a unique
              combination that most engineers don&apos;t have.
            </P>
          </Section>

          {/* --- SECTION 7: MISTAKES --- */}
          <Section id="mistakes" title="7. Mistakes I Made">
            <P>
              I&apos;d be lying if I said the path was smooth. Here&apos;s what I&apos;d do
              differently:
            </P>

            <MistakeCard
              mistake="Dabbling in multiple languages instead of going deep on one"
              lesson="Pick TypeScript. Build everything with it for 6 months. You can learn other languages later."
            />
            <MistakeCard
              mistake="Watching tutorials instead of building"
              lesson="Tutorials feel productive but aren't. Build something, get stuck, Google the specific problem, fix it. That's the loop."
            />
            <MistakeCard
              mistake="Not pushing to Git enough"
              lesson="Push more, brother. Seriously. Small, frequent commits. It's a habit that saves you constantly."
            />
            <MistakeCard
              mistake="Perfectionism before shipping"
              lesson="The first version of my AI agents was a CLI tool only I could use. That was fine. It proved the concept. Ship ugly, iterate fast."
            />
            <MistakeCard
              mistake="Not learning testing early"
              lesson="Test cases and assertions — build the habit early. It's the difference between 'it works on my machine' and 'it actually works.'"
            />
            <MistakeCard
              mistake="Ignoring error messages"
              lesson="80% of debugging is reading the error message carefully. Seriously. Read it before you Google it."
            />
          </Section>

          {/* --- SECTION 8: WHAT I'M STILL LEARNING --- */}
          <Section id="still-learning" title="8. What I'm Still Learning (Honest Self-Assessment)">
            <P>
              I want to be real about this. Being self-taught means there are
              massive gaps. Acknowledging them is how you close them. Here&apos;s
              where I know I need to get better — and what I&apos;m actively
              studying.
            </P>

            <h3 className="text-base font-bold text-zinc-900 mt-6 mb-4">
              Gaps I&apos;m Closing Right Now
            </h3>

            <GapCard
              area="Testing Discipline"
              honest="I ask for test cases and some assertions exist, but a sustained testing habit isn't there yet. This is a big unlock."
              action="Building the muscle of writing tests before shipping. Even simple assertions save hours of debugging later."
            />
            <GapCard
              area="Observability (Logs, Metrics, Traces)"
              honest="Essential for agents + MCP + servers. I use Sentry but it's not yet systematic across everything I build."
              action="Learning OpenTelemetry and building proper observability into every new project from day one."
            />
            <GapCard
              area="Concurrency & Queues"
              honest="Rate-limits, exponential backoff, idempotency keys — I've hit these problems but haven't mastered them. BullMQ/Redis for job control, cancellation, and timeouts."
              action="This is critical for stable multi-agent runs and reliable batch jobs. Active area of study."
            />
            <GapCard
              area="Git Practices"
              honest="Push more, brother. Seriously. Small, frequent commits — I know this but still catch myself going too long between pushes."
              action="Building the habit of atomic commits. It's simple but makes a massive difference."
            />
            <GapCard
              area="Data Layer"
              honest="I use Postgres + Supabase heavily but haven't gone deep on schema constraints, migrations, indices, or pgvector for retrieval quality."
              action="Moving from 'it works' to 'it's properly modeled.' Less CSV thrash, more reproducible experiments."
            />
            <GapCard
              area="Security"
              honest="Input validation, output schema enforcement, token management — I know the concepts but don't apply them rigorously enough yet."
              action="Every new MCP server and API route now gets input validation from day one."
            />

            <h3 className="text-base font-bold text-zinc-900 mt-10 mb-4">
              The Bigger Picture — What&apos;s Next to Learn
            </h3>
            <P>
              Being honest about what you <em>don&apos;t</em> know is just as
              important as showing what you&apos;ve built. Here&apos;s my study
              roadmap:
            </P>

            <div className="space-y-4 my-6">
              <StudyArea
                title="Cloud Infrastructure & DevOps"
                why="I deploy to Vercel/Render now. Learning real infra (Docker internals, Kubernetes, CI/CD pipelines, Terraform) unlocks running complex pipelines reliably at scale."
              />
              <StudyArea
                title="Core Machine Learning"
                why="I use pretrained models and orchestrate them — but I haven't dug into training, loss functions, or fine-tuning. Even a light touch here lets you move from using models to tuning them for your own workflows."
              />
              <StudyArea
                title="Operating Systems Fundamentals"
                why="What is a process? A thread? How does memory work (virtual vs physical addresses)? How do caches work at each level? Understanding a single system is the prerequisite for understanding distributed systems."
              />
              <StudyArea
                title="Distributed Systems"
                why="I'm building multi-agent systems already. Understanding distributed correctness — MapReduce, consensus protocols (Raft, Paxos), sharding, replication — will be a superpower when scaling."
              />
              <StudyArea
                title="Computer Networking"
                why="TCP/IP, DNS, load balancing, protocol design (HTTP/2, gRPC). Would help debug those MCP transport/network race conditions with more rigor."
              />
              <StudyArea
                title="Design & UX Engineering"
                why="Human-computer interaction, design systems, accessibility (WCAG, ARIA). Engineering + design chops make you dangerous — you can go from idea to usable MVP solo."
              />
            </div>

            <Callout>
              The pattern I&apos;ve noticed: every time I learn the fundamentals
              behind something I was already using, my ability to debug and build
              jumps dramatically. The abstractions make more sense when you know
              what&apos;s underneath.
            </Callout>
          </Section>

          {/* --- SECTION 9: RESOURCES --- */}
          <Section id="resources" title="9. Every Resource I Used">
            <P>
              Here&apos;s everything, organized by what you need at each stage.
            </P>

            <h3 className="text-base font-bold text-zinc-900 mt-6 mb-4">
              Start Here (Day 1)
            </h3>
            <ResourceList
              items={[
                {
                  name: "Cursor",
                  url: "https://cursor.com",
                  note: "Your code editor. Download it first.",
                },
                {
                  name: "Vercel",
                  url: "https://vercel.com",
                  note: "Where you'll deploy everything. Free tier is generous.",
                },
                {
                  name: "Supabase",
                  url: "https://supabase.com",
                  note: "Your database. Create a free project.",
                },
                {
                  name: "Next.js Docs",
                  url: "https://nextjs.org/docs",
                  note: "The official docs are genuinely excellent.",
                },
              ]}
            />

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              AI Tools (Use These Daily)
            </h3>
            <ResourceList
              items={[
                {
                  name: "Claude",
                  url: "https://claude.ai",
                  note: "Creative work, copywriting, Projects feature for style matching.",
                },
                {
                  name: "ChatGPT",
                  url: "https://chatgpt.com",
                  note: "Brute-force coding help, Deep Research for learning new topics.",
                },
                {
                  name: "V0",
                  url: "https://v0.dev",
                  note: "Generate beautiful UIs from a prompt. Start here for frontend.",
                },
              ]}
            />

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              For Building Agents
            </h3>
            <ResourceList
              items={[
                {
                  name: "MCP Protocol Docs",
                  url: "https://modelcontextprotocol.io",
                  note: "The 'USB-C port for AI.' Understand this protocol.",
                },
                {
                  name: "n8n",
                  url: "https://n8n.io",
                  note: "Low-code workflow builder. When {x} happens, do {y}.",
                },
                {
                  name: "Claude API Reference",
                  url: "https://docs.anthropic.com",
                  note: "For building agents programmatically.",
                },
                {
                  name: "Chrome DevTools MCP",
                  url: "https://github.com/nicholasgriffintn/chrome-devtools-mcp",
                  note: "Give your AI agent access to your live browser.",
                },
              ]}
            />

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              Deployment
            </h3>
            <ResourceList
              items={[
                {
                  name: "Vercel",
                  url: "https://vercel.com",
                  note: "Frontend. Link repo, set env vars, push to deploy.",
                },
                {
                  name: "Render",
                  url: "https://render.com",
                  note: "Backend. Node.js and Python services. Auto-deploys from Git.",
                },
              ]}
            />

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-4">
              Content & Scraping
            </h3>
            <ResourceList
              items={[
                {
                  name: "Apify",
                  url: "https://apify.com",
                  note: "THE GOAT. Scrape data from X, LinkedIn, Instagram, TikTok.",
                },
                {
                  name: "Assembly AI",
                  url: "https://assemblyai.com",
                  note: "Audio to text transcription. Great for repurposing content.",
                },
                {
                  name: "Wispr Flow",
                  url: "https://wisprflow.com",
                  note: "Voice-to-text. Tap, talk, done. I use it on walks.",
                },
              ]}
            />
          </Section>

          {/* Closing */}
          <div className="mt-14 border-t border-zinc-100 pt-8">
            <P>
              That&apos;s the full playbook. No gatekeeping, no fluff. If you
              have questions, DM me on{" "}
              <ExtLink href="https://x.com/astnkennedy">X</ExtLink> or{" "}
              <ExtLink href="https://www.linkedin.com/in/austnkennedy/">
                LinkedIn
              </ExtLink>
              . I respond to everything.
            </P>
            <P>
              If you want to see more of what I&apos;m building, check out the{" "}
              <Link href="/blog" className="text-zinc-900 font-semibold underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-900">
                blog
              </Link>{" "}
              or{" "}
              <Link href="/projects" className="text-zinc-900 font-semibold underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-900">
                projects
              </Link>{" "}
              page.
            </P>
            <P>Now go build something.</P>
          </div>
        </div>
      </div>
    </>
  )
}

/* ---------- COMPONENTS ---------- */

function TOCLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
    >
      {label}
    </a>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-6">
        {title}
      </h2>
      {children}
    </section>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-zinc-600 leading-relaxed mb-4">{children}</p>
  )
}

function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-600 mb-4">
      {children}
    </ul>
  )
}

function ExtLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
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

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-zinc-200 pl-4 my-6">
      <p className="text-sm text-zinc-600 italic leading-relaxed">{children}</p>
    </div>
  )
}

function StackItem({ name, tools }: { name: string; tools: string }) {
  return (
    <div>
      <span className="text-sm font-semibold text-zinc-900">{name}</span>
      <p className="text-xs text-zinc-400">{tools}</p>
    </div>
  )
}

function ToolCard({
  name,
  url,
  tagline,
  description,
  tip,
}: {
  name: string
  url: string
  tagline: string
  description: string
  tip: string
}) {
  return (
    <div className="border-b border-zinc-100 pb-6 mb-6">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="text-base font-semibold text-zinc-900">{name}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors flex-shrink-0"
        >
          {url.replace("https://", "")} →
        </a>
      </div>
      <p className="text-xs text-zinc-400 mb-2">{tagline}</p>
      <p className="text-sm text-zinc-600 leading-relaxed mb-3">
        {description}
      </p>
      <div className="bg-zinc-50 border border-zinc-100 rounded px-3 py-2">
        <p className="text-xs text-zinc-500">
          <strong className="text-zinc-700">My tip:</strong> {tip}
        </p>
      </div>
    </div>
  )
}

function PhaseCard({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="border border-zinc-100 rounded-md p-5 mb-6">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-xs font-bold text-zinc-300">{number}</span>
        <h3 className="text-base font-bold text-zinc-900">{title}</h3>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed mb-4">
        {description}
      </p>
      {children}
    </div>
  )
}

function AgentCard({
  name,
  problem,
  solution,
}: {
  name: string
  problem: string
  solution: string
}) {
  return (
    <div className="border-b border-zinc-100 pb-5 mb-5">
      <h4 className="text-sm font-bold text-zinc-900 mb-2">{name}</h4>
      <p className="text-sm text-zinc-500 mb-2">
        <strong className="text-zinc-700">Problem:</strong> {problem}
      </p>
      <p className="text-sm text-zinc-600 leading-relaxed">
        <strong className="text-zinc-700">Solution:</strong> {solution}
      </p>
    </div>
  )
}

function MistakeCard({
  mistake,
  lesson,
}: {
  mistake: string
  lesson: string
}) {
  return (
    <div className="border-b border-zinc-100 pb-4 mb-4">
      <p className="text-sm text-zinc-500 mb-1">
        <strong className="text-zinc-700">Mistake:</strong> {mistake}
      </p>
      <p className="text-sm text-zinc-600">
        <strong className="text-zinc-700">Lesson:</strong> {lesson}
      </p>
    </div>
  )
}

function GapCard({
  area,
  honest,
  action,
}: {
  area: string
  honest: string
  action: string
}) {
  return (
    <div className="border-b border-zinc-100 pb-4 mb-4">
      <h4 className="text-sm font-bold text-zinc-900 mb-1">{area}</h4>
      <p className="text-sm text-zinc-500 mb-1">
        <strong className="text-zinc-700">Honest take:</strong> {honest}
      </p>
      <p className="text-sm text-zinc-600">
        <strong className="text-zinc-700">What I&apos;m doing:</strong> {action}
      </p>
    </div>
  )
}

function StudyArea({ title, why }: { title: string; why: string }) {
  return (
    <div className="bg-zinc-50 border border-zinc-100 rounded px-4 py-3">
      <h4 className="text-sm font-bold text-zinc-900 mb-1">{title}</h4>
      <p className="text-xs text-zinc-500 leading-relaxed">{why}</p>
    </div>
  )
}

function ProjectSnapshot({
  name,
  detail,
}: {
  name: string
  detail: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-zinc-300 flex-shrink-0 font-bold text-sm">-</span>
      <div>
        <span className="text-sm font-semibold text-zinc-900">{name}</span>
        <p className="text-xs text-zinc-500 leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}

function ResourceList({
  items,
}: {
  items: { name: string; url: string; note: string }[]
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-500 transition-colors">
              {item.name}
            </span>
            <span className="text-xs text-zinc-300 group-hover:text-zinc-500 transition-colors">
              →
            </span>
          </div>
          <p className="text-xs text-zinc-400">{item.note}</p>
        </a>
      ))}
    </div>
  )
}
