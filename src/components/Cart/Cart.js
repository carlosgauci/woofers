import React, { useContext } from "react"
import styles from "./Cart.module.scss"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const cartValue = useContext(CartContext)
  return (
    <div className={styles.container}>
      <h2>Cart Page</h2>
      {cartValue}
    </div>
  )
}

export default Cart
