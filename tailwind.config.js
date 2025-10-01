module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    fontSize: {
      base: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "2.3rem",
      "2xl": "2.7rem",
      "3xl": "6rem",
      "4xl": "8rem",
      "5xl": "10rem",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
    },
    fontFamily: {
      display: "Fugaz One",
      body: "Titillium Web",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      orange: "#ea4255",
      white: "#fff",
      black: "#000",
      gray: "#333"
    },
    container: {
      center: true,
      padding: {
        default: "0.8rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  variants: {
    margin: ["last"],
  },
  options: { important: true },
};
