import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                almost_black: "#0d1117",
                almost_white: "#ffffff",
                background: {
                    dark: "#0e1118",
                    light: "#100b4c",
                },
                blue: {
                    dark: "#4c5ce0",
                    light: "#3a95e8",
                },
                grey: {
                    classic: "#a7b5c3",
                    light: "#ccdae7",
                    disabled: "#6e7074",
                },
                border: {
                    yellow: "#ffc82f",
                    orange: "#f05b34",
                },
                input: {
                    bg: "#171e25",
                    hover: "#1e252c",
                },
            },
        },
        keyframes: {
            scaleAnimation: {
                "0%": {
                    transform: "scale(0.90)",
                },
                " 50%": {
                    transform: "scale(0.95)",
                },
                "100%": {
                    transform: "scale(1)",
                },
            },
        },
        animation: {
            scaleAnimation: "scaleAnimation 700ms ease-in-out",
        },
    },
    plugins: [],
};
export default config;
