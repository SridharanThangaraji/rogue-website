import { getAllContent } from '@/lib/api';
import Link from 'next/link';
import { FileText, ChevronRight } from 'lucide-react';

export default async function DocsPage() {
    // In a real scenario, this would fetch from DB. For now, we mock if DB is empty or just show connection error handled gracefully.
    // Actually, let's try to fetch.
    let docs = [];
    try {
        docs = await getAllContent('documentation');
    } catch (e) {
        console.error("Failed to fetch docs:", e);
        // Fallback for demo if DB is not set up
        docs = [
            { id: '1', title: 'Installation Guide', slug: 'installation', description: 'How to install Rogue Linux on bare metal.', created_at: new Date() },
            { id: '2', title: 'Package Management', slug: 'packages', description: 'Managing software with rogue-pkg.', created_at: new Date() },
            { id: '3', title: 'Network Security', slug: 'network-security', description: 'Configuring the firewall and VPN.', created_at: new Date() },
        ];
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Documentation <span className="text-[var(--color-term-green)]">Hub</span></h1>
                <p className="text-gray-400 font-code text-sm max-w-2xl">
                    Official graphical and technical manuals for Rogue Linux operations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc: any) => (
                    <Link key={doc.slug} href={`/docs/${doc.slug}`} className="hud-panel p-6 group hover:border-[var(--color-term-green)] transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <FileText className="text-[var(--color-term-green)]" size={24} />
                            <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-term-green)] transition-colors">{doc.title}</h2>
                        <p className="text-gray-500 text-sm font-code line-clamp-2">{doc.description || "Access restricted. Authorized personnel only."}</p>
                        <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-code text-gray-600">
                            <span>ID: {doc.id.substring(0, 8)}</span>
                            <span>UPDATED: {new Date(doc.created_at).toLocaleDateString()}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
