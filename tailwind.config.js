/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          50: "#fdf8f6",
          100: "#f8eae0",
          200: "#f1d4c0",
          300: "#e6b397",
          400: "#d68e6e",
          500: "#c16e4d",
          600: "#a15439",
          700: "#7d3f2d",
          800: "#563023",
          900: "#3a1e19",
        },
      },
    },
  },
  plugins: [],
};
