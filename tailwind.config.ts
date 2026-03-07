import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        cube: {
          "0%": {
            transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(20) rotate(960deg) translate(-50%, -50%)",
            opacity: "0",
          },
        },
      },
      animation: {
        cube: "cube 12s ease-in infinite",
      },
    },
  },
  plugins: [],
});

export default config;
