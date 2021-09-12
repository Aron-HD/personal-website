/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
        gatsbyImageData(aspectRatio: 1.5, width: 500, placeholder: BLURRED)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <Link to="/projects/">{`<-`} Projects page</Link>
      <div className={styles.content}>
        <h1 sx={{ variant: "styles.h1" }}>
          {props.data.contentfulBlogPost.title}
        </h1>
        <span className={styles.meta}>
          <b>{props.data.contentfulBlogPost.author.github}</b> //{" "}
          {props.data.contentfulBlogPost.publishDate}
        </span>
        <br />
        <span className={styles.meta}>
          <b>{props.data.contentfulBlogPost.tags}</b>
        </span>
        <p className={styles.featured}>
          {props.data.contentfulBlogPost.heroImage && (
            <GatsbyImage
              className={styles.featured}
              image={getImage(props.data.contentfulBlogPost.heroImage)}
              alt={props.data.contentfulBlogPost.title}
            />
          )}
        </p>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default Project
