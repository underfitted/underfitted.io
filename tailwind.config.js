module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            caveat: ['"Caveat Brush"', 'cursive'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
