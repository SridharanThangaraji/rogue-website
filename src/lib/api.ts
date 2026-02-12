import { query } from './db';

// Types
export interface Content {
    id: string;
    title: string;
    slug: string;
    content: string;
    type: 'blog' | 'documentation';
    author_id: string;
    published: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface Package {
    id: string;
    name: string;
    version: string;
    description: string;
    maintainer_id: string;
    download_url: string;
    checksum: string;
    created_at: Date;
}

export interface Advisory {
    id: string;
    title: string;
    cve_id: string;
    description: string;
    severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
    published_at: Date;
}

// Content API
export const getContentBySlug = async (slug: string, type: 'blog' | 'documentation'): Promise<Content | null> => {
    const res = await query(
        'SELECT * FROM content WHERE slug = $1 AND type = $2 AND published = true',
        [slug, type]
    );
    return res.rows[0] || null;
};

export const getAllContent = async (type: 'blog' | 'documentation'): Promise<Content[]> => {
    const res = await query(
        'SELECT id, title, slug, type, published_at as created_at FROM content WHERE type = $1 AND published = true ORDER BY created_at DESC',
        [type]
    );
    return res.rows;
};

// Package API
export const getPackages = async (limit = 50, offset = 0): Promise<Package[]> => {
    const res = await query(
        'SELECT * FROM packages ORDER BY name ASC LIMIT $1 OFFSET $2',
        [limit, offset]
    );
    return res.rows;
};

export const searchPackages = async (term: string): Promise<Package[]> => {
    const res = await query(
        'SELECT * FROM packages WHERE name ILIKE $1 OR description ILIKE $1 LIMIT 20',
        [`%${term}%`]
    );
    return res.rows;
};

// Advisory API
export const getAdvisories = async (limit = 20): Promise<Advisory[]> => {
    const res = await query(
        'SELECT * FROM advisories ORDER BY published_at DESC LIMIT $1',
        [limit]
    );
    return res.rows;
};
