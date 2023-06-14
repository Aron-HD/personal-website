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
            <body className="flex center h-screen flex-col bg-background">
                {children}
                <Link className="hover:text-primary font-bold" href="/">
                    &#x2B05;
                    Return
                </Link>
            </body>
        </html>
    )
}
