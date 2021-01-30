import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/Hero/Hero"
import ProductGrid from "../components/ProductGrid/ProductGrid"
import CategorySection from "../components/CategorySection/CategorySection"

const IndexPage = ({ data }) => (
  <>
    <Hero />
    <ProductGrid title={"Featured Products"} products={data.featured.nodes} />
    {console.log(localStorage)}
    <ProductGrid
      title={"Latest Additions"}
      products={data.latest.nodes}
      border={true}
    />
    <CategorySection categories={data.categories.nodes} />
  </>
)

export const query = graphql`
  {
    featured: allContentfulWooferProducts(
      filter: { featured: { eq: true } }
      limit: 4
    ) {
      nodes {
        name
        category
        subCategory
        price
        sku
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        cartImage: image {
          fixed(width: 125, height: 125, quality: 90) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }

    latest: allContentfulWooferProducts(
      filter: { featured: { eq: false } }
      sort: { fields: createdAt, order: DESC }
      limit: 4
    ) {
      nodes {
        name
        category
        subCategory
        price
        sku
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        cartImage: image {
          fixed(width: 125, height: 125, quality: 90) {
            ...GatsbyContentfulFixed_withWebp
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

export default IndexPage
