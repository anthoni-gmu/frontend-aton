module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,jsx}",
    "./src/components/**/*.{ts,tsx,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#010101",
          100: "#303D5D",
          200: "#28334E",
          300: "#232D45",
          500: "#1B253B",
          700: "#172136",
        },
        day: {
          DEFAULT: "#B6C1CF",
          100: "#F5F6F8",
          200: "#F1F5F9",
          300: "#ECF0F5",
          400: "#E2E8F0",
          500: "#B2BEE3",
          600: "#3352B6",
          700: "#1E40AF",
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),
  require("daisyui")
  ],
}
