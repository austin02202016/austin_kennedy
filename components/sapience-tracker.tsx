"use client"

import Script from "next/script"
import { flushSapienceSignups } from "@/lib/sapience"

export function SapienceTracker() {
  return (
    <Script
      src="/_a/a.js?s=austnkennedy"
      strategy="afterInteractive"
      onReady={flushSapienceSignups}
    />
  )
}
