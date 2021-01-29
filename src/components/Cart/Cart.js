import React, { useContext } from "react"
import Img from "gatsby-image"
import styles from "./Cart.module.scss"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty!</p>
      ) : (
        <>
          <section className={styles.cartList}>
            {cart.map(item => {
              return <CartItem item={item} />
            })}
          </section>
          <section className={styles.checkoutBox}>
            <h3>Total Price: sgsd</h3>
          </section>
        </>
      )}
    </div>
  )
}

export default Cart
