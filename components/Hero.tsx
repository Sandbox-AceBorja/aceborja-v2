'use client'

import Image from 'next/image'
import TextCycler from './TextCycler'
import React, { useEffect } from 'react'
import { MapPin } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Variants } from 'framer-motion'

const Hero = () => {
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
      id='hero'
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={controls}
      className={'relative overflow-hidden'}
    >
      <div className={'mx-auto max-w-7xl px-6 sm:py-24 py-10'}>
        <div className={'grid items-center gap-12 md:grid-cols-2'}>
          <div className='order-2 md:order-1'>
            <motion.div
              initial={{ opacity: 0, y: -50 }} // starting state
              animate={{ opacity: 1, y: 0 }} // animate to
              transition={{ duration: 0.8 }} // animation duration
              style={{
                color: 'white',
              }}
            >
              <TextCycler />
              <p className={'mt-5 mb-3'}>
                I am a Full Stack Developer and Software Engineer with a strong
                focus on building scalable web applications. Passionate about
                leveraging technology to solve real-world industry challenges, I
                specialize in designing and implementing efficient solutions
                that drive impactful results.
              </p>

              <p className='my-4 inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-white'>
                <MapPin size={14} className='shrink-0 text-neutral-300' />
                <span className='text-neutral-300'>Philippines</span>
              </p>
            </motion.div>
          </div>

          <div
            className={
              'order-1 md:order-2 relative mx-auto aspect-square w-60 sm:w-56 md:w-full max-w-[260px] sm:max-w-xs md:max-w-md mt-6 sm:mt-0 mb-0 pb-0'
            }
          >
            <div className='absolute inset-0 -z-10'>
              <Image
                src='/images/profile-picture.png'
                alt='Temporary profile picture'
                width={300}
                height={300}
                className='h-auto w-full object-cover -mt-8 sm:-mt-12 md:-mt-20'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
