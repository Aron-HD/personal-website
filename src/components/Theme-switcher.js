/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <button
      sx={{
        position: "absolute",
        top: 25.5,
        right: 25.5,
        bg: "muted",
        color: "primary",
        border: 0,
        px: 3,
        py: 2,
        cursor: "pointer",
      }}
      onClick={() => setColorMode(nextColorMode)}
    >
      Switch theme
    </button>
  )
}

export default ThemeSwitcher
