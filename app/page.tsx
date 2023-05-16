"use client";

import { useRef } from 'react'
import About from "./components/sections/about"
import Footer from './footer'
import Header from './header'
import Home from './components/sections/home';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';

const me = {
  contentTypeId: "person",
  fields: {
    name: "Aron Davidson",
    title: "Software Developer",
    shortBio: "I'm a software developer based in the UK. I enjoy building things with code and learning new technologies.",
    // longBio: "I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies. I'm a software developer based in the UK. I enjoy building things with code and learning new technologies.",
    // image: {},
  }
}

export type Me = typeof me

export default () => {

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
    <>
      <Header scrollFuncs={scrollFuncs} />
      <main className="grid grid-rows-[100vh_100vh_100vh_100vh] w-full place-items-center gap-2">
        <Home ref={homeRef} scrollFuncs={scrollFuncs} />
        <About ref={aboutRef} me={me} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  )
}
