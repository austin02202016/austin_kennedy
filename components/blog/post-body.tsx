"use client"

import { useState } from "react"
import type { AgentGuide } from "@/lib/agent-guides"

const PROSE_CLASSES = `prose prose-zinc prose-lg max-w-none
  prose-headings:font-mono prose-headings:font-bold prose-headings:text-zinc-900 prose-headings:tracking-tight
  prose-h1:text-2xl prose-h1:mb-6 prose-h1:mt-8
  prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
  prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
  prose-p:font-mono prose-p:leading-relaxed prose-p:text-zinc-700 prose-p:mb-6 prose-p:text-[15px]
  prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-zinc-300 hover:prose-a:decoration-zinc-900
  prose-strong:text-zinc-900 prose-strong:font-semibold
  prose-code:text-sm prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-zinc-800
  prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:p-4 prose-pre:rounded-md
  [&_pre_code]:bg-transparent [&_pre_code]:text-zinc-100 [&_pre_code]:p-0
  prose-blockquote:border-l-2 prose-blockquote:border-zinc-200 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-zinc-600
  prose-ul:space-y-2 prose-ol:space-y-2
  prose-li:text-zinc-700 prose-li:leading-relaxed prose-li:text-[15px] prose-li:font-mono
  prose-em:text-zinc-600`

interface PostBodyProps {
  html: string
  agentGuide: AgentGuide | null
}

export function PostBody({ html, agentGuide }: PostBodyProps) {
  const [mode, setMode] = useState<"read" | "agent">("read")
  const [copied, setCopied] = useState(false)

  // No agent guide for this post — render the article as-is, no toggle.
  if (!agentGuide) {
    return (
      <div
        className={PROSE_CLASSES}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(agentGuide.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked — leave the prompt visible to copy manually.
    }
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex items-center gap-1 p-1 mb-10 border border-zinc-200 rounded-md w-fit text-xs font-mono">
        <button
          type="button"
          onClick={() => setMode("read")}
          className={`px-3 py-1.5 rounded transition-colors ${
            mode === "read"
              ? "bg-zinc-900 text-white"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Read the guide
        </button>
        <button
          type="button"
          onClick={() => setMode("agent")}
          className={`px-3 py-1.5 rounded transition-colors ${
            mode === "agent"
              ? "bg-zinc-900 text-white"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          For agents
        </button>
      </div>

      {mode === "read" ? (
        <div
          className={PROSE_CLASSES}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div className="font-mono">
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            {agentGuide.intro}
          </p>

          <button
            type="button"
            onClick={copyPrompt}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 text-xs rounded border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            {copied ? "Copied" : "Copy prompt"}
          </button>

          <pre className="bg-zinc-900 text-zinc-100 text-[13px] leading-relaxed p-5 rounded-md overflow-x-auto whitespace-pre-wrap">
            {agentGuide.prompt}
          </pre>
        </div>
      )}
    </div>
  )
}
