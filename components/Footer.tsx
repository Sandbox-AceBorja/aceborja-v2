import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react' // Example social icons

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-border mt-16 py-12'>
      <div className='mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        {/* Quick Links (Optional) */}
        <div className='flex space-x-6 text-sm text-muted-foreground'>
          <p className='text-sm font-semibold tracking-wider text-white'>
            Designed & Built by Ace Borja
          </p>
        </div>

        {/* Social Links */}
        <div className='flex space-x-6'>
          <a
            href='https://github.com/sandbox-aceborja'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-teal-300 transition'
            aria-label='GitHub Profile'
          >
            <Github size={20} />
          </a>
          <a
            href='https://linkedin.com/in/sandbox-aceborja'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-teal-300 transition'
            aria-label='LinkedIn Profile'
          >
            <Linkedin size={20} />
          </a>
          <a
            href='https://x.com/AceBorja7'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-teal-300 transition'
            aria-label='Twitter Profile'
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className='text-sm text-muted-foreground'>
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
