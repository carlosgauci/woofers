import React from "react"
import { graphql } from "gatsby"
import CategoryPage from "../components/CategoryPage/CategoryPage"

const CategoryPageTemplate = ({ pageContext, data }) => {
  return (
    <>
      <CategoryPage
        category={pageContext.category}
        products={data.categoryProducts.nodes}
      />
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
        price
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
