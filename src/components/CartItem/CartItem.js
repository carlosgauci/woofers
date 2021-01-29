import React from "react"
import Img from "gatsby-image"
import styles from "./CartItem.module.scss"
import formatPrice from "../../utils/formatPrice"
import toSingular from "../../utils/toSingular"
import { FaMinus, FaPlus } from "react-icons/fa"

const CartItem = ({ item }) => {
  return (
    <section className={styles.item} key={item.id}>
      <Img fixed={item.image} />
      <div className={styles.text}>
        <h4>{item.name}</h4>
        <p className={styles.category}>{toSingular(item.category)}</p>
        <div className={styles.amount}>
          {/* <span>x {item.amount}</span>{" "} */}

          <FaMinus className={styles.icon} />
          <span>{item.amount}</span>
          <FaPlus className={styles.icon} />
        </div>
        <p className={styles.price}>{formatPrice(item.price)}</p>
      </div>
    </section>
  )
}

export default CartItem
