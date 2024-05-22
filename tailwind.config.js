// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(208.93deg, #E2EDFD -34.98%, #CAEDFF 104.14%)",
      },
      colors: {
        primary: "#3498DB",
        paragraph: "#828282",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
