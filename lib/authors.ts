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
    title: "Founding Engineer @ Origami (YC F24)",
    bio: "Founding Engineer at Origami (YC F24). Self-taught engineer, UIUC grad. Building AI agents and MCP in San Francisco.",
    linkedin: "https://www.linkedin.com/in/austnkennedy/",
    twitter: "https://x.com/astnkennedy",
  },
}

export function getAuthor(name: string): Author {
  return authors[name] || authors["Austin Kennedy"]
}
