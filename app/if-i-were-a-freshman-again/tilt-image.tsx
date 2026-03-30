"use client"

import { useRef, useState } from "react"
import Image from "next/image"

export function TiltImage() {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rotateX = y * -8
    const rotateY = x * 8
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  function handleMouseLeave() {
    setTransform("")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{ transform, transition: transform ? "transform 0.1s ease-out" : "transform 0.4s ease-out" }}
    >
      <div className="absolute -inset-[3px] rounded-2xl bg-[conic-gradient(from_var(--border-angle),transparent_30%,rgba(0,0,0,0.15)_50%,transparent_70%)] animate-border-spin" />
      <div className="absolute -inset-[2px] rounded-2xl bg-neutral-50" />
      <Image
        src="/freshman-event.png"
        alt="If I Were a Freshman Again — Tuesday April 7, 6-8PM at CIF 0035. Featuring Arya Nagabhryu, Casper Capital, Yuna Batmunkh, Chikelu Egbuna, Monisa Yusra, Jay Yang, Luna Bitar, and Adan Somarriba."
        width={800}
        height={1000}
        className="relative w-full rounded-xl"
        priority
      />
    </div>
  )
}
