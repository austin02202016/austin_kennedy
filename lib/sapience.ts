type EventSignup = {
  email: string
  metadata: { event: string }
}

declare global {
  interface Window {
    sapienceSignup?: (signup: EventSignup) => void
  }
}

// Keep successful signups in memory if the SDK is still loading. Never persist
// email in localStorage, and never let analytics interrupt registration.
const pending: EventSignup[] = []

export function flushSapienceSignups() {
  if (typeof window === "undefined" || !window.sapienceSignup) return
  while (pending.length) {
    const signup = pending.shift()!
    try {
      window.sapienceSignup(signup)
    } catch {
      // Registration already succeeded; analytics is best effort.
    }
  }
}

export function trackEventSignup(email: string, event: string) {
  pending.push({ email: email.trim().toLowerCase(), metadata: { event } })
  flushSapienceSignups()
}
