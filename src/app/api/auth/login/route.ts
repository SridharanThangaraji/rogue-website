import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { comparePassword, signToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ message: 'Missing credentials' }, { status: 400 });
        }

        // In a real app, fetch user from DB
        // const res = await query('SELECT * FROM users WHERE username = $1', [username]);
        // const user = res.rows[0];

        // For Demo purposes, allow a hardcoded admin
        let user = null;
        if (username === 'admin' && password === 'admin') {
            user = { id: '0000-0000-0000-0000', username: 'admin', password_hash: 'mock', role: 'admin' };
        } else {
            // Fallback to check DB if not manual admin
            // This won't work without a seeded DB, basically preventing login for anyone else right now
            // user = null; 
        }

        // if (!user || !(await comparePassword(password, user.password_hash))) {
        if (!user) {
            return NextResponse.json({ message: 'Invalid credentials or access denied' }, { status: 401 });
        }

        // Generate Token
        const token = signToken({ userId: user.id, role: user.role });

        // Set Cookie
        const cookieStore = await cookies();
        cookieStore.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });

        return NextResponse.json({ success: true, role: user.role });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
