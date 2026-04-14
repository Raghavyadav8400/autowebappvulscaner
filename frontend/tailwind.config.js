/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Merriweather", "Georgia", "serif"],
        "serif-heading": ["var(--font-serif-heading)", "Playfair Display", "Merriweather", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
