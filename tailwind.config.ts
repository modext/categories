import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'myblack-100': "#060809",
        'myblue-100': "#2742C6",
        'mygray-50': "#ECECEC",
        'mygray-60': "#F8F8F8",
        'mygray-70': "#7B828E",
        'mygray-80': "#9A9DAD",
        'mygray-100': "#363D4E",
      }
    },
  },
  plugins: [],
};
export default config;
