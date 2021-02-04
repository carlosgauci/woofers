import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import SectionTitle from "../SectionTitle/SectionTitle"
import styles from "./ProductGrid.module.scss"

const ProductGrid = ({ products, title, border, index }) => {
  return (
    <section className={`${styles.featured} ${border && styles.border}`}>
      <div className={styles.container}>
        {title && <SectionTitle title={title} />}
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
