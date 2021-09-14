/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navbar from "./Navbar"

const Header = ({ siteTitle }) => {
  return (
    <header
      sx={{
        bg: "secondary",
        marginBottom: "1.45rem",
      }}
    >
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Navbar />
        <h1 sx={{ variant: "styles.h1", margin: 0 }}>
          <Link
            to="/"
            sx={{
              variant: "styles.a",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
