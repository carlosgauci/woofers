import React from "react"
import styles from "./RelatedProducts.module.scss"
import ProductCard from "../ProductCard/ProductCard"
import { motion } from "framer-motion"
import { singleProductVariants } from "../../framer/variants"
import uuid from "react-uuid"
import SectionTitle from "../SectionTitle/SectionTitle"

const RelatedProducts = ({ related, category }) => {
  return (
    <motion.section
      className={styles.related}
      variants={singleProductVariants}
      initial="hiddenBottom"
      animate="show"
    >
      <div className={styles.container}>
        <SectionTitle title={`More ${category}`} />
        <div className={styles.grid}>
          {related.map(product => (
            <ProductCard product={product} key={uuid()} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default RelatedProducts
