module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,jsx}",
    "./src/components/**/*.{ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      }
    },
  },
  plugins: [],
}
