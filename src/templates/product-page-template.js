import React from "react"
import { graphql } from "gatsby"
import SingleProduct from "../components/SingleProduct/SingleProduct"
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"
import CategorySection from "../components/CategorySection/CategorySection"
import SEO from "../components/SEO/SEO"

const ProductPageTemplate = ({ data, pageContext }) => {
  return (
    <>
      <SEO
        title={data.product.name}
        description={data.product.description.description}
      />
      <SingleProduct product={data.product} />
      <RelatedProducts
        related={data.related.nodes}
        category={pageContext.category}
      />
      <CategorySection categories={data.categories.nodes} />
    </>
  )
}

export const query = graphql`
  query($slug: String, $category: String) {
    product: contentfulWooferProducts(slug: { eq: $slug }) {
      name
      sku
      slug
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
      cartImage: image {
        fixed(width: 125, height: 125, quality: 90) {
          ...GatsbyContentfulFixed_withWebp
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

export default ProductPageTemplate
