/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inknut: ["Inknut Antiqua", "serif"],
      },
      fontSize: {
        "ph-lg": "34px",
        "ph-md": "16px",
        "ph-sm": "12px",
      },
      colors: {
        "pr-white-100": "#ffffff",
        "pr-white-200": "#F4F4F4",
        "pr-black-200": "#242424",
        "pr-black-100": "#26333F",
        "pr-button": "#BEFFFF",
        "nor-button": "#3B4752",
        
        blur: "#101010",
      },
    },
  },
  plugins: [require("daisyui")],
};
