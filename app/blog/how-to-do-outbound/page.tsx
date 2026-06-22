import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"
import { getBlogPost } from "@/lib/blog"
import { BlogArticle } from "@/components/blog/blog-article"
import { POST_GATE_COOKIE } from "@/lib/protected-posts"
import { unlockPost } from "@/lib/post-gate-actions"
import { SITE_URL } from "@/lib/constants"

// Reads a cookie to decide lock state, so this route must render per-request.
export const dynamic = "force-dynamic"

const SLUG = "how-to-do-outbound"

export async function generateMetadata(): Promise<Metadata> {
  const post = await getBlogPost(SLUG)
  if (!post) {
    return { title: "Post Not Found" }
  }
  const metaTitle = post.seo?.metaTitle || `${post.title} | Austin Kennedy`
  const metaDescription =
    post.seo?.metaDescription || post.description || post.excerpt
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
    // Password-gated: keep it out of search indexes.
    robots: { index: false, follow: false },
  }
}

export default async function GatedOutboundPost({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const post = await getBlogPost(SLUG)
  if (!post) {
    notFound()
  }

  const jar = await cookies()
  const unlocked = jar.get(POST_GATE_COOKIE)?.value === "1"

  if (!unlocked) {
    const { error } = await searchParams
    return (
      <article className="min-h-screen bg-white font-mono">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
          >
            &larr; Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            this post is password protected. enter the password to read it.
          </p>
          <form action={unlockPost} className="flex flex-col gap-3 max-w-xs">
            <input type="hidden" name="slug" value={SLUG} />
            <input
              type="password"
              name="password"
              autoFocus
              autoComplete="off"
              placeholder="password"
              className="border border-zinc-200 rounded px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-zinc-900"
            />
            <button
              type="submit"
              className="px-3 py-2 text-sm font-mono rounded bg-zinc-900 text-white hover:bg-zinc-700 transition-colors w-fit"
            >
              Enter
            </button>
            {error && (
              <p className="text-xs text-red-500 font-mono">
                wrong password — try again.
              </p>
            )}
          </form>
        </div>
      </article>
    )
  }

  return <BlogArticle post={post} />
}
