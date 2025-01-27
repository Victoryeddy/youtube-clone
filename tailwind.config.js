import {defineConfig} from "@tailwindcss/vite"

export default defineConfig({
    theme: {
        extend: {
            fontFamily: {
                san: ['Open Sans', 'sans-serif'], // Add Open Sans as the primary sans font
                heading: ['"Roboto"', 'sans-serif'], // Example of adding another font
            },
        },
    },
    plugins: [],
});