import { Metadata } from "next"
import { ReactNode } from 'react'
import '../globals.css'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Aron Davidson: Project Page',
  description: 'My personal portfolio website.',
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1.0',
}

const ReturnLink = () => {
  return (
      <Link className="hover:text-primary font-bold block text-center items-center align-middle" href="/#projects">
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
    <html lang="en">
      <body className="grid gap-0 md:gap-2 grid-cols-1 grid-rows-[4rem_auto_4rem] md:grid-rows-[8rem_auto_8rem] w-screen place-items-center bg-background text-text">
        <header>
          <ReturnLink />
        </header>
        <main className="w-full flex justify-center">
          {children}
        </main>
        <footer>
          <ReturnLink />
        </footer>
      </body>
    </html>
  )
}