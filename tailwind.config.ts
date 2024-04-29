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
        'myblack-90': "#393E46",
        'myblack-100': "#060809",
        'myblue-5': "#FAFAFA",
        'myblue-20': "#F3F5FC",
        'myblue-100': "#2742C6",
        'mygray-50': "#ECECEC",
        'mygray-60': "#F8F8F8",
        'mygray-70': "#7B828E",
        'mygray-80': "#9A9DAD",
        'mygray-90': "#8F96A3",
        'mygray-100': "#363D4E",
        'mygray-110': "#E9EBEC",        
        'mygray-120': "#4D5462",        
      }
    },
  },
  plugins: [],
};
export default config;
