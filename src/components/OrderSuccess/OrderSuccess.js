import React, { useEffect, useContext } from "react"
import SectionTitle from "../SectionTitle/SectionTitle"
import { CartContext } from "../../context/CartContext"
import styles from "./OrderSuccess.module.scss"

const OrderSuccess = () => {
  const { dispatch } = useContext(CartContext)

  useEffect(() => {
    dispatch({ type: "EMPTY_CART" })
  }, [])

  return (
    <section className={styles.container}>
      <SectionTitle title="Order Successful" />
      <h4>Thank you for your order!</h4>
      <p>You'll receive an email update once your order has been shipped.</p>
    </section>
  )
}

export default OrderSuccess
