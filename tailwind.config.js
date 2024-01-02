/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./modules/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#a72cc9',
                primaryLight: '#b747d7',
                primaryDark: '#8b25a7',
                secondary: '#141b41',
                secondaryLight: '#222d6d',
            },
        },
    },
    plugins: [],
}
