require("typeface-amatic-sc")
export default {
  colors: {
    text: "#333",
    background: "#fff",

    accent: "",
    highlight: "",
    mute: "",

    primary: "#639",
    secondary: "#ff6347",
    primaryWhite: "#ffffff",
    primaryRed: "#A91B08",
    primaryBrown: "#66426F",
    primaryBlack: "#363636",
    primaryGray: "#F0F0F0",
    primaryOrange: "#D57A23",
    primaryGreen: "#42937F",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
    wacky: "Amatic SC, cursive",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    amaticTitles: {
      fontSize: "32",
      fontFamily: "wacky",
      fontWeight: "heading",
    },
  },
}
