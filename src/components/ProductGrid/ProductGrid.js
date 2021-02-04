import React from "react"
import { motion } from "framer-motion"
import { containerVariants } from "../../framer/variants"
import ProductCard from "../ProductCard/ProductCard"
import SectionTitle from "../SectionTitle/SectionTitle"
import styles from "./ProductGrid.module.scss"

const ProductGrid = ({ products, title, border, index }) => {
  return (
    <section className={`${styles.featured} ${border && styles.border}`}>
      <div className={styles.container}>
        {title && <SectionTitle title={title} />}
        <motion.section
          className={`${styles.grid} ${index && styles.gridIndex}`}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {products.map(product => (
            <ProductCard product={product} key={product.sku} />
          ))}
        </motion.section>
      </div>
    </section>
  )
}

export default ProductGrid
