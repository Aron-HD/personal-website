const theme = {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "#242121", // Black
    background: "#fff", // White
    primary: "#ff2047", // Blush
    secondary: "#F8C25C", // Orange
    muted: "#f8f3e3", // Grey
    accent: "#",
    modes: {
      dark: {
        text: "#fff", // White
        background: "#292929", // Jet
        primary: "#ff2047", // Orange
        secondary: "#ffa62b", // Rust
        muted: "#3d3d3d", // Dark Grey
        accent: "#B8C4BB",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      // bg: "secondary",
      textDecoration: "none",
      "&:hover": {
        fontWeight: "bold",
        color: "text",
        textDecoration: "underline",
      },
    },
    button: {
      color: "primary",
      bg: "secondary",
      "&:hover": {
        fontWeight: "bold",
        color: "text",
      },
    },
    socialIcon: {
      a: {
        svg: {
          fill: "secondary",
        },
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
  },
}

export default theme
