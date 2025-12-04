import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AutoCare Garage - Professional Car Service & Repair',
  description: 'Expert automotive service and repair with over 20 years of experience. Car repair, detailing, tyre replacement, and more.',
  keywords: 'car repair, auto service, car detailing, tyre replacement, car garage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
