'use client'
import { motion } from 'framer-motion'
import { Download, Shield, Cpu, Box, HardDrive, CheckCircle2, Copy } from 'lucide-react'
import Link from 'next/link'

const platforms = [
    {
        id: 'installer',
        name: 'Installer Images',
        icon: <HardDrive size={32} />,
        desc: 'The complete Rogue Linux experience. Optimized for bare metal installations.',
        options: [
            { label: 'Rogue OS Core (x64)', size: '1.5 GB', type: 'ISO' },
            { label: 'Rogue OS Slim (x64)', size: '800 MB', type: 'ISO' },
        ]
    },
    {
        id: 'vm',
        name: 'Virtual Machines',
        icon: <Box size={32} />,
        desc: 'Pre-configured images for VMware and VirtualBox. Hardened and ready to import.',
        options: [
            { label: 'VMware Image', size: '2.4 GB', type: 'OVA' },
            { label: 'VirtualBox Image', size: '2.2 GB', type: 'OVA' },
        ]
    },
    {
        id: 'arm',
        name: 'ARM / RPi',
        icon: <Cpu size={32} />,
        desc: 'Optimized for Raspberry Pi 4/5 and PinePhone. Full arsenal on low-power silicon.',
        options: [
            { label: 'Raspberry Pi 4/5', size: '1.2 GB', type: 'IMG' },
            { label: 'PinePhone Pro', size: '1.0 GB', type: 'IMG' },
        ]
    },
    {
        id: 'containers',
        name: 'Cloud / Docker',
        icon: <Download size={32} />,
        desc: 'Minimalist tactical nodes for cloud deployments and containerized operations.',
        options: [
            { label: 'Docker Image', size: '120 MB', type: 'Layer' },
            { label: 'AWS AMI', size: 'N/A', type: 'AMI' },
        ]
    }
]

export default function DownloadPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block border border-[var(--color-term-green-dim)] px-4 py-1 mb-6 bg-[rgba(0,255,65,0.05)]"
                >
                    <span className="text-[10px] font-mono text-[var(--color-term-green)] uppercase tracking-[0.4em]">Establishment Protocol // SECURE_FETCH</span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                    GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-term-green)] to-[var(--color-cyber-blue)]">ROGUE OS</span>
                </h1>
                <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto uppercase tracking-widest">
                    Select your deployment platform. All images are cryptographically signed and hardened.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {platforms.map((platform) => (
                    <div key={platform.id} className="hud-panel p-8 group border-gray-900 hover:border-gray-700 transition-all">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-white/5 border border-white/10 text-[var(--color-term-green)]">
                                    {platform.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white uppercase">{platform.name}</h3>
                                    <p className="text-xs text-gray-500 font-mono mt-1">{platform.desc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {platform.options.map((opt) => (
                                <div key={opt.label} className="flex items-center justify-between p-4 bg-black/40 border border-gray-900 group/item hover:border-[var(--color-term-green-dim)] transition-colors">
                                    <div>
                                        <div className="text-sm font-bold text-white uppercase tracking-wider">{opt.label}</div>
                                        <div className="text-[10px] font-mono text-gray-600 uppercase">{opt.size} • {opt.type}</div>
                                    </div>
                                    <button className="flex items-center gap-2 bg-[var(--color-term-green-dim)] text-[var(--color-term-green)] px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-[var(--color-term-green)] hover:text-black transition-all">
                                        Download <Download size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Integrity Check Section */}
            <div className="hud-panel p-10 border-[var(--color-cyber-blue-dim)] bg-[rgba(0,243,255,0.02)]">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight flex items-center gap-4">
                            <Shield className="text-[var(--color-cyber-blue)]" />
                            Integrity Verification
                        </h2>
                        <p className="text-gray-400 font-mono text-sm mb-8 leading-relaxed">
                            Always verify the SHA256 checksum of your downloaded ISO before initialization.
                            Trust no one, verify everything.
                        </p>
                        <div className="bg-black/80 p-6 border border-gray-800 font-mono text-[11px] relative group">
                            <span className="text-gray-600 block mb-2"># Terminal Command</span>
                            <code className="text-[var(--color-term-green)]">
                                sha256sum rogue-os-2026.1-x64.iso
                            </code>
                            <button className="absolute right-4 top-4 text-gray-700 hover:text-white transition-colors">
                                <Copy size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block w-px h-32 bg-gray-800" />
                    <div className="flex-none flex flex-col items-center gap-4">
                        <CheckCircle2 className="text-[var(--color-term-green)]" size={48} />
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Security Verified<br />By Cogman Engine</span>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link href="/docs" className="text-gray-600 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.3em]">
                    Need help? Read the official Installation Manifesto
                </Link>
            </div>
        </div>
    )
}
