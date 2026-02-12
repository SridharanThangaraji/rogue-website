'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search, Terminal, Shield, Zap, Lock, Globe, Eye,
    Cpu, ChevronRight, Activity, Code, Database, Server, Info, ExternalLink, ArrowRight
} from 'lucide-react'

const categories = [
    { id: 'all', name: 'ALL_ASSETS', icon: <Globe size={14} /> },
    { id: 'Exploitation', name: 'EXPLOITATION', icon: <Zap size={14} /> },
    { id: 'Forensics', name: 'FORENSICS', icon: <Eye size={14} /> },
    { id: 'Scanning', name: 'SCANNING', icon: <Search size={14} /> },
    { id: 'Cracking', name: 'CRACKING', icon: <Lock size={14} /> },
    { id: 'Web App', name: 'WEB_SECURITY', icon: <Globe size={14} /> },
]

const tools = [
    {
        name: "Metasploit Framework",
        category: "Exploitation",
        version: "v6.3.5",
        status: "Operational",
        desc: "The world's most used penetration testing software. Integrated with Rogue-OS zero-trace shell extensions.",
        arch: "Binary / Ruby",
        author: "Rapid7 / Community",
        cve_coverage: "Critical [OK]",
        deps: ["postgresql", "ruby", "libxml2"]
    },
    {
        name: "Burp Suite Professional",
        category: "Web App",
        version: "v2023.12",
        status: "Operational",
        desc: "Advanced platform for web security testing. Pre-configured with custom Rogue interceptor certs.",
        arch: "Java / JVM",
        author: "PortSwigger",
        cve_coverage: "OWASP Top 10",
        deps: ["openjdk-21", "libxcb"]
    },
    {
        name: "Impacket",
        category: "Exploitation",
        version: "v0.11.0",
        status: "Operational",
        desc: "Collection of Python classes for working with network protocols. Essential for AD exploitation.",
        arch: "Python",
        author: "SecureAuth / Fortra",
        cve_coverage: "Network Ops",
        deps: ["python3", "pycryptodome"]
    },
    {
        name: "Ghidra",
        category: "Forensics",
        version: "v11.0",
        status: "Operational",
        desc: "Reverse engineering (SRE) suite. Augmented with AI-assisted decompiler modules in Rogue-OS.",
        arch: "Java / SRE",
        author: "NSA",
        cve_coverage: "Binary Analysis",
        deps: ["openjdk-17"]
    },
    {
        name: "Nmap",
        category: "Scanning",
        version: "v7.94",
        status: "Operational",
        desc: "Industry standard network discovery and security auditing. Optimized for high-speed mass scanning.",
        arch: "Binary / C++",
        author: "Gordon Lyon (Fyodor)",
        cve_coverage: "Reconnaissance",
        deps: ["libpcap", "lua5.4"]
    },
    {
        name: "John the Ripper",
        category: "Cracking",
        version: "v1.9.0-jumbo-1",
        status: "Operational",
        desc: "Fast password cracker. Pre-configured with optimized Rogue wordlists and rulesets.",
        arch: "Binary / GPU",
        author: "Openwall",
        cve_coverage: "Credential Ops",
        deps: ["openssl", "zlib"]
    }
]

