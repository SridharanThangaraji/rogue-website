import { getContentBySlug } from '@/lib/api';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface DocContent {
    title: string;
    content: string;
    updated_at?: Date;
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doc: DocContent | null = null;

    try {
        doc = await getContentBySlug(slug, 'documentation');
    } catch (e) {
        console.error("DB Error:", e);
    }

    // Mock data if DB fails or is empty for specific known slugs
    if (!doc) {
        if (slug === 'installation') {
            doc = {
                title: 'Installation Guide',
                content: `
# Installation Protocol

Rogue Linux requires a **64-bit compatible processor** and at least **4GB of RAM**.

## Step 1: Secure the ISO
Download the ISO from the official channel. Verify the SHA256 checksum.

## Step 2: Burn to Media
Use \`dd\` or Etcher to flash the ISO to a USB drive (min 8GB).

\`\`\`bash
sudo dd if=rogue-linux.iso of=/dev/sdX bs=4M status=progress
\`\`\`

## Step 3: Boot Sequence
Insert the media and boot into the live environment. The default credentials are \`rogue\` / \`toor\`.
        `,
                updated_at: new Date()
            };
        } else {
            // Only return notFound if we truly have no data. 
            // For development/demo, we might want a generic fallback or just 404.
            // Let's return a generic placeholder for testing the layout.
            doc = {
                title: `Documentation: ${slug}`,
                content: `This documentation entry is currently encrypted or pending classification declassification. \n\n Please check back later or contact your sector administrator.`
            }
        }
    }

    return (
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="hidden lg:block space-y-8">
                <div className="hud-panel p-6 border-l-2 border-l-[var(--color-term-green)]">
                    <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Table of Contents</h3>
                    <ul className="space-y-2 text-sm text-gray-500 font-code">
                        <li><a href="#" className="hover:text-[var(--color-term-green)]">Introduction</a></li>
                        <li><a href="#" className="hover:text-[var(--color-term-green)]">Prerequisites</a></li>
                        <li><a href="#" className="hover:text-[var(--color-term-green)]">Installation</a></li>
                        <li><a href="#" className="hover:text-[var(--color-term-green)]">Configuration</a></li>
                    </ul>
                </div>
            </aside>

            <article className="lg:col-span-3 prose prose-invert prose-green max-w-none">
                <h1 className="text-4xl font-black uppercase mb-2">{doc.title}</h1>
                <div className="flex gap-4 text-xs font-code text-gray-500 mb-8 pb-8 border-b border-gray-900">
                    <span>LAST_UPDATE: {new Date(doc.updated_at || new Date()).toLocaleDateString()}</span>
                    <span>AUTHOR: [REDACTED]</span>
                </div>

                <MDXRemote source={doc.content} />
            </article>
        </div>
    );
}
