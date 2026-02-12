'use client';
import { Search } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function PackageSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
                type="text"
                className="block w-full p-4 pl-10 text-sm border bg-[var(--color-panel)] border-gray-700 placeholder-gray-400 text-white focus:ring-[var(--color-term-green)] focus:border-[var(--color-term-green)] focus:outline-none"
                placeholder="SEARCH_PACKAGES..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('q')?.toString()}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-[10px] text-gray-600 font-mono">PKG_DB_V2</span>
            </div>
        </div>
    );
}
