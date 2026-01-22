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
    <Link
      href='/resume/Borja_Eduardo_Ace_Resume.pdf'
      download
      className='rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400 inline-flex items-center gap-0.5'
    >
      Download CV
    </Link>
  )
}

export default DownloadResume
