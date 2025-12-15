import { Experience, Project } from '@/types'

// --- Experience Data ---
export const experienceData: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Innovate Solutions Inc.',
    duration: 'Jan 2023 - Present',
    description:
      'Led the development of a real-time analytics dashboard, improving data processing speed by 40%. Implemented new features across the stack using Next.js, Node.js, and MongoDB.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'AWS',
    ],
  },
  {
    title: 'Front-End Engineer',
    company: 'Creative Web Studio',
    duration: 'Jun 2021 - Dec 2022',
    description:
      'Developed and maintained client-side applications using React, focusing on mobile responsiveness and performance optimization. Collaborated with design team to translate mockups into high-quality code.',
    technologies: [
      'React',
      'JavaScript',
      'Redux',
      'Styled Components',
      'REST APIs',
    ],
  },
]

// --- Projects Data ---
export const projectsData: Project[] = [
  {
    title: 'SaaS Platform MVP',
    description:
      'A feature-rich platform for managing marketing campaigns. Includes user authentication, payments, and a dashboard. Built with a focus on speed and scalability.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: '/images/project-saas-platform.jpg',
    githubUrl: 'https://github.com/yourusername/saas-platform',
    liveUrl: 'https://saas-platform-live.vercel.app',
  },
  {
    title: 'E-commerce Headless Store',
    description:
      'A blazing-fast e-commerce front-end powered by a headless CMS and custom API endpoints for product management.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'GraphQL',
      'Stripe',
      'Sanity CMS',
    ],
    image: '/images/project-ecommerce.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce-store',
    liveUrl: 'https://ecommerce-store-live.vercel.app',
  },
]
