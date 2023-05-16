import { Metadata } from "next"
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aron Davidson',
  description: 'My personal portfolio website.',
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1.0',
}


export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="grid gap-2 grid-cols-1 w-screen place-items-center bg-background text-text">
        {children}
      </body>
    </html>
  )
}