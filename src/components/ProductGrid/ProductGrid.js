import React from "react"
import styles from "./ProductGrid.module.scss"
import ProductCard from "../ProductCard/ProductCard"

const ProductGrid = ({ products, title, border, index }) => {
  return (
    <section className={`${styles.featured} ${border && styles.border}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.container}>
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
