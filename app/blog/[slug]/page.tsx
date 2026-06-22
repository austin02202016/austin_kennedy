import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  getBlogPost,
  getAllBlogPosts,
  generateBlogPostSchema,
} from "@/lib/blog"
import { Schema, BreadcrumbSchema } from "@/components/blog/Schema"
import { PostBody } from "@/components/blog/post-body"
import { getAgentGuide } from "@/lib/agent-guides"
import { SITE_URL } from "@/lib/constants"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const metaTitle =
    post.seo?.metaTitle || `${post.title} | Austin Kennedy`
  const metaDescription =
    post.seo?.metaDescription || post.description || post.excerpt

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.tags,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}/blog/${slug}`,
      images: post.seo?.ogImage
        ? [post.seo.ogImage]
        : post.image
          ? [post.image]
          : undefined,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ["Austin Kennedy"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      creator: "@astnkennedy",
      images: post.seo?.ogImage
        ? [post.seo.ogImage]
        : post.image
          ? [post.image]
          : undefined,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const postSchema = generateBlogPostSchema(post, SITE_URL)

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ]

  // Get related posts
  const allBlogPosts = await getAllBlogPosts()
  const relatedPosts = allBlogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  const displayPosts =
    relatedPosts.length >= 2
      ? relatedPosts
      : [
          ...relatedPosts,
          ...allBlogPosts.filter(
            (p) => p.slug !== post.slug && !relatedPosts.includes(p)
          ),
        ].slice(0, 3)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      {/* Structured Data for AI Crawlers / AEO */}
      <Schema json={postSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="min-h-screen bg-white font-mono">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          {/* Back link — matches InnerLayout */}
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
          >
            &larr; Back to home
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              {post.description}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-zinc-400 mb-4">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Cover Image */}
          {post.image && (
            <div className="mb-10">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto rounded-md"
                priority
              />
            </div>
          )}

          {/* Content (with optional "For agents" toggle) */}
          <PostBody html={post.content} agentGuide={getAgentGuide(post.slug)} />

          {/* Related Posts */}
          {displayPosts.length > 0 && (
            <div className="mt-14 border-t border-zinc-100 pt-8">
              <h2 className="text-lg font-bold text-zinc-900 mb-6 tracking-tight">
                More writing
              </h2>
              <div className="space-y-0">
                {displayPosts.map((relatedPost, index) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div
                      className={`py-4 ${
                        index !== displayPosts.length - 1
                          ? "border-b border-zinc-100"
                          : ""
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors mb-1">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span>{relatedPost.readingTime}</span>
                        <span>·</span>
                        <span>
                          {relatedPost.tags.length > 0
                            ? relatedPost.tags[0]
                            : ""}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
