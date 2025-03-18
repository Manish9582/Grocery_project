import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                // Custom breakpoints from mobile to larger screens
                's':'150px',
                'ss':'400px',
                'sm': '640px',    // small screens (above 640px)
                'md': '768px',    // medium screens (above 768px)
                'lg': '1024px',   // large screens (above 1024px)
                'xl': '1280px',   // extra-large screens (above 1280px)
                '2xl': '1536px',  // 2x extra-large screens (above 1536px)
                '3xl': '1600px',  // custom breakpoint (above 1600px)
            },
        },
    },

    plugins: [
        forms,
        function ({ addComponents }) {
            addComponents({
              '.hide-scrollbar': {
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
              },
            });
          },

    ],
};
