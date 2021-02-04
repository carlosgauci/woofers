import React from "react"
import styles from "./RelatedProducts.module.scss"
import ProductCard from "../ProductCard/ProductCard"
import uuid from "react-uuid"
import SectionTitle from "../SectionTitle/SectionTitle"

const RelatedProducts = ({ related, category }) => {
  return (
    <section className={styles.related}>
      <div className={styles.container}>
        <SectionTitle title={`More ${category}`} />
        <div className={styles.grid}>
          {related.map(product => (
            <ProductCard product={product} key={uuid()} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
