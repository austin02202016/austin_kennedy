import type { Metadata } from "next"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Work With Me — Austin Kennedy",
  description:
    "Book a 30-minute call with Austin Kennedy. Happy to chat about entrepreneurship, AI agents, content, startups, or whatever's on your mind.",
  alternates: {
    canonical: `${SITE_URL}/chat`,
  },
  openGraph: {
    title: "Work With Me — Austin Kennedy",
    description:
      "Book a 30-minute call to chat about entrepreneurship, AI agents, startups, or whatever's on your mind.",
    url: `${SITE_URL}/chat`,
  },
  twitter: {
    card: "summary",
    title: "Work With Me — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

export default function ChatPage() {
  return (
    <InnerLayout title="WORK WITH ME">
      <p className="text-zinc-500 text-sm mb-10 leading-relaxed">
        book a 30 minute call with me. happy to chat about entrepreneurship, content, startups, or
        whatever&apos;s on your mind.
      </p>

      {/* Calendly Widget */}
      <div className="w-full rounded-lg overflow-hidden border border-zinc-100">
        <iframe
          src="https://calendly.com/akennedy1929/30min"
          width="100%"
          height="700"
          frameBorder="0"
          title="Schedule a call with Austin"
          className="w-full"
        />
      </div>
    </InnerLayout>
  )
}
