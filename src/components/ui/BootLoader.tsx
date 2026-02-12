'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BootLoader() {
    const [complete, setComplete] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setComplete(true), 500)
                    return 100
                }
                return prev + Math.floor(Math.random() * 15) + 5
            })
        }, 150)
        return () => clearInterval(timer)
    }, [])

    if (complete) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: complete ? 0 : 1 }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6"
        >
            <div className="w-full max-w-md space-y-8">
                <div className="flex justify-between items-end font-code text-[10px] text-[var(--color-term-green)] uppercase tracking-[0.5em]">
                    <span className="glitch-text">Booting Rogue OS</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>

                <div className="h-1 w-full bg-gray-900 overflow-hidden relative border border-gray-800">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-[var(--color-term-green)] shadow-[0_0_20px_var(--color-term-green)]"
                    />
                </div>

                <div className="font-code text-[8px] text-gray-700 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span>[ 0.000 ] INIT VERSION 6.1.0-ROGUE</span>
                        <span>[ 0.142 ] CPU: AMD EPYC 9654 96-CORE</span>
                        <span>[ 0.285 ] MEM: 131072 MB RAM FOUND</span>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                        <span>SECURITY: ENFORCED [OK]</span>
                        <span>VM_SHIELD: ACTIVE [OK]</span>
                        <span>ROOT_FS: MOUNTED [OK]</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 font-mono text-[8px] text-gray-800 uppercase tracking-widest animate-pulse">
                Unauthorized access will be logged and prosecuted
            </div>
        </motion.div>
    )
}
