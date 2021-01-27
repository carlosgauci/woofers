import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./FeaturedProducts.module.scss"
import ProductCard from "../ProductCard/ProductCard"
import uuid from "react-uuid"

const FeaturedProducts = () => {
  const {
    allContentfulWooferProducts: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trending Products</h2>
        <section className={styles.grid}>
          {products.map(product => (
            <ProductCard product={product} key={uuid()} />
          ))}
        </section>
      </div>
    </section>
  )
}

const query = graphql`
  {
    allContentfulWooferProducts(filter: { featured: { eq: true } }) {
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

export default FeaturedProducts
