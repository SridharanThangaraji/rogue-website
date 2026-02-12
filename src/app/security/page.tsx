import { getAdvisories } from '@/lib/api';
import { ShieldAlert, AlertTriangle, Bug, Info } from 'lucide-react';

export const metadata = {
    title: 'Security Advisories | Rogue Linux',
    description: 'Latest security bulletins and vulnerability reports.',
};

export default async function SecurityPage() {
    let advisories = [];
    try {
        advisories = await getAdvisories();
    } catch (e) {
        console.error("DB Error:", e);
        // Mock data with static dates for server-side rendering
        const now = new Date('2026-02-12');
        const yesterday = new Date('2026-02-11');
        const twoDaysAgo = new Date('2026-02-10');
        
        advisories = [
            { id: '1', title: 'Kernel: Privilege Escalation in IO_URING', cve_id: 'CVE-2025-1337', description: 'A race condition in the io_uring subsystem allows local users to gain root privileges.', severity: 'critical', published_at: now },
            { id: '2', title: 'OpenSSH: Pre-auth double free', cve_id: 'CVE-2025-0982', description: 'Double free in the sshd pre-authentication phase.', severity: 'high', published_at: yesterday },
            { id: '3', title: 'sudo: Buffer overflow in env processing', cve_id: 'CVE-2025-2451', description: 'Potential buffer overflow when processing environment variables.', severity: 'medium', published_at: twoDaysAgo },
        ];
    }

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'critical': return 'text-[var(--color-alert-red)] border-[var(--color-alert-red)]';
            case 'high': return 'text-[var(--color-warning-amber)] border-[var(--color-warning-amber)]';
            case 'medium': return 'text-yellow-400 border-yellow-400';
            case 'low': return 'text-[var(--color-cyber-blue)] border-[var(--color-cyber-blue)]';
            default: return 'text-gray-400 border-gray-400';
        }
    };

    const getIcon = (severity: string) => {
        switch (severity) {
            case 'critical': return <ShieldAlert className="w-5 h-5" />;
            case 'high': return <AlertTriangle className="w-5 h-5" />;
            case 'medium': return <Bug className="w-5 h-5" />;
            default: return <Info className="w-5 h-5" />;
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Security <span className="text-[var(--color-alert-red)]">Advisories</span></h1>
                <p className="text-gray-400 font-code text-sm max-w-2xl">
                    Real-time vulnerability intelligence and patch availability.
                </p>
            </div>

            <div className="space-y-4">
                {advisories.map((advisory: { id: string; title: string; cve_id: string; description: string; severity: string; published_at: Date }) => (
                    <div key={advisory.id} className="hud-panel p-6 border-l-[4px] bg-[var(--color-panel)]" style={{ borderLeftColor: advisory.severity === 'critical' ? 'var(--color-alert-red)' : advisory.severity === 'high' ? 'var(--color-warning-amber)' : 'gray' }}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 border bg-black/50 ${getSeverityColor(advisory.severity)}`}>
                                    {getIcon(advisory.severity)}
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white uppercase">{advisory.title}</h2>
                                    <div className="font-code text-xs text-gray-500 mt-1">{advisory.cve_id}</div>
                                </div>
                            </div>
                            <div className={`px-3 py-1 font-black text-[10px] uppercase tracking-widest border ${getSeverityColor(advisory.severity)}`}>
                                {advisory.severity}
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {advisory.description}
                        </p>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-800 text-[10px] font-code text-gray-600">
                            <span>PUBLISHED: {new Date(advisory.published_at).toLocaleDateString()}</span>
                            <span>ID: {advisory.id.substring(0, 8)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
