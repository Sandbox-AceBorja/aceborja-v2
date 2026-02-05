'use client'

import React from 'react'
import * as gtag from '@/lib/gtag'
import Link from 'next/link'

const DownloadResume = () => {
  const handleClick = () => {
    gtag.event({
      action: 'resume_download',
      category: 'engagement',
      label: 'Resume PDF',
    })
  }

  return (
    <a
      href='/resume/Borja_Eduardo_Ace_Resume.pdf'
      download
      onClick={handleClick}
      className='px-4 py-2 text-sm font-semibold inline-flex rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 transition-all duration-300 hover:from-teal-500/20 hover:to-blue-500/20 border border-teal-500/20'
    >
      Download CV
    </a>
  )
}

export default DownloadResume
