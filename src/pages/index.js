/** @jsx jsx */
import { jsx, Text, Button, Container, Heading, Grid } from "theme-ui"
import { useRef } from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Projects from "./projects"
import AboutPage from "./about"
import ContactPage from "./contact"

const IndexPage = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactsRef = useRef(null)

  const scrollFuncs = {
    scrollToHome: () => homeRef.current.scrollIntoView(),
    scrollToAbout: () => aboutRef.current.scrollIntoView(),
    scrollToProjects: () => projectsRef.current.scrollIntoView(),
    scrollToContacts: () => contactsRef.current.scrollIntoView(),
  }

  return (
    <Layout scrollFuncs={scrollFuncs}>
      <Seo title="Home" />
      {/* Home */}
      <Container
        id="home"
        ref={homeRef}
        as="section"
        sx={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid gap={3}>
          <Heading variant="logo" as="h1">
            Aron Davidson
          </Heading>
          <Heading variant="subHeading" as="h2">
            Software Developer
          </Heading>
          <Text as="p" sx={{ opacity: 0.8 }} mb={40}>
            Welcome to my website, have a look at some
            <br /> of my projects or get in touch.
          </Text>
          <Button variant="outline" onClick={scrollFuncs.scrollToProjects}>
            Projects
          </Button>
        </Grid>
      </Container>
      {/* End Home */}
      <AboutPage ref={aboutRef} />
      <Projects ref={projectsRef} />
      <ContactPage ref={contactsRef} />
    </Layout>
  )
}

export default IndexPage
