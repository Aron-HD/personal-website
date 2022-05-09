/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui"
import { useState } from "react"
import NavMenu from "./NavMenu"
import styled from "@emotion/styled"

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
    transition: all 0.3s linear;
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
  /* @media screen and (max-width: 40em) {
    display: none;
  } */

`

const NavBurger = () => {
  const [open, setOpen] = useState(false)
  return (
    <Flex>
      <StyledBurger
        sx={{
          display: ['flex', 'flex', 'none'],
          "&:hover": {
            cursor: "pointer",
            div: {
              bg: "primary"
            }
          },
        }}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <Box variant="styles.altButton" />
        <Box variant="styles.altButton" />
        <Box variant="styles.altButton" />
      </StyledBurger>
      <NavMenu open={open} />
    </Flex>
  )
}

export default NavBurger
