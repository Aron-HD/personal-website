/** @jsx jsx */
import { Box, Container, Grid, jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { forwardRef, Fragment } from "react"

import Seo from "../components/Seo"
import ProjectCard from "../components/ProjectCard"
import SectionTitle from "../components/SectionTitle"

const Projects = forwardRef((props, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              gitHubLink
              tags
              heroImage {
                gatsbyImageData(
                  aspectRatio: 1.5
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 500
                )
              }
              description {
                childMarkdownRemark {
                  excerpt(pruneLength: 96)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Fragment>
      <Seo title="Projects" />
      <Container
        as="section"
        ref={ref}
        sx={{
          justifyContent: "center",
          maxWidth: ["unset", null, null, "80%"],
        }}
      >
        <Box mt={86}>
          <SectionTitle n="2">Projects</SectionTitle>
        </Box>

        <Grid
          sx={{
            mt: 40,
            px: ["8%", 0],
            gridTemplateColumns: [
              "1fr",
              "repeat(2, 1fr)",
              "repeat(auto-fit, minmax(330px, 350px))",
              null,
            ],
            gridAutoRows: "auto",
            placeSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            gap: [null, 3, 4],
          }}
        >
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <ProjectCard
                title={edge.node.title}
                content={edge.node.description.childMarkdownRemark.excerpt}
                ghLink={edge.node.gitHubLink}
                tags={edge.node.tags}
                slug={edge.node.slug}
                key={edge.node.id}
              />
            )
          })}
        </Grid>
      </Container>
    </Fragment>
  )
})
export default Projects
