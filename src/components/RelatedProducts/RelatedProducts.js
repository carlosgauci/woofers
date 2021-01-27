import React from "react"
import styles from "./RelatedProducts.module.scss"
import ProductCard from "../ProductCard/ProductCard"
import uuid from "react-uuid"

const RelatedProducts = ({ related, category }) => {
  return (
    <section className={styles.related}>
      <div className={styles.container}>
        <h4>More {category}s</h4>
        <div className={styles.grid}>
          {related.map(product => (
            <ProductCard product={product} key={uuid()} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
