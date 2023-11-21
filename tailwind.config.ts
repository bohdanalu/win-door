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
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        lg: "26px",
      },
    },
    //   extend: {
    //     backgroundImage: {
    //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //       'gradient-conic':
    //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //     },
    //   },
  },
  plugins: [],
};
export default config;
