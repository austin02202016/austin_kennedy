import type { Metadata } from "next"
import Image from "next/image"
import { InnerLayout } from "@/components/inner-layout"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Podcasts — Austin Kennedy",
  description:
    "Past podcast interviews with startup founders, content creators, and entrepreneurs at UIUC and beyond.",
  alternates: {
    canonical: `${SITE_URL}/podcasts`,
  },
  openGraph: {
    title: "Podcasts — Austin Kennedy",
    description:
      "Past podcast interviews with startup founders, content creators, and entrepreneurs.",
    url: `${SITE_URL}/podcasts`,
  },
  twitter: {
    card: "summary",
    title: "Podcasts — Austin Kennedy",
    creator: "@astnkennedy",
  },
}

export default function PodcastsPage() {
  return (
    <InnerLayout title="PAST PODCASTS">
      <p className="text-zinc-500 text-sm mb-12 leading-relaxed">
        some of the folks i&apos;ve had the chance to interview.
      </p>

      {/* Startup Founders */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">Startup Founders</h2>
        <div className="space-y-6">
          <PodcastItem
            name="Avi Patel"
            description="how a former uiuc student signed 34,000 artists"
            topics={["startups", "entrepreneurship"]}
            imageUrl="/avi-patel.jpg"
          />
          <PodcastItem
            name="Shrikar Lekkala"
            description="from watching moneyheist to dropping out"
            topics={["ai", "ed-tech"]}
            imageUrl="/shrikar-lekkala.jpg"
          />
          <PodcastItem
            name="Will Lawson"
            description="solving the problem of stolen crypto"
            topics={["crypto", "startups"]}
            imageUrl="/will-lawson.jpg"
          />
          <PodcastItem
            name="Austin Majors"
            description="pitching whole foods as a 19 year old founder"
            topics={["cpg", "family business"]}
            imageUrl="/austin-majors.jpg"
          />
        </div>
      </section>

      {/* Content Creators */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">Content Creators</h2>
        <div className="space-y-6">
          <PodcastItem
            name="Sharif Caesar"
            description="from reselling birds in Ghana to making millions by 23"
            topics={["social media", "instagram", "tiktok"]}
            imageUrl="/sharif-caesar.png"
          />
          <PodcastItem
            name="Casper Opala"
            description="how to reach 3 million followers recording from an iPhone"
            topics={["finance creator", "instagram"]}
            imageUrl="/casper-opala.jpg"
          />
          <PodcastItem
            name="Derrick Echols"
            description="behind the scenes of Chicago's largest high school sports page"
            topics={["sports", "instagram"]}
            imageUrl="/derrick-echols.jpg"
          />
          <PodcastItem
            name="Chik Egbuna"
            description="how to bring energy into every room"
            topics={["fitness", "instagram"]}
            imageUrl="/chik-egbuna.png"
          />
        </div>
      </section>

      {/* Fan Favorites */}
      <section>
        <h2 className="text-lg font-bold text-zinc-900 mb-6">Fan Favorites</h2>
        <div className="space-y-6">
          <PodcastItem
            name="Suyash Agrawal"
            description="entrepreneurship isn't what you think it is"
            topics={["digital marketing", "disruptive tech"]}
            imageUrl="/suyash-agrawal.jpg"
          />
          <PodcastItem
            name="Mlaah Singh"
            description="why you should give back in your 20s"
            topics={["non-profits", "service"]}
            imageUrl="/mlaah-singh.jpg"
          />
          <PodcastItem
            name="Luke Clancy"
            description="college is a game. here's how to win"
            topics={["college", "leverage"]}
            imageUrl="/luke-clancy.jpg"
          />
        </div>
      </section>
    </InnerLayout>
  )
}

interface PodcastItemProps {
  name: string
  description: string
  topics: string[]
  imageUrl: string
}

function PodcastItem({ name, description, topics, imageUrl }: PodcastItemProps) {
  return (
    <div className="flex items-start gap-4 border-b border-zinc-100 pb-5">
      <Image
        src={imageUrl}
        alt={name}
        width={56}
        height={56}
        className="rounded-full object-cover w-14 h-14 flex-shrink-0"
      />
      <div>
        <h3 className="text-base font-semibold text-zinc-900">{name}</h3>
        <p className="text-sm text-zinc-500 mt-0.5">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="text-[11px] text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
