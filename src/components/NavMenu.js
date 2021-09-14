/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
// import Social from "../Social"

import * as styles from "../styles/NavMenu.module.css"

const NavMenu = ({ open }) => {
  return (
    <Fragment>
      {open && (
        <div sx={{ bg: "muted" }} className={styles.menu}>
          <ul>
            <li sx={{ variant: "styles.a" }}>
              <Link to="/projects">Projects</Link>
            </li>
            <li sx={{ variant: "styles.a" }}>
              <Link to="/about">About</Link>
            </li>
            <li sx={{ variant: "styles.a" }}>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li sx={{ color: "primary" }}>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li sx={{ color: "primary" }}>
          <Link to="/create">New blog</Link>
        </li> */}
          </ul>
          {/* <Social /> */}
        </div>
      )}
    </Fragment>
  )
}

export default NavMenu
