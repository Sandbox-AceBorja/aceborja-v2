'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Variants } from 'framer-motion'

const Contact = () => {
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
      id={'contact'}
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={controls}
      className={'py-24'}
    >
      <div className={'mx-auto max-w-7xl px-6'}>
        <div
          className={
            'mb-4 text-teal-300 font-semibold tracking-wider text-center'
          }
        >
          What's Next
        </div>
        <div className={'mb-10 text-7xl text-center'}>Get In Touch</div>
        <div
          className={'mx-auto max-w-prose text-center text-lg leading-relaxed'}
        >
          <span className={'text-teal-300'}>Currently Open</span> to freelance
          work, collaborations, and full-time opportunities. I’m always happy to
          connect. Whether you have a specific inquiry or just want to introduce
          yourself, I’ll do my best to respond promptly.
        </div>
        <div className={'mt-10 text-center'}>
          <a
            href='mailto:sandbox.aceborja@gmail.com'
            className={
              'py-4 px-6 text-sm font-medium text-teal-400 bg-transparent border border-teal-400 rounded hover:bg-teal-400 hover:text-black transition-colors'
            }
          >
            Say Hello
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
