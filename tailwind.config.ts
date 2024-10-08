



import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        },
      colors:{
        'dark-mode': '#080616',
        'light-mode': '#FFF9F1',
        'text-light': '#FFFEFE',
        'text-dark': '#0D0920',
        'emph-dark': '#512FAC',
        'emph-darker': '#2A1970',
        'emph-light': '#901E4E',
        'whatsapp': '#25D366',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes: [
      "light",
      "dark",
    ]
  }
};
export default config;


