import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                void: "var(--color-void)",
                "void-deep": "var(--color-void-deep)",
                panel: "var(--color-panel)",
                "term-green": "var(--color-term-green)",
                "term-green-dim": "var(--color-term-green-dim)",
                "cyber-blue": "var(--color-cyber-blue)",
                "cyber-blue-dim": "var(--color-cyber-blue-dim)",
                "warning-amber": "var(--color-warning-amber)",
                "alert-red": "var(--color-alert-red)",
            },
            fontFamily: {
                mono: ["var(--font-mono)", "monospace"],
                display: ["var(--font-display)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"],
            },
            backgroundImage: {
                'scanlines': "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4))",
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
