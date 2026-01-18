import { Experience, Project } from '@/types'

// --- Experience Data ---
export const experienceData: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Affirm Technology Inc.',
    duration: 'Sep 2022 - Oct 2025',
    description: `Planned and built a full-stack a School Management System with ERP integration. I also developed a standalone RFID system to improve campus security and automate access and attendance. In addition, I managed project repositories with the team of collaborators and handled the successful project delivery to the production.`,
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'CodeIgniter',
      'MySQL',
      'RestAPI',
      'GitHub',
      'Docker',
      'RFID',
      'VPS',
    ],
  },
  {
    title: 'PHP Developer',
    company: 'RNP Jewelry Inc.',
    duration: 'Jan 2021 - Jun 2022',
    description: `Spearheaded and developed a multi-module ERP jewelry system covering sales invoices, trust receipts, inventory, repairs, vouchers, attendance, payroll, and reporting, and also created and deployed the company website, Diamond Life by RNP, using WordPress.`,
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'PHP',
      'CodeIgniter',
      'MySQL',
      'Bootstrap',
      'BitBucket',
      'WordPress',
      'PhotoShop',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Electronic Transfer & Advance Processing, Inc. (eTap)',
    duration: 'Dec 2019 - Aug 2020',
    description: `Developed and collaborated the backend API integrations for payment channels used by partner merchants Bux and GetGo, contributed minor features and UI improvements to the main web platform, and built demo-grade software for a new payment kiosk for an upcoming project.`,
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'JQuery',
      'MySQL',
      'Rest API',
      'PHP',
      'CodeIgniter',
      'Bootstrap',
      'BitBucket',
      'Linux',
    ],
  },
  {
    title: 'Junior PHP Developer',
    company: 'R&J Jewelry Class Ring & Metal Craft Inc.',
    duration: 'Jan 2017 - Oct 2018',
    description: `Enhanced existing jewelry software applications developed with a simple PHP codebase. Optimized system performance by refactoring SQL queries, improving database speed and page load time by 45%, led the integration of new modules including payroll, job orders, and artwork requests, migrated the system from PHP 5.2 to 7.1, and updated the company website with a mobile-responsive design using CSS Grid.`,
    technologies: ['HTML', 'CSS', 'Javascript', 'JQuery', 'PHP', 'MySQL'],
  },
  {
    title: 'Junior Java Software Developer',
    company: 'BizSupport.Net Inc.',
    duration: 'Mar 2014 - Sep 2016',
    description: `Developed and deployed of ticketing and inventory software using Java, configured and maintained MySQL and Apache database connections, and mentored two interns in adding new modules and optimizing performance, improving overall project productivity by 60%.`,
    technologies: ['Java', 'MySQL', 'Apache'],
  },
]

// --- Projects Data ---
export const projectsData: Project[] = [
  {
    title: 'Origami Education Website',
    description:
      'A modern website built with Next.js and TypeScript, featuring a fast, accessible, and responsive UI using Material UI (MUI). It integrates RESTful APIs with MongoDB for dynamic content management and uses server-side rendering to ensure high performance, scalability, and maintainable architecture.',
    technologies: ['Next.js', 'TypeScript', 'React', 'MUI', 'MongoDB'],
    image: '/images/origami-website-main.png',
    // githubUrl: 'https://github.com/yourusername/ecommerce-store',
    liveUrl: 'https://origami-education.com/',
  },
  {
    title: 'RFID Attendance Monitoring System',
    description:
      'Streamline campus operations with an RFID-powered attendance system. This solution eliminates manual logging by capturing real-time movement at campus entry points and automatically updating CRM records for centralized reporting.',
    technologies: ['RFID', 'PHP', 'CodeIgniter', 'Bootstrap', 'MySQL', 'API'],
    image: '/images/origami-rfid-main.png',
    // preview: '/images/rfid-attendance.png',
  },
  {
    title: 'School Management & ERP System',
    description:
      'A feature-rich platform for managing school transactions and students activities and more. Includes user authentication, payments, and a dashboard. Built with a focus on speed and scalability.',
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL', 'API'],
    image: '/images/origami-school-management-main.png',
    // githubUrl: 'https://github.com/yourusername/ecommerce-store',
    // liveUrl: 'https://ecommerce-store-live.vercel.app',
  },
]
