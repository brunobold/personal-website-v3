import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "9xl": "9rem",
        "10xl": "10rem",
        "12xl": "12rem",
        // Add as many as you need...
      },
      borderRadius: {
        "8xl": "4rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
