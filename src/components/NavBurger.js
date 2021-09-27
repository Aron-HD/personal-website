/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useState } from "react"
import NavMenu from "./NavMenu"
import styled from "styled-components"

const StyledBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  position: relative;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const NavBurger = () => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <StyledBurger
        sx={{
          "&:hover": { div: { bg: "text" } },
        }}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div sx={{ variant: "styles.altButton" }} />
        <div sx={{ variant: "styles.altButton" }} />
        <div sx={{ variant: "styles.altButton" }} />
      </StyledBurger>
      <NavMenu open={open} />
    </Fragment>
  )
}

export default NavBurger
