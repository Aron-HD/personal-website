import React from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
// import Social from "../Social"

import * as styles from "../styles/NavMenu.module.css"

const NavMenu = ({ open }) => {
  return (
    <div className={styles.menu} open={open}>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/create">New blog</Link>
        </li> */}
      </ul>
      {/* <Social /> */}
    </div>
  )
}

export default NavMenu
