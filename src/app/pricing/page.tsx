import { Check } from 'lucide-react'
import Link from 'next/link'

const tiers = [
    {
        name: 'Operative',
        price: '0',
        desc: 'Standard clearance. Core tools and public channels.',
        features: [
            'Rogue Linux ISO Download',
            'Community Legion Access',
            'Basic Package Repository',
            'Public Documentation'
        ],
        cta: 'Initialize',
        highlight: false
    },
    {
        name: 'Specialist',
        price: '15',
        period: '/mo',
        desc: 'Advanced clearance. Specialized labs and real-time intel.',
        features: [
            'Cloud Attack Labs (10h/mo)',
            'Private Exploit Database',
            'Priority Mirror Access',
            'Certification Voucher (50% off)',
            'Butler AI Pro Uplink'
        ],
        cta: 'Request Access',
        highlight: true
    },
    {
        name: 'Agency',
        price: 'Custom',
        desc: 'Command clearance. Enterprise deployment and support.',
        features: [
            'Custom ISO Builds',
            'On-premise Mirror',
            'Dedicated Secure Channel',
            'Team Dashboard',
            'SLA Guarantee'
        ],
        cta: 'Contact Command',
        highlight: false
    }
]

export default function PricingPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16 px-4">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-white font-display uppercase tracking-widest">Clearance <span className="text-[var(--color-term-green)]">Levels</span></h1>
                <p className="text-gray-500 max-w-xl mx-auto font-mono text-sm">Select your operational capacity. Upgrade your arsenal for advanced field work.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tiers.map((tier) => (
                    <div key={tier.name} className={`hud-panel p-8 relative flex flex-col group transition-all duration-300 ${tier.highlight ? 'scale-105 border-[var(--color-term-green)] shadow-[0_0_30px_rgba(0,255,65,0.1)] z-10' : 'hover:border-gray-500'}`}>
                        {tier.highlight && (
                            <div className="absolute top-0 right-0 bg-[var(--color-term-green)] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest font-mono">
                                Recommended
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest font-display">{tier.name}</h3>
                        <p className="text-gray-500 text-sm mb-8 font-mono h-10">{tier.desc}</p>

                        <div className="mb-10 p-4 bg-black/50 border border-gray-800 text-center">
                            <span className="text-4xl font-bold text-white font-display">${tier.price}</span>
                            {tier.period && <span className="text-gray-500 font-mono text-xs">{tier.period}</span>}
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm text-gray-300 font-mono">
                                    <div className={`mt-0.5 ${tier.highlight ? 'text-[var(--color-term-green)]' : 'text-gray-600'}`}>
                                        <Check size={14} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href="/checkout" className={`w-full py-4 text-center uppercase tracking-[0.2em] text-xs font-bold transition-all border relative overflow-hidden group/btn ${tier.highlight
                                ? 'bg-[var(--color-term-green)] text-black border-[var(--color-term-green)] hover:bg-white'
                                : 'border-gray-700 text-gray-400 hover:text-white hover:border-white'
                            }`}>
                            <span className="relative z-10">{tier.cta}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
