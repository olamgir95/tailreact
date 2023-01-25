const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#6F2CFF",
        pin:"#F6BED9",
        blak: '#1C1C1C',
        blak2:"#000000",
        gry:"#F5F5F5"
      },
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        booking: "url('/src/assets/imgs/booking.png')",
      },
      backgroundPosition: {
        btnsm: "85%",
        btnlg:"81%",
        btnmd: "70%",
        
      },
    },
  },
  plugins: [],
};
