/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import Navbar from "./Navbar"
import ThemeSwitcher from "./Theme-switcher"

const StyledHeader = styled.header`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  width: 100vw;
  padding: 1.45rem 1.0875rem;
  h1 {
    width: 90vw;
    margin: 0;
  }

  @media (max-width: 600px) {
    display: inline-flex;
    padding: 5px 0px 5px 0px;
    h1 {
      padding: 0;
    }
  }
 `

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader sx={{ bg: "secondary"  }}>
        <ThemeSwitcher />
        <h1 sx={{ variant: "styles.h1" }}>
          <Link
            to="/"
            sx={{
              variant: "styles.a",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Navbar />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
