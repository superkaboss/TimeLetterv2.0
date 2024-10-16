import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideMenu from '../components/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Work Planner & Reflector',
  description: 'Plan, execute, and reflect on your work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideMenu />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}