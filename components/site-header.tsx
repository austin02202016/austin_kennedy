"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-zinc-800/50 sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center text-xl font-normal tracking-tight">
              Austin
            </Link>
            <div className="hidden md:ml-12 md:flex md:space-x-10">
              <NavLink href="/" active={pathname === "/"}>
                Home
              </NavLink>
              <NavLink href="/chat" active={pathname === "/chat"}>
                Chat with Me
              </NavLink>
              <NavLink href="/short-form" active={pathname === "/short-form"}>
                Short-Form
              </NavLink>
              <NavLink href="/projects" active={pathname === "/projects"}>
                Coding Projects
              </NavLink>
              <NavLink href="/podcasts" active={pathname === "/podcasts"}>
                Podcasts
              </NavLink>
              <NavLink href="/about" active={pathname === "/about"}>
                My Life
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-zinc-400 hover:text-zinc-100 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-zinc-800/50 py-4 px-6">
        <div className="flex flex-col space-y-4">
          <MobileNavLink href="/" active={pathname === "/"}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/chat" active={pathname === "/chat"}>
            Chat with Me
          </MobileNavLink>
          <MobileNavLink href="/short-form" active={pathname === "/short-form"}>
            Short-Form
          </MobileNavLink>
          <MobileNavLink href="/projects" active={pathname === "/projects"}>
            Coding Projects
          </MobileNavLink>
          <MobileNavLink href="/podcasts" active={pathname === "/podcasts"}>
            Podcasts
          </MobileNavLink>
          <MobileNavLink href="/about" active={pathname === "/about"}>
            My Life
          </MobileNavLink>
        </div>
      </div>
    </nav>
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
      className={`inline-flex items-center px-1 pt-1 text-sm font-light ${
        active
          ? "border-b-2 border-zinc-400 text-zinc-100"
          : "border-b-2 border-transparent text-zinc-400 hover:text-zinc-100 hover:border-zinc-700"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`block px-4 py-3 rounded-md text-base font-light ${
        active ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100"
      }`}
    >
      {children}
    </Link>
  )
}

