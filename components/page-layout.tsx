import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Sidebar />
      <div className="md:pl-72 min-h-screen">{children}</div>
    </div>
  )
}

