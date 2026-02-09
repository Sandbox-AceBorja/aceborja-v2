import { Experience, Project, ProjectMinor } from '@/types'

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
      'A modern, responsive web application built with Next.js and TypeScript, focusing on performance, accessibility, and maintainability for educational institutions.',
    technologies: ['Next.js', 'TypeScript', 'React', 'MUI', 'MongoDB'],
    image: '/images/origami-website-main.png',
    liveUrl: 'https://origami-education.com/',
  },
  {
    title: 'RFID Attendance Monitoring System',
    description:
      'An automated system for facility access management and operational monitoring. This solution captures real-time entry data at key checkpoints and integrates with centralized management systems for comprehensive reporting and analytics.',
    technologies: ['RFID', 'PHP', 'CodeIgniter', 'Bootstrap', 'MySQL', 'API'],
    image: '/images/origami-rfid-main.png',
  },
  {
    title: 'School Management & ERP System',
    description:
      'A comprehensive platform for managing institutional operations, user management, and transaction processing. Includes authentication, payment integration, and analytics dashboards with focus on performance and scalability.',
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL', 'API'],
    image: '/images/origami-school-management-main.png',
  },
]

// --- Minor Projects Data ---
export const minorProjectsData: ProjectMinor[] = [
  {
    title: 'Infinity Tic Tac Toe',
    description:
      'A modern web-based Tic-Tac-Toe game featuring a vanishing-piece rule where the oldest move disappears after the fourth placement, with dynamic multiplayer support.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com/Sandbox-AceBorja/infinity-tictactoe',
    liveUrl: 'https://infinity-tictactoe.vercel.app/',
  },
  {
    title: 'AI-Math-Problem-Generator',
    description:
      'Next.js and TypeScript app that generates Grade 5 math quizzes using the Google Gemini API, validates answers and saved results to Supabase.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Google Gemini API',
    ],
    githubUrl: 'https://github.com/Sandbox-AceBorja/ai-math-problem-generator',
    liveUrl: 'https://ai-math-problem-generator-flax.vercel.app/',
  },
  {
    title: 'Turks Shawarma System',
    description:
      'A point-of-sale system for a local shawarma business, featuring order management, inventory tracking, and sales reporting to streamline operations and improve customer service.',
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL'],
  },
  {
    title: 'Diamond Life By RNP Website',
    description:
      "A lightweight jewelry website built with WordPress and Elementor, featuring a clean design and optimized for performance and SEO to showcase the brand's collections effectively.",
    technologies: ['WordPress', 'Elementor', 'Photoshop'],
  },
  {
    title: 'Jewelry Management System',
    description:
      'An inventory and sales management system tailored for jewelry businesses, featuring product tracking, sales reporting, and customer management functionalities.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Font Scroll',
    description:
      'A creative web experience that dynamically changes font styles as users scroll through the page, showcasing the power of CSS and JavaScript for interactive design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Sandbox-AceBorja/font-scroll',
    liveUrl: 'https:sandbox-aceborja.github.io/font-scroll',
  },
]
