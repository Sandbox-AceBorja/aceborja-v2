'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = [
  { text: 'Amazing', gradient: 'from-cyan-400 via-blue-500 to-purple-600' },
  { text: 'Stunning', gradient: 'from-fuchsia-500 via-pink-500 to-rose-500' },
  { text: 'Attractive', gradient: 'from-amber-400 via-orange-500 to-red-500' },
  { text: 'Fantastic', gradient: 'from-emerald-400 via-teal-500 to-cyan-500' },
]

const intervalDuration = 2400

export default function TextCycler() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, intervalDuration)

    return () => clearInterval(id)
  }, [paused])

  const current = words[index]

  return (
    <h2 className='text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight'>
      I'm Ace! a Full Stack Developer building{' '}
      <span
        className='relative inline-block align-baseline'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode='wait'>
          <motion.span
            key={current.text}
            initial={{ y: '20%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-40%', opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className={`inline-block bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}
          >
            {current.text}
          </motion.span>
        </AnimatePresence>
      </span>{' '}
      websites
    </h2>
  )
}
