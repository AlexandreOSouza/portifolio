import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      dark: "#01080E",
      mid: "#011627",
      midDark: "#011221",
    },
    secondary: {
      gray: "#607B96",
      green: "#3C9D93",
      blue: "#4D5BCE",
      white: "#FFFFFF",
    },
    accent: {
      orange: "#FEA55F",
      green: "#43D9AD",
      pink: "#E99287",
      purple: "#C98BDF",
      orangeHover: "#FFAC6B",
    },
    lines: {
      main: "#1E2D3D",
    },
    gradients: {
      blue: "#4D5BCE",
      green: "#43D9AD",
    },
  },
  textStyles: {
    headline: {
      fontSize: "62px",
      lineHeight: "81.34px",
      fontWeight: "450",
      color: "white",
    },
    subheadline: {
      fontSize: "32px",
      lineHeight: "41.98px",
      fontWeight: "450",
      color: "white",
    },
    body: {
      fontSize: "18px",
      lineHeight: "23.62px",
      fontWeight: "450",
      color: "white",
    },
    label: {
      fontSize: "16px",
      lineHeight: "20.99px",
      fontWeight: "450",
      color: "white",
    },
    code: {
      fontSize: "14px",
      lineHeight: "20.99px",
      fontWeight: "450",
      color: "white",
    },
  },
});

export default theme;
