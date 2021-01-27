import React from "react"
import styles from "./SingleProduct.module.scss"
import Img from "gatsby-image"

const SingleProduct = ({
  product: {
    name,
    sku,
    category,
    price,
    description: { description },
    image: { fluid },
  },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Img fluid={fluid} />
      </div>
      <section className={styles.info}>
        <h1>{name}</h1>
        <p>{category}</p>
        <p>{(price / 100).toFixed(2)}€</p>
        <p>{description}</p>
        <button>Add to cart</button>
      </section>
    </div>
  )
}

export default SingleProduct
