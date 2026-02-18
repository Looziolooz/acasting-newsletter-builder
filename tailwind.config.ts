
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Abilita il supporto dark mode basato su classe
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./*.{js,ts,jsx,tsx,mdx}", // Aggiungi questa riga per i file nella root
],
  theme: {
    extend: {
      colors: {
        acasting: {
          blue: '#0057FF',
          black: '#111827',
          gray: '#4B5563',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
