"use client"

import Image from "next/image"
import { PageLayout } from "@/components/page-layout"

export default function PodcastsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4" >
              Past Podcasts
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light" style={{ textTransform: "lowercase" }}>
              these are some of the folks i&apos;ve interviewed
            </p>
          </div>

          {/* Startup Founders Section */}
          <section className="mb-16" style={{ textTransform: "lowercase" }}>
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8 border-b border-zinc-800/30 pb-2">
              startup founders
            </h2>

            <div className="space-y-10">
              <PodcastItem
                name="avi patel"
                description="how a former uiuc student signed 34,000 artists"
                topics={["startups", "entrepreneurship"]}
                imageUrl="/avi-patel.jpg"
              />

              <PodcastItem
                name="shrikar lekkala"
                description="from watching moneyheist to dropping out"
                topics={["ai", "ed-tech"]}
                imageUrl="/shrikar-lekkala.jpg"
              />

              <PodcastItem
                name="will lawson"
                description="solving the problem of stolen crypto"
                topics={["crypto", "startups"]}
                imageUrl="/will-lawson.jpg"
              />

              <PodcastItem
                name="austin majors"
                description="pitching whole foods as a 19 year old founder"
                topics={["cpg", "family business"]}
                imageUrl="/austin-majors.jpg"
              />
            </div>
          </section>

          {/* Content Creators Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8 border-b border-zinc-800/30 pb-2">
              Content Creators
            </h2>

            <div className="space-y-10">
              <PodcastItem
                name="Sharif Caesar"
                description="From reselling birds in Ghana to making millions by 23"
                topics={["Social Media", "Instagram", "Tiktok"]}
                imageUrl="/sharif-caesar.png"
              />

              <PodcastItem
                name="Casper Opala"
                description="How to reach 3 million followers recording from an iPhone"
                topics={["Finance Creator", "Instagram", "Tiktok"]}
                imageUrl="/casper-opala.jpg"
              />

              <PodcastItem
                name="Derrick Echols"
                description="Behind the scenes of Chicago's largest highschool sports page"
                topics={["Finance Creator", "Instagram", "Tiktok"]}
                imageUrl="/derrick-echols.jpg"
              />

              <PodcastItem
                name="Chik Egbuna"
                description="How to bring energy into every room"
                topics={["Fitness Creator", "Gym", "Instagram"]}
                imageUrl="/chik-egbuna.png"
              />
            </div>
          </section>

          {/* Fan Favorites Section */}
          <section>
            <h2 className="text-2xl font-normal tracking-tight text-zinc-100 mb-8 border-b border-zinc-800/30 pb-2">
              Fan Favorites
            </h2>

            <div className="space-y-10">
              <PodcastItem
                name="Suyash Agrawal"
                description="Entrepreneurship isn't what you think it is"
                topics={["Digital Marketing Agency", "Disruptive Tech"]}
                imageUrl="/suyash-agrawal.jpg"
              />

              <PodcastItem
                name="Mlaah Singh"
                description="Why you should give back in your 20s"
                topics={["non-profits", "Service", "Actress"]}
                imageUrl="/mlaah-singh.jpg"
              />

              <PodcastItem
                name="Luke Clancy"
                description="College is a game. Here's how to win"
                topics={["College", "Leverage", "Infinite Games"]}
                imageUrl="/luke-clancy.jpg"
              />
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
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
    <div className="flex items-start gap-4" style={{ textTransform: "lowercase" }}>
      <Image src={imageUrl} alt={name} width={80} height={80} className="rounded-md" />
      <div>
        <h3 className="text-xl font-normal text-zinc-100 mb-1">{name}</h3>
        <p className="text-zinc-400 font-light mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span key={index} className="text-zinc-500 text-sm font-light">
              {topic}
              {index < topics.length - 1 ? " • " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

