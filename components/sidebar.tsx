"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-6 left-6 z-50 md:hidden bg-zinc-900/90 p-2 rounded-md text-zinc-400 hover:text-zinc-100 focus:outline-none"
        style={{ textTransform: "lowercase" }}
      >
        {isMobileOpen ? "close" : "menu"}
      </button>

      {/* Sidebar backdrop for mobile */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 bg-zinc-900/95 border-r border-zinc-800/50 flex flex-col transition-transform duration-300 ease-in-out",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full p-8">
          {/* Navigation */}
          <nav className="space-y-1 flex-1" style={{ textTransform: "lowercase" }}>
            <NavLink href="/" active={pathname === "/"}>
              home
            </NavLink>
            <NavLink href="/projects" active={pathname === "/projects"}>
              coding projects
            </NavLink>
            <NavLink href="/podcasts" active={pathname === "/podcasts"}>
              podcasts
            </NavLink>
            <NavLink href="/resources" active={pathname === "/resources"}>
              resources
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              my life
            </NavLink>
          </nav>

          {/* Social links */}
          <div className="pt-8 border-t border-zinc-800/50" style={{ textTransform: "lowercase" }}>
            <p className="text-zinc-500 text-sm mb-4 font-light">connect with me</p>
            <div className="flex items-center justify-center space-x-5">
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                twitter
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                linkedin
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                github
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center" style={{ textTransform: "lowercase" }}>
            <p className="text-zinc-500 text-xs font-light">© {new Date().getFullYear()} austin</p>
          </div>
        </div>
      </aside>
    </>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
}

function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-md text-base font-light transition-colors",
        active ? "bg-zinc-800/80 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-100",
      )}
      style={{ textTransform: "lowercase" }}
    >
      <span>{children}</span>
    </Link>
  )
}

