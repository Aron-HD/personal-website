import { Link } from "gatsby"
import React from "react"
// import Logo from "./Logo"
// import styled from "styled-components"

import * as styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* <Logo className={styles.logo} /> */}
      <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
      <label className={styles.menuIcon} for={styles.menuBtn}>
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Portfolio</Link>
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
    </nav>
  )
}
