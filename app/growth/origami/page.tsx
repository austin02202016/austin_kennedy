import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Origami SEO Case Study — Austin Kennedy",
  description:
    "Zero to 42.2K impressions on a brand-new domain. 3.53K clicks, 8.4% CTR (4.4x industry benchmark), avg position 8.3. Zero paid spend.",
  alternates: {
    canonical: `${SITE_URL}/growth/origami`,
  },
  openGraph: {
    title: "Origami SEO Case Study — Austin Kennedy",
    description:
      "Bought a domain. Built a search engine magnet. 42.2K impressions, $0 paid.",
    url: `${SITE_URL}/growth/origami`,
  },
  twitter: {
    card: "summary",
    title: "Origami SEO Case Study — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

/* ─── helpers (same pattern as northlight) ─── */

function StatCard({ label, value, unit, context }: { label: string; value: string; unit?: string; context: string }) {
  return (
    <div className="border border-zinc-200 p-5">
      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-3">{label}</p>
      <p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
        {value}
        {unit && <span className="text-blue-500 text-lg ml-0.5">{unit}</span>}
      </p>
      <p className="text-xs text-zinc-400 mt-2 font-mono">{context}</p>
    </div>
  )
}

function DeltaCard({ label, value, context }: { label: string; value: string; context: string }) {
  return (
    <div className="p-5 border border-zinc-200">
      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-2">{label}</p>
      <p className="text-2xl md:text-3xl font-bold tracking-tight text-blue-500">{value}</p>
      <p className="text-xs text-zinc-400 mt-1 font-mono">{context}</p>
    </div>
  )
}

function SectionHeader({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return (
    <div className="flex items-baseline gap-6 mb-8 pt-16 border-t border-zinc-200">
      <span className="font-mono text-3xl text-zinc-300 font-light">{number}</span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{kicker}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">{title}</h2>
      </div>
    </div>
  )
}

/* ─── main page ─── */

export default function OrigamiPage() {
  return (
    <div className="min-h-screen bg-white font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* back link */}
        <Link
          href="/growth"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
        >
          &larr; Back to growth
        </Link>

        {/* ═══ MASTHEAD ═══ */}
        <div className="flex items-center gap-3 mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicons/origami.png"
            alt="Origami"
            width={28}
            height={28}
            className="rounded"
          />
          <div className="flex items-baseline gap-3">
            <Link
              href="https://origami.chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-zinc-900 hover:text-blue-500 transition-colors tracking-tight"
            >
              origami.chat
            </Link>
            <span className="text-xs text-zinc-400">Case Study · 001</span>
          </div>
        </div>

        {/* ═══ HERO ═══ */}
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
          Bought a domain. Built a search engine magnet.
        </h1>

        <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl mb-3">
          origami purchased{" "}
          <Link href="https://origami.chat" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            origami.chat
          </Link>{" "}
          in january. i built the entire website from scratch and owned seo &amp; aeo from day
          one as founding engineer. by the time i handed it off, the infrastructure was already
          compounding — and it kept compounding after i left.
        </p>

        <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider mb-8">
          source · google search console · origami.chat · jan 28 – mar 23
        </p>

        {/* info strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-12">
          {[
            { label: "Client", value: "Origami (YC F24)" },
            { label: "Role", value: "Founding Eng." },
            { label: "Tenure", value: "Jan → Mar 2026" },
            { label: "Scope", value: "SEO/AEO, 0→1 Web Dev" },
          ].map((d) => (
            <div key={d.label} className="bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{d.label}</p>
              <p className="text-sm font-bold text-zinc-900 tracking-tight">{d.value}</p>
            </div>
          ))}
        </div>

        {/* external links */}
        <div className="flex flex-wrap gap-4 mb-12 text-xs font-mono">
          <Link href="https://origami.chat" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            origami.chat &rarr;
          </Link>
          <Link href="https://origami.chat/pricing" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            pricing &rarr;
          </Link>
          <Link href="https://origami.chat/products/ai-research-agents" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            ai research agents &rarr;
          </Link>
          <Link href="https://origami.chat/products/data-enrichment" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            data enrichment &rarr;
          </Link>
          <Link href="https://origami.chat/blog" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            blog &rarr;
          </Link>
          <Link href="https://docs.origami.chat" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            api docs &rarr;
          </Link>
          <Link href="https://x.com/origamichat" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            twitter &rarr;
          </Link>
          <Link href="https://www.linkedin.com/company/99440945" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            linkedin &rarr;
          </Link>
        </div>

        {/* ═══ TL;DR ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-16">
          <StatCard label="Total Impressions" value="42.2" unit="K" context="across 54 days · from a zero-authority domain" />
          <StatCard label="Total Clicks" value="3.53" unit="K" context="qualified organic traffic to the product" />
          <StatCard label="Average CTR" value="8.4" unit="%" context="industry benchmark: 1.9% · this is 4.4x that" />
          <StatCard label="Average Position" value="8.3" context="front-page of google, on average, at every query" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* 01 — THE CURVE                             */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="01" kicker="The Curve" title="From a flat line to a vertical takeoff." />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          the domain was brand new when i joined — no backlinks, no indexed pages, no authority.
          for weeks, the seo graph was a flat line at the bottom of the axis. then it broke.
        </p>

        {/* clicks & impressions dual-axis chart */}
        <div className="border border-zinc-200 p-6 md:p-8 my-6">
          <p className="font-bold text-zinc-900 tracking-tight text-lg mb-0.5">Clicks &amp; Impressions · 54 days</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-8">
            Source · Google Search Console · origami.chat · Jan 28 — Mar 23
          </p>
          <svg viewBox="0 0 740 280" className="w-full mx-auto" aria-label="Clicks and impressions over 54 days">
            <defs>
              <linearGradient id="impGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="clickGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* grid */}
            <line x1="55" y1="30" x2="700" y2="30" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="55" y1="100" x2="700" y2="100" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="55" y1="170" x2="700" y2="170" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="55" y1="230" x2="700" y2="230" stroke="#27272a" strokeWidth="1" />

            {/* left y axis — clicks */}
            <text x="48" y="34" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#3b82f6">1,200</text>
            <text x="48" y="104" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#3b82f6">800</text>
            <text x="48" y="174" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#3b82f6">400</text>
            <text x="48" y="234" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">0</text>

            {/* right y axis — impressions */}
            <text x="710" y="34" textAnchor="start" fontFamily="monospace" fontSize="9" fill="#a78bfa">15K</text>
            <text x="710" y="104" textAnchor="start" fontFamily="monospace" fontSize="9" fill="#a78bfa">10K</text>
            <text x="710" y="174" textAnchor="start" fontFamily="monospace" fontSize="9" fill="#a78bfa">5K</text>
            <text x="710" y="234" textAnchor="start" fontFamily="monospace" fontSize="9" fill="#a1a1aa">0</text>

            {/* handoff line at Mar 18 — day 49 of 54, so 91% through */}
            {/* x range: 80 to 680 = 600px. 91% = x 626 */}
            <line x1="626" y1="10" x2="626" y2="230" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="626" y="8" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#ef4444" fontWeight="600">HANDOFF · MAR 18</text>

            {/* tenure bracket */}
            <line x1="80" y1="250" x2="626" y2="250" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="80" y1="246" x2="80" y2="254" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="626" y1="246" x2="626" y2="254" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="353" y="264" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#3b82f6">MY TENURE · JAN 28 → MAR 18</text>

            {/* 5 days post-handoff label */}
            <text x="653" y="264" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#a1a1aa">+5d</text>

            {/* impressions curve (purple) — flat then hockey-stick within tenure */}
            {/* 54 days, 8 weekly points. x step ~86px from 80 to 680 */}
            {/* Weekly approx impr: 0, 20, 100, 400, 1.5K, 5K, 10K, 13K (last point is post-handoff) */}
            <path d={`M 80 229 L 166 229 L 252 228 L 338 224 L 424 210 L 510 163 L 596 97 L 680 57 L 680 230 L 80 230 Z`} fill="url(#impGrad)" />
            <path d={`M 80 229 L 166 229 L 252 228 L 338 224 L 424 210 L 510 163 L 596 97 L 680 57`}
              stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* clicks curve (blue) — similar shape, lower magnitude */}
            {/* Weekly approx clicks: 0, 2, 10, 40, 120, 400, 800, 1100 */}
            <path d={`M 80 230 L 166 230 L 252 228 L 338 223 L 424 210 L 510 163 L 596 97 L 680 47 L 680 230 L 80 230 Z`} fill="url(#clickGrad)" />
            <path d={`M 80 230 L 166 230 L 252 228 L 338 223 L 424 210 L 510 163 L 596 97 L 680 47`}
              stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* peak annotation — at end of chart */}
            <circle cx="680" cy="57" r="4" fill="white" stroke="#a78bfa" strokeWidth="2" />
            <circle cx="680" cy="47" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
            <text x="610" y="40" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#18181b" fontWeight="600">still climbing at cutoff</text>

            {/* x labels */}
            <text x="80" y="244" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Jan 28</text>
            <text x="338" y="244" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Feb 21</text>
            <text x="596" y="244" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Mar 14</text>
            <text x="680" y="244" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Mar 23</text>
          </svg>
          <div className="flex gap-6 mt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span><span className="inline-block w-2.5 h-2.5 bg-blue-500 mr-2 align-middle" />Clicks</span>
            <span><span className="inline-block w-2.5 h-2.5 bg-violet-400 mr-2 align-middle" />Impressions</span>
          </div>
        </div>

        <p className="text-sm text-zinc-500 leading-relaxed mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-900 font-bold block mb-1">The compound story</span>
          the data only runs 5 days past my handoff — and the curve was still climbing. that&apos;s what good seo infrastructure looks like.
        </p>

        <div className="grid grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 mb-6">
          <DeltaCard label="Flat line" value="~60d" context="of near-zero at the start" />
          <DeltaCard label="First spike" value="30d" context="for the first major breakout" />
          <DeltaCard label="Peak daily" value="13K+" context="impressions in a single day" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* 02 — THE QUERIES                           */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="02" kicker="The Queries" title="Ranking for the right words." />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          branded volume validates recognition. non-branded volume is where i expanded the surface
          area — ranking for product categories{" "}
          <Link href="https://origami.chat" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            origami
          </Link>{" "}
          actively competes in.
        </p>

        {/* queries table */}
        <div className="border border-zinc-200 my-6">
          <div className="grid grid-cols-[1fr_80px] border-b border-zinc-200 bg-zinc-50 px-5">
            <p className="py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400">Query · top 10 over 54 days</p>
            <p className="py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-right">Clicks</p>
          </div>
          {[
            { query: "origami ai", clicks: "1,445", branded: true },
            { query: "origami chat", clicks: "327", branded: true },
            { query: "origami", clicks: "222", branded: true },
            { query: "origami.chat", clicks: "176", branded: true },
            { query: "origami leads", clicks: "105", branded: false },
            { query: "oragami ai", clicks: "58", branded: true, note: "misspelling" },
            { query: "origami tool outreach", clicks: "55", branded: false },
            { query: "origami agents", clicks: "39", branded: false },
            { query: "origami lead generation", clicks: "39", branded: false },
            { query: "origami ai tool", clicks: "35", branded: false },
          ].map((row) => (
            <div key={row.query} className="grid grid-cols-[1fr_80px] border-b border-zinc-100 last:border-b-0 px-5 hover:bg-zinc-50 transition-colors">
              <div className="py-3 flex items-center gap-2">
                <p className={`text-sm ${row.branded ? "text-zinc-700" : "text-blue-500 font-semibold"}`}>
                  {row.query}
                </p>
                {row.note && (
                  <span className="text-[10px] text-zinc-400 border border-zinc-200 px-1 py-0.5">{row.note}</span>
                )}
              </div>
              <p className="py-3 text-sm font-mono text-zinc-900 text-right font-semibold">{row.clicks}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mb-6 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-zinc-400">
            <span className="inline-block w-2.5 h-2.5 bg-zinc-300 mr-2 align-middle" />Branded
          </span>
          <span className="text-blue-500">
            <span className="inline-block w-2.5 h-2.5 bg-blue-500 mr-2 align-middle" />Non-branded · category capture
          </span>
        </div>

        <p className="text-sm text-zinc-500 leading-relaxed mb-4">
          the site now ranks for &quot;origami leads,&quot; &quot;origami agents,&quot; and
          &quot;origami lead generation.&quot; that&apos;s{" "}
          <strong className="text-zinc-900">category capture</strong>, not just name recognition.
        </p>

        {/* ═══════════════════════════════════════════ */}
        {/* 03 — THE POSITION                          */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="03" kicker="The Position" title="Front page, every time." />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          average position across every query{" "}
          <Link href="https://origami.chat" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            origami
          </Link>{" "}
          ranks for is 8.3 — meaning the site lives on page one of google, at the average query.
          that&apos;s the real moat.
        </p>

        {/* position gauge */}
        <div className="border border-zinc-200 p-6 md:p-8 my-6">
          <div className="flex items-baseline gap-3 mb-6">
            <p className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight">8.3</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Avg. Position</p>
          </div>
          <svg viewBox="0 0 600 60" className="w-full max-w-xl" aria-label="Position gauge showing 8.3 average">
            {/* track */}
            <rect x="0" y="20" width="600" height="20" rx="2" fill="#f4f4f5" />
            {/* page 1 zone */}
            <rect x="0" y="20" width={600 * (10 / 25)} height="20" rx="2" fill="#dbeafe" />
            {/* position marker */}
            <rect x={600 * (8.3 / 25) - 3} y="14" width="6" height="32" rx="1" fill="#3b82f6" />
            {/* labels */}
            <text x="0" y="14" fontFamily="monospace" fontSize="9" fill="#a1a1aa">#1</text>
            <text x={600 * (5 / 25)} y="14" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">#5</text>
            <text x={600 * (10 / 25)} y="56" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#3b82f6">#10 · PAGE 1</text>
            <text x={600 * (15 / 25)} y="14" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">#15</text>
            <text x={600 * (20 / 25)} y="14" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">#20</text>
            <text x="600" y="14" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">#25+</text>
          </svg>
        </div>

        {/* CTR comparison */}
        <div className="border border-zinc-200 p-6 md:p-8 my-6">
          <p className="font-bold text-zinc-900 tracking-tight text-lg mb-0.5">Click-through rate · 8.4%</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-8">
            vs. industry benchmark of 1.9% (SaaS average)
          </p>
          <svg viewBox="0 0 600 180" className="w-full max-w-xl mx-auto" aria-label="CTR comparison bar chart">
            {/* grid */}
            <line x1="80" y1="40" x2="560" y2="40" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="80" y1="80" x2="560" y2="80" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="80" y1="120" x2="560" y2="120" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="80" y1="150" x2="560" y2="150" stroke="#27272a" strokeWidth="1" />

            {/* industry bar — 1.9% → height proportional to 10% max */}
            <rect x="180" y={150 - (1.9 / 10) * 110} width="100" height={(1.9 / 10) * 110} fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1" />
            <text x="230" y={142 - (1.9 / 10) * 110} textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#71717a" fontWeight="600">1.9%</text>
            <text x="230" y="168" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">INDUSTRY AVG</text>

            {/* origami bar — 8.4% */}
            <rect x="340" y={150 - (8.4 / 10) * 110} width="100" height={(8.4 / 10) * 110} fill="#3b82f6" />
            <text x="390" y={142 - (8.4 / 10) * 110} textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#18181b" fontWeight="600">8.4%</text>
            <text x="390" y="168" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#3b82f6">ORIGAMI.CHAT</text>

            {/* delta */}
            <path d={`M 288 ${150 - (1.9 / 10) * 110 - 8} Q 314 ${150 - (8.4 / 10) * 110 - 30} 332 ${150 - (8.4 / 10) * 110 - 8}`} stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
            <text x="310" y={150 - (8.4 / 10) * 110 - 34} textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#3b82f6" fontWeight="700">+6.5 pts · 4.4x</text>
          </svg>
        </div>

        <p className="text-sm text-zinc-500 leading-relaxed mb-4">
          <strong className="text-zinc-900">8.4% CTR at position 8.3</strong> means the meta titles,
          descriptions, and snippets are doing their job. this is copywriting that compounds.
        </p>

        {/* ═══════════════════════════════════════════ */}
        {/* 04 — THE PLAYBOOK                          */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="04" kicker="The Playbook" title="What I actually shipped." />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          numbers without mechanics are marketing. here&apos;s the actual work that produced them.
        </p>

        <div className="space-y-0 border border-zinc-200 divide-y divide-zinc-200 mb-12">
          {[
            {
              num: "01",
              title: "Programmatic content pipeline",
              desc: "Built a system to generate long-tail SEO pages at scale. Every \"origami vs [competitor]\" and \"origami for [use case]\" page is a search-intent capture point — engineered, not hand-written.",
              output: "Indexed pages",
            },
            {
              num: "02",
              title: "AEO for the LLM era",
              desc: "Structured content for answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) — not just traditional SERPs. Schema markup, clean Q&A structure, citation-ready writing.",
              output: "LLM discoverability",
            },
            {
              num: "03",
              title: "Category keyword capture",
              desc: "Targeted non-branded intent queries — \"lead generation,\" \"outreach tool,\" \"AI agents\" — not just protecting branded search. This is how you grow beyond the people who already know you exist.",
              output: "5 non-branded top-10 rankings",
            },
            {
              num: "04",
              title: "Conversion-tuned meta",
              desc: "Every title tag and meta description written to earn the click, not just fill the slot. Result: 8.4% CTR versus the 1.9% industry average — 4.4x better at turning impressions into visits.",
              output: "4.4x benchmark CTR",
            },
            {
              num: "05",
              title: "Technical SEO foundation",
              desc: "Sitemaps, indexing signals, canonical URLs, internal linking architecture, page speed, mobile-first. The boring infrastructure that lets every other lever actually pull.",
              output: "Crawlable, indexable, fast",
            },
            {
              num: "06",
              title: "Handoff built to last",
              desc: "The curve was still climbing when the data cuts off 5 days after I left. I built systems, not spreadsheets. The work keeps compounding without my hand on the wheel.",
              output: "Self-propelling engine",
            },
          ].map((item) => (
            <div key={item.num} className="p-5 md:p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-sm text-zinc-300">{item.num}</span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">{item.title}</h3>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed ml-10 mb-2">{item.desc}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-blue-500 ml-10">
                Output · {item.output}
              </p>
            </div>
          ))}
        </div>

        {/* ═══ CLOSING ═══ */}
        <div className="border-t-2 border-b-2 border-zinc-900 py-8 my-12">
          <p className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-snug max-w-lg">
            Zero to <span className="text-blue-500">42K impressions</span> from a brand-new domain.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 mb-12">
          <DeltaCard label="Paid spend" value="$0" context="entirely organic" />
          <DeltaCard label="Domain age at start" value="0d" context="brand new, zero authority" />
          <DeltaCard label="CTR vs industry" value="4.4x" context="benchmark" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-zinc-200">
          <div>
            <p className="text-lg font-bold text-zinc-900 tracking-tight">Austin Kennedy</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              <Link href="/" className="hover:text-blue-500 transition-colors">austnkennedy.com</Link>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 leading-loose">
              Founding Engineer · Origami<br />
              <span className="text-zinc-900 font-bold">Jan 2026 → Mar 2026</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
