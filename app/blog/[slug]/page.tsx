import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog"
import { BlogArticle } from "@/components/blog/blog-article"
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

  return <BlogArticle post={post} />
}
