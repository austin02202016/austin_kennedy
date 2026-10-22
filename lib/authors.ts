import { FOUNDER_ONE_LINER } from "@/lib/constants"

export interface Author {
  name: string
  avatar: string
  title?: string
  bio?: string
  linkedin?: string
  twitter?: string
}

const authors: Record<string, Author> = {
  "Austin Kennedy": {
    name: "Austin Kennedy",
    avatar: "/austin-profile.jpg",
    title: "Founder of Sapience",
    bio: FOUNDER_ONE_LINER,
    linkedin: "https://www.linkedin.com/in/austnkennedy/",
    twitter: "https://x.com/astnkennedy",
  },
}

export function getAuthor(name: string): Author {
  return authors[name] || authors["Austin Kennedy"]
}
