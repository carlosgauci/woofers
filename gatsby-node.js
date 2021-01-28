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

  // Create individual product pages
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/${product.category.toLowerCase().replace(/\s+/g, "-")}s/${
        product.slug
      }`,
      component: path.resolve(`src/templates/product-page-template.js`),
      context: {
        slug: product.slug,
        category: product.category,
      },
    })
  })

  // Create an array of unique categories
  function dedupeCategories(products) {
    const uniqueCategories = new Set()
    products.forEach(product => {
      uniqueCategories.add(product.category)
    })
    return Array.from(uniqueCategories)
  }
  const dedupedCategories = dedupeCategories(result.data.products.nodes)

  // Create category pages
  dedupedCategories.forEach(category => {
    createPage({
      path: `/${category.toLowerCase().replace(/\s+/g, "-")}s`,
      component: path.resolve(`src/templates/category-page-template.js`),
      context: {
        category: category,
      },
    })
  })
}
