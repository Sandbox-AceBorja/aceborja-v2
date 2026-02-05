import Image from 'next/image'
import TextCycler from './TextCycler'
import React from 'react'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={'relative overflow-hidden'}>
      <div className={'mx-auto max-w-7xl px-6 sm:py-24 py-10'}>
        <div className={'grid items-center gap-12 md:grid-cols-2'}>
          <div>
            <TextCycler />

            <p className={'mt-5 mb-3'}>
              I am a Full Stack Developer and Software Engineer with a strong
              focus on building scalable web applications. Passionate about
              leveraging technology to solve real-world industry challenges, I
              specialize in designing and implementing efficient solutions that
              drive impactful results.
            </p>

            <p className='my-4 inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-white'>
              <MapPin size={14} className='shrink-0 text-neutral-300' />
              <span className='text-neutral-300'>Philippines</span>
            </p>
          </div>

          <div
            className={
              'relative mx-auto aspect-square w-full max-w-md mt-10 sm:mt-0'
            }
          >
            <div className='absolute inset-0 -z-10'>
              <Image
                src='/images/profile-picture.png'
                alt='Temporary profile picture'
                width={300}
                height={300}
                className='h-auto w-full object-cover -mt-20'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
