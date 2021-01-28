import React from "react"

import Hero from "../components/Hero/Hero"
import ProductGrid from "../components/ProductGrid/ProductGrid"

const IndexPage = ({ data }) => (
  <>
    <Hero />
    <ProductGrid title={"Featured Products"} products={data.featured.nodes} />
    <ProductGrid title={"Latest Additions"} products={data.latest.nodes} />
  </>
)

export const query = graphql`
  {
    latest: allContentfulWooferProducts(
      sort: { fields: createdAt, order: DESC }
      limit: 4
    ) {
      nodes {
        name
        category
        price
        sku
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }

    featured: allContentfulWooferProducts(
      filter: { featured: { eq: true } }
      limit: 8
    ) {
      nodes {
        name
        category
        price
        sku
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
