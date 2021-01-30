import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "./CartItem.module.scss"
import formatPrice from "../../utils/formatPrice"
import toSingular from "../../utils/toSingular"
import { FaMinus, FaPlus } from "react-icons/fa"

import { CartContext } from "../../context/CartContext"

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext)
  const productLink = `/${item.category.toLowerCase().replace(/\s+/g, "-")}/${
    item.slug
  }`

  return (
    <section className={styles.item} key={item.id}>
      <Link to={productLink}>
        <Img fixed={item.image} />
      </Link>
      <div className={styles.text}>
        <h4>{item.name}</h4>
        <p className={styles.category}>{toSingular(item.category)}</p>
        <div className={styles.amount}>
          <FaMinus
            onClick={() => dispatch({ type: "REMOVE_ITEM", item })}
            className={styles.icon}
          />
          <span>{item.amount}</span>
          <FaPlus
            onClick={() => dispatch({ type: "ADD_ITEM", item })}
            className={styles.icon}
          />
        </div>
        <p className={styles.price}>{formatPrice(item.price * item.amount)}</p>
      </div>
    </section>
  )
}

export default CartItem
