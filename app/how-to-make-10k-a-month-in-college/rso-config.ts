export interface RsoEntry {
  code: string
  name: string
  icon: string
  perkMessage: string
}

export const RSO_CONFIG: RsoEntry[] = [
  {
    code: "reach",
    name: "REACH",
    icon: "/rso-reach.png",
    perkMessage:
      "After the event, you'll get access to a curated list of UGC opportunities from our panelists who are creators.",
  },
  {
    code: "build",
    name: "BUILD",
    icon: "/rso-bilt.png",
    perkMessage:
      "After the event, you'll get a curated list of accelerators and grants recommended by the speakers, plus a quick guide on how to apply.",
  },
  {
    code: "soc2",
    name: "SOC2",
    icon: "/rso-soc2.png",
    perkMessage:
      "After the event, you'll get a curated list of accelerators and grants recommended by the speakers, plus a quick guide on how to apply.",
  },
]

export function findRso(code: string | null | undefined): RsoEntry | undefined {
  if (!code) return undefined
  const normalized = code.toLowerCase().trim()
  if (!normalized) return undefined
  return RSO_CONFIG.find((r) => r.code === normalized)
}
