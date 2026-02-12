import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HUDShell from '@/components/layout/HUDShell'

export const metadata: Metadata = {
  title: 'Rogue Linux | Elite Linux Distribution',
  description: 'Production-ready, minimal, technical Linux distribution for professionals. Hardened kernel, zero-trust security, high-performance operations.',
  keywords: ['linux', 'distribution', 'security', 'hardened', 'minimal', 'technical'],
  authors: [{ name: 'Rogue Linux Team' }],
  openGraph: {
    title: 'Rogue Linux | Elite Linux Distribution',
    description: 'Production-ready, minimal, technical Linux distribution for professionals',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
