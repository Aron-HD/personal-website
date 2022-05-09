/** @jsx jsx */
import { jsx } from "theme-ui"
// import styled from "@emotion/styled"

import Navbar from "./Navbar"

// const StyledHeader = styled.header`
//   position: "fixed";
//   display: flex;
//   justify-content: center;
//   width: screen;
//   margin: 0 auto;
//   padding: 1.45rem 1.0875rem;
//   /* box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2); */
//   @media screen and (max-width: 600px) {
//     padding: 10px;
//   }
// `

const Header = ({ scrollFuncs }) => {
  return (
    // <StyledHeader >
    scrollFuncs !== undefined ? (
      <Navbar scrollFuncs={scrollFuncs} />
    ) : (
      <Navbar />
    )
    // </StyledHeader>
  )
}

export default Header
