import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Software Developer Portfolio',
  description: 'A futuristic portfolio showcasing software development skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



