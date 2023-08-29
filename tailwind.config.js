/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    mode: "jit",
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./navigations/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rsq: {
                    100: "#1C3144",
                    200: "#FC4850",
                    300: "#c6b38e",
                    350: "#DBF4AD", // Old green
                    400: "#1B998B",
                    500: "#FFFDFD",
                    600: "#FF8F94",
                    700: "#E12D35",
                    800: "#f7b32b",
                    900: "#4B4949", // Paragraph
                },
                google: {
                    100: "#1a0dab", // meta title
                    200: "#202124", // meta url
                    300: "#545454", // meta description
                    400: "#737373", // meta additionals
                },
                fields: {
                    100: "#ECECEC", // Linea Separadora
                    200: "#A6A6A6", // Borde Field
                },
                bkg: {
                    100: "#ff000005",
                    200: "#ff000014",
                },
            },
            animation: {
                marquee: "marquee 15s linear infinite",
                marquee2: "marquee2 15s linear infinite",
                marquee3: "marquee3 20s linear infinite",
                marquee4: "marquee4 20s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marquee3: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                marquee4: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
    ],
};
