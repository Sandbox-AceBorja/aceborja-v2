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
      className='rounded-lg bg-teal-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-teal-500 inline-flex items-center gap-0.5'
    >
      Download CV
    </a>
  )
}

export default DownloadResume
