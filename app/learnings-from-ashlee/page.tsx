import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"
import {
  ASHLEE_GATE_COOKIE,
  decryptRules,
  renderRulesHtml,
} from "@/lib/ashlee-rules"
import { unlockAshlee } from "./actions"

// Reads a cookie + decrypts per request — never static, never indexed.
export const dynamic = "force-dynamic"

// Generic, non-revealing metadata: the locked surface (title, tab, og) gives
// away nothing about what the page actually contains.
export const metadata: Metadata = {
  title: "Private",
  description: "This page is private.",
  robots: { index: false, follow: false, nocache: true },
}

// Shared with the blog (see components/blog/post-body.tsx).
const PROSE_CLASSES = `prose prose-zinc prose-lg max-w-none
  prose-headings:font-mono prose-headings:font-bold prose-headings:text-zinc-900 prose-headings:tracking-tight
  prose-h1:text-2xl prose-h1:mb-6 prose-h1:mt-8
  prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
  prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
  prose-p:font-mono prose-p:leading-relaxed prose-p:text-zinc-700 prose-p:mb-6 prose-p:text-[15px]
  prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-zinc-300 hover:prose-a:decoration-zinc-900
  prose-strong:text-zinc-900 prose-strong:font-semibold
  prose-code:text-sm prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-zinc-800
  prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:p-4 prose-pre:rounded-md
  [&_pre_code]:bg-transparent [&_pre_code]:text-zinc-100 [&_pre_code]:p-0
  prose-blockquote:border-l-2 prose-blockquote:border-zinc-200 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-zinc-600
  prose-ul:space-y-2 prose-ol:space-y-2
  prose-li:text-zinc-700 prose-li:leading-relaxed prose-li:text-[15px] prose-li:font-mono
  prose-em:text-zinc-600
  prose-hr:border-zinc-100 prose-hr:my-10`

export default async function LearningsFromAshleePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const jar = await cookies()
  const cookieKey = jar.get(ASHLEE_GATE_COOKIE)?.value

  // Try to decrypt with the cookie's key. Only on success does any content get
  // produced — when locked, nothing but the form below ever leaves the server.
  const markdown =
    typeof cookieKey === "string" && cookieKey.length > 0
      ? decryptRules(cookieKey)
      : null

  if (!markdown) {
    const { error } = await searchParams
    return (
      <main className="min-h-screen bg-white font-mono">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
          >
            &larr; Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            Private page
          </h1>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            this page is private. enter the 16-character key to read it.
          </p>
          <form action={unlockAshlee} className="flex flex-col gap-3 max-w-xs">
            <input
              type="password"
              name="key"
              autoFocus
              autoComplete="off"
              spellCheck={false}
              maxLength={16}
              placeholder="16-character key"
              className="border border-zinc-200 rounded px-3 py-2 text-sm font-mono tracking-wider text-zinc-900 focus:outline-none focus:border-zinc-900"
            />
            <button
              type="submit"
              className="px-3 py-2 text-sm font-mono rounded bg-zinc-900 text-white hover:bg-zinc-700 transition-colors w-fit"
            >
              Unlock
            </button>
            {error && (
              <p className="text-xs text-red-500 font-mono">
                wrong key — try again.
              </p>
            )}
          </form>
        </div>
      </main>
    )
  }

  const html = await renderRulesHtml(markdown)

  return (
    <main className="min-h-screen bg-white font-mono">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
        >
          &larr; Back to home
        </Link>
        <div className={PROSE_CLASSES} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
