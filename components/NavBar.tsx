'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FileDown, FileDownIcon, Menu, X } from 'lucide-react'
import { navLinks } from '@/data/nav'
import * as gtag from '@/lib/gtag'
import DownloadResume from './DownloadResume'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle smooth scroll link clicks
  const handleLinkClick = () => {
    setIsOpen(false) // Close mobile menu after clicking a link
  }

  return (
    <header className='sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 shadow-md'>
      <div className='mx-auto max-w-7xl px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo / Name */}
          <Link
            href='/'
            className='text-2xl font-bold text-foreground hover:text-blue-500 transition'
          >
            Ace Borja<span className='text-teal-300'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition'
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <DownloadResume />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-foreground'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle navigation menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className='md:hidden bg-background/95 border-t border-border'>
          <nav className='px-6 py-4 flex flex-col space-y-3'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='block text-lg font-medium text-foreground hover:text-teal-500 transition py-2'
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href='/resume/Borja_Eduardo_Ace_Resume.pdf' // Update this path to your actual CV file
              download
              onClick={() =>
                gtag.event({
                  action: 'resume_download',
                  category: 'engagement',
                  label: 'Resume PDF',
                })
              }
              className='mt-4 rounded-lg bg-teal-300 px-4 py-2 text-center text-lg font-semibold text-black transition hover:bg-teal-500'
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
