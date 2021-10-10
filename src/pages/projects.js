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
      <section className={styles.projects}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div
              sx={{
                bg: "muted",
                borderRadius: "1%",
              }}
              className={styles.projectCard}
              key={edge.node.id}
            >
              <Link
                sx={{ variant: "styles.a" }}
                to={`/projects/${edge.node.slug}/`}
              >
                {edge.node.heroImage && (
                  <GatsbyImage
                    sx={{ borderRadius: "1% 1% 0% 0%" }}
                    className={styles}
                    image={getImage(edge.node.heroImage)}
                    alt={edge.node.title}
                  />
                )}
              </Link>
              <div className={styles.container}>
                <Link
                  sx={{ variant: "styles.a" }}
                  to={`/projects/${edge.node.slug}/`}
                >
                  <h2 sx={{ variant: "styles.a" }}>{edge.node.title}</h2>
                  <p sx={{ variant: "styles.p" }} className={styles.excerpt}>
                    {edge.node.description.childMarkdownRemark.excerpt}
                  </p>
                </Link>
                <div className={styles.meta}>
                  <a
                    className={styles.sourceCode}
                    sx={{ variant: "styles.button" }}
                    href={edge.node.gitHubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SourceCode />
                  </a>
                  <div className={styles.tagsWrapper}>
                    {edge.node.tags &&
                      edge.node.tags.map((tag, index) => (
                        <pre
                          sx={{
                            color: "accent",
                            borderColor: "accent",
                            border: "0.5px solid",
                            borderRadius: "5%",
                            bg: "inherit",
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
          )
        })}
      </section>
    </Layout>
  )
}
export default Projects
