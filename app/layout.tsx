import type { Metadata } from "next";
import localFont from "next/font/local";
import { PersonSchema, WebSiteSchema } from "@/components/blog/Schema";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, HEADSHOT_URL, HEADSHOT_ALT } from "@/lib/constants";
import { SapienceTracker } from "@/components/sapience-tracker";
import "./globals.css";

const geistSans = localFont({
  src: [{path: "./fonts/vendor/Geist-normal-100-900.woff2", weight: "100 900", style: "normal"}],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [{path: "./fonts/vendor/Geist_Mono-normal-100-900.woff2", weight: "100 900", style: "normal"}],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Austin Kennedy",
  },
  description:
    SITE_DESCRIPTION,
  keywords: [
    "Austin Kennedy",
    "Sapience",
    "Founder",
    "Entrepreneur",
    "AI Search",
    "ChatGPT",
    "Claude",
    "Perplexity",
    "San Francisco",
    "UIUC",
    "Software Engineer",
    "Model Context Protocol",
    "MCP",
  ],
  authors: [{ name: "Austin Kennedy", url: SITE_URL }],
  creator: "Austin Kennedy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Austin Kennedy",
    title: SITE_TITLE,
    description:
      SITE_DESCRIPTION,
    images: [{ url: HEADSHOT_URL, width: 534, height: 534, alt: HEADSHOT_ALT }],
  },
  twitter: {
    card: "summary",
    creator: "@astnkennedy",
    title: SITE_TITLE,
    description:
      SITE_DESCRIPTION,
    images: [HEADSHOT_URL],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AEO: Structured data for AI engines */}
        <PersonSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SapienceTracker />
      </body>
    </html>
  );
}
