import { EVENT } from "./event"

// A 4:5 flyer rendered in markup, so the page ships before a designed PNG exists.
export function EventFlyer() {
  return (
    <div
      role="img"
      aria-label={`${EVENT.title} — ${EVENT.dateLabel}, ${EVENT.timeLabel} at ${EVENT.venueLong}.`}
      className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-950 text-white select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(132,204,22,0.25),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative h-full flex flex-col justify-between p-7 sm:p-9">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/60 font-medium">
          <span>UIUC &middot; Founders Week</span>
          <span>Free entry</span>
        </div>

        <div>
          <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-emerald-300/90 font-semibold mb-3">
            One night. Real numbers.
          </p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[0.95] text-[40px] sm:text-[52px]">
            How to make
            <br />
            <span className="text-emerald-300">$10K</span> a month
            <br />
            in college
          </h2>
          <p className="mt-5 text-[13px] sm:text-[15px] text-white/70 leading-relaxed max-w-[26ch]">
            UIUC students who are actually doing it break down exactly how, step by step.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-5 text-[11px] sm:text-[13px]">
          <div>
            <p className="text-white/50 uppercase tracking-wider text-[9px] sm:text-[10px] mb-1">When</p>
            <p className="font-medium leading-snug">{EVENT.dateLabel.replace("Tuesday, ", "Tue ")}</p>
            <p className="text-white/70">{EVENT.timeLabel}</p>
          </div>
          <div>
            <p className="text-white/50 uppercase tracking-wider text-[9px] sm:text-[10px] mb-1">Where</p>
            <p className="font-medium leading-snug">{EVENT.venue}</p>
            <p className="text-white/70">Campus</p>
          </div>
          <div>
            <p className="text-white/50 uppercase tracking-wider text-[9px] sm:text-[10px] mb-1">Seats</p>
            <p className="font-medium leading-snug">{EVENT.seats}</p>
            <p className="text-white/70">Verified at door</p>
          </div>
        </div>
      </div>
    </div>
  )
}
