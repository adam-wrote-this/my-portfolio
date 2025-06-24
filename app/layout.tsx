import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adam Li Wrote This Showcase Project',
  description: 'My Showcase Project',
  generator: 'My Showcase Project'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
