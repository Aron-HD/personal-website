/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import { Box, Grid, jsx } from "theme-ui"
import { Fragment } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import Helmet from "react-helmet"

// import favicon from "../images/favicon.ico"
import logo from "../images/my-logo.svg"
// import Header from "./Header"
import Social from "./Social"

import "../styles/global.css"

const ProjectLayout = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href={logo} />
        {/* <link rel="icon" href={favicon} /> */}
      </Helmet>
      {/* <Header
      // siteTitle={data.site.siteMetadata?.title || `Title`}
      // scrollFuncs={scrollFuncs}
      /> */}
      <Grid as="main" sx={{ overflow: "hidden", gap: "200px" }}>
        {children}
      </Grid>
      <Box as="footer" sx={{ fontSize: "x-small" }} p={3}>
        <Social />© temp layout, {new Date().getFullYear()}
      </Box>
    </Fragment>
  )
}

export default ProjectLayout
