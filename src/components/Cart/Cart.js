import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import {
  containerVariants,
  buttonVariants,
  loaderVariants,
} from "../../framer/variants"
import axios from "axios"
import CartItem from "../CartItem/CartItem"
import SectionTitle from "../SectionTitle/SectionTitle"
import { CartContext } from "../../context/CartContext"
import formatPrice from "../../utils/formatPrice"
import getStripe from "../../utils/stripe"
import calculateShipping from "../../utils/calculateShipping"
import { BiLoaderCircle } from "react-icons/bi"
import styles from "./Cart.module.scss"

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext)

  const shippingPrice = formatPrice(calculateShipping(cart))
  const totalPrice = formatPrice(cartTotal + calculateShipping(cart))

  const checkOut = () => {
    const payload = {
      items: cart,
    }
    setLoading(true)
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

  // checkout loader
  const [loading, setLoading] = useState(false)

  return (
    <div className={styles.container}>
      <SectionTitle title={`Shopping Cart`} />
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
            <motion.button
              onClick={() => checkOut()}
              variants={buttonVariants}
              initial="initial"
              whileTap="pressed"
            >
              {!loading && <span>Checkout</span>}
              {loading && (
                <motion.span
                  className={styles.loader}
                  variants={loaderVariants}
                  animate="animation"
                >
                  <BiLoaderCircle />
                </motion.span>
              )}
            </motion.button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Cart
