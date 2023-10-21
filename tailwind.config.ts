import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#424242", secondary: "#38B6FF" },
      backgroundImage: {
        "hero-bg": "url('/taxi-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
