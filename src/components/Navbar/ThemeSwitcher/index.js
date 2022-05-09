/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import SunIcon from "./Sun"
import MoonIcon from "./Moon"

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <button
      sx={{
        display: "block",
        // position: "absolute",
        left: "50%",
        right: "50%",
        border: 0,
        m: 0,
        borderRadius: "50%",
        height: "50px",
        width: "50px",
        bg: "transparent",
        color: "secondary",
        "&:hover": {
          transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
          color: "primary",
          cursor: "pointer",
        },
        svg: {
          display: "block",
        },
      }}
      onClick={() => setColorMode(nextColorMode)}
    >
      {colorMode === "light" ? (
        <SunIcon sx={{ fill: "secondary" }} />
      ) : (
        <MoonIcon />
      )}
    </button>
  )
}

export default ThemeSwitcher
