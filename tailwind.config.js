/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                red: { 1: "#C91414", 2: "#F44444", 3: "#112a77" },
                light: { 1: "#FFFFFF" },
                dark: { 1: "#07040F", 2: "rgb(16, 11, 30)" },
            },
            fontFamily: {
                main: "'Tajawal', sans-serif",
            },
        },
        boxShadow: {
            dark: "2px 2px 8px #00000050",
            light: "2px 2px 8px #ffffff25",
        },
        dropShadow: {},
        screens: {
            mb: "390px",
            sm: "640px",
            md: "888px",
            lg: "1064px",
            xl: "1240px",
            "2xl": "1360px",
        },
    },
    plugins: [],
    darkMode: "class",
};
