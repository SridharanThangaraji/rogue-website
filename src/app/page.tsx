'use client'
import { motion } from 'framer-motion'
import { Shield, Cpu, Zap, Lock, Globe, Activity, ArrowRight, Hexagon, Code, Database, Radio } from 'lucide-react'
import Link from 'next/link'
import Terminal from '@/components/ui/Terminal'
import MatrixRain from '@/components/ui/MatrixRain'
import BootLoader from '@/components/ui/BootLoader'

export default function Home() {
  return (
    <div className="relative overflow-hidden selection:bg-[var(--color-term-green)] selection:text-black">
      <BootLoader />
      <MatrixRain />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-6 pt-32 overflow-hidden">

        {/* Decorative HUD Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-[var(--color-term-green)]" />
          <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-[var(--color-term-green)]" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-[var(--color-term-green)]" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-[var(--color-term-green)]" />
        </div>

        <div className="container relative z-10 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Main Branding */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[var(--color-term-green)] to-transparent" />
                  <span className="text-[var(--color-term-green)] font-code text-[10px] tracking-[0.6em] uppercase font-black glitch-text">
                    OPERATIVE_IFACE // NODE_01
                  </span>
                </div>

                <h1 className="text-8xl md:text-[10rem] font-black mb-6 leading-[0.8] tracking-tighter text-white">
                  VOID<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-term-green)] via-[var(--color-cyber-blue)] to-white italic">
                    COMMAND
                  </span>
                </h1>

                <div className="hud-panel p-1 border-none bg-transparent mb-12">
                  <p className="text-2xl md:text-3xl text-gray-300 leading-tight font-light max-w-2xl border-l-[4px] border-[var(--color-term-green)] pl-10 py-4 italic">
                    &ldquo;The ghost in the silicon. The <span className="text-white font-black underline decoration-[var(--color-term-green)] underline-offset-8">Phantom Protocol</span> for digital sovereignty.&rdquo;
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <Link href="/download" className="btn-tactical group w-full sm:w-auto scale-110">
                    <Shield size={24} />
                    <span>Fetch Core ISO</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="/tools" className="text-white hover:text-[var(--color-term-green)] transition-all uppercase tracking-[0.4em] text-xs font-black border-b-[1px] border-gray-800 hover:border-[var(--color-term-green)] pb-2">
                    Access Arsenal
                  </Link>
                </div>

                {/* Tech Badges */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <Cpu size={14} className="text-[var(--color-term-green)]" />
                    <span className="font-code text-[9px] text-gray-400 uppercase tracking-widest">Hardened Kernel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock size={14} className="text-[var(--color-cyber-blue)]" />
                    <span className="font-code text-[9px] text-gray-400 uppercase tracking-widest">Zero-Trust Auth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap size={14} className="text-[var(--color-alert-red)]" />
                    <span className="font-code text-[9px] text-gray-400 uppercase tracking-widest">High-Freq Ops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={14} className="text-white" />
                    <span className="font-code text-[9px] text-gray-400 uppercase tracking-widest">Global P2P</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual (Terminal Hub) */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-term-green)] opacity-20 blur-[100px]" />
                <Terminal />

                {/* HUD Data Overlays */}
                <div className="absolute -bottom-8 -right-8 hud-panel p-4 border-[var(--color-cyber-blue-dim)] bg-black/90 hidden xl:block">
                  <div className="text-[8px] text-[var(--color-cyber-blue)] font-black mb-2 tracking-[0.2em] uppercase">Tactical Mirror S1</div>
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-1 w-full bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: ["10%", "90%", "30%", "60%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="h-full bg-[var(--color-cyber-blue)] shadow-[0_0_10px_var(--color-cyber-blue)]"
                      />
                    </div>
                    <span className="text-[10px] font-code text-white">STABLE</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SPECIFICATIONS (Information Dense) */}
      <section className="py-24 border-y border-gray-900 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-[var(--color-term-green)] font-black text-xl flex items-center gap-3">
                <Hexagon size={24} /> SYSTEM_ARCHITECTURE
              </h3>
              <div className="space-y-4 font-code text-xs text-gray-500 uppercase tracking-widest">
                <div className="flex justify-between border-b border-gray-900 pb-2">
                  <span>Kernel</span>
                  <span className="text-white">v6.1-Hardened (LTS)</span>
                </div>
                <div className="flex justify-between border-b border-gray-900 pb-2">
                  <span>Init System</span>
                  <span className="text-white">Rogue-Init (Daemonless)</span>
                </div>
                <div className="flex justify-between border-b border-gray-900 pb-2">
                  <span>RootFS</span>
                  <span className="text-white">ZFS Immutable Layer</span>
                </div>
                <div className="flex justify-between border-b border-gray-900 pb-2">
                  <span>Sandboxing</span>
                  <span className="text-white">Void-Container v2</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[var(--color-cyber-blue)] font-black text-xl flex items-center gap-3">
                <Shield size={24} /> SECURITY_ENFORCEMENT
              </h3>
              <div className="space-y-4 font-code text-xs text-gray-500 uppercase tracking-widest">
                <p className="leading-relaxed normal-case">
                  Rogue Linux utilizes <span className="text-white font-bold">AppArmor Prof-S</span> combined with mandatory access control policies.
                  Memory isolation is enforced at the hypervisor level for all tactical processes.
                </p>
                <div className="flex gap-2">
                  <span className="bg-[rgba(0,243,255,0.1)] text-[var(--color-cyber-blue)] px-2 py-1 border border-[var(--color-cyber-blue-dim)]">EAL7+</span>
                  <span className="bg-[rgba(0,243,255,0.1)] text-[var(--color-cyber-blue)] px-2 py-1 border border-[var(--color-cyber-blue-dim)]">FIPS 140-3</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[var(--color-alert-red)] font-black text-xl flex items-center gap-3">
                <Activity size={24} /> PERFORMANCE_METRICS
              </h3>
              <div className="space-y-4 font-code text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
                    <motion.div animate={{ width: "98%" }} className="h-full bg-[var(--color-alert-red)] shadow-[0_0_10px_var(--color-alert-red)]" />
                  </div>
                  <span>DISPATCH_LATENCY_0.4ms</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
                    <motion.div animate={{ width: "85%" }} className="h-full bg-white shadow-[0_0_10px_white]" />
                  </div>
                  <span>MEMORY_EFFICIENT_85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE ARSENAL (Information Dense Tool Cards) */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">THE ARSENAL</h2>
              <p className="text-gray-500 font-code text-sm uppercase tracking-[0.3em] leading-relaxed">
                Over 1,200 specialized tools integrated into a unified offensive interface.
                From zero-day analysis to mass scale intelligence gathering.
              </p>
            </div>
            <div className="flex gap-8 items-center font-code text-[10px] text-gray-700">
              <div className="flex flex-col items-center gap-2">
                <span className="text-white text-lg font-black">1.2k+</span>
                <span>TOOLS</span>
              </div>
              <div className="h-10 w-px bg-gray-900" />
              <div className="flex flex-col items-center gap-2">
                <span className="text-white text-lg font-black">24/7</span>
                <span>UPDATES</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard
              category="Exploitation"
              name="Metasploit Core"
              desc="The standard for penetration testing. Pre-configured with custom Rogue-Shell extensions for hardened evasion."
              meta={{ ver: "v6.3.5", lang: "Ruby/C", arch: "x64/ARM" }}
              color="var(--color-term-green)"
            />
            <ToolCard
              category="Intelligence"
              name="Maltego Graphite"
              desc="Mass scale data mining and link analysis. Integrated with the Rogue-OS OSINT data lake."
              meta={{ ver: "v4.4.1", lang: "Java", arch: "x64" }}
              color="var(--color-cyber-blue)"
            />
            <ToolCard
              category="Forensics"
              name="Ghidra Void"
              desc="SRE suite for deep binary analysis. Enhanced with AI-driven deobfuscation modules."
              meta={{ ver: "v11.0", lang: "Java/C++", arch: "x64" }}
              color="var(--color-alert-red)"
            />
          </div>

          <div className="mt-20 text-center">
            <Link href="/tools" className="btn-tactical py-6 px-20 text-xl border-2 hover:scale-105 active:scale-95">
              Explore Full 1,200+ Repository
            </Link>
          </div>
        </div>
      </section>

      {/* OPERATIVE DIRECTIVES (The "Lore" / Information) */}
      <section className="py-40 bg-[rgba(0,255,65,0.02)] border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">CORE<br /><span className="text-[var(--color-term-green)] glitch-text">DIRECTIVES</span></h2>

              <div className="space-y-8">
                <Directive
                  num="01"
                  title="Absolute Anonymity"
                  desc="Every bit leaving a Rogue node is tunneled through triple-layer ephemeral proxies. Identity is a liability."
                />
                <Directive
                  num="02"
                  title="Zero-Trace Forensics"
                  desc="Rogue runs in an immutable RAM-only mode when requested. No logs. No history. No physical evidence."
                />
                <Directive
                  num="03"
                  title="Unified Command"
                  desc="Control your entire fleet of Rogue machines from a single authenticated terminal hub."
                />
              </div>
            </div>

            <div className="hud-panel p-12 border-gray-800 bg-black/80 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Hexagon size={120} className="text-[var(--color-term-green)] animate-spin-slow" />
              </div>
              <h3 className="text-3xl font-black text-white mb-8 border-b border-gray-900 pb-4">OPERATIVE STATUS</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Global Nodes</div>
                    <div className="text-4xl font-black text-white glitch-text">42,881</div>
                  </div>
                  <div className="w-32 h-16 bg-black/40 border border-gray-900 p-2 flex items-end gap-1">
                    {[1, 4, 2, 6, 8, 5, 9, 3, 7].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [`${h * 10}%`, `${(10 - h) * 10}%`, `${h * 10}%`] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        className="flex-1 bg-[var(--color-term-green)] opacity-50"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <span>Network Saturation</span>
                    <span>82%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-gradient-to-r from-[var(--color-term-green)] to-[var(--color-cyber-blue)]"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[var(--color-term-green-dim)] border border-[var(--color-term-green-dim)] rounded-none">
                  <p className="text-[10px] font-code text-[var(--color-term-green)] leading-relaxed uppercase">
                    Warning: Operative saturation in Sector Gamma has reached peak threshold.
                    New nodes in this region will be deprioritized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (Production Level Impact) */}
      <section className="py-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-term-green-dim)] to-transparent opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-[12rem] font-black text-white leading-none mb-12 uppercase italic tracking-tighter">
              ENTER THE<br /><span className="text-transparent border-text" style={{ WebkitTextStroke: '2px var(--color-term-green)' }}>VOID</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
              <Link href="/download" className="btn-tactical py-10 px-24 text-2xl bg-[var(--color-term-green)] !text-black shadow-[0_0_100px_rgba(0,255,65,0.4)]">
                DEPLOY NOW
              </Link>
              <Link href="/community" className="text-white hover:text-[var(--color-cyber-blue)] transition-all uppercase tracking-[0.8em] text-sm font-black border-b-2 border-transparent hover:border-[var(--color-cyber-blue)] pb-4">
                JOIN LEGION
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

