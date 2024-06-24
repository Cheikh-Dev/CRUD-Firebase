/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        w: "#ffffff",
        b: "#000000",
        R: "#ff0000",
        G: "#00ff00",
        Y: "#ffff00",
        O: "#ffa500",
        P: "#800080",
        B: "#0000ff",
        
      },
      fontFamily: {
        //
      },
    },
  },
  plugins: [],
};
