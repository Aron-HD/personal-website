/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"

import NavBurger from "./NavBurger"
import ThemeSwitcher from "./ThemeSwitcher"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  z-index: 100;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`

const NavClosed = ({ scrollFuncs }) => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    console.log(offset)
    if (offset > 0) setScrolled(true)
    else setScrolled(false)
  }
  useEffect(() => window.addEventListener("scroll", handleScroll))

  return (
    <StyledNav
      style={{
        position: "fixed", //scrolled ? "fixed" : "unset",
      }}
      sx={{
        padding: ["10px", "1.45rem 1.0875rem"],
      }}
    >
      <Logo scrollFunc={scrollFuncs.scrollToHome} />
      <NavBurger />
      <Box
        sx={{ display: ["none", "none", "flex"], alignItems: "center", gap: 4 }}
      >
        <NavLinks scrollFuncs={scrollFuncs} />
        <ThemeSwitcher />
      </Box>
    </StyledNav>
  )
}

export default NavClosed
