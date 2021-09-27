/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import styled from "styled-components"
import SunIcon from "./Icons/Sun"
import MoonIcon from "./Icons/Moon"

const StyledThemeButton = styled.button`
  display: block;
  border: 0;
  margin: 0;
  height: 50px;
  width: 50px;
  cursor: "pointer";
  background: none;
  border-radius: 50%;
  svg {
    display: block;
  }
`

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <StyledThemeButton
      sx={{
        color: "primary",
        "&:hover": {
          transition: "all 0.3s ease",
          color: "text",
        },
      }}
      onClick={() => setColorMode(nextColorMode)}
    >
      {colorMode === "light" ? (
        <SunIcon sx={{ fill: "white" }} />
      ) : (
        <MoonIcon />
      )}
    </StyledThemeButton>
  )
}

export default ThemeSwitcher
