/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: '#eff6ff',
                secondary: '#375F9B',
                background: '#FFFBF6',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '22px' },
            });
        }),
        require('autoprefixer'),
    ],
};
