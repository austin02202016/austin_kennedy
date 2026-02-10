import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PersonSchema, WebSiteSchema } from "@/components/blog/Schema";
import { SITE_URL } from "@/lib/constants";
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
    default: "Austin Kennedy — Founding Engineer at Origami (YC F24)",
    template: "%s | Austin Kennedy",
  },
  description:
    "Personal website of Austin Kennedy — Founding Engineer at Origami (YC F24). Self-taught engineer, UIUC grad, community builder in San Francisco.",
  keywords: [
    "Austin Kennedy",
    "Origami",
    "YC F24",
    "AI Agents",
    "Founding Engineer",
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
    title: "Austin Kennedy — Founding Engineer at Origami (YC F24)",
    description:
      "Personal website of Austin Kennedy — Founding Engineer at Origami (YC F24). Self-taught engineer, UIUC grad, community builder in San Francisco.",
  },
  twitter: {
    card: "summary",
    creator: "@astnkennedy",
    title: "Austin Kennedy — Founding Engineer at Origami (YC F24)",
    description:
      "Founding Engineer at Origami (YC F24). Self-taught engineer, UIUC grad. Building in SF.",
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
      </body>
    </html>
  );
}
