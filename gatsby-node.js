const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
