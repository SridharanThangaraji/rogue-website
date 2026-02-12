import { Terminal, Shield, Scale, Code } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-[var(--color-term-green)]" />
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase">
                        Mission <span className="text-[var(--color-term-green)]">Protocol</span>
                    </h1>
                </div>

                <div className="hud-panel p-8 mb-12 border-l-4 border-l-[var(--color-term-green)]">
                    <p className="lead text-xl text-gray-300 font-light leading-relaxed">
                        Rogue Linux is not just a distribution; it is a tactical imperative.
                        Born from the need for a lightweight, specialized, and uncompromised platform for <strong className="text-white">offensive security operatives</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="space-y-6">
                        <FeatureBlock
                            icon={<Shield size={24} />}
                            title="Zero Trust Architecture"
                            desc="Read-only root filesystems, strict capability bounding, and a hardened kernel from the ground up."
                            color="var(--color-cyber-blue)"
                        />
                        <FeatureBlock
                            icon={<Scale size={24} />}
                            title="Forensic Admissibility"
                            desc="Strict adherence to international cryptography export laws and chain-of-custody standards."
                            color="var(--color-alert-red)"
                        />
                    </div>

                    <div className="space-y-6">
                        <FeatureBlock
                            icon={<Code size={24} />}
                            title="Cogman Build System"
                            desc="Our proprietary engine ensures deterministic builds and a complete dependency graph for every package."
                            color="var(--color-term-green)"
                        />
                        <FeatureBlock
                            icon={<Terminal size={24} />}
                            title="Terminal Supremacy"
                            desc="Designed for the keyboard. No bloat, no distractions. Pure efficiency."
                            color="#fff"
                        />
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-term-green)] to-[var(--color-cyber-blue)] opacity-20 blur-lg" />
                    <div className="relative bg-black border border-[var(--color-term-green-dim)] p-12 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-[0.2em] font-display">The Rogue Manifesto</h2>
                        <p className="italic text-gray-500 font-serif text-lg">
                            &ldquo;We do not build for the masses. We build for the specialists.
                            For those who know the difference between a tool and a toy.
                            Rogue Linux is the sharpest blade in your arsenal.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FeatureBlock({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="p-3 bg-[rgba(255,255,255,0.03)] border border-gray-800 rounded group-hover:border-[var(--color-term-green)] transition-colors" style={{ color }}>
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[var(--color-term-green)] transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 font-mono leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
