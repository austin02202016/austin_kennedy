import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import { SignupForm } from "./signup-form"
import { TiltImage } from "./tilt-image"

export const metadata: Metadata = {
  title: "If I Were a Freshman Again — UIUC Event",
  description:
    "Eight UIUC entrepreneurs are flying into campus to answer one question: If I were a freshman again, how would I do it all over again?",
  alternates: {
    canonical: `${SITE_URL}/if-i-were-a-freshman-again`,
  },
  openGraph: {
    title: "If I Were a Freshman Again — UIUC Event",
    description:
      "Eight UIUC entrepreneurs are flying into campus. One question: how would they do it all over again?",
    url: `${SITE_URL}/if-i-were-a-freshman-again`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/freshman-event.png`,
        width: 800,
        height: 1000,
        alt: "If I Were a Freshman Again — UIUC Event Flyer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "If I Were a Freshman Again — UIUC Event",
    description:
      "Eight UIUC entrepreneurs. One question. How would they do it all over again?",
    creator: "@astnkennedy",
    images: [`${SITE_URL}/freshman-event.png`],
  },
}

export default function FreshmanPage() {
  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-orange-100/40 via-rose-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:min-h-screen md:flex md:items-center md:py-0">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-20 w-full">
          <div className="md:w-[48%] mt-12 md:mt-0">
            <TiltImage />
          </div>

          <div className="md:w-[52%] text-center md:text-left min-h-[100svh] md:min-h-0 flex flex-col justify-center">
            <SignupForm />

            <p className="text-[11px] text-neutral-300 mt-12 text-center tracking-wide">
              Hosted by Austin Kennedy & Ghost
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
