import { generateBlogPostSchema, type BlogPost } from "@/lib/blog"
import { SITE_URL } from "@/lib/constants"

interface GenericSchemaProps {
  json: Record<string, unknown>
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function Schema({ json }: GenericSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json),
      }}
    />
  )
}

export function BlogSchema({ post, siteUrl = SITE_URL }: { post: BlogPost; siteUrl?: string }) {
  const schema = generateBlogPostSchema(post, siteUrl)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// FAQ Schema for AEO optimization
export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Person Schema for AEO - helps AI engines understand who Austin is
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Austin Kennedy",
    url: SITE_URL,
    image: `${SITE_URL}/austin-profile.jpg`,
    jobTitle: "Founding Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Origami",
      url: "https://origami.chat",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Illinois at Urbana-Champaign",
    },
    sameAs: [
      "https://x.com/astnkennedy",
      "https://www.linkedin.com/in/austnkennedy/",
      "https://github.com/austin02202016",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Model Context Protocol",
      "Software Engineering",
      "Y Combinator",
      "Startup Engineering",
    ],
    description:
      "Founding Engineer at Origami (YC F24). Self-taught engineer, UIUC grad. Building AI agents in San Francisco.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// WebSite Schema for AEO
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Austin Kennedy",
    description:
      "Personal website of Austin Kennedy — Founding Engineer at Origami (YC F24), self-taught engineer, and community builder in San Francisco.",
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-US",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
