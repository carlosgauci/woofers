import React from "react"
import styles from "./CategoryPage.module.scss"
import ProductGrid from "../ProductGrid/ProductGrid"

const CategoryPage = ({ category, products }) => {
  return (
    <section className={styles.category}>
      <ProductGrid products={products} title={`${category}`} />
    </section>
  )
}

export default CategoryPage
