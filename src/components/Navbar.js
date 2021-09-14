import React from "react"
import NavBurger from "./NavBurger"

import * as styles from "../styles/NavClosed.module.css"

const NavClosed = () => {
  return (
    <nav className={styles.navbar}>
      <NavBurger />
    </nav>
  )
}

export default NavClosed
