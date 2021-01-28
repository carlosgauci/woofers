import React from "react"
import { graphql } from "gatsby"
import SingleProduct from "../components/SingleProduct/SingleProduct"
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"
import CategorySection from "../components/CategorySection/CategorySection"

const ProductPageTemplate = ({ data, pageContext }) => {
  return (
    <>
      <SingleProduct product={data.product} />
      <RelatedProducts
        related={data.related.nodes}
        category={pageContext.category}
      />
      <CategorySection />
    </>
  )
}

export const query = graphql`
  query myQuery($slug: String, $category: String) {
    product: contentfulWooferProducts(slug: { eq: $slug }) {
      name
      sku
      category
      subCategory
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

    related: allContentfulWooferProducts(
      limit: 4
      filter: { slug: { ne: $slug }, category: { eq: $category } }
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
  }
`

export default ProductPageTemplate
