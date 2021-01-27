const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allContentfulWooferProducts {
        nodes {
          category
          slug
        }
      }
    }
  `)

  // create individual product pages
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/shop/${product.category.toLowerCase().replace(/\s+/g, "-")}s/${
        product.slug
      }`,
      component: path.resolve(`src/templates/product-page-template.js`),
      context: {
        slug: product.slug,
        category: product.category,
      },
    })
  })
}
