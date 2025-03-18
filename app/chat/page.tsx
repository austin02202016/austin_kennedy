"use client"

import { Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function ChatPage() {
  return (
    <PageLayout>
      <div className="min-h-screen py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4">chat with austin</h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              ask me anything about entrepreneurship, college, tech, or my experiences. this ai is trained on my tweets,
              linkedin posts, and other content.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="space-y-12 mb-12 border-b border-zinc-800/30 pb-12">
            {/* AI Message */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-zinc-800/80 flex-shrink-0 flex items-center justify-center">
                <Bot className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <p className="text-zinc-300 font-light leading-relaxed">
                  hey there! i&apos;m austin&apos;s ai assistant, trained on his tweets, linkedin posts, and other content. what
                  would you like to know about austin, his experiences, or his thoughts on entrepreneurship, tech, or
                  college life?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-zinc-800/80 flex-shrink-0 flex items-center justify-center">
                <User className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <p className="text-zinc-300 font-light leading-relaxed">what are austin&apos;s current projects?</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-zinc-800/80 flex-shrink-0 flex items-center justify-center">
                <Bot className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <p className="text-zinc-300 font-light leading-relaxed mb-4">
                  austin is currently working on several exciting projects:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-300 font-light">
                  <li>
                    founding operations at <span className="underline">origami agents</span>, which he joined in
                    february 2025
                  </li>
                  <li>
                    running <span className="underline">griot</span>, his personal llc focused on content creation and
                    strategy
                  </li>
                  <li>
                    helping run <span className="underline">power hour</span>, a society for college entrepreneurs
                  </li>
                  <li>
                    promoting college entrepreneurship through <span className="underline">proof of concept</span>, his
                    podcast and media company
                  </li>
                  <li>
                    working as a venture scout for <span className="underline">soma capital</span>
                  </li>
                  <li>
                    serving as a media and branding consultant for <span className="underline">innovo markets</span>
                  </li>
                  <li>
                    helping grow and secure partnerships for <span className="underline">illini run club</span>
                  </li>
                  <li>
                    active member of <span className="underline">phi chi theta</span> professional business fraternity
                  </li>
                </ul>
                <p className="text-zinc-300 font-light leading-relaxed mt-4">
                  he&apos;s also pursuing a finance major with a computer science minor and a concentration in commercial
                  real estate at <span className="underline">uiuc</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="pt-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="ask me anything about austin..."
                className="flex-1 bg-transparent border-b border-zinc-800 px-2 py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600"
              />
              <Button className="bg-transparent hover:bg-zinc-800/30 text-zinc-300 border-0 h-12 px-4">
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-zinc-500 text-sm mt-3 font-light">
              this ai is trained on austin&apos;s public content and may not reflect his current thoughts or opinions.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

