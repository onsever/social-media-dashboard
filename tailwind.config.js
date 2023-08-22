/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /^w-(96|52)$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
      },
    },
  },
  plugins: [],
};
