'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { projectsData } from '@/data/portfolio'
import { Project as ProjectType } from '@/types'
import { Github, ExternalLink } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Variants } from 'framer-motion'

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => (
  <div className='relative overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
    {/* Image Container */}
    <div className='aspect-video w-full overflow-hidden border-b border-border'>
      <Image
        src={project.image}
        alt={`Preview of ${project.title}`}
        width={600}
        height={337}
        className='object-cover object-left-top w-full h-full'
      />
    </div>

    <div className='p-6'>
      <h3 className='text-xl font-bold text-foreground'>{project.title}</h3>
      <p className='mt-2 text-muted-foreground'>{project.description}</p>

      {/* Technologies */}
      <div className='mt-4 flex flex-wrap gap-2'>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className='rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className='mt-6 flex gap-4'>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm font-semibold text-foreground hover:text-blue-500 transition'
          >
            <Github size={18} />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm font-semibold text-foreground hover:text-blue-500 transition'
          >
            <ExternalLink size={18} />
            Link
          </a>
        )}
      </div>
    </div>
  </div>
)

const Projects = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2, // triggers when 20% of the section is visible
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 }, // fade out & slide down
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <motion.section
      id='projects'
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={controls}
      data-testid='projects-section'
      className='py-24'
    >
      <div className='mx-auto max-w-7xl px-6'>
        {/* Section Header */}
        <div className='mb-16 max-w-2xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-teal-300'>
            Portfolio
          </p>

          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Featured Projects
          </h2>
          <p className='mt-6 text-muted-foreground'>
            A selection of my best work showcasing my developer capabilities and
            design sense.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
