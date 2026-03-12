"use client"

import { useState, useEffect } from "react"

const ATTENDEE_PICS = [
  "/attendee-1.png",
  "/attendee-2.png",
  "/attendee-3.png",
  "/attendee-4.png",
  "/attendee-5.png",
]

export function SignupForm() {
  const [state, setState] = useState<{ error?: string; success?: boolean; waitlisted?: boolean } | null>(null)
  const [isPending, setIsPending] = useState(false)
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/freshman-signup")
      .then((r) => r.json())
      .then((d) => setCount(d.display))
      .catch(() => setCount(50))
  }, [state?.success])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)
    const form = new FormData(e.currentTarget)
    try {
      const res = await fetch("/api/freshman-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
        }),
      })
      const data = await res.json()
      setState(data)
    } catch {
      setState({ error: "Something went wrong. Try again." })
    } finally {
      setIsPending(false)
    }
  }

  if (state?.success) {
    const shareUrl = "https://austnkennedy.com/if-i-were-a-freshman-again"
    const shareText = `I just signed up for this, you should come\n\n${shareUrl}`
    const smsLink = `sms:?&body=${encodeURIComponent(shareText)}`

    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-neutral-100 to-neutral-50 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <p className="text-neutral-900 font-semibold text-xl tracking-tight mb-1.5">
          {state.waitlisted ? "You\u2019re on the waitlist." : "You\u2019re in."}
        </p>
        <p className="text-neutral-400 text-[14px] mb-8">
          {state.waitlisted
            ? "We\u2019ll text you if a spot opens up."
            : "We\u2019ll text you the details closer to the event."}
        </p>
        <a
          href={smsLink}
          className="inline-block bg-neutral-900 text-white font-medium text-sm rounded-lg py-2.5 px-10 hover:bg-neutral-800 active:scale-[0.99] transition-all shadow-sm shadow-neutral-900/10 text-center"
        >
          Bring a friend
        </a>
        <p className="text-neutral-300 text-xs mt-2.5">
          (Before there&apos;s no seats left)
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-[24px] md:text-[30px] font-semibold text-neutral-900 tracking-[-0.02em] leading-[1.15] mb-3">
        Reserve Your Seat
      </h1>

      <p className="text-[15px] text-neutral-500 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
        Free food for everyone who registers. Limited seats — we&apos;ll be verifying at the door.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        {count !== null && (
          <div className="flex items-center gap-3 mb-1 justify-center md:justify-start">
            <div className="flex -space-x-2.5">
              {ATTENDEE_PICS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover border-2 border-neutral-50"
                  style={{ zIndex: ATTENDEE_PICS.length - i }}
                />
              ))}
            </div>
            <p className="text-[13px] text-neutral-500">
              <span className="font-semibold text-neutral-900">{count}</span> already registered
            </p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-[11px] text-neutral-400 mb-1.5 tracking-wide uppercase font-medium">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Austin Kennedy"
            className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-base text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[11px] text-neutral-400 mb-1.5 tracking-wide uppercase font-medium">
            UIUC email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="netid@illinois.edu"
            className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-base text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[11px] text-neutral-400 mb-1.5 tracking-wide uppercase font-medium">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(217) 555-0123"
            className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-base text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 transition-all"
          />
        </div>

        {state?.error && (
          <p className="text-red-500/80 text-xs font-medium">{state.error}</p>
        )}

        <div className="flex justify-center mt-1">
          <button
            type="submit"
            disabled={isPending}
            className="bg-neutral-900 text-white font-medium text-sm rounded-lg py-2.5 px-10 hover:bg-neutral-800 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-neutral-900/10"
          >
            {isPending ? "Submitting..." : "Let's run it"}
          </button>
        </div>
      </form>
    </div>
  )
}
