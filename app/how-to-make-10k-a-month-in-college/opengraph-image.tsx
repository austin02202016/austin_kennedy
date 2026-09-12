import { ImageResponse } from "next/og"
import { EVENT } from "./event"

export const runtime = "edge"
export const alt = `${EVENT.title} — UIUC Event`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #052e22 0%, #0a0a0a 55%, #1a2e05 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
          <span>UIUC · Founders Week</span>
          <span>Free entry</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>How to make</div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -3, display: "flex" }}>
            <span style={{ color: "#6ee7b7" }}>$10K</span>
            <span style={{ marginLeft: 22 }}>a month in college</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 28, color: "rgba(255,255,255,0.85)" }}>
          <span>{EVENT.dateLabel}</span>
          <span>{EVENT.timeLabel}</span>
          <span>{EVENT.venue}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
