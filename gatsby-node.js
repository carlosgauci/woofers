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

      categories: allContentfulWooferCategories {
        nodes {
          url
          name
        }
      }
    }
  `)

  // Create individual product pages
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/${product.category.toLowerCase().replace(/\s+/g, "-")}/${
        product.slug
      }`,
      component: path.resolve(`src/templates/product-page-template.js`),
      context: {
        slug: product.slug,
        category: product.category,
      },
    })
  })

  // Create category pages
  result.data.categories.nodes.forEach(category => {
    createPage({
      path: category.url,
      component: path.resolve(`src/templates/category-page-template.js`),
      context: {
        category: category.name,
      },
    })
  })
}
