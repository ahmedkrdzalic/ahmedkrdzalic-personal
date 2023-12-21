import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e162a",
        primary_darker: "#0b101f",
        secondary: "#ffffff",
        accent: "#fa923b",
        accent_lighter: "#fba762",
      },
    },
  },
  plugins: [],
};
export default config;
