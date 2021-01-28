import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./LatestProducts.module.scss"
import uuid from "react-uuid"
import ProductCard from "../ProductCard/ProductCard"

const LatestProducts = () => {
  const {
    allContentfulWooferProducts: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section className={styles.latest}>
      <div className={styles.container}>
        <h3 className={styles.title}>Latest Additions</h3>
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
    allContentfulWooferProducts(
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
  }
`

export default LatestProducts
