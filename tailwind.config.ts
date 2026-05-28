import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        steel: "#11131a",
        ember: "#e11d2f",
        blood: "#8f101c",
        pearl: "#f8fafc"
      },
      boxShadow: {
        glow: "0 0 50px rgba(225, 29, 47, 0.28)",
        glass: "0 20px 80px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["InterLocal", "Arial", "sans-serif"],
        display: ["SoraLocal", "InterLocal", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
