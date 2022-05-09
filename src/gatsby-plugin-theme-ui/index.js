const theme = {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "#242121", // Black
    background: "#FBFAF5", // White
    primary: "#292929", // Red
    secondary: "#B8C4BB", // Orange
    muted: "#f8f3e3", // Grey
    accent: "#7b867e",
    modes: {
      dark: {
        text: "#d5ded7", //"#FBFAF5", // White
        background: "#292929", // Jet
        primary: "#DB1F48", // "#FFD900", // Yellow
        secondary: "#B8C4BB", //"#d5ded7", // "#fffbbf", // Light yellow
        muted: "#3d3d3d", // Dark Grey
        accent: "#B8C4BB",
      },
    },
  },
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Open Sans", sans-serif',
    subHeading: "Monteserrat, sans-serif",
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    subHeading: 100,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    subHeading: "52.75px",
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
      fontFamily: "subHeading",
      lineHeight: "heading",
      fontWeight: "subHeading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "subHeading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "subHeading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "subHeading",
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
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
        transition: "color 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
    },
    button: {
      color: "secondary",
      bg: "muted",
      fontWeight: "bold",
      "&:hover": {
        fontWeight: "bold",
        color: "primary",
        transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
        transform: "scale(1.025)",
      },
    },
    altButton: {
      bg: "secondary",
      "&:hover": {
        cursor: "pointer",
        bg: "primary",
        transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
    },
    socialIcon: {
      width: "23px",
      height: "23px",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      a: {
        m: 0,
        padding: 0,
        svg: {
          height: "23px",
          width: "23px",
          position: "relative",
          top: "0",
          fill: "secondary",
        },
        "&:hover": {
          svg: {
            fill: "primary",
            top: "-5px",
            transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
          },
        },
      },
    },
  },
  layout: {
    container: {
      width: [null, "fit-content", "100%", null],
      textAlign: "left",
      display: "inline-block",
      minHeight: "104vh",
      // gridTemplateRows: "1fr",
      // height: "fit-content",
      // blockSize: "fit-content",
      padding: ["50px 10px", "50px 20px", null],
    },
  },
  buttons: {
    primary: {
      color: "secondary",
      bg: "muted",
      fontWeight: "bold",
      width: "fit-content",
      "&:hover": {
        cursor: "pointer",
        fontWeight: "bold",
        color: "primary",
        transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
        transform: "scale(1.025)",
      },
    },
    outline: {
      color: "primary",
      bg: "transparent",
      fontWeight: "bold",
      width: "fit-content",
      border: "2px solid",
      borderColor: "primary",
      "&:hover": {
        cursor: "pointer",
        fontWeight: "bold",
        color: "secondary",
        borderColor: "secondary",
        transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
        transform: "scale(1.025)",
        a: { color: "secondary" },
      },
    },
    icons: {
      color: "secondary",
      bg: "muted",
      fontWeight: "bold",
      "&:hover": {
        fontWeight: "bold",
        color: "primary",
        transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
        transform: "scale(1.025)",
      },
    },
    nav: {
      position: "relative",
      border: "none",
      padding: 0,
      height: "fit-content",
      width: "fit-content",
      color: "secondary",
      bg: "transparent",
      textDecoration: "none",
      "&:hover": {
        fontWeight: "bold",
        cursor: "pointer",
        color: "primary",
        transition: "all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)",
        span: {
          opacity: 100,
          left: 0,
          bg: "primary",
          transition: "all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)",
          borderRadius: 20,
        },
      },
      span: {
        opacity: 0,
        display: "flex",
        position: "absolute",
        height: 3,
        width: "100%",
        bottom: "-4px",
        left: -3,
      },
      "&:active": {
        color: "primary",
        fontWeight: "bold",
        // span: {
        //   opacity: 100,
        //   left: 0,
        //   bg: "primary",
        //   transition: "all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)",
        //   borderRadius: 20,
        // },
      },
    },
  },
  text: {
    default: {
      color: "text",
      fontFamily: "monospace",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    logo: {
      color: "primary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 7,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 5,
    },
    subHeading: {
      fontFamily: "monospace",
      fontWeight: "subHeading",
      lineHeight: "subHeading",
      fontSize: "40px",
    },
    pre: {
      fontWeight: "heading",
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
  cards: {
    primary: {
      color: "inherit",
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      position: "relative",
      top: 0,
      "&:hover": {
        top: "-10px",
        transition: "all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)",
        cursor: "pointer",
        h3: {
          color: "primary",
          transition: "all 0.3s cubic-bezier(0.645,0.045,0.355,1)",
        },
        // svg: {
        //   fill: "primary",
        //   transition: "all 0.2s cubic-bezier(0.645,0.045,0.355,1)",
        // }
      },
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  badges: {
    tag: {
      fontSize: 1,
      textTransform: "lowercase",
      fontWeight: "body",
      fontFamily: "monospace",
      color: "accent",
      // borderColor: "accent",
      // border: "0.5px solid",
      // borderRadius: "5%",
      bg: "inherit",
    },
    primary: {
      color: "background",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  links: {
    nav: {
      color: "inherit",
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
        color: "primary",
        transition: "color 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
    },
    secondary: {
      color: "inherit",
      "&:hover": {
        cursor: "pointer",
        color: "primary",
        transition: "color 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
    },
  },
}

export default theme
