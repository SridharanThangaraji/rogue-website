import Link from 'next/link'
import { Github, Twitter, Disc, Activity } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-term-green-dim)] bg-black relative overflow-hidden pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white tracking-widest">
                            ROGUE<span className="text-[var(--color-term-green)]">.OS</span>
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-mono">
                            SECTOR: 01<br />
                            STATUS: OPERATIONAL<br />
                            BUILD: 2026.1-STABLE
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-term-green)] mb-6 flex items-center gap-2">
                            <div className="w-1 h-1 bg-[var(--color-term-green)]" /> System
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-mono">
                            <li><Link href="/packages" className="hover:text-white transition-colors hover:translate-x-1 inline-block">[ ARSENAL ]</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">[ MANIFESTO ]</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors hover:translate-x-1 inline-block">[ ACCESS ]</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-term-green)] mb-6 flex items-center gap-2">
                            <div className="w-1 h-1 bg-[var(--color-term-green)]" /> Protocol
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-mono">
                            <li><Link href="/privacy" className="hover:text-white transition-colors hover:translate-x-1 inline-block">[ PRIVACY ]</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors hover:translate-x-1 inline-block">[ TERMS ]</Link></li>
                            <li><Link href="/security" className="hover:text-white transition-colors hover:translate-x-1 inline-block">[ SECURITY ]</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-term-green)] mb-6 flex items-center gap-2">
                            <div className="w-1 h-1 bg-[var(--color-term-green)]" /> Uplink
                        </h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 hover:border-[var(--color-term-green)] hover:text-[var(--color-term-green)] transition-all bg-gray-900/50">
                                <Github size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 hover:border-[var(--color-term-green)] hover:text-[var(--color-term-green)] transition-all bg-gray-900/50">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 hover:border-[var(--color-term-green)] hover:text-[var(--color-term-green)] transition-all bg-gray-900/50">
                                <Disc size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                    <p>© 2026 ROGUE LINUX PROJECT. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-2 text-[var(--color-term-green)]">
                        <Activity size={12} className="animate-pulse" />
                        SYSTEM OPTIMAL
                    </div>
                </div>
            </div>
        </footer>
    )
}
