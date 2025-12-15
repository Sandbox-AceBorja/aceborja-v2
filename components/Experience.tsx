import React from 'react'
import { experienceData } from '@/data/portfolio'
import { Experience as ExperienceType } from '@/types'
import { Briefcase } from 'lucide-react' // Example icon

const ExperienceItem: React.FC<{ item: ExperienceType }> = ({ item }) => (
  <div className='relative pl-8 sm:pl-32 py-6 group'>
    {/* Vertical Line */}
    {/* <div className='absolute left-0 sm:left-20 top-0 bottom-0 w-px bg-border group-last:h-1/2' /> */}

    {/* Bullet Point */}
    <div className='absolute left-0 sm:left-20 top-7 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white'>
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

    <p className='mt-1 text-md font-semibold text-blue-300'>{item.company}</p>

    <p className='mt-3 text-muted-foreground'>{item.description}</p>

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

const Experience = () => {
  return (
    <section id='experience' className='py-24'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Section Header */}
        <div className='mb-16 max-w-2xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500'>
            My Journey
          </p>

          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Experience and Milestones
          </h2>
        </div>

        {/* Experience List / Timeline */}
        <div className='max-w-4xl'>
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
