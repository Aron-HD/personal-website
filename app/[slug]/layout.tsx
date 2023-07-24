import { Metadata } from "next"
import { ReactNode } from 'react'
import '../globals.css'
import Link from "next/link"
// import ThemeSwitcher from "../components/navbar/themeSwitcher"

export const metadata: Metadata = {
  title: 'Aron Davidson: Project Page',
  description: 'My personal portfolio website.',
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1.0',
}

const ReturnLink = () => {
  return (
    <Link className="hover:dark:text-primary-dark text-primary-light font-bold" href="/#projects">
      &#x2B05;
      Return
    </Link>
  )
}

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-[4rem_auto_4rem] md:grid-rows-[8rem_auto_8rem] w-screen place-items-center">
      <header className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light w-full h-full flex center relative">
        <ReturnLink />
        {/* <ThemeSwitcher className="absolute right-5" /> */}
      </header>
      <main className="w-full flex justify-center dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light">
        {children}
      </main>
      <footer className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light flex w-full h-full center">
        <ReturnLink />
      </footer>
    </div>
  )
}