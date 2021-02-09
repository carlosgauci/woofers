import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { cardVariants } from "../../framer/variants"
import { CartContext } from "../../context/CartContext"
import formatPrice from "../../utils/formatPrice"
import toSingular from "../../utils/toSingular"
import { FaMinus, FaPlus } from "react-icons/fa"
import styles from "./CartItem.module.scss"

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext)
  const productLink = `/${item.category.toLowerCase().replace(/\s+/g, "-")}/${
    item.slug
  }`

  return (
    <motion.section
      className={styles.item}
      variants={cardVariants}
      initial="hiddenX"
    >
      <Link to={productLink}>
        <Img fixed={item.image} />
      </Link>
      <div className={styles.text}>
        <h4>{item.name}</h4>
        <p className={styles.category}>
          {toSingular(item.category)}{" "}
          {item.description && `- ${item.description}`}
        </p>
        <div className={styles.quantity}>
          <FaMinus
            onClick={() => dispatch({ type: "REMOVE_ITEM", item })}
            className={styles.icon}
          />
          <span>{item.quantity}</span>
          <FaPlus
            onClick={() => dispatch({ type: "ADD_ITEM", item })}
            className={styles.icon}
          />
        </div>
        <p className={styles.price}>
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </motion.section>
  )
}

export default CartItem
