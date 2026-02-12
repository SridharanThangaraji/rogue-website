import { getPackages, searchPackages } from '@/lib/api';
import PackageSearch from '@/components/features/PackageSearch';
import { Package, Download, Terminal } from 'lucide-react';
import { Suspense } from 'react';

export const metadata = {
    title: 'Package Repository | Rogue Linux',
    description: 'Search and download official Rogue Linux packages.',
};

export default async function PackagesPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const params = await searchParams;
    const query = params.q || '';

    type PackageItem = { id: string; name: string; version: string; description: string; size?: string; download_url?: string; created_at?: Date };
    let packages: PackageItem[] = [];
    try {
        if (query) {
            packages = await searchPackages(query);
        } else {
            packages = await getPackages();
        }
    } catch (e) {
        console.error("DB Error:", e);
        // Mock data fallback
        packages = [
            { id: '1', name: 'rogue-core', version: '6.1.0-4', description: 'The hardened kernel core.', download_url: '#', created_at: new Date() },
            { id: '2', name: 'void-shell', version: '2.3.1', description: 'Custom ZSH based tactical shell.', download_url: '#', created_at: new Date() },
            { id: '3', name: 'net-ghost', version: '1.0.5', description: 'Tor/I2P routing daemon.', download_url: '#', created_at: new Date() },
            { id: '4', name: 'cipher-vault', version: '3.0.0', description: 'AES-256 encrypted storage manager.', download_url: '#', created_at: new Date() },
            { id: '5', name: 'trace-killer', version: '0.9.1', description: 'Anti-forensics log wiper.', download_url: '#', created_at: new Date() },
        ];
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">Package <span className="text-[var(--color-term-green)]">Repository</span></h1>
                    <p className="text-gray-400 font-code text-sm">
                        Official signed binaries for the Rogue ecosystem.
                    </p>
                </div>
                <div className="font-code text-xs text-[var(--color-term-green)] border border-[var(--color-term-green-dim)] px-3 py-1 bg-[var(--color-term-green-dim)]">
                    GPG_CHECK: ENFORCED
                </div>
            </div>

            <div className="max-w-2xl">
                <Suspense fallback={<div>Loading Search...</div>}>
                    <PackageSearch />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-[10px] font-black text-gray-600 uppercase tracking-widest border-b border-gray-800">
                    <div className="col-span-4">Package Name</div>
                    <div className="col-span-2">Version</div>
                    <div className="col-span-4">Description</div>
                    <div className="col-span-2 text-right">Action</div>
                </div>

                {packages.map((pkg) => (
                    <div key={pkg.id} className="group grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-4 items-center bg-[var(--color-panel)] border border-transparent hover:border-[var(--color-term-green)] transition-all">
                        <div className="col-span-4 flex items-center gap-3">
                            <Package className="text-gray-600 group-hover:text-[var(--color-term-green)] transition-colors" size={18} />
                            <div>
                                <div className="font-bold text-white group-hover:text-[var(--color-term-green)] transition-colors">{pkg.name}</div>
                                <div className="md:hidden text-xs text-gray-500 font-code">{pkg.version}</div>
                            </div>
                        </div>

                        <div className="hidden md:block col-span-2 font-code text-xs text-gray-400">
                            {pkg.version}
                        </div>

                        <div className="col-span-4 text-sm text-gray-400 line-clamp-1">
                            {pkg.description}
                        </div>

                        <div className="col-span-2 flex justify-end gap-4">
                            <button className="text-gray-500 hover:text-white transition-colors" title="View Source">
                                <Terminal size={16} />
                            </button>
                            <a href={pkg.download_url} className="text-[var(--color-term-green)] hover:text-white transition-colors" title="Download">
                                <Download size={16} />
                            </a>
                        </div>
                    </div>
                ))}

                {packages.length === 0 && (
                    <div className="p-12 text-center border border-dashed border-gray-800 text-gray-500">
                        NO_PACKAGES_FOUND
                    </div>
                )}
            </div>
        </div>
    );
}
