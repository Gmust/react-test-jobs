/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'tablet': {'max': '1300px'},
        },
        extend: {
            fontFamily: {
                'sans': 'Poppins, sans-serif'
            }
        },
    },
    plugins: [],
}