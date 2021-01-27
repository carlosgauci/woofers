import React from "react"
import { graphql } from "gatsby"
import SingleProduct from "../components/SingleProduct/SingleProduct"

const ProductPageTemplate = ({ data }) => {
  return <SingleProduct product={data.product} />
}

export const query = graphql`
  query myQuery($slug: String) {
    product: contentfulWooferProducts(slug: { eq: $slug }) {
      name
      sku
      category
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default ProductPageTemplate
