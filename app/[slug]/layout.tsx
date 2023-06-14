import { Metadata } from "next"
import { ReactNode } from 'react'
import '../globals.css'
import Link from "next/link"
import OutlineButton from "../components/buttons/outline"

export const metadata: Metadata = {
  title: 'Aron Davidson: Project Page',
  description: 'My personal portfolio website.',
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1.0',
}

const ReturnLink = () => {
  return (
    // <OutlineButton>
      <Link className="hover:text-primary font-bold" href="/#projects">
        {/* draw a thick left arrow in unicode */}
        &#x2B05;
        Return
      </Link>
    // </OutlineButton>
  )
}

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="grid gap-2 grid-cols-1 grid-rows-[8rem_auto_8rem] w-screen place-items-center bg-background text-text">
        <header className="">
          <ReturnLink />
        </header>
        <main className="w-full flex justify-center text-justify">
          {children}
        </main>
        <footer>
          <ReturnLink />
        </footer>
      </body>
    </html>
  )
}