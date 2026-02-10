import fs from "fs"
import path from "path"
import { marked } from "marked"
import slugify from "slugify"
import { getAuthor, type Author } from "./authors"

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: Author
  authorName: string
  tags: string[]
  readingTime: string
  content: string
  excerpt: string
  featured?: boolean
  image?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
  }
}

interface Frontmatter {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  tags: string[]
  featured?: boolean
  image?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
  }
}

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content/blog")

function parseFrontmatter(content: string): { frontmatter: Frontmatter; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    throw new Error("Invalid frontmatter format")
  }

  const frontmatterString = match[1]
  const mdxContent = match[2]

  const frontmatter: Record<string, unknown> = {}
  const lines = frontmatterString.split("\n")
  let currentNestedKey: string | null = null

  lines.forEach((line) => {
    const trimmedLine = line.trim()
    if (!trimmedLine) return

    if (trimmedLine.endsWith(":") && !trimmedLine.includes(": ")) {
      currentNestedKey = trimmedLine.slice(0, -1).trim()
      frontmatter[currentNestedKey] = {}
      return
    }

    if (currentNestedKey && line.startsWith("  ")) {
      const [key, ...valueParts] = trimmedLine.split(":")
      if (key && valueParts.length > 0) {
        const value = valueParts.join(":").trim().replace(/['"]/g, "")
        ;(frontmatter[currentNestedKey] as Record<string, string>)[key.trim()] = value
      }
      return
    }

    if (!line.startsWith("  ")) {
      currentNestedKey = null
    }

    const [key, ...valueParts] = trimmedLine.split(":")
    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim()

      if (key.trim() === "tags") {
        frontmatter[key.trim()] = value
          .replace(/[\[\]]/g, "")
          .split(",")
          .map((tag) => tag.trim().replace(/['"]/g, ""))
      } else if (key.trim() === "featured") {
        frontmatter[key.trim()] = value === "true"
      } else {
        frontmatter[key.trim()] = value.replace(/['"]/g, "")
      }
    }
  })

  return { frontmatter: frontmatter as unknown as Frontmatter, content: mdxContent }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

function generateExcerpt(content: string, maxLength = 160): string {
  const plainText = content.replace(/[#*`\[\]]/g, "").replace(/\n/g, " ")
  if (plainText.length <= maxLength) return plainText
  return plainText.substr(0, maxLength).replace(/\s+\S*$/, "") + "..."
}

async function processMarkdownContent(content: string): Promise<string> {
  marked.setOptions({ gfm: true, breaks: false })

  const cleanContent = content
    .replace(/\[object Object\]/g, "")
    .replace(/\{\{.*?\}\}/g, "")
    .trim()

  let htmlContent = await marked(cleanContent)

  htmlContent = htmlContent.replace(/<h([1-6])>([^<]+)<\/h[1-6]>/g, (_match, level, text) => {
    const id = slugify(text.trim(), { lower: true, strict: true })
    return `<h${level} id="${id}">${text}</h${level}>`
  })

  return htmlContent
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return []
  }

  const files = fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, "")
      return getBlogPost(slug)
    })
  )

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    let filePath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) {
      filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`)
      if (!fs.existsSync(filePath)) {
        return null
      }
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { frontmatter, content } = parseFrontmatter(fileContent)

    const htmlContent = await processMarkdownContent(content)
    const authorData = getAuthor(frontmatter.author)

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      author: authorData,
      authorName: frontmatter.author,
      tags: frontmatter.tags || [],
      readingTime: calculateReadingTime(content),
      content: htmlContent,
      excerpt: generateExcerpt(content),
      featured: frontmatter.featured || false,
      image: frontmatter.image,
      seo: frontmatter.seo,
    }
  } catch (error) {
    console.error(`Error parsing blog post ${slug}:`, error)
    return null
  }
}

export function generateBlogPostSchema(post: BlogPost, siteUrl: string) {
  const plainTextContent = post.content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
  const wordCount = plainTextContent.split(" ").length
  const readingTimeMinutes = Math.ceil(wordCount / 200)

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}/blog/${post.slug}`,
    headline: post.title,
    name: post.title,
    description: post.description,
    url: `${siteUrl}/blog/${post.slug}`,
    image: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/austin-profile.jpg`,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.linkedin,
      jobTitle: post.author.title,
    },
    publisher: {
      "@type": "Person",
      name: "Austin Kennedy",
      url: siteUrl,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    wordCount: wordCount,
    timeRequired: `PT${readingTimeMinutes}M`,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
  }
}
