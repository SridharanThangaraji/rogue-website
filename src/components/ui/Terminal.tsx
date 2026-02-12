'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const logs = [
    "INITIALIZING ROGUE CORE...",
    "LOADING KERNEL MODULES [OK]",
    "ESTABLISHING SECURE UPLINK...",
    "HANDSHAKE: VOID_PROTOCOL_V4 [SUCCESS]",
    "DECRYPTING TOOLS ARSENAL...",
    "BYPASSING FIREWALL: SECTOR_07...",
    "OPERATIVE IDENTIFIED: PHANTOM_X",
    "SYSTEM STATUS: FULLY_OPERATIONAL",
    ">>> ROGUE LINUX v2026.1 READY."
]

export default function Terminal() {
    const [visibleLogs, setVisibleLogs] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i < logs.length) {
                setVisibleLogs(prev => [...prev, logs[i]])
                i++
            } else {
                clearInterval(interval)
            }
        }, 800)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [visibleLogs])

    return (
        <div className="hud-panel w-full h-[400px] font-code text-[11px] flex flex-col shadow-2xl">
            <div className="terminal-header">
                <div className="flex gap-4">
                    <span className="text-gray-500 uppercase tracking-widest">Console_Out</span>
                    <span className="text-[var(--color-term-green)] opacity-50 select-none">/DEV/TTY1</span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="status-pulse" />
                    <span className="text-[var(--color-term-green)]">LIVE_FEED</span>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex-1 p-6 overflow-y-auto overflow-x-hidden space-y-2 relative crt-flicker scrollbar-hide"
            >
                <AnimatePresence>
                    {visibleLogs.map((log, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-4"
                        >
                            <span className="text-gray-700 font-bold select-none">[{new Date().toLocaleTimeString()}]</span>
                            <span className={index === logs.length - 1 ? "text-[var(--color-term-green)] font-black glitch-text" : "text-gray-300"}>
                                {log}
                            </span>
                        </motion.div>
                    ))}
                </AnimatePresence>

                <div className="flex gap-4 items-center mt-4">
                    <span className="text-[var(--color-term-green)] font-bold">{`root@rogue:~#`}</span>
                    <span className="typewriter text-white" />
                </div>
            </div>

            <div className="p-2 border-t border-[var(--color-term-green-dim)] bg-black/50 text-[9px] text-gray-600 flex justify-between">
                <span>TOTAL_PACKETS: {Math.floor(Math.random() * 10000)}</span>
                <span>SECURE_SHELL_ACTIVE</span>
            </div>
        </div>
    )
}
