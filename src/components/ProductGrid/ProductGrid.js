import React from "react"
import styles from "./ProductGrid.module.scss"
import ProductCard from "../ProductCard/ProductCard"
import uuid from "react-uuid"

const ProductGrid = ({ products, title, border }) => {
  return (
    <section className={`${styles.featured} ${border && styles.border}`}>
      <div className={styles.container}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <section className={styles.grid}>
          {products.map(product => (
            <ProductCard product={product} key={uuid()} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default ProductGrid
