/** @jsx jsx */
import { jsx, Link, Box, Text, Heading } from "theme-ui"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import ProjectLayout from "../components/ProjectLayout"
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
      ...RichTextBlock
      gitHubLink
    }
  }

  fragment RichTextBlock on ContentfulBlogPost {
    bodyRichText {
      raw
      references {
        title
        contentful_id
        __typename
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 80
          formats: [WEBP, AUTO]
          placeholder: BLURRED
        )
      }
    }
  }
`
const Project = props => {
  const author = props.data.contentfulBlogPost.author.github
  const pubDate = props.data.contentfulBlogPost.publishDate
  const gitHubLink = props.data.contentfulBlogPost.gitHubLink
  const tags = props.data.contentfulBlogPost.tags
  const bodyRichText = props.data.contentfulBlogPost.bodyRichText
  const richText = { ...bodyRichText }

  // create a map of assets by id
  let richTextImages = {}
  richText.references.map(
    reference =>
      (richTextImages[reference.contentful_id] = {
        image: reference.gatsbyImageData,
        alt: reference.title,
      })
  )

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text as="p" py="5px">
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1" variant="styles.h1">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" variant="styles.h2" pt={3}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3" variant="styles.h3">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as="h4" variant="styles.h4">
          {children}
        </Heading>
      ),
      [BLOCKS.PRE]: (node, children) => <pre>{children}</pre>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // retrieve asset by id from map
        const imageData = richTextImages[node.data.target.sys.id]
        const image = getImage(imageData.image)
        return <GatsbyImage image={getImage(image)} alt={imageData.alt} />
      },
    },
    renderMark: {
      [MARKS.BOLD]: text => (
        <Text as="strong" sx={{ fontWeight: "heading" }}>
          {text}
        </Text>
      ),
      [MARKS.ITALIC]: text => (
        <Text as="em" sx={{ fontStyle: "italic" }}>
          {text}
        </Text>
      ),
      [MARKS.CODE]: text => (
        <Text as="code" variant="code">
          {text}
        </Text>
      ),
    },
  }

  return (
    <ProjectLayout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <Link className={styles.returnLink} to="/">
        {`<`} Return
      </Link>
      <article className={styles.content}>
        <h1 sx={{ variant: "styles.h1" }}>
          {props.data.contentfulBlogPost.title}
        </h1>
        <section className={styles.articleMetadata}>
          <div>
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
          // dangerouslySetInnerHTML={{
          //   __html: props.data.contentfulBlogPost.body.childMarkdownRemark.html,
          // }}
        >
          {bodyRichText && renderRichText(bodyRichText, options)}
        </section>
      </article>
    </ProjectLayout>
  )
}

export default Project
