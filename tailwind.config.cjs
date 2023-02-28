/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                monumentRegular: ['Monument Regular'],
                monumentLarge: ['Monument Extended'],
                Restonasi: ['Restonasi']
            }
        },
    },
    plugins: [],
}