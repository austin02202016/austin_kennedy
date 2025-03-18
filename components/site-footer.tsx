export function SiteFooter() {
  return (
    <footer className="py-16 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-zinc-500 font-light">© {new Date().getFullYear()} Austin • All rights reserved</p>
      </div>
    </footer>
  )
}

