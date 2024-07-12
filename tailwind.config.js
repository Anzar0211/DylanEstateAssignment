/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'background-navbar': '#F6EFE6',
          'background-main': '#122B49',
          'registration-form-header':'#FCF8F4',
          'property-details-form-header-button':'96C9F4'
        },
      },
    },
  },
  plugins: [],
}