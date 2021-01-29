import React, { useContext } from "react"
import Img from "gatsby-image"
import styles from "./Cart.module.scss"
import { CartContext } from "../../context/CartContext"
import formatPrice from "../../utils/formatPrice"
import toSingular from "../../utils/toSingular"

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty!</p>
      ) : (
        <section className={styles.cartList}>
          {cart.map(item => {
            return (
              <section className={styles.item} key={item.id}>
                <Img fixed={item.image} className={styles.image} />
                <div className={styles.text}>
                  <h4>{item.name}</h4>
                  <p>{toSingular(item.category)}</p>
                  <p className={styles.price}>{formatPrice(item.price)}</p>
                  <div className={styles.amount}>
                    <p>x {item.amount}</p>
                  </div>
                </div>
              </section>
            )
          })}
        </section>
      )}
    </div>
  )
}

export default Cart