function ToolCard({ category, name, desc, meta, color }: { category: string, name: string, desc: string, meta: { ver: string, lang: string, arch: string }, color: string }) {
  return (
    <div className="hud-panel p-10 group hover:-translate-y-4 transition-all duration-500 bg-black/60 border-gray-900 border-l-[4px]" style={{ borderLeftColor: color }}>
      <div className="hud-corner-tr" />
      <div className="hud-corner-bl" />

      <div className="flex justify-between items-start mb-10">
        <div className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.2em]" style={{ color }}>
          {category}
        </div>
        <div className="flex gap-2">
          <Code size={12} className="text-gray-700" />
          <Database size={12} className="text-gray-700" />
          <Radio size={12} className="text-gray-700" />
        </div>
      </div>

      <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter group-hover:glitch-text transition-all">{name}</h3>
      <p className="text-gray-400 font-code text-sm leading-relaxed mb-10 min-h-[80px]">{desc}</p>

      <div className="grid grid-cols-3 gap-4 border-t border-gray-900 pt-8 mt-auto">
        <div className="space-y-1">
          <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest">Version</div>
          <div className="text-[10px] text-white font-code">{meta.ver}</div>
        </div>
        <div className="space-y-1">
          <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest">Engine</div>
          <div className="text-[10px] text-white font-code">{meta.lang}</div>
        </div>
        <div className="space-y-1">
          <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest">Arch</div>
          <div className="text-[10px] text-white font-code">{meta.arch}</div>
        </div>
      </div>
    </div>
  )
}

function Directive({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex gap-10 group">
      <div className="text-4xl font-black text-gray-900 group-hover:text-[var(--color-term-green)] transition-colors duration-500">{num}</div>
      <div className="space-y-2 pt-2">
        <h4 className="text-xl font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{title}</h4>
        <p className="text-gray-500 font-code text-sm leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  )
}
