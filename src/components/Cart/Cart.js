import React, { useContext } from "react"
import { Link } from "gatsby"
import styles from "./Cart.module.scss"
import CartItem from "../CartItem/CartItem"
import formatPrice from "../../utils/formatPrice"

import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <section className={styles.error}>
          <p>Your shopping cart is empty!</p>
          <Link to="/">
            <button>Back to store</button>
          </Link>
        </section>
      ) : (
        <div className={styles.cartContainer}>
          <section>
            {cart.map(item => {
              return <CartItem item={item} />
            })}
          </section>
          <section className={styles.checkoutBox}>
            <h3>Total: {formatPrice(cartTotal)}</h3>
            <button>Checkout</button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Cart
