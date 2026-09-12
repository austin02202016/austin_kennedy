import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import { SignupForm } from "./signup-form"
import { TiltImage } from "./tilt-image"
import { EVENT } from "./event"

const DESCRIPTION = `How to make $10K/month in college, from creators and founders who have done it before. ${EVENT.dateLabel}, ${EVENT.timeLabel}, ${EVENT.venue}. Free to attend.`

export const metadata: Metadata = {
  title: `${EVENT.title} — UIUC Event`,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/${EVENT.slug}`,
  },
  openGraph: {
    title: `${EVENT.title} — UIUC Event`,
    description: DESCRIPTION,
    url: `${SITE_URL}/${EVENT.slug}`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/10k-event.png`,
        width: 1080,
        height: 1350,
        alt: `${EVENT.title} — UIUC Event Flyer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT.title} — UIUC Event`,
    description: "From creators and founders who have done it before. One night at UIUC.",
    creator: "@astnkennedy",
    images: [`${SITE_URL}/10k-event.png`],
  },
}

export default function TenKPage() {
  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-emerald-100/40 via-lime-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:min-h-screen md:flex md:items-center md:py-0">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-20 w-full">
          <div className="md:w-[48%] mt-12 md:mt-0">
            <TiltImage />
          </div>

          <div className="md:w-[52%] text-center md:text-left min-h-[100svh] md:min-h-0 flex flex-col justify-center">
            <SignupForm />

            <p className="text-[11px] text-neutral-300 mt-12 text-center tracking-wide">
              Hosted by Austin Kennedy &middot; Part of Founders Week
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
