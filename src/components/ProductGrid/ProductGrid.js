import React from "react"
import styles from "./ProductGrid.module.scss"
import ProductCard from "../ProductCard/ProductCard"

const ProductGrid = ({ products, title, border, index }) => {
  return (
    <section className={`${styles.featured} ${border && styles.border}`}>
      <div className={styles.container}>
        {title && (
          <div className={styles.title}>
            <h3>{title} </h3>
          </div>
        )}
        <section className={`${styles.grid} ${index && styles.gridIndex}`}>
          {products.map(product => (
            <ProductCard product={product} key={product.sku} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default ProductGrid
