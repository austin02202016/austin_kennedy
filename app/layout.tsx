import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PersonSchema, WebSiteSchema } from "@/components/blog/Schema";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";
import { SapienceTracker } from "@/components/sapience-tracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  },
  twitter: {
    card: "summary",
    creator: "@astnkennedy",
    title: SITE_TITLE,
    description:
      SITE_DESCRIPTION,
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
