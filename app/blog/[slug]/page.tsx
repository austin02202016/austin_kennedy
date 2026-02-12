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

          {/* Content */}
          <div
            className="prose prose-zinc prose-lg max-w-none
              prose-headings:font-mono prose-headings:font-bold prose-headings:text-zinc-900 prose-headings:tracking-tight
              prose-h1:text-2xl prose-h1:mb-6 prose-h1:mt-8
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-mono prose-p:leading-relaxed prose-p:text-zinc-700 prose-p:mb-6 prose-p:text-[15px]
              prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-zinc-300 hover:prose-a:decoration-zinc-900
              prose-strong:text-zinc-900 prose-strong:font-semibold
              prose-code:text-sm prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:p-4 prose-pre:rounded-md
              prose-blockquote:border-l-2 prose-blockquote:border-zinc-200 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-zinc-600
              prose-ul:space-y-2 prose-ol:space-y-2
              prose-li:text-zinc-700 prose-li:leading-relaxed prose-li:text-[15px] prose-li:font-mono
              prose-em:text-zinc-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
