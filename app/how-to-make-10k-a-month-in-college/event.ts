// Single source of truth for the event details. Edit here, not in the components.
export const EVENT = {
  slug: "how-to-make-10k-a-month-in-college",
  key: "10k-a-month-2026-09-29", // row key in personal_event_signups.event
  title: "How to Make $10K a Month in College",
  shortTitle: "How to Make $10K/Month in College",
  dateLabel: "Tuesday, September 29",
  timeLabel: "6–8 PM",
  venue: "MSEB 100",
  venueLong: "MSEB 100 (Materials Science & Engineering Building)",
  seats: 260,
  warnAt: 240, // show the "get here early" warning once this many are registered
  doorsBy: "5:30",
  displayOffset: 50, // "already registered" shows real count + this; capacity math uses the real count
} as const

export const EVENT_URL = `https://austnkennedy.com/${EVENT.slug}`

export const COLLEGES = [
  "Gies College of Business",
  "Grainger College of Engineering",
  "Liberal Arts & Sciences (LAS)",
  "ACES",
  "College of Media",
  "College of Education",
  "Fine & Applied Arts (FAA)",
  "Applied Health Sciences (AHS)",
  "School of Information Sciences",
  "School of Social Work",
  "College of Law",
  "Veterinary Medicine",
  "Graduate / Other",
] as const
