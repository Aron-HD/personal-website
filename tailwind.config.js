/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // background: "#292929",
        // text: "#d5ded7",
        // primary: "#DB1F48",
        // secondary: "#B8C4BB",
        // muted: "#3d3d3d",
        // accent: "#B8C4BB",
        background: { dark: "#292929", light: "#F5F5F5" },
        text: { dark: "#d5ded7", light: "#292929" },
        primary: { dark: "#DB1F48", light: "#000000" },
        secondary: { dark: "#B8C4BB", light: "#DB1F48" },
        muted: { dark: "#3d3d3d", light: "#d5ded7" },
        accent: { dark: "#B8C4BB", light: "#3d3d3d" },
      },
      fontFamily: {
        body: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
        heading: ["Open Sans", "sans-serif"],
        subHeading: ["Monteserrat", "sans-serif"],
        monospace: ["Roboto Mono", "Menlo", "monospace"]
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
}

