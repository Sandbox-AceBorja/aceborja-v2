import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import StarField from '@/components/bg/StarField'
import Aurora from '@/components/bg/Aurora'
import NavBar from '@/components/NavBar'
import { motion } from 'framer-motion'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Welcome to Next.js',
  description: 'Sample',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={'scroll-smooth'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} overflow-y-scroll overflow-x-hidden dark`}
      >
        <StarField />
        {/* <Aurora /> */}
        <NavBar />
        {children}
      </body>
    </html>
  )
}
