/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: "#1E3A8A",    // Deep Blue
        accent: "#F59E0B",     // Amber
        light: "#F3F4F6",      // Light Gray
        dark: "#111827",       // Dark Gray
      },
      fontFamily :{
        merriweather: ["Merriweather", 'serif'],
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [],
}


