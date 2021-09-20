/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import favicon from "../images/favicon.ico"
import Header from "./Header"
import Social from "./Social"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main sx={{ m: "1rem" }}>{children}</main>
        <footer sx={{ m: "1rem" }}>
          © {data.site.siteMetadata?.title}, {new Date().getFullYear()}
          <br />
          [built with Gatsby & Contentful]
          <Social />
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
