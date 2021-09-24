const theme = {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "#242121", // Black
    background: "#FBFAF5", // White
    primary: "#ff2047", // Blush
    secondary: "#ff3673", // Orange
    muted: "#f8f3e3", // Grey
    accent: "#",
    modes: {
      dark: {
        text: "#FBFAF5", // White
        background: "#292929", // Jet
        primary: "#ff2047", // Red
        secondary: "#ff3673", // Pink
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
      fontWeight: "bold",
      textDecoration: "none",
      "&:hover": {
        fontWeight: "bold",
        color: "text",
        transition: "color 0.2s ease",
      },
    },
    button: {
      color: "secondary",
      borderRadius: "10%",
      padding: "2px 4px",
      bg: "muted",
      fontWeight: "bold",
      "&:hover": {
        fontWeight: "bold",
        color: "text",
        transition: "all 0.3s ease",
        transform: "scale(1.025)",
      },
    },
    altButton: {
      bg: "primary",
      "&:hover": {
        bg: "text",
        transition: "all 0.3s ease",
      },
    },
    socialIcon: {
      a: {
        svg: {
          position: "relative",
          top: "0",
          fill: "primary",
        },
        "&:hover": {
          svg: {
            fill: "text",
            top: "-5px",
            transition: "all 0.2s ease",
          },
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
