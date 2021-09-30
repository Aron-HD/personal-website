/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "../styles/project.module.css"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        github
      }
      tags
      publishDate(formatString: "Do MMMM, YYYY")
      heroImage {
        gatsbyImageData(
          aspectRatio: 1.7
          placeholder: BLURRED
          quality: 20
          layout: CONSTRAINED
          formats: [AUTO, WEBP]
        )
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      gitHubLink
    }
  }
`

const Project = props => {
  const author = props.data.contentfulBlogPost.author.github
  const pubDate = props.data.contentfulBlogPost.publishDate
  const gitHubLink = props.data.contentfulBlogPost.gitHubLink
  const tags = props.data.contentfulBlogPost.tags

  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <Link to="/projects/">{`<-`} Projects page</Link>
      <article className={styles.content}>
        <h1 sx={{ variant: "styles.h1" }}>
          {props.data.contentfulBlogPost.title}
        </h1>
        <section className={styles.articleMetadata}>
          <div className={styles.frontmatter}>
            <b>{author}</b>
            <br />
            <em>{pubDate}</em>
            <br />
            <a href={gitHubLink}>View repository</a>
          </div>
          <div className={styles.tagsWrapper}>
            {tags &&
              tags.map((tag, index) => (
                <pre
                  sx={{
                    color: "accent",
                    borderColor: "muted",
                    border: "1px solid",
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
        </section>
        <section className={styles.featured}>
          {props.data.contentfulBlogPost.heroImage && (
            <GatsbyImage
              className={styles.featured}
              image={getImage(props.data.contentfulBlogPost.heroImage)}
              alt={props.data.contentfulBlogPost.title}
            />
          )}
        </section>
        <section
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export default Project
