import type { ReactNode } from "react"
import Link from "next/link"

interface InnerLayoutProps {
  children: ReactNode
  title: string
}

export function InnerLayout({ children, title }: InnerLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-mono">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
        >
          &larr; Back to home
        </Link>

        {/* Page title */}
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-12">
          {title}
        </h1>

        {/* Content */}
        {children}
      </div>
    </div>
  )
}