export default function PackagesPage() {
    const [query, setQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')

    const filtered = tools.filter(tool => {
        const matchesQuery = tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.category.toLowerCase().includes(query.toLowerCase())
        const matchesCategory = activeCategory === 'all' || tool.category === activeCategory
        return matchesQuery && matchesCategory
    })

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-10 bg-[var(--color-term-green)]" />
                            <span className="text-[var(--color-term-green)] font-code text-[10px] tracking-[0.4em] uppercase font-black">
                                ASSET_RETRIEVAL_SYSTEM // READY
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
                            TACTICAL <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px var(--color-term-green)' }}>ARSENAL</span>
                        </h1>
                    </motion.div>

                    <div className="flex gap-8 items-center font-code text-[10px] text-gray-700">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-white text-lg font-black text-term">1,200+</span>
                            <span>DEVICES_MAPPED</span>
                        </div>
                        <div className="h-10 w-px bg-gray-900" />
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-white text-lg font-black text-cyber">99.9%</span>
                            <span>SUCCESS_RATE</span>
                        </div>
                    </div>
                </div>

                {/* Search and Filters Hub */}
                <div className="hud-panel p-2 border-gray-800 mb-12 bg-black/40">
                    <div className="terminal-header mb-0">
                        <span>SECURE_SEARCH_PROTOCOL</span>
                        <span className="text-white">ENCRYPTED_INPUT</span>
                    </div>
                    <div className="p-6 space-y-8">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[var(--color-term-green)] transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="IDENTIFY TOOL OR SERIAL NUMBER..."
                                className="w-full bg-black/80 border border-gray-900 focus:border-[var(--color-term-green)] outline-none py-5 pl-14 pr-6 font-code text-sm uppercase tracking-widest text-white transition-all selection:bg-[var(--color-term-green)] selection:text-black"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`
                                        flex items-center gap-3 px-6 py-3 border font-code text-[10px] font-black uppercase tracking-widest transition-all
                                        ${activeCategory === cat.id
                                            ? 'bg-[var(--color-term-green)] text-black border-[var(--color-term-green)] shadow-[0_0_20px_rgba(0,255,65,0.3)]'
                                            : 'bg-black/40 border-gray-900 text-gray-500 hover:border-gray-700 hover:text-white'}
                                    `}
                                >
                                    {cat.icon}
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((tool, index) => (
                            <motion.div
                                layout
                                key={tool.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="hud-panel p-0 group bg-black/60 border-none overflow-hidden"
                            >
                                <div className="terminal-header">
                                    <div className="flex gap-4">
                                        <span className="text-[var(--color-term-green)] font-black uppercase">{tool.category}</span>
                                        <span className="text-gray-600 opacity-50">#ID_{Math.floor(Math.random() * 9000) + 1000}</span>
                                    </div>
                                    <div className="text-[var(--color-term-green)] text-[8px] font-bold select-none">{tool.version}</div>
                                </div>

                                <div className="p-8 space-y-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                                        <Activity size={100} className="text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-white uppercase italic group-hover:text-[var(--color-term-green)] transition-colors tracking-tighter inline-block glitch-hover cursor-pointer">
                                            {tool.name}
                                        </h3>
                                        <p className="text-gray-500 font-code text-xs leading-relaxed min-h-[60px]">
                                            {tool.desc}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest">ARCHITECTURE</div>
                                            <div className="text-[10px] text-white font-code uppercase">{tool.arch}</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest">STATUS</div>
                                            <div className="text-[10px] text-green-500 font-code flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                {tool.status}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hud-panel p-4 border-gray-900 bg-black/80 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Info size={12} className="text-[var(--color-cyber-blue)]" />
                                            <span className="text-[9px] font-code text-gray-400">TARGET: {tool.cve_coverage}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Code size={12} className="text-[var(--color-term-green)]" />
                                            <span className="text-[9px] font-code text-gray-500 truncate">DEPS: {tool.deps.join(', ')}</span>
                                        </div>
                                    </div>

                                    <button className="w-full btn-tactical border-gray-800 hover:border-white py-3">
                                        <span>DEPLOY SCRIPT</span>
                                        <ChevronRight size={16} />
                                    </button>
                                </div>

                                <div className="p-2 border-t border-gray-900 bg-black/40 text-[8px] text-gray-700 flex justify-between uppercase font-black">
                                    <span>OWNER: {tool.author}</span>
                                    <div className="flex gap-2">
                                        <Activity size={10} />
                                        <Globe size={10} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Tactical Footer */}
                <div className="mt-32 text-center">
                    <div className="inline-flex flex-col items-center gap-6">
                        <p className="text-gray-600 font-code text-xs uppercase tracking-[0.5em]">
                            End of catalog. Initialize deep search?
                        </p>
                        <button className="text-[var(--color-term-green)] font-black uppercase tracking-[0.3em] text-sm flex items-center gap-4 hover:gap-6 transition-all group">
                            Request Classified Payload
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                <ArrowRight size={20} />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="scanlines" />
        </div>
    )
}
