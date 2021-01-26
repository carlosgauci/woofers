import React from "react"
import styles from "./ProductCard.module.scss"
import Img from "gatsby-image"

const ProductCard = ({
  product: {
    name,
    category,
    price,
    sku,
    slug,
    image: { fluid },
  },
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.image}>
        <Img fluid={fluid} />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>{(price / 100).toFixed(2)}€</p>
        <button className={styles.cart}>add to cart</button>
      </div>
    </section>
  )
}

export default ProductCard
