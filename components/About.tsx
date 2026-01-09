import React from 'react'
import { Terminal, Code, DollarSign, Zap, Brain, Check, X } from 'lucide-react'

// Define the developer data object
const coder = {
  name: 'Full Stack Developer', // Use role instead of name for public portfolio
  skills: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Laravel',
    'CodeIgniter',
    'Tailwind CSS',
    'MongoDB',
    'Docker',
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5
  },
}

// --- Terminal Component for CLI Display ---

const TerminalDisplay = () => {
  const isHireable = coder.hireable()

  const TerminalLine: React.FC<{
    command: string
    output: React.ReactNode
  }> = ({ command, output }) => (
    <div className='font-mono text-xs sm:text-sm'>
      <span className='text-green-600'>aceborja@portfolio</span>
      <span className='text-purple-600'>:~$</span>{' '}
      <span className='text-white'>{command}</span>
      <div className='mt-1 ml-4 whitespace-pre-wrap text-slate-300'>
        {output}
      </div>
    </div>
  )

  const BooleanOutput: React.FC<{ value: boolean }> = ({ value }) => (
    <span className={value ? 'text-amber-300' : 'text-red-400'}>
      {value ? 'true' : 'false'}
    </span>
  )

  const StatusIcon: React.FC<{ value: boolean }> = ({ value }) =>
    value ? (
      <Check size={14} className='inline-block text-green-300 mr-1' />
    ) : (
      <X size={14} className='inline-block text-red-400 mr-1' />
    )

  return (
    <div className='overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl h-full min-h-[400px]'>
      {/* Terminal Header */}
      <div className='flex items-center space-x-2 border-b border-gray-700 bg-gray-800 p-3'>
        <div className='h-3 w-3 rounded-full bg-red-300' />
        <div className='h-3 w-3 rounded-full bg-yellow-400' />
        <div className='h-3 w-3 rounded-full bg-green-300' />
        <span className='ml-4 text-xs text-gray-400'>
          ./check_status.sh --dev-profile
        </span>
      </div>

      {/* Terminal Body */}
      <div className='p-4 space-y-4'>
        <TerminalLine
          command='getDeveloper.role'
          output={<span className='text-cyan-400'>"{coder.name}"</span>}
        />

        <TerminalLine
          command='getDeveloper.coreSkills.list'
          output={
            <div className='flex flex-wrap text-sm gap-2 text-teal-300'>
              {coder.skills.map((skill) => (
                <span
                  key={skill}
                  className='border border-teal-300 px-2 rounded-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          }
        />

        <TerminalLine
          command='getDeveloper.attributes'
          output={
            <div className='space-y-1'>
              <p>
                <StatusIcon value={coder.hardWorker} /> Hard Worker:{' '}
                <BooleanOutput value={coder.hardWorker} />
              </p>
              <p>
                <StatusIcon value={coder.quickLearner} /> Quick Learner:{' '}
                <BooleanOutput value={coder.quickLearner} />
              </p>
              <p>
                <StatusIcon value={coder.problemSolver} /> Problem Solver:{' '}
                <BooleanOutput value={coder.problemSolver} />
              </p>
            </div>
          }
        />

        <TerminalLine
          command='checkDeveloper.hireable()'
          output={
            <div className='mt-2'>
              <span className='font-bold text-md'>
                {isHireable ? (
                  <>
                    <Zap
                      size={18}
                      className='inline-block mr-2 text-cyan-400'
                    />
                    <span className='text-cyan-400'>Status: Available</span>
                  </>
                ) : (
                  <>
                    <X size={18} className='inline-block mr-2 text-red-400' />
                    <span className='text-red-400'>STATUS: UNAVAILABLE</span>
                  </>
                )}
              </span>
            </div>
          }
        />
      </div>
    </div>
  )
}

// --- About Component (Revised) ---

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
        </div>

        {/* Content Grid */}
        <div className='grid gap-12 md:grid-cols-2'>
          {/* Left: Description */}
          <div className='space-y-6 text-muted-foreground'>
            <p className='mt-6 text-muted-foreground'>
              I am a Full-Stack Developer specializing in complex SaaS and ERP
              systems, leveraging a modern tech stack:{' '}
              <span className={'font-medium text-foreground'}>
                Next.js, React, TypeScript, and Tailwind CSS
              </span>{' '}
              to deliver robust web applications.
            </p>
            <p>
              Leveraging solid foundational years of experience in{' '}
              <span className={'font-medium text-foreground'}>
                PHP, CodeIgniter, Laravel, and MySQL
              </span>
              , I approach modern system development with deep insights into
              database design and robust application architecture, guaranteeing
              high standards for performance and scalability.
            </p>
            <p>
              I thrive on solving complex problems, continuously improving my
              craft, and designing intuitive user experiences.
            </p>
            <p>
              Currently open to{' '}
              <span className='font-medium text-foreground'>
                freelance work, collaborations, and full-time opportunities
              </span>
            </p>
          </div>

          {/* Right: Terminal Display */}
          <TerminalDisplay />
        </div>
      </div>
    </section>
  )
}

export default About
