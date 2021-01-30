import React, { useContext } from "react"
import { Link } from "gatsby"
import styles from "./Cart.module.scss"
import CartItem from "../CartItem/CartItem"
import formatPrice from "../../utils/formatPrice"

import { CartContext } from "../../context/CartContext"

import getStripe from "../../utils/stripe"
import axios from "axios"

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext)

  const checkOut = () => {
    const payload = {
      items: cart,
    }
    performPurchase(payload)
  }

  const performPurchase = async payload => {
    const response = await axios.post("/api/create-checkout", payload)
    console.log("response", response)
    const stripe = await getStripe(response.data.publishableKey)

    const { error } = await stripe.redirectToCheckout({
      sessionId: response.data.sessionId,
    })

    if (error) {
      console.error(error)
    }
  }

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
          <section className={styles.cartItems}>
            {cart.map(item => {
              return <CartItem key={item.sku} item={item} />
            })}
          </section>
          <section className={styles.checkoutBox}>
            <h3>
              Total:{" "}
              <span className={styles.price}>{formatPrice(cartTotal)}</span>{" "}
            </h3>
            <button onClick={() => checkOut()}>Checkout</button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Cart
