'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { projectsData, minorProjectsData } from '@/data/portfolio'
import { Project as ProjectType } from '@/types'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Variants } from 'framer-motion'

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => (
  <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-teal-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md'>
    {/* Image Container with Gradient Overlay */}
    <div className='relative  w-full overflow-hidden'>
      <Image
        src={project.image}
        alt={`Preview of ${project.title}`}
        width={600}
        height={337}
        className='object-cover w-full h-full grayscale-25'
      />
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    </div>

    <div className='p-6'>
      <h3 className='text-lg font-bold text-foreground transition-colors'>
        {project.title}
      </h3>
      <p className='mt-2 text-xs text-muted-foreground line-clamp-6 transition-colors'>
        {project.description}
      </p>

      {/* Technologies */}
      <div className='mt-4 flex flex-wrap gap-2'>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className='rounded-full bg-teal-500/10 font-medium text-teal-300 px-3 py-1 text-[12px] transition-all'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className='mt-6 flex items-center gap-4'>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/5 text-[10px] font-semibold text-foreground transition-colors hover:text-teal-300'
          >
            <Github size={12} />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/5 text-[10px] font-semibold text-foreground transition-colors hover:text-teal-300'
          >
            <ExternalLink size={12} />
            Live
          </a>
        )}
      </div>
    </div>
  </div>
)

// New smaller template for minor projects
const MinorProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => (
  <div className='group relative overflow-hidden rounded-lg border border-border hover:border-teal-300 bg-card/40 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md p-4'>
    <div className='flex items-start justify-between gap-3'>
      <div className='min-w-0'>
        <h4 className='text-sm font-semibold text-foreground truncate transition-colors'>
          {project.title}
        </h4>
        <p className='mt-1 text-[11px] text-muted-foreground max-w-full overflow-hidden transition-colors'>
          {project.description}
        </p>
      </div>

      <div className='flex items-start gap-2'>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground/80 transition-colors hover:text-teal-300'
            aria-label={`GitHub for ${project.title}`}
          >
            <Github size={14} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground/80 transition-colors hover:text-teal-300'
            aria-label={`Live link for ${project.title}`}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>

    <div className='mt-3 flex flex-wrap gap-1'>
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className='rounded-full bg-teal-500/10 px-2 py-0.5 text-[10px] font-medium text-teal-300'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

const Projects = () => {
  const [isMinorProjectsExpanded, setIsMinorProjectsExpanded] = useState(false)
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

  const minorProjectVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' as const },
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
          <p className='mt-6 text-xs text-muted-foreground'>
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

        {/* Minor Projects Section */}
        <div className='mt-20'>
          <div className='flex justify-center'>
            <button
              onClick={() =>
                setIsMinorProjectsExpanded(!isMinorProjectsExpanded)
              }
              className='group flex items-center gap-3 rounded-lg bg-gradient-to-r from-teal-500/10 to-blue-500/10 px-6 py-4 transition-all duration-300 hover:from-teal-500/20 hover:to-blue-500/20 border border-teal-500/20'
            >
              <h3 className='text-lg font-bold text-foreground'>
                Other Projects
              </h3>
              <motion.div
                animate={{ rotate: isMinorProjectsExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} className='text-teal-300' />
              </motion.div>
            </button>
          </div>

          <motion.div
            variants={minorProjectVariants}
            initial='hidden'
            animate={isMinorProjectsExpanded ? 'visible' : 'hidden'}
            className='overflow-hidden'
          >
            <div className='mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {minorProjectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    isMinorProjectsExpanded
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 6 }
                  }
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                >
                  <MinorProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
