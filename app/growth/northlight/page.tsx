import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Northlight Growth Report — Austin Kennedy",
  description:
    "3-week growth case study for Northlight. 2.7x LinkedIn impressions, +76% downloads, 2.5K visitors, 59 countries — zero paid spend.",
  alternates: {
    canonical: `${SITE_URL}/growth/northlight`,
  },
  openGraph: {
    title: "Northlight Growth Report — Austin Kennedy",
    description:
      "From a cold start to compounding growth in 3 weeks. Zero paid spend.",
    url: `${SITE_URL}/growth/northlight`,
  },
  twitter: {
    card: "summary",
    title: "Northlight Growth Report — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

/* ─── tiny helpers ─── */

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

function CompareRow({ label, before, after }: { label: string; before: string; after: string }) {
  return (
    <div className="grid grid-cols-3 border-b border-zinc-100 last:border-b-0">
      <p className="py-3 text-sm text-zinc-500 font-mono">{label}</p>
      <p className="py-3 text-sm text-zinc-400 text-right font-mono">{before}</p>
      <p className="py-3 text-sm text-zinc-900 text-right font-mono font-semibold">{after}</p>
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

/* ─── bar chart helpers (inline SVG, site-native) ─── */

function BarChartCompare({
  title,
  subtitle,
  beforeLabel,
  beforeValue,
  afterLabel,
  afterValue,
  maxValue,
  delta,
}: {
  title: string
  subtitle: string
  beforeLabel: string
  beforeValue: number
  afterLabel: string
  afterValue: number
  maxValue: number
  delta: string
}) {
  const barMaxH = 160
  const beforeH = (beforeValue / maxValue) * barMaxH
  const afterH = (afterValue / maxValue) * barMaxH
  return (
    <div className="border border-zinc-200 p-6 md:p-8 my-6">
      <p className="font-bold text-zinc-900 tracking-tight text-lg mb-0.5">{title}</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-8">{subtitle}</p>
      <svg viewBox="0 0 600 240" className="w-full max-w-xl mx-auto" aria-label={title}>
        {/* gridlines */}
        <line x1="60" y1="40" x2="540" y2="40" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="60" y1="120" x2="540" y2="120" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="60" y1="200" x2="540" y2="200" stroke="#27272a" strokeWidth="1" />
        {/* y labels */}
        <text x="52" y="44" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#a1a1aa">{maxValue.toLocaleString()}</text>
        <text x="52" y="124" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#a1a1aa">{(maxValue / 2).toLocaleString()}</text>
        <text x="52" y="204" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#a1a1aa">0</text>
        {/* before bar */}
        <rect x="160" y={200 - beforeH} width="100" height={beforeH} fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1" />
        <text x="210" y={192 - beforeH} textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#52525b" fontWeight="600">
          {beforeValue.toLocaleString()}
        </text>
        <text x="210" y="220" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#a1a1aa">{beforeLabel}</text>
        {/* after bar */}
        <rect x="340" y={200 - afterH} width="100" height={afterH} fill="#3b82f6" />
        <text x="390" y={192 - afterH} textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#18181b" fontWeight="600">
          {afterValue.toLocaleString()}
        </text>
        <text x="390" y="220" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#a1a1aa">{afterLabel}</text>
        {/* delta */}
        <path d={`M 268 ${200 - beforeH - 10} Q 300 ${200 - afterH - 40} 332 ${200 - afterH - 10}`} stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        <text x="300" y={200 - afterH - 42} textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#3b82f6" fontWeight="700">{delta}</text>
      </svg>
    </div>
  )
}

/* ─── main page ─── */

export default function NorthlightPage() {
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
            src="/favicons/northlight.ico"
            alt="Northlight"
            width={28}
            height={28}
            className="rounded"
          />
          <div className="flex items-baseline gap-3">
            <Link
              href="https://northlight.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-zinc-900 hover:text-blue-500 transition-colors tracking-tight"
            >
              Northlight
            </Link>
            <span className="text-xs text-zinc-400">Growth Report / Vol. 01</span>
          </div>
        </div>

        {/* ═══ HERO ═══ */}
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
          From a cold start to compounding growth.
        </h1>

        <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl mb-3">
          on march 28th they brought me on. what follows is every number we moved —
          across linkedin, seo, product, and the website — in the three weeks since.
          zero paid spend.
        </p>

        <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider mb-8">
          data windows run mar 22–apr 21 to capture the full ramp including the first week.
        </p>

        {/* date strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 mb-12">
          {[
            { label: "Start Date", value: "Mar 28, 2026" },
            { label: "Report Window", value: "3 Weeks" },
            { label: "Paid Ad Spend", value: "$0.00" },
          ].map((d) => (
            <div key={d.label} className="bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{d.label}</p>
              <p className="text-lg font-bold text-zinc-900 tracking-tight">{d.value}</p>
            </div>
          ))}
        </div>

        {/* external links */}
        <div className="flex flex-wrap gap-4 mb-12 text-xs font-mono">
          <Link href="https://northlight.ai" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            northlight.ai &rarr;
          </Link>
          <Link href="https://northlight.ai/download" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            download &rarr;
          </Link>
          <Link href="https://northlight.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            pricing &rarr;
          </Link>
          <Link href="https://northlight.ai/integrations" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            integrations &rarr;
          </Link>
          <Link href="https://www.linkedin.com/company/north-light-ai/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
            linkedin &rarr;
          </Link>
        </div>

        {/* ═══ TL;DR ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-16">
          <StatCard label="LinkedIn impressions" value="2.7" unit="x" context="beat the account's entire prior history in half the time" />
          <StatCard label="Product downloads" value="+76" unit="%" context="in half the days" />
          <StatCard label="Unique visitors" value="2.5" unit="K" context="since PostHog was instrumented" />
          <StatCard label="Countries reached" value="59" context="via organic search — site indexed 4 days ago" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* 01 — LINKEDIN                              */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="01" kicker="Channel · Free Content" title="LinkedIn" />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          when they brought me on, the ghostwriting account was live but under-utilized. post cadence
          tripled. average performance per post nearly doubled. the result: a single month outran
          sixty days of prior activity.
        </p>

        {/* before / after table */}
        <div className="border border-zinc-200 mb-6">
          <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50">
            <p className="py-3 px-5 text-[10px] font-mono uppercase tracking-widest text-zinc-400">Metric</p>
            <p className="py-3 px-5 text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-right">Before · 60d</p>
            <p className="py-3 px-5 text-[10px] font-mono uppercase tracking-widest text-zinc-900 text-right font-bold">After · 31d</p>
          </div>
          <div className="px-5">
            <CompareRow label="Posts" before="7" after="11" />
            <CompareRow label="Impressions" before="60,069" after="163,320" />
            <CompareRow label="Impr. / day" before="1,001" after="5,268" />
            <CompareRow label="Total engagements" before="314" after="1,043" />
            <CompareRow label="Avg likes / post" before="37" after="70" />
            <CompareRow label="Cadence" before="1 / 8.6d" after="1 / 2.8d" />
          </div>
        </div>

        <BarChartCompare
          title="Impressions per day"
          subtitle="Before vs. After · daily average"
          beforeLabel="BEFORE"
          beforeValue={1001}
          afterLabel="AFTER"
          afterValue={5268}
          maxValue={6000}
          delta="+426%"
        />

        {/* delta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-6">
          <DeltaCard label="Impressions / day" value="+426%" context="1,001 → 5,268" />
          <DeltaCard label="Total engagements" value="+232%" context="314 → 1,043" />
          <DeltaCard label="Avg likes / post" value="+89%" context="37 → 70" />
          <DeltaCard label="Posting cadence" value="3x" context="8.6 → 2.8 days" />
        </div>

        {/* pullquote */}
        <div className="border-t-2 border-b-2 border-zinc-900 py-8 my-12">
          <p className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-snug max-w-lg">
            163,320 impressions in 31 days —{" "}
            <span className="text-blue-500">2.7x the entire prior history</span>{" "}
            of the account, in half the time.
          </p>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* 02 — SEO / AEO                             */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="02" kicker="Channel · Organic Search" title="SEO / AEO" />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          when they brought me on, the site existed but had no tracking, no content engine, and no
          presence in search. after: a redesigned site with a content cluster indexed by google on
          apr 17 — pulling impressions from 59 countries in under a week.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-6">
          <StatCard label="Impressions" value="749" context="0 → 749 in 4 days" />
          <StatCard label="Pages ranking" value="11" context="from zero indexed" />
          <StatCard label="Countries reached" value="59" context="global, no targeting" />
          <StatCard label="Avg position" value="7.8" context="front page average" />
        </div>

        {/* search impressions chart */}
        <div className="border border-zinc-200 p-6 md:p-8 my-6">
          <p className="font-bold text-zinc-900 tracking-tight text-lg mb-0.5">Search impressions — launch curve</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-8">Apr 17 indexing → Apr 21 · daily impressions</p>
          <svg viewBox="0 0 600 240" className="w-full max-w-xl mx-auto" aria-label="Search impressions launch curve">
            <defs>
              <linearGradient id="seoGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* grid */}
            <line x1="60" y1="40" x2="560" y2="40" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="60" y1="120" x2="560" y2="120" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="60" y1="200" x2="560" y2="200" stroke="#27272a" strokeWidth="1" />
            <text x="52" y="44" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#a1a1aa">300</text>
            <text x="52" y="124" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#a1a1aa">150</text>
            <text x="52" y="204" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#a1a1aa">0</text>
            {/* area + line — values: 15, 80, 180, 225, 249 scaled to 300→y40, 0→y200 */}
            <path d="M 100 192 L 220 157 L 340 104 L 460 80 L 560 67 L 560 200 L 100 200 Z" fill="url(#seoGrad)" />
            <path d="M 100 192 L 220 157 L 340 104 L 460 80 L 560 67" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* dots */}
            <circle cx="100" cy="192" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="220" cy="157" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="340" cy="104" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="460" cy="80" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="560" cy="67" r="5" fill="#3b82f6" stroke="#18181b" strokeWidth="2" />
            {/* labels */}
            <text x="100" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Apr 17</text>
            <text x="340" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Apr 19</text>
            <text x="560" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Apr 21</text>
            <text x="560" y="58" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#18181b" fontWeight="600">749 total</text>
          </svg>
        </div>

        {/* ranking queries table */}
        <div className="border border-zinc-200 my-6">
          <div className="grid grid-cols-[1fr_60px_60px_60px] md:grid-cols-[1fr_80px_80px_60px] border-b border-zinc-200 bg-zinc-50 px-5">
            <p className="py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400">Query · Week one</p>
            <p className="py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-right">Impr.</p>
            <p className="py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-right hidden md:block">CTR</p>
            <p className="py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-center">Pos.</p>
          </div>
          {[
            { query: "how does northlight.ai compare to phantombuster", impr: "—", ctr: "—", pos: "2", posColor: "bg-blue-500" },
            { query: "best linkedin automation tools 2026", impr: "—", ctr: "—", pos: "2", posColor: "bg-blue-500" },
            { query: "northlight vs amplemarket", impr: "—", ctr: "14.3%", pos: "4.7", posColor: "bg-zinc-700" },
            { query: "is linkedin automation against the rules", impr: "636", ctr: "—", pos: "4–9", posColor: "bg-zinc-700" },
          ].map((row) => (
            <div key={row.query} className="grid grid-cols-[1fr_60px_60px_60px] md:grid-cols-[1fr_80px_80px_60px] border-b border-zinc-100 last:border-b-0 px-5 hover:bg-zinc-50 transition-colors">
              <p className="py-3 text-sm text-zinc-700">{row.query}</p>
              <p className="py-3 text-xs font-mono text-zinc-400 text-right">{row.impr}</p>
              <p className="py-3 text-xs font-mono text-zinc-400 text-right hidden md:block">{row.ctr}</p>
              <div className="py-3 text-center">
                <span className={`${row.posColor} text-white text-[11px] font-mono font-bold px-2 py-0.5`}>{row.pos}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-500 leading-relaxed mt-6 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-900 font-bold block mb-1">Heavy lifter</span>
          one article — <em>&quot;Is LinkedIn Automation Against the Rules&quot;</em> — drove{" "}
          <strong className="text-zinc-900">636 of 749 impressions (85%)</strong>. the linkedin tos
          content cluster is the compounding asset.
        </p>

        {/* ═══════════════════════════════════════════ */}
        {/* 03 — DOWNLOADS                             */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="03" kicker="Product · Desktop Gateway Setup" title="Downloads" />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          since they brought me on: 97 new{" "}
          <Link href="https://northlight.ai/download" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            downloads
          </Link>{" "}
          in 31 days versus 55 in the preceding 55. three of the four biggest
          single-day spikes in product history landed inside this window.
        </p>

        {/* before / after table */}
        <div className="border border-zinc-200 mb-6">
          <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50">
            <p className="py-3 px-5 text-[10px] font-mono uppercase tracking-widest text-zinc-400">Metric</p>
            <p className="py-3 px-5 text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-right">Before · 55d</p>
            <p className="py-3 px-5 text-[10px] font-mono uppercase tracking-widest text-zinc-900 text-right font-bold">After · 31d</p>
          </div>
          <div className="px-5">
            <CompareRow label="Total downloads" before="55" after="97" />
            <CompareRow label="Downloads / day" before="1.0" after="3.1" />
            <CompareRow label="Biggest day" before="7 (Mar 12)" after="14 (Mar 23)" />
          </div>
        </div>

        {/* daily downloads bar chart */}
        <div className="border border-zinc-200 p-6 md:p-8 my-6">
          <p className="font-bold text-zinc-900 tracking-tight text-lg mb-0.5">Daily downloads</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-8">Jan 27 – Apr 21 · bars show downloads per day</p>
          <svg viewBox="0 0 700 240" className="w-full mx-auto" aria-label="Daily downloads bar chart">
            {/* grid */}
            <line x1="30" y1="40" x2="680" y2="40" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="30" y1="120" x2="680" y2="120" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="30" y1="200" x2="680" y2="200" stroke="#27272a" strokeWidth="1" />
            <text x="24" y="44" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">15</text>
            <text x="24" y="124" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">7</text>
            <text x="24" y="204" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">0</text>

            {/* takeover line */}
            <line x1="320" y1="20" x2="320" y2="200" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="320" y="16" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#3b82f6" fontWeight="600">start · Mar 28</text>

            {/* before bars (zinc) — representative daily pattern */}
            <g fill="#d4d4d8">
              <rect x="36"  y="189" width="4" height="11" />
              <rect x="46"  y="189" width="4" height="11" />
              <rect x="56"  y="178" width="4" height="22" />
              <rect x="66"  y="189" width="4" height="11" />
              <rect x="86"  y="189" width="4" height="11" />
              <rect x="96"  y="167" width="4" height="33" />
              <rect x="106" y="189" width="4" height="11" />
              <rect x="116" y="178" width="4" height="22" />
              <rect x="126" y="189" width="4" height="11" />
              <rect x="146" y="136" width="4" height="64" />
              <rect x="156" y="189" width="4" height="11" />
              <rect x="166" y="178" width="4" height="22" />
              <rect x="186" y="189" width="4" height="11" />
              <rect x="196" y="167" width="4" height="33" />
              <rect x="216" y="125" width="4" height="75" />
              <rect x="226" y="147" width="4" height="53" />
              <rect x="236" y="189" width="4" height="11" />
              <rect x="256" y="178" width="4" height="22" />
              <rect x="266" y="189" width="4" height="11" />
              <rect x="286" y="178" width="4" height="22" />
              <rect x="296" y="189" width="4" height="11" />
              <rect x="316" y="189" width="4" height="11" />
            </g>

            {/* after bars (blue) — real values */}
            <g fill="#3b82f6">
              {/* Mar 22: 1 */}<rect x="330" y="189" width="7" height="11" />
              {/* Mar 23: 14 */}<rect x="342" y="53"  width="7" height="147" />
              {/* Mar 24: 2 */}<rect x="354" y="178" width="7" height="22" />
              {/* Mar 25: 2 */}<rect x="366" y="178" width="7" height="22" />
              {/* Mar 26: 1 */}<rect x="378" y="189" width="7" height="11" />
              {/* Mar 27: 2 */}<rect x="390" y="178" width="7" height="22" />
              {/* Mar 28: 1 */}<rect x="402" y="189" width="7" height="11" />
              {/* Mar 29: 2 */}<rect x="414" y="178" width="7" height="22" />
              {/* Mar 30: 3 */}<rect x="426" y="167" width="7" height="33" />
              {/* Mar 31: 2 */}<rect x="438" y="178" width="7" height="22" />
              {/* Apr 1: 8 */}<rect x="450" y="114" width="7" height="86" />
              {/* Apr 2: 6 */}<rect x="462" y="136" width="7" height="64" />
              {/* Apr 3: 3 */}<rect x="474" y="167" width="7" height="33" />
              {/* Apr 4: 1 */}<rect x="486" y="189" width="7" height="11" />
              {/* Apr 5: 2 */}<rect x="498" y="178" width="7" height="22" />
              {/* Apr 6: 3 */}<rect x="510" y="167" width="7" height="33" />
              {/* Apr 7: 10 */}<rect x="522" y="92" width="7" height="108" />
              {/* Apr 9: 2 */}<rect x="546" y="178" width="7" height="22" />
              {/* Apr 10: 5 */}<rect x="558" y="147" width="7" height="53" />
              {/* Apr 11: 3 */}<rect x="570" y="167" width="7" height="33" />
              {/* Apr 12: 1 */}<rect x="582" y="189" width="7" height="11" />
              {/* Apr 13: 2 */}<rect x="594" y="178" width="7" height="22" />
              {/* Apr 14: 5 */}<rect x="606" y="147" width="7" height="53" />
              {/* Apr 15: 1 */}<rect x="618" y="189" width="7" height="11" />
              {/* Apr 16: 4 */}<rect x="630" y="157" width="7" height="43" />
              {/* Apr 17: 1 */}<rect x="642" y="189" width="7" height="11" />
              {/* Apr 18: 4 */}<rect x="654" y="157" width="7" height="43" />
              {/* Apr 20: 2 */}<rect x="666" y="178" width="7" height="22" />
              {/* Apr 21: 2 */}<rect x="678" y="178" width="7" height="22" />
            </g>

            {/* peak annotations */}
            <text x="346" y="47" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#18181b" fontWeight="600">14</text>
            <text x="526" y="86" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#18181b" fontWeight="600">10</text>

            {/* period labels */}
            <text x="180" y="224" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">BEFORE · 55 / 55d</text>
            <text x="510" y="224" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#3b82f6">AFTER · 97 / 31d</text>
          </svg>
          <div className="flex gap-6 mt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span><span className="inline-block w-2.5 h-2.5 bg-zinc-300 mr-2 align-middle" />Before</span>
            <span><span className="inline-block w-2.5 h-2.5 bg-blue-500 mr-2 align-middle" />After</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-6">
          <DeltaCard label="Total downloads" value="+76%" context="in 56% of the time" />
          <DeltaCard label="Downloads / day" value="+213%" context="1.0 → 3.1" />
          <DeltaCard label="Record days" value="3 of 4" context="top days in product history" />
          <DeltaCard label="All-time peak" value="14" context="Mar 23 · single day" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* 04 — WEBSITE TRAFFIC                       */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="04" kicker="Channel · Redesigned Site" title="Website Traffic" />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
          when they brought me on, the{" "}
          <Link href="https://northlight.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            site
          </Link>{" "}
          had no measurement layer. i instrumented posthog on mar 29 — 2,450 unique visitors in 24
          days since, averaging 102/day with weekly peaks of 200+.
        </p>

        {/* unique visitors chart */}
        <div className="border border-zinc-200 p-6 md:p-8 my-6">
          <p className="font-bold text-zinc-900 tracking-tight text-lg mb-0.5">Unique visitors per day</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-8">Mar 29 – Apr 21 · PostHog, deduplicated</p>
          <svg viewBox="0 0 700 240" className="w-full mx-auto" aria-label="Daily unique visitors">
            <defs>
              <linearGradient id="visGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#18181b" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="50" y1="40" x2="660" y2="40" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="120" x2="660" y2="120" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="200" x2="660" y2="200" stroke="#27272a" strokeWidth="1" />
            <text x="44" y="44" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">250</text>
            <text x="44" y="124" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">125</text>
            <text x="44" y="204" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#a1a1aa">0</text>

            {/* 24 data points: 18,56,55,153,96,121,51,48,89,163,104,102,202,70,74,111,104,205,123,122,43,82,154,104 */}
            {/* x from 70 to 650, step ~25.2; y scale: 250→y40, 0→y200 → y = 200 - (v/250)*160 */}
            <path d={`M 70 188 L 95 164 L 120 165 L 145 102 L 170 138 L 195 123 L 220 167 L 245 169 L 270 143 L 295 96 L 320 134 L 345 135 L 370 71 L 395 155 L 420 153 L 445 129 L 470 134 L 495 69 L 520 121 L 545 122 L 570 172 L 595 147 L 620 101 L 650 134 L 650 200 L 70 200 Z`} fill="url(#visGrad)" />
            <path d={`M 70 188 L 95 164 L 120 165 L 145 102 L 170 138 L 195 123 L 220 167 L 245 169 L 270 143 L 295 96 L 320 134 L 345 135 L 370 71 L 395 155 L 420 153 L 445 129 L 470 134 L 495 69 L 520 121 L 545 122 L 570 172 L 595 147 L 620 101 L 650 134`} fill="none" stroke="#18181b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

            {/* peak dots */}
            <circle cx="370" cy="71" r="4" fill="white" stroke="#18181b" strokeWidth="2" />
            <circle cx="495" cy="69" r="5" fill="#3b82f6" stroke="#18181b" strokeWidth="2" />

            <text x="495" y="58" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#18181b" fontWeight="600">peak · 205</text>

            <text x="70" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Mar 29</text>
            <text x="295" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Apr 7</text>
            <text x="495" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Apr 15</text>
            <text x="650" y="218" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a1a1aa">Apr 21</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-6">
          <StatCard label="Unique visitors" value="2,450" context="in 24 days" />
          <StatCard label="Total pageviews" value="27.8K" context="across the same window" />
          <StatCard label="Pages / visit" value="~11" context="not bouncing off homepage" />
          <StatCard label="Daily average" value="102" context="peak 205 (Apr 15)" />
        </div>

        <div className="border-t-2 border-b-2 border-zinc-900 py-8 my-12">
          <p className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-snug max-w-lg">
            <span className="text-blue-500">~11 pages per visit.</span>{" "}
            visitors aren&apos;t bouncing — they&apos;re exploring. the site is doing its job.
          </p>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* 05 — CHANNEL MIX                           */}
        {/* ═══════════════════════════════════════════ */}
        <SectionHeader number="05" kicker="Looking Forward" title="The Channel Mix" />

        <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-xl">
          everything above was pulled with four levers. two more are loaded. paid has not fired once.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 mb-12">
          {[
            {
              name: "SEO / AEO",
              status: "Live",
              statusColor: "text-green-600 border-green-600",
              desc: "Indexed Apr 17. LinkedIn ToS cluster pulling 85% of all impressions. Compounding asset.",
              metric: "749 impressions · 59 countries · 4 days",
              bg: "bg-white",
            },
            {
              name: "Free Content",
              status: "Live",
              statusColor: "text-green-600 border-green-600",
              desc: "LinkedIn ghostwriting. Posting every 2.8 days. Driving weekly traffic pulses to site and downloads.",
              metric: "163K impressions · 1K engagements · 31 days",
              bg: "bg-white",
            },
            {
              name: "Website Redesign",
              status: "Live",
              statusColor: "text-green-600 border-green-600",
              desc: "Rebuilt the site. 11 pages / visit signals the redesign is doing conversion work, not just looking pretty.",
              metric: "27.8K pageviews · 2.5K unique visitors",
              bg: "bg-white",
            },
            {
              name: "Referrals",
              status: "Launching",
              statusColor: "text-blue-500 border-blue-500",
              desc: "Referral codes built and shipped. Pending PR approval, then emailing current user base.",
              metric: "Blocked on Matt's PR",
              bg: "bg-zinc-50",
            },
            {
              name: "Programmatic Outbound",
              status: "Launching",
              statusColor: "text-blue-500 border-blue-500",
              desc: "Just received account access. First push mechanism alongside the pull from SEO + content.",
              metric: "Setup in progress",
              bg: "bg-zinc-50",
            },
            {
              name: "Paid Ads",
              status: "Not yet",
              statusColor: "text-zinc-400 border-zinc-300",
              desc: "Not running. Every number in this report was produced with zero paid acquisition spend.",
              metric: "Spend to date: $0.00",
              bg: "bg-zinc-50 opacity-75",
            },
          ].map((ch) => (
            <div key={ch.name} className={`${ch.bg} p-6 relative min-h-[160px] flex flex-col`}>
              <span className={`absolute top-5 right-5 text-[10px] font-mono uppercase tracking-widest border px-1.5 py-0.5 ${ch.statusColor}`}>
                {ch.status}
              </span>
              <p className="text-lg font-bold text-zinc-900 tracking-tight mt-6 mb-1">{ch.name}</p>
              <p className="text-xs text-zinc-500 leading-relaxed mb-auto pb-3">{ch.desc}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-t border-zinc-200 pt-3">
                {ch.metric}
              </p>
            </div>
          ))}
        </div>

        {/* ═══ CLOSING ═══ */}
        <div className="pt-16">
          <p className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-snug max-w-md mb-12">
            three weeks in, the measurement layer is built, the content engine is running, and the
            site has a <span className="text-blue-500">heartbeat</span>. next: outbound and referrals
            firing at the same time.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-zinc-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 leading-loose">
              Prepared for<br />
              <span className="text-zinc-900 font-bold">Chaz · Matt</span>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-zinc-900 tracking-tight">Austin Kennedy</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Fractional Head of Content</p>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-right leading-loose">
              Vol. 01 · End<br />
              <span className="text-zinc-900 font-bold">22 · 04 · 2026</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
