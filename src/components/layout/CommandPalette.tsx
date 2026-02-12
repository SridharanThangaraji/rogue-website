'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, FileText, Package, Shield, Hash } from 'lucide-react';
import Link from 'next/link';

interface CommandItem {
    id: string;
    title: string;
    href: string;
    icon: any;
    section: string;
}

const commands: CommandItem[] = [
    { id: 'home', title: 'Dashboard / Home', href: '/', icon: Terminal, section: 'Navigation' },
    { id: 'docs', title: 'Documentation', href: '/docs', icon: FileText, section: 'Navigation' },
    { id: 'packages', title: 'Package Repository', href: '/packages', icon: Package, section: 'Navigation' },
    { id: 'security', title: 'Security Advisories', href: '/security', icon: Shield, section: 'Navigation' },
    { id: 'blog', title: 'Transmission Log', href: '/blog', icon: Hash, section: 'Navigation' },
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const filteredCommands = commands.filter((command) =>
        command.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-2xl bg-panel border border-term-green shadow-[0_0_50px_rgba(0,255,159,0.1)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center px-4 py-3 border-b border-white/10">
                            <Search className="w-5 h-5 text-term-green mr-3" />
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="EXECUTE_COMMAND..."
                                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none font-mono text-sm"
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-1 rounded">ESC</span>
                            </div>
                        </div>

                        {/* List */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredCommands.length === 0 ? (
                                <div className="p-8 text-center text-gray-500 font-mono text-sm">
                                    NO_MATCHING_COMMANDS
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <div className="px-2 py-1 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                                        System Navigation
                                    </div>
                                    {filteredCommands.map((command, index) => (
                                        <Link
                                            key={command.id}
                                            href={command.href}
                                            onClick={() => setOpen(false)}
                                            className="flex items-center px-3 py-3 hover:bg-white/5 group transition-colors border border-transparent hover:border-term-green/30"
                                        >
                                            <command.icon className="w-4 h-4 text-gray-400 group-hover:text-term-green mr-3 transition-colors" />
                                            <span className="text-gray-300 group-hover:text-white font-mono text-sm">
                                                {command.title}
                                            </span>
                                            <span className="ml-auto text-[10px] text-gray-600 group-hover:text-term-green font-mono opacity-0 group-hover:opacity-100 transition-all">
                                                JUMP_TO
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                            <span>ROGUE_LINUX_V1.0</span>
                            <div className="flex gap-4">
                                <span>SELECT: ↑↓</span>
                                <span>EXECUTE: ↵</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
