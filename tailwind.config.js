/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                red: { 1: "#C91414", 2: "#F44444", 3: "#112a77" },
                light: { 1: "#FFFFFF" },
                dark: { 1: "#07040F", 2: "#242424" },
            },
            fontFamily: {
                main: "'Tajawal', sans-serif",
            },
        },
        boxShadow: {},
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
