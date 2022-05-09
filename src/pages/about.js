/** @jsx jsx */
import { Container, Flex, jsx, Text } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

import * as styles from "../styles/about.module.css"
import { Fragment, forwardRef } from "react"
import SectionTitle from "../components/SectionTitle"

const AboutPage = forwardRef((props, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulPerson(name: { eq: "Aron Hayes Davidson" }) {
          github
          email
          company
          title
          image {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [AUTO, WEBP, PNG]
              width: 300
              aspectRatio: 1.2
              height: 300
            )
          }
          shortBio {
            childMarkdownRemark {
              html
            }
          }
          technicalSkills
        }
      }
    `
  )

  return (
    <Fragment>
      <Seo title="About" />
      <Container
        id="about"
        as="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={ref}
      >
        <Flex
          sx={{ flexDirection: ["column", "row", null], gap: [1, 4, null] }}
        >
          <Flex sx={{ flexDirection: "column", maxWidth: 320 }}>
            <SectionTitle n="1">About</SectionTitle>
            <Text
              as="p"
              sx={{ opacity: 0.8 }}
              dangerouslySetInnerHTML={{
                __html: data.contentfulPerson.shortBio.childMarkdownRemark.html,
              }}
            />
            {/* <ul>
                            {skills && (skills.map((item, index) => (
                                <li key={index}>{item}</li>)
                            ))}
                        </ul> */}
          </Flex>
          <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
            {data.contentfulPerson.image && (
              <GatsbyImage
                className={styles.headshot}
                alt={data.contentfulPerson.title}
                image={getImage(data.contentfulPerson.image)}
              />
            )}
          </Flex>
        </Flex>
      </Container>
    </Fragment>
  )
})

export default AboutPage
