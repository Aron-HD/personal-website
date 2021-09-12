/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

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
              publishDate(formatString: "DD MMM, YYYY")
              heroImage {
                gatsbyImageData(
                  aspectRatio: 1.5
                  width: 500
                  placeholder: BLURRED
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
                sx={{ bg: "muted" }}
                className={styles.projectCard}
                key={edge.node.id}
              >
                {edge.node.heroImage && (
                  <GatsbyImage
                    className={styles}
                    image={getImage(edge.node.heroImage)}
                    alt={edge.node.title}
                  />
                )}
                <div className={styles.container}>
                  <h2 sx={{ variant: "styles.h2" }}>{edge.node.title}</h2>
                  <div className={styles.meta}>
                    <span>Posted: {edge.node.publishDate}</span>
                  </div>
                  <p sx={{ variant: "styles.p" }} className={styles.excerpt}>
                    {edge.node.description.childMarkdownRemark.excerpt}
                  </p>
                  <button
                    sx={{ variant: "styles.button" }}
                    className={styles.button}
                  >
                    <Link to={`/projects/${edge.node.slug}/`}>Read</Link>
                  </button>
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
