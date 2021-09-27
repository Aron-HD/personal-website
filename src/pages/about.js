/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "../styles/global.css"
import * as styles from "../styles/about.module.css"

const AboutPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                contentfulPerson(name: {eq: "Aron Hayes Davidson"}) {
                    github
                    email
                    company
                    title
                    image {
                        gatsbyImageData(
                            placeholder: BLURRED
                            layout: CONSTRAINED
                            formats: [ AUTO, WEBP, PNG ]
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
    const skills = data.contentfulPerson.technicalSkills
    return (
        <Layout>
            <Seo title="About" />
            <section className={styles.container}>
                <div className={styles.headshot}>
                {data.contentfulPerson.image && (
                    <GatsbyImage
                    className={styles.headshot}
                    alt={data.contentfulPerson.title}
                    image={getImage(data.contentfulPerson.image)}
                    />
                )}
                </div>
                <div className={styles.outerBox}>
                <h2 sx={{ variant: "styles.h2" }}>About</h2>
                <div className={styles.box}>
                    <div
                        className={styles.bio}
                        dangerouslySetInnerHTML={{
                            __html: data.contentfulPerson.shortBio.childMarkdownRemark.html,
                        }}
                    />
                    <ul>
                        {skills && (skills.map((item, index) => (
                            <li key={index}>{item}</li>)
                            ))}
                    </ul>
                </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage
