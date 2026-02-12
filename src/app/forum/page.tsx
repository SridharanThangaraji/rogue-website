import { MessageSquare, ThumbsUp, Clock, User, Hash, Zap } from 'lucide-react'

const threads = [
    { id: 1, title: 'Cogman v2.0 Release Notes', author: 'rogue_dev', replies: 42, time: '2h ago', tag: 'ANNOUNCEMENT', hot: true },
    { id: 2, title: 'How to configure Impacket with Kerberos?', author: 'net_phantom', replies: 15, time: '4h ago', tag: 'SUPPORT', hot: false },
    { id: 3, title: 'Best WiFi adapter for aircrack-ng on Rogue?', author: 'freq_hacker', replies: 8, time: '6h ago', tag: 'HARDWARE', hot: false },
    { id: 4, title: 'Customizing the ZSH theme', author: 'visual_noise', replies: 23, time: '12h ago', tag: 'RICE', hot: true },
    { id: 5, title: 'Hydra wordlists path?', author: 'newbie_01', replies: 5, time: '1d ago', tag: 'SUPPORT', hot: false },
]

export default function ForumPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-800 pb-8">
                <div>
                    <h1 className="text-4xl font-black mb-2 text-white font-display uppercase tracking-wider">The <span className="text-[var(--color-term-green)]">Legion</span></h1>
                    <p className="text-gray-500 font-mono text-sm max-w-lg">Encrypted channels for operative communication. Share intelligence. Coordinate operations.</p>
                </div>
                <button className="btn-tactical mt-6 md:mt-0 text-sm">
                    Broadcast Signal
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="hidden lg:block space-y-8">
                    <div className="hud-panel p-6">
                        <h3 className="text-xs font-bold text-[var(--color-term-green)] mb-6 uppercase tracking-widest flex items-center gap-2">
                            <Hash size={14} /> Frequencies
                        </h3>
                        <ul className="space-y-1 text-gray-400 text-sm font-mono">
                            <li className="bg-[rgba(0,255,65,0.05)] text-white px-3 py-2 border-l-2 border-[var(--color-term-green)] cursor-pointer">Global Feed</li>
                            <li className="hover:bg-white/5 px-3 py-2 border-l-2 border-transparent hover:border-gray-700 cursor-pointer transition-all">Intel / News</li>
                            <li className="hover:bg-white/5 px-3 py-2 border-l-2 border-transparent hover:border-gray-700 cursor-pointer transition-all">Field Support</li>
                            <li className="hover:bg-white/5 px-3 py-2 border-l-2 border-transparent hover:border-gray-700 cursor-pointer transition-all">Hardware</li>
                            <li className="hover:bg-white/5 px-3 py-2 border-l-2 border-transparent hover:border-gray-700 cursor-pointer transition-all">Off-Topic</li>
                        </ul>
                    </div>
                </div>

                {/* Feed */}
                <div className="lg:col-span-3 space-y-4">
                    {threads.map((thread) => (
                        <div key={thread.id} className="hud-panel p-6 group cursor-pointer hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className={`text-[10px] font-mono px-2 py-0.5 border ${thread.tag === 'ANNOUNCEMENT' ? 'border-[var(--color-alert-red)] text-[var(--color-alert-red)]' :
                                                'border-[var(--color-cyber-blue)] text-[var(--color-cyber-blue)]'
                                            }`}>
                                            {thread.tag}
                                        </span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1 font-mono uppercase"><User size={12} /> {thread.author}</span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1 font-mono uppercase"><Clock size={12} /> {thread.time}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-term-green)] transition-colors font-display tracking-wide flex items-center gap-3">
                                        {thread.title}
                                        {thread.hot && <Zap size={14} className="text-yellow-500 fill-yellow-500 animate-pulse" />}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-6 text-gray-600 font-mono text-sm">
                                    <div className="flex items-center gap-2 group-hover:text-white transition-colors">
                                        <MessageSquare size={16} />
                                        <span>{thread.replies}</span>
                                    </div>
                                    <div className="flex items-center gap-2 group-hover:text-[var(--color-term-green)] transition-colors">
                                        <ThumbsUp size={16} />
                                        <span>{thread.replies * 3 + 2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
