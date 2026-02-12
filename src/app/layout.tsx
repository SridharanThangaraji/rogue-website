import type { Metadata } from 'next'
import { JetBrains_Mono, Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

import HUDShell from '@/components/layout/HUDShell'

export const metadata: Metadata = {
  title: 'Rogue Linux | The Tactical Distro',
  description: 'A cyber-security focused distribution with a British Butler personality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${orbitron.variable} ${rajdhani.variable}`}>
      <body className="bg-void text-gray-300 font-body antialiased selection:bg-cyber-green selection:text-void">
        <HUDShell>
          <Navbar />
          <main className="min-h-screen pt-20 relative z-10">
            {children}
          </main>
          <Footer />
        </HUDShell>
      </body>
    </html>
  )
}
