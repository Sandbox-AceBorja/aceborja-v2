import { Experience, Project } from '@/types'

// --- Experience Data ---
export const experienceData: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Affirm Technology Inc.',
    duration: 'Sep 2022 - Oct 2025',
    description: `At Affirm Technology, a firm dedicated to solving modern business challenges with innovative software, I led the comprehensive planning and full-stack development of a School Management System integrated with an ERP, featuring robust, multi-module functionality. I designed and deployed a standalone RFID system to enhance campus security and streamline personnel access and attendance. My responsibilities also included the administration and optimization of the Japan-based Ubuntu Linux servers for system deployment and maintenance, while actively leading and mentoring a development team to ensure high standards of code quality and successful project delivery.`,
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'PHP',
      'CodeIgniter',
      'MySQL',
      'RestAPI',
      'RFID',
      'Ubuntu',
      'Docker',
      'Figma',
    ],
  },
  {
    title: 'PHP Developer',
    company: 'RNP Jewelry Inc.',
    duration: 'Jan 2021 - Jun 2022',
    description: `Spearheaded the development of a core business application for RNP Jewelry Inc., a prominent high-end jeweler undergoing nationwide expansion in the Philippines, providing the scalable digital infrastructure required for their operational growth.`,
    technologies: [
      'PHP',
      'CodeIgniter',
      'MySQL',
      'Rest API',
      'Bootstrap',
      'WordPress',
      'PhotoShop',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Electronic Transfer & Advance Processing, Inc. (eTap)',
    duration: 'Dec 2019 - Aug 2020',
    description: `At eTap, a FinTech company providing public self-service financial solutions (e.g., bill payments, e-wallet top-ups), I developed well-designed and testable code for critical payment channels, integrating backend APIs with merchant partners.`,
    technologies: [
      'PHP',
      'CodeIgniter',
      'MySQL',
      'Rest API',
      'Bootstrap',
      'WordPress',
      'PhotoShop',
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
