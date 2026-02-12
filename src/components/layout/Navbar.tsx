'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Shield, Users, Menu, X, Hexagon, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
    { name: 'Manifesto', href: '/docs', icon: Terminal },
    { name: 'Arsenal', href: '/tools', icon: Shield },
    { name: 'Establishment', href: '/download', icon: ShieldCheck },
    { name: 'Legion', href: '/community', icon: Users },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-gray-900 shadow-2xl' : 'bg-transparent py-8 border-transparent'
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="group flex items-center gap-4 relative">
                    <div className="relative">
                        <Hexagon size={42} className="text-[var(--color-term-green)] group-hover:rotate-180 transition-transform duration-1000" />
                        <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-white group-hover:glitch-text">R</div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-black text-2xl tracking-tighter text-white group-hover:text-[var(--color-term-green)] transition-colors">ROGUE</span>
                        <span className="font-code text-[8px] text-gray-500 uppercase tracking-[0.4em] leading-none">LINUX /// OS</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative flex items-center gap-3"
                        >
                            <link.icon size={16} className="text-gray-600 group-hover:text-[var(--color-term-green)] transition-colors" />
                            <span className="font-black text-[11px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-all">
                                {link.name}
                            </span>
                            <motion.div
                                className="absolute -bottom-2 left-0 h-[2px] bg-[var(--color-term-green)]"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                            />
                        </Link>
                    ))}

                    <div className="h-4 w-px bg-gray-900 mx-4" />

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[8px] font-code text-gray-700 uppercase tracking-widest">Identity</span>
                            <span className="text-[10px] font-code text-[var(--color-term-green)] uppercase">OPERATIVE_PENDING</span>
                        </div>
                        <Link href="/login" className="btn-tactical py-2 px-6 text-[10px] bg-white/5 border-gray-800 hover:border-[var(--color-term-green)]">
                            AUTH_SESSION
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white p-2 hud-panel border-gray-800"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-gray-900 overflow-hidden"
                    >
                        <div className="p-8 space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-6 p-4 hud-panel border-dashed"
                                >
                                    <link.icon size={20} className="text-[var(--color-term-green)]" />
                                    <span className="font-black text-xl uppercase tracking-widest text-white">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                            <div className="pt-8 border-t border-gray-900">
                                <button className="w-full btn-tactical py-5">
                                    INITIATE_AUTH
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
