import React from "react"
import styles from "./RelatedProducts.module.scss"
import ProductCard from "../ProductCard/ProductCard"

const RelatedProducts = ({ related }) => {
  return (
    <section className={styles.container}>
      <h3>Related Products</h3>
      <div className={styles.grid}>
        {related.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
