import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import { Activity, Server, Users, Shield, Database, Terminal } from 'lucide-react';

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token) {
        redirect('/login');
    }

    const payload = verifyToken(token.value);
    if (!payload) {
        redirect('/login');
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">Command <span className="text-[var(--color-cyber-blue)]">Center</span></h1>
                    <p className="text-gray-400 font-code text-sm">
                        Welcome back, Operative. Clearance Level: <span className="text-white uppercase">{payload.role}</span>.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-code text-[var(--color-term-green)] animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-term-green)]"></div>
                    SYSTEM ONLINE
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard title="Active Nodes" value="42,881" icon={<Server size={20} />} color="var(--color-term-green)" />
                <StatCard title="Threats Blocked" value="1,024" icon={<Shield size={20} />} color="var(--color-alert-red)" />
                <StatCard title="Bandwidth" value="8.4 TB" icon={<Activity size={20} />} color="var(--color-cyber-blue)" />
                <StatCard title="Operatives" value="156" icon={<Users size={20} />} color="var(--color-warning-amber)" />
            </div>

            {/* Panels Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 hud-panel p-6">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Terminal size={20} className="text-gray-500" />
                        <span>System Logs</span>
                    </h2>
                    <div className="bg-black/50 p-4 font-code text-xs space-y-2 h-64 overflow-y-auto border border-gray-800 text-gray-400">
                        <div className="flex gap-2">
                            <span className="text-[var(--color-term-green)]">[SUCCESS]</span>
                            <span>Node 0421 sync complete.</span>
                            <span className="ml-auto text-gray-600">10:42:01</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[var(--color-warning-amber)]">[WARNING]</span>
                            <span>High load detected on Sector 7.</span>
                            <span className="ml-auto text-gray-600">10:41:55</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[var(--color-cyber-blue)]">[INFO]</span>
                            <span>New advisory imported: CVE-2025-1337.</span>
                            <span className="ml-auto text-gray-600">10:40:12</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[var(--color-alert-red)]">[ALERT]</span>
                            <span>Intrusion attempt blocked on API Gateway.</span>
                            <span className="ml-auto text-gray-600">10:38:45</span>
                        </div>
                    </div>
                </div>

                <div className="hud-panel p-6">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Database size={20} className="text-gray-500" />
                        <span>Resource Usage</span>
                    </h2>
                    <div className="space-y-6">
                        <ProgressBar label="CPU Core 0" value={45} color="var(--color-term-green)" />
                        <ProgressBar label="CPU Core 1" value={62} color="var(--color-term-green)" />
                        <ProgressBar label="Memory" value={85} color="var(--color-warning-amber)" />
                        <ProgressBar label="Storage" value={23} color="var(--color-cyber-blue)" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, color }: any) {
    return (
        <div className="hud-panel p-6 flex flex-col justify-between h-32 hover:border-[var(--color-term-green)] transition-colors group">
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{title}</span>
                <span style={{ color }} className="group-hover:scale-110 transition-transform">{icon}</span>
            </div>
            <div className="text-3xl font-black text-white">{value}</div>
        </div>
    );
}

function ProgressBar({ label, value, color }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-code text-gray-500">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-1 w-full bg-gray-900 overflow-hidden">
                <div style={{ width: `${value}%`, backgroundColor: color }} className="h-full shadow-[0_0_10px_currentColor]" />
            </div>
        </div>
    );
}
