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

      infoPages: allContentfulWooferPages {
        nodes {
          title
          slug
          content {
            content
          }
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

  // Create info pages (terms, privacy etc)
  result.data.infoPages.nodes.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: path.resolve(`src/templates/info-page-template.js`),
      context: {
        slug: page.slug,
      },
    })
  })
}
