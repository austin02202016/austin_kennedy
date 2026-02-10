import { getAllBlogPosts } from "@/lib/blog"
import Link from "next/link"
import { Schema } from "@/components/blog/Schema"
import { SITE_URL } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Austin Kennedy",
  description:
    "Thoughts on AI agents, engineering, community building, and navigating your 20s. Written by Austin Kennedy, Founding Engineer at Origami (YC F24).",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Austin Kennedy",
    description:
      "Thoughts on AI agents, engineering, community building, and navigating your 20s.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Austin Kennedy",
    description:
      "Thoughts on AI agents, engineering, community building, and navigating your 20s.",
  },
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: "Austin Kennedy's Blog",
    description:
      "Thoughts on AI agents, engineering, community building, and navigating your 20s.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Person",
      name: "Austin Kennedy",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          "@id": `${SITE_URL}/blog/${post.slug}`,
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.publishedAt,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          description: post.description,
        },
      })),
    },
    inLanguage: "en-US",
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <>
      <Schema json={blogSchema} />

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
            Blog
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed mb-12">
            Thoughts on AI agents, engineering, community building, and
            navigating your 20s.
          </p>

          {/* Posts List */}
          <div className="space-y-0">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article
                  className={`py-6 hover:bg-zinc-50 -mx-4 px-4 transition-colors duration-200 ${
                    index !== posts.length - 1
                      ? "border-b border-zinc-100"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors duration-200 mb-1.5">
                        {post.title}
                      </h2>
                      <p className="text-sm text-zinc-500 line-clamp-2 mb-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-zinc-400">
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                        {post.tags.length > 0 && (
                          <>
                            <span>·</span>
                            <span>{post.tags[0]}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-zinc-300 group-hover:text-zinc-500 transition-colors text-sm mt-1 flex-shrink-0">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-16 border border-zinc-200 rounded">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                No posts yet
              </h3>
              <p className="text-zinc-500 text-sm">
                Check back soon for new writing.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
