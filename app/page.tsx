import React from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    // Change h-screen to min-h-screen to allow it to grow with content
    // The relative property is crucial for the Image fill prop to work
    <main className={`relative min-h-screen w-full`}>
      {/* 2. Background Image Component */}
      {/* The Image fill prop will now expand the image based on the growing <main> height */}
      {/* <Image
        src='/images/loopdraw.png'
        alt='Animated Background'
        fill
        // Use objectFit: 'cover' (or objectFit: 'contain' depending on desired look)
        style={{
          objectFit: 'cover',
          objectPosition: 'calc(30% + 300px) center', // <-- This is the key change
        }}
        priority
        className='z-[-1]'
      /> */}

      {/* 3. Content - Ensure content is visible above the background */}
      {/* Add 'relative z-10' to the content wrapper to ensure it sits on top */}
      <div className='relative z-10 flex flex-col'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default Home
