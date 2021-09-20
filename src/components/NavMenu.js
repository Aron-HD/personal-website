/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"
import { Link } from "gatsby"
// import Social from "../Social"

const StyledMenu = styled.div`
  position: relative;
  z-index: 1;
  .menu {
    border: 8px;
    display: grid;
    grid-template-rows: 1 1fr;
    grid-template-columns: 1 1fr;
    align-items: center;
    justify-content: left;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 20vw;
    padding: 40px;
    ul {
      display: grid;
      justify-items: left;
      align-content: left;
      justify-content: left;
      align-items: left;
      list-style: none;
      li {
        padding: 18px 10px;
        text-align: left;
        a {
          transition: 0.2s;
          text-align: left;
        }
        a:hover {
          letter-spacing: 1px;
          transition: 0.2s;
        }
      }
    }
  }

@media (max-width: 600px) {
  all: revert;
  .menu {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
    width: 86%;
    height: 100%;
    justify-items: center;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      margin-right: 40px;

    }
  }
}


`

const NavMenu = ({ open }) => {
  return (
    <StyledMenu>
      {open && (
        <div sx={{ bg: "muted" }} className="menu">
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
    </StyledMenu>
  )
}

export default NavMenu
