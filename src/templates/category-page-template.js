import React from "react"
import { graphql } from "gatsby"
import CategoryPage from "../components/CategoryPage/CategoryPage"
import CategorySection from "../components/CategorySection/CategorySection"

const CategoryPageTemplate = ({ pageContext, data }) => {
  return (
    <>
      <CategoryPage
        category={pageContext.category}
        products={data.categoryProducts.nodes}
      />
      <CategorySection categories={data.categories.nodes} />
    </>
  )
}

export const query = graphql`
  query($category: String) {
    categoryProducts: allContentfulWooferProducts(
      filter: { category: { eq: $category } }
    ) {
      nodes {
        name
        sku
        slug
        category
        subCategory
        price
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }

    categories: allContentfulWooferCategories(
      sort: { fields: order, order: ASC }
    ) {
      nodes {
        order
        name
        url
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default CategoryPageTemplate
