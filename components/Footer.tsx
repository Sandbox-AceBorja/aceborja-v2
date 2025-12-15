import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react' // Example social icons

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-border mt-16 py-12'>
      <div className='mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        {/* Copyright */}
        <p className='text-sm text-muted-foreground'>
          &copy; {currentYear} Ace Borja. All rights reserved.
        </p>

        {/* Social Links */}
        <div className='flex space-x-6'>
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground transition'
            aria-label='GitHub Profile'
          >
            <Github size={20} />
          </a>
          <a
            href='https://linkedin.com/in/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground transition'
            aria-label='LinkedIn Profile'
          >
            <Linkedin size={20} />
          </a>
          <a
            href='https://twitter.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground transition'
            aria-label='Twitter Profile'
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Quick Links (Optional) */}
        <div className='flex space-x-6 text-sm text-muted-foreground'>
          <a href='#hero' className='hover:text-foreground transition'>
            Home
          </a>
          <a href='#about' className='hover:text-foreground transition'>
            About
          </a>
          <a href='#projects' className='hover:text-foreground transition'>
            Projects
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
