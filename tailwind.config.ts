import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      primary: "#fb8722",
      light: "#ffffff",
      "light/100": "#dedede",
      "light/500": "#878787",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        lg: "26px",
      },
    },
  },
  plugins: [],
};
export default config;
