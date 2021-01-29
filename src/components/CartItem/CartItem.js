import React from "react"
import Img from "gatsby-image"
import styles from "./CartItem.module.scss"
import formatPrice from "../../utils/formatPrice"
import toSingular from "../../utils/toSingular"

const CartItem = ({ item }) => {
  return (
    <section className={styles.item} key={item.id}>
      <Img fixed={item.image} />
      <div className={styles.text}>
        <h4>{item.name}</h4>
        <p className={styles.category}>{toSingular(item.category)}</p>
        <p className={styles.price}>{formatPrice(item.price)}</p>
        <div className={styles.amount}>
          <p>x {item.amount}</p>
        </div>
      </div>
    </section>
  )
}

export default CartItem
