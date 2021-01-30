import React from "react"
import styles from "./CategoryPage.module.scss"
import ProductGrid from "../ProductGrid/ProductGrid"

const CategoryPage = ({ category, products }) => {
  return (
    <section className={styles.category}>
      <div className={styles.container}>
        <ProductGrid products={products} title={`${category}`} />
      </div>
    </section>
  )
}

export default CategoryPage
