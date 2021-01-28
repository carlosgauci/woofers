import React from "react"
import styles from "./CategoryPage.module.scss"
import ProductGrid from "../ProductGrid/ProductGrid"

const CategoryPage = ({ category, products }) => {
  return (
    <section className={styles.category}>
      <div className={styles.container}>
        <h2 className={styles.title}>{category}s</h2>
        <ProductGrid products={products} />
      </div>
    </section>
  )
}

export default CategoryPage
