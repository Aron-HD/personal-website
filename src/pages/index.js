/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2 sx={{ variant: "styles.h2" }}>Software Developer</h2>
    <h3 sx={{ variant: "styles.h3" }}>Portfolio & blog site</h3>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p sx={{ variant: "styles.p" }}>
      <button sx={{ variant: "styles.button" }}>
        <Link to="/projects/">View projects</Link>
      </button>
    </p>
  </Layout>
)

export default IndexPage
