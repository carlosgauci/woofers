import React from "react"
import styles from "./SingleProduct.module.scss"
import Img from "gatsby-image"
import ProductInfo from "../ProductInfo/ProductInfo"
import toSingular from "../../utils/toSingular"

const SingleProduct = ({
  product: {
    name,
    sku,
    category,
    subCategory,
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
      <section className={styles.infoSection}>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{toSingular(subCategory ? subCategory : category)}</p>
          <p className={styles.price}>{(price / 100).toFixed(2)}€</p>
          <p>{description}</p>
          <button>Add to cart</button>
        </div>
        <ProductInfo category={category} subCategory={subCategory} />
      </section>
    </div>
  )
}

export default SingleProduct
