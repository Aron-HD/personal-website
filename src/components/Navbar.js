import React from "react"
import NavBurger from "./NavBurger"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: relative;
  z-index: 100;
  padding: 9px;
`

const NavClosed = () => {
  return (
    <StyledNav>
      <NavBurger />
    </StyledNav>
  )
}

export default NavClosed
