import * as React from "react"
import { Flex } from "theme-ui"

import NavLink from "./NavLink"

const NavLinks = ({ scrollFuncs }) => {
  const { scrollToAbout, scrollToProjects, scrollToContacts } =
    scrollFuncs !== undefined
      ? scrollFuncs
      : {
          scrollToHome: () => console.log("scrollToHome is undefined"),
          scrollToAbout: () => console.log("scrollToAbout is undefined"),
          scrollToProjects: () => console.log("scrollToProjects is undefined"),
          scrollToContacts: () => console.log("scrollToContacts is undefined"),
        }
  return (
    <Flex
      as="ul"
      sx={{
        m: 0,
        p: 0,
        listStyle: "none",
        gap: 4,
        fontFamily: "monospace",
      }}
    >
      <NavLink n="1" onClick={scrollToAbout}>
        About
      </NavLink>
      <NavLink n="2" onClick={scrollToProjects}>
        Projects
      </NavLink>
      <NavLink n="3" onClick={scrollToContacts}>
        Contact
      </NavLink>
    </Flex>
  )
}

export default NavLinks
