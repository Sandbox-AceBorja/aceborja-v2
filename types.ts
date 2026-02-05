// Define global types for your portfolio data

/**
 * Type definition for a professional work experience entry.
 */
export type Experience = {
  title: string
  company: string
  duration: string
  description: string
  technologies: string[]
}

/**
 * Type definition for a project entry in the portfolio.
 */
export type Project = {
  title: string
  description: string
  technologies: string[]
  image?: string // Path to the project image (e.g., '/images/project-saas-platform.jpg')
  githubUrl?: string // Optional GitHub link
  liveUrl?: string // Optional Live Demo link
}

/**
 * Type definition for a navigation bar link.
 */
export type NavLink = {
  label: string
  href: string
}
