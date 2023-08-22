/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /^w-(96|52|8)$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        primaryLight: "rgba(29, 155, 240, 0.1)",
      },
    },
  },
  plugins: [],
};
