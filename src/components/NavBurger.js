/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useState } from "react"
// import NavMenu from "./NavMenu"

import * as styles from "../styles/NavBurger.module.css"

const NavBurger = () => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <div id={styles.hamburger} open={open} onClick={() => setOpen(!open)}>
        <span sx={{ bg: "primary" }} />
        <span sx={{ bg: "primary" }} />
        <span sx={{ bg: "primary" }} />
      </div>
      {/* <NavMenu open={open} /> */}
    </Fragment>
  )
}

export default NavBurger
