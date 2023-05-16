"use client";

import { ReactNode, useRef } from 'react'
import Footer from './footer'
import Header from './header'
import './globals.css'

export const metadata = {
  title: 'Aron Davidson',
  description: 'My personal website.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollFuncs: ScrollFuncs = {
    scrollToHome: () => homeRef.current?.scrollIntoView(),
    scrollToAbout: () => aboutRef.current?.scrollIntoView(),
    scrollToProjects: () => projectsRef.current?.scrollIntoView(),
    scrollToContact: () => contactRef.current?.scrollIntoView(),
  }


  return (
    <html lang="en">
      <body className="grid gap-[200px] place-items-center bg-background text-text">
        {/* wrap in a context element that forwards refs. */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
