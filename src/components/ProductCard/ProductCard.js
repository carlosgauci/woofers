import React from "react"
import { Link } from "gatsby"
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
      <Link to={`/${category.toLowerCase().replace(/\s+/g, "-")}s/${slug}`}>
        <div className={styles.image}>
          <Img fluid={fluid} />
        </div>
      </Link>
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
