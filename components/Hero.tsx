import Image from 'next/image'
import TextCycler from './TextCycler'
import React from 'react'
import { Briefcase, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className={'relative overflow-hidden'}>
      <div className={'mx-auto max-w-7xl px-6 py-24'}>
        <div className={'grid items-center gap-12 md:grid-cols-2'}>
          <div>
            <TextCycler />

            <p className='my-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-white'>
              <MapPin size={14} className='shrink-0 text-neutral-300' />
              <span className='text-neutral-300'>Philippines</span>
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a
                href='#projects'
                className='rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500'
              >
                View Projects
              </a>

              <a
                href='#contact'
                className='rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:bg-muted'
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className={'relative mx-auto aspect-square w-full max-w-md'}>
            <div className='absolute inset-0 -z-10 bg-muted shadow-xl'>
              <Image
                src='/images/profile-picture.jpg'
                alt='Temporary profile picture'
                width={300}
                height={300}
                className='h-full w-full object-cover rounded-4xl'
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
