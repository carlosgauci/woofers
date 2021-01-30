import React, { useContext } from "react"
import styles from "./SingleProduct.module.scss"
import Img from "gatsby-image"
import ProductInfo from "../ProductInfo/ProductInfo"
import toSingular from "../../utils/toSingular"

import { CartContext } from "../../context/CartContext"

const SingleProduct = ({
  product: {
    name,
    sku,
    category,
    subCategory,
    price,
    description: { description },
    image: { fluid },
    cartImage: { fixed },
  },
}) => {
  const item = {
    name: name,
    id: sku,
    price: price,
    category: subCategory || category,
    amount: 1,
    image: fixed,
  }

  const { dispatch } = useContext(CartContext)

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Img fluid={fluid} />
      </div>
      <section className={styles.infoSection}>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{toSingular(subCategory || category)}</p>
          <p className={styles.price}>{(price / 100).toFixed(2)}€</p>
          <p>{description}</p>
          <button onClick={() => dispatch({ type: "ADD_ITEM", item })}>
            Add to cart
          </button>
        </div>
        <ProductInfo category={category} subCategory={subCategory} />
      </section>
    </div>
  )
}

export default SingleProduct
