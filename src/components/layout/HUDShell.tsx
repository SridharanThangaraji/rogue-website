import { ReactNode } from 'react';
import Scanlines from '../ui/Scanlines';
import HexGrid from '../ui/HexGrid';
import CommandPalette from './CommandPalette';

interface HUDShellProps {
    children: ReactNode;
}

export default function HUDShell({ children }: HUDShellProps) {
    return (
        <>
            <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-5 bg-[url('/noise.svg')]"></div>
            <Scanlines />
            <HexGrid />
            <CommandPalette />
            {children}
            {/* Corner decorations for the entire viewport could be added here if desired */}
            <div className="fixed top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-term-green opacity-50 z-[100] pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-term-green opacity-50 z-[100] pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-term-green opacity-50 z-[100] pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-term-green opacity-50 z-[100] pointer-events-none"></div>
        </>
    );
}
