import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ProductPageTemplate = ({ data }) => {
  const {
    name,
    sku,
    category,
    price,
    description: { description },
    image: { fluid },
  } = data.product

  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{category}</p>
      <p>{description}</p>
      <div style={{ height: "200px", width: "200px" }}>
        <Img fluid={fluid} />
      </div>
    </div>
  )
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
