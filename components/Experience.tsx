'use client'

import React, { useEffect, useState } from 'react'
import { experienceData } from '@/data/portfolio'
import { Experience as ExperienceType } from '@/types'
import { Briefcase, ChevronDown } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Variants } from 'framer-motion'

// Define the number of items to show initially
const INITIAL_VISIBLE_ITEMS = 2

const ExperienceItem: React.FC<{ item: ExperienceType }> = ({ item }) => (
  <div className='relative pl-8 sm:pl-32 py-6 group'>
    {/* Vertical Line - Uncomment to enable timeline line */}
    {/* <div className='absolute left-0 sm:left-20 top-0 bottom-0 w-px bg-border group-last:h-1/2' /> */}

    {/* Bullet Point */}
    <div className='absolute left-0 sm:left-20 top-7 w-5 h-5 rounded-full bg-teal-700 flex items-center justify-center text-white'>
      <Briefcase size={12} />
    </div>

    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
      <p className='text-sm font-medium text-muted-foreground sm:order-2'>
        {item.duration}
      </p>
      <h3 className='text-xl font-bold text-foreground sm:order-1'>
        {item.title}
      </h3>
    </div>

    <p className='mt-1 text-xs font-semibold text-teal-500'>{item.company}</p>

    <p className='mt-3 text-xs tracking-wider font-light text-muted-foreground'>
      {item.description}
    </p>

    <div className='mt-4 flex flex-wrap gap-2'>
      {item.technologies.map((tech) => (
        <span
          key={tech}
          className='rounded-full bg-muted border border-border px-3 py-1 text-xs font-medium text-foreground'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

// --- Experience Component (Revised) ---

const Experience = () => {
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

  // State to manage the number of visible items
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS)

  // Determine if the "Show More" button should be visible
  const hasMore = experienceData.length > INITIAL_VISIBLE_ITEMS

  // Determine if all items are currently shown
  const isExpanded = visibleCount >= experienceData.length

  // Items to display
  const itemsToShow = isExpanded
    ? experienceData
    : experienceData.slice(0, visibleCount)

  const handleToggle = () => {
    if (isExpanded) {
      // Collapse: show only the initial set
      setVisibleCount(INITIAL_VISIBLE_ITEMS)
    } else {
      // Expand: show all items
      setVisibleCount(experienceData.length)
    }
  }

  return (
    <motion.section
      id='experience'
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={controls}
      className='py-24'
    >
      <div className='mx-auto max-w-7xl px-6'>
        {/* Section Header */}
        <div className='mb-16 max-w-2xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-teal-300'>
            My Journey
          </p>

          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Experience and Milestones
          </h2>
        </div>

        {/* Experience List / Timeline */}
        <div className='max-w-4xl'>
          {itemsToShow.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}

          {/* Show More / Show Less Button */}
          {hasMore && (
            <div className='flex justify-center mt-12'>
              <button
                onClick={handleToggle}
                className='group flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 px-6 py-4 transition-all duration-300 hover:from-teal-500/20 hover:to-blue-500/20 border border-teal-500/20'
              >
                <span className='text-lg font-bold text-foreground'>
                  {isExpanded
                    ? 'Show Less'
                    : `Show More (${experienceData.length - visibleCount} more)`}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className='text-teal-300' />
                </motion.div>
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
