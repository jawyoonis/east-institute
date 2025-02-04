/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // Add other paths as needed
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
      fontFamily: {
        // Custom fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        // Custom spacing
        '128': '32rem',
        '144': '36rem',
      },
      // Add other customizations as needed
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Include necessary plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Add other plugins as needed
  ],
};
