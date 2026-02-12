'use client'
import { useState } from 'react'
import { CreditCard, Bitcoin, ShieldCheck, Lock, ArrowRight, Loader, Terminal } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
    const [method, setMethod] = useState<'card' | 'crypto'>('card')
    const [processing, setProcessing] = useState(false)
    const [complete, setComplete] = useState(false)

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault()
        setProcessing(true)
        setTimeout(() => {
            setProcessing(false)
            setComplete(true)
        }, 2000)
    }

    if (complete) {
        return (
            <div className="min-h-screen flex items-center justify-center container mx-auto px-6">
                <div className="hud-panel p-12 text-center max-w-lg w-full border border-[var(--color-term-green)] shadow-[0_0_50px_rgba(0,255,65,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-term-green)] animate-pulse" />

                    <div className="w-20 h-20 bg-[rgba(0,255,65,0.1)] rounded-sm border border-[var(--color-term-green)] flex items-center justify-center mx-auto mb-6 text-[var(--color-term-green)]">
                        <ShieldCheck size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2 font-display uppercase tracking-widest">Access Granted</h2>
                    <p className="text-gray-400 mb-8 font-mono text-xs max-w-xs mx-auto">Your specialized build is being provisioned. Credentials have been encrypted.</p>
                    <div className="bg-black p-4 border border-gray-800 rounded-sm mb-8 font-mono text-xs text-left space-y-2 text-[var(--color-term-green)]">
                        <div className="typing-effect">&gt; INITIALIZING DOWNLOAD PROTOCOL...</div>
                        <div className="typing-effect delay-100">&gt; VERIFYING PGP SIGNATURES...</div>
                        <div className="typing-effect delay-200">&gt; ESTABLISHING SECURE TUNNEL...</div>
                        <div className="typing-effect delay-300 blink">&gt; READY.</div>
                    </div>
                    <Link href="/" className="btn-tactical inline-block w-full text-center">Return to Base</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-black text-white mb-8 border-b border-gray-800 pb-6 font-display uppercase tracking-widest">
                Secure <span className="text-[var(--color-term-green)]">Checkout</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Order Summary */}
                <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className="hud-panel p-6">
                        <h3 className="text-xs font-bold text-[var(--color-term-green)] mb-6 uppercase tracking-widest flex items-center gap-2">
                            <Terminal size={14} /> Manifest
                        </h3>

                        <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-4">
                            <div>
                                <h4 className="text-white font-bold uppercase font-display">Specialist Tier</h4>
                                <p className="text-xs text-gray-500 font-mono">Monthly License</p>
                            </div>
                            <span className="text-white font-mono">$15.00</span>
                        </div>

                        <div className="flex justify-between items-center mb-2 text-xs text-gray-400 font-mono">
                            <span>Subtotal</span>
                            <span>$15.00</span>
                        </div>
                        <div className="flex justify-between items-center mb-6 text-xs text-gray-400 font-mono">
                            <span>Encryption/Handling</span>
                            <span>$0.00</span>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                            <span className="text-white font-bold uppercase tracking-widest font-display">Total</span>
                            <span className="text-2xl font-bold text-[var(--color-term-green)] font-mono">$15.00</span>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-[10px] text-gray-500 justify-center font-mono uppercase border border-gray-800 py-2">
                            <Lock size={10} />
                            256-bit TLS Encrypted Connection
                        </div>
                    </div>
                </div>

                {/* Payment Form */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="hud-panel p-8">
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setMethod('card')}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 border transition-all text-sm uppercase tracking-widest font-bold ${method === 'card'
                                        ? 'border-[var(--color-term-green)] bg-[rgba(0,255,65,0.05)] text-white'
                                        : 'border-gray-800 text-gray-600 hover:border-gray-600'
                                    }`}
                            >
                                <CreditCard size={16} /> Credit Card
                            </button>
                            <button
                                onClick={() => setMethod('crypto')}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 border transition-all text-sm uppercase tracking-widest font-bold ${method === 'crypto'
                                        ? 'border-[var(--color-term-green)] bg-[rgba(0,255,65,0.05)] text-white'
                                        : 'border-gray-800 text-gray-600 hover:border-gray-600'
                                    }`}
                            >
                                <Bitcoin size={16} /> Crypto
                            </button>
                        </div>

                        <form onSubmit={handlePayment} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Operative Name</label>
                                    <input type="text" className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-[var(--color-term-green)] transition-colors font-mono text-sm placeholder-gray-800" placeholder="JOHN DOE" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Secure Email</label>
                                    <input type="email" className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-[var(--color-term-green)] transition-colors font-mono text-sm placeholder-gray-800" placeholder="john@example.com" required />
                                </div>
                            </div>

                            {method === 'card' && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Card Number</label>
                                        <input type="text" className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-[var(--color-term-green)] transition-colors font-mono text-sm placeholder-gray-800" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Expiry</label>
                                            <input type="text" className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-[var(--color-term-green)] transition-colors font-mono text-sm placeholder-gray-800" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">CVC</label>
                                            <input type="text" className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-[var(--color-term-green)] transition-colors font-mono text-sm placeholder-gray-800" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {method === 'crypto' && (
                                <div className="p-6 bg-[rgba(255,200,0,0.05)] border border-dashed border-yellow-900 text-center">
                                    <p className="text-yellow-500 text-xs mb-2 font-mono uppercase">Send precisely 0.00045 BTC to:</p>
                                    <div className="bg-black p-4 font-mono text-xs text-gray-300 break-all select-all cursor-pointer border border-gray-800 hover:border-yellow-500 transition-colors">
                                        bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                                    </div>
                                </div>
                            )}

                            <button disabled={processing} className="w-full btn-tactical py-4 text-lg mt-8 flex items-center justify-center gap-3">
                                {processing ? (
                                    <>
                                        <Loader className="animate-spin text-[var(--color-term-green)]" /> PROCESSING...
                                    </>
                                ) : (
                                    <>
                                        CONFIRM TRANSACTION <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
