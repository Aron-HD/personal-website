/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SourceCode from "../components/Icons/SourceCode"

import * as styles from "../styles/projects.module.css"

const Projects = () => {
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
    <Layout>
      <Seo title="Projects" />
      <p>
        <Link to="/">{`<-`} Return to home</Link>
      </p>
      <section className={styles.projects}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <Link to={`/projects/${edge.node.slug}/`}>
              <div
                sx={{
                  bg: "muted",
                  color: "accent",
                  borderColor: "muted",
                  border: "0.5px solid",
                  borderRadius: "1%",
                }}
                className={styles.projectCard}
                key={edge.node.id}
              >
                {edge.node.heroImage && (
                  <GatsbyImage
                    sx={{ borderRadius: "1% 1% 0% 0%" }}
                    className={styles}
                    image={getImage(edge.node.heroImage)}
                    alt={edge.node.title}
                  />
                )}
                <div className={styles.container}>
                  <h2 sx={{ variant: "styles.h2" }}>{edge.node.title}</h2>
                  <p sx={{ variant: "styles.p" }} className={styles.excerpt}>
                    {edge.node.description.childMarkdownRemark.excerpt}
                  </p>
                  <div className={styles.meta}>
                    <a sx={{ variant: "styles.a" }} href={edge.node.gitHubLink}>
                      <SourceCode />
                    </a>
                    <div className={styles.tagsWrapper}>
                      {edge.node.tags &&
                        edge.node.tags.map((tag, index) => (
                          <pre
                            sx={{
                              color: "accent",
                              borderColor: "muted",
                              border: "0.5px solid",
                              borderRadius: "5%",
                              bg: "muted",
                            }}
                            key={index}
                            className={styles.tag}
                          >
                            #{tag}
                          </pre>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </Layout>
  )
}
export default Projects
