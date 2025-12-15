import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-24'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Section Header */}
        <div className='mb-16 max-w-2xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500'>
            About Me
          </p>

          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Building digital experiences with purpose
          </h2>

          <p className='mt-6 text-muted-foreground'>
            I’m a passionate full-stack developer who enjoys turning ideas into
            real-world applications. I focus on writing clean, scalable code and
            designing interfaces that feel intuitive and fast.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid gap-12 md:grid-cols-2'>
          {/* Left: Description */}
          <div className='space-y-6 text-muted-foreground'>
            <p>
              I specialize in modern web technologies like{' '}
              <span className='font-medium text-foreground'>
                Next.js, React, Tailwind CSS, and Node.js
              </span>
              . Whether it’s building a personal project, a startup MVP, or a
              production-ready system, I always aim for performance and
              maintainability.
            </p>

            <p>
              I enjoy solving problems, learning new tools, and continuously
              improving my craft. Outside of coding, I explore design trends,
              productivity workflows, and ways to build better user experiences.
            </p>

            <p>
              Currently open to{' '}
              <span className='font-medium text-foreground'>
                freelance work, collaborations, and full-time opportunities
              </span>
              .
            </p>
          </div>

          {/* Right: Highlights */}
          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='rounded-xl border border-border bg-muted p-6'>
              <h3 className='text-lg font-semibold'>Experience</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Building and maintaining web apps using modern frameworks and
                best practices.
              </p>
            </div>

            <div className='rounded-xl border border-border bg-muted p-6'>
              <h3 className='text-lg font-semibold'>Tech Stack</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Next.js, React, TypeScript, Tailwind, Node.js, MongoDB
              </p>
            </div>

            <div className='rounded-xl border border-border bg-muted p-6'>
              <h3 className='text-lg font-semibold'>Focus</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Performance, accessibility, clean architecture, and UI polish.
              </p>
            </div>

            <div className='rounded-xl border border-border bg-muted p-6'>
              <h3 className='text-lg font-semibold'>Goals</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Create meaningful products and grow as a developer every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
