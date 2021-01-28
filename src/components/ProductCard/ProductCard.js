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
  const productLink = `/${category.toLowerCase().replace(/\s+/g, "-")}s/${slug}`
  const categoryLink = `/${category.toLowerCase().replace(/\s+/g, "-")}s`

  return (
    <section className={styles.card}>
      <Link to={productLink}>
        <div className={styles.image}>
          <Img fluid={fluid} />
        </div>
      </Link>
      <div className={styles.text}>
        <Link to={productLink}>
          <p className={styles.name}>{name}</p>
          <p className={styles.category}>{category}</p>
        </Link>

        <p className={styles.price}>{(price / 100).toFixed(2)}€</p>
        <button className={styles.cart}>add to cart</button>
      </div>
    </section>
  )
}

export default ProductCard
