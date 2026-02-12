'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Key, ChevronRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push('/dashboard');
            } else {
                const data = await res.json();
                setError(data.message || 'Authentication failed');
            }
        } catch {
            setError('Connection refused. Is the network secure?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="hud-panel p-8 border-t-4 border-t-[var(--color-term-green)]">
                    <div className="flex justify-center mb-8">
                        <div className="p-4 rounded-full bg-[var(--color-term-green-dim)] border border-[var(--color-term-green)] animate-pulse">
                            <Lock size={32} className="text-[var(--color-term-green)]" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-black text-white text-center mb-2 uppercase tracking-widest">
                        System Access
                    </h1>
                    <p className="text-center text-xs text-gray-500 font-code mb-8">
                        RESTRICTED AREA. LEVEL 4 CLEARANCE REQUIRED.
                    </p>

                    {error && (
                        <div className="mb-6 p-3 bg-red-900/20 border border-[var(--color-alert-red)] flex items-center gap-3">
                            <AlertCircle size={16} className="text-[var(--color-alert-red)]" />
                            <span className="text-[var(--color-alert-red)] text-xs font-code">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Operative ID</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <User size={16} className="text-gray-600" />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full pl-10 p-3 bg-black/50 border border-gray-700 text-white font-code text-sm focus:border-[var(--color-term-green)] focus:outline-none transition-colors"
                                    placeholder="username"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Passphrase</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Key size={16} className="text-gray-600" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 p-3 bg-black/50 border border-gray-700 text-white font-code text-sm focus:border-[var(--color-term-green)] focus:outline-none transition-colors"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-tactical py-4 bg-[var(--color-term-green-dim)] justify-between group"
                        >
                            {loading ? 'AUTHENTICATING...' : 'INITIATE SESSION'}
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[10px] text-gray-600 font-code">
                            By accessing this system you agree to the <span className="text-[var(--color-term-green)] hover:underline cursor-pointer">Phantom Protocol</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
