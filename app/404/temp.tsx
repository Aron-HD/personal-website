import { Metadata } from "next"
import { ReactNode } from 'react'
import '../globals.css'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Aron Davidson: Page Not Found',
    description: 'The page could not be found.',
    colorScheme: 'dark light',
    viewport: 'width=device-width, initial-scale=1.0',
}

export default function NotFoundLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body className="flex center h-screen flex-col dark:bg-background-dark bg-background-light">
                {children}
                <Link className="hover:dark:text-primary-dark  dark:text-primary-light font-bold" href="/">
                    &#x2B05;
                    Return
                </Link>
            </body>
        </html>
    )
}
