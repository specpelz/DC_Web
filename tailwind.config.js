/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1D48E7",
        brandLightBlue: "#ECF0FD",
        brandDark: "#2C2C2C",
        brandWhite: "#fff",
      },
    },
  },
  plugins: [],
}

