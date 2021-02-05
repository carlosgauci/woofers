import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { containerVariants } from "../../framer/variants"
import axios from "axios"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../context/CartContext"
import formatPrice from "../../utils/formatPrice"
import getStripe from "../../utils/stripe"
import calculateShipping from "../../utils/calculateShipping"
import styles from "./Cart.module.scss"

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext)

  const shippingPrice = formatPrice(calculateShipping(cart))
  const totalPrice = formatPrice(cartTotal + calculateShipping(cart))

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
          <motion.section
            className={styles.cartItems}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {cart.map(item => {
              return <CartItem key={item.variantIdentifier} item={item} />
            })}
          </motion.section>
          <section className={styles.checkoutBox}>
            <h3>
              Shipping: <span className={styles.price}>{shippingPrice}</span>
            </h3>
            <h3>
              Total Price: <span className={styles.price}>{totalPrice}</span>
            </h3>
            <button onClick={() => checkOut()}>Checkout</button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Cart
