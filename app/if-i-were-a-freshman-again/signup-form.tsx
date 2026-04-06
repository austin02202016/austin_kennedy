"use client"

import { useState, useEffect } from "react"
import { findRso } from "./rso-config"

const ATTENDEE_PICS = [
  "/attendee-1.png",
  "/attendee-2.png",
  "/attendee-3.png",
  "/attendee-4.png",
  "/attendee-5.png",
]

export function SignupForm() {
  const [state, setState] = useState<{ error?: string; success?: boolean; waitlisted?: boolean; overCapacity?: boolean } | null>(null)
  const [isPending, setIsPending] = useState(false)
  const [count, setCount] = useState<number | null>(null)
  const [promoCode, setPromoCode] = useState("")
  const matchedRso = promoCode ? findRso(promoCode) : undefined

  useEffect(() => {
    fetch("/api/freshman-signup")
      .then((r) => r.json())
      .then((d) => setCount(d.display))
      .catch(() => setCount(0))
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
          promo_code: promoCode,
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
          You{'\u2019'}re registered.
        </p>
        <p className="text-neutral-400 text-[14px] mb-2">
          We{'\u2019'}ll text you the details closer to the event.
        </p>
        {state.overCapacity && (
          <p className="text-amber-600 text-[13px] font-medium mb-6 bg-amber-50 rounded-lg px-4 py-2.5">
            Seats are almost full — get there by 5:30 to guarantee entry. After 230 are in, we can{'\u2019'}t let anyone else in.
          </p>
        )}
        {!state.overCapacity && <div className="mb-6" />}
        {matchedRso && !state.waitlisted && (
          <div className="bg-neutral-100 rounded-lg px-4 py-3 mb-6 text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <img src={matchedRso.icon} alt={matchedRso.name} className="h-5 object-contain" />
              <span className="text-xs font-semibold text-neutral-700">{matchedRso.name} Perk</span>
            </div>
            <p className="text-[13px] text-neutral-500 leading-relaxed">
              {matchedRso.perkMessage}
            </p>
          </div>
        )}
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
        Free Atomic Wings and pizza for everyone who registers. Limited seats — we&apos;ll be verifying at the door.
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

        <div>
          <label htmlFor="promo" className="block text-[11px] text-neutral-400 mb-1.5 tracking-wide uppercase font-medium">
            Promo code <span className="normal-case text-neutral-300">(optional)</span>
          </label>
          <div className="relative">
            <input
              id="promo"
              name="promo_code"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={isPending}
              maxLength={50}
              placeholder="Enter code"
              className={`w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-base text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 transition-all ${matchedRso ? "pr-10" : ""}`}
            />
            {matchedRso && (
              <img
                src={matchedRso.icon}
                alt={matchedRso.name}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-6 object-contain"
              />
            )}
          </div>
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
