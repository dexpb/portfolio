import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'dark-mode': '#080616',
        'bg-light': '#FFF9F1',
        'text-light': '#FFFEFE',
        'text-dark': '#0D0920',
        'emph-dark': '#512FAC',
        'emph-light': '#901E4E'
      }
    },
  },
  plugins: [],
};
export default config;
