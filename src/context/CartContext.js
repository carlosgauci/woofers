import React, { useEffect, useReducer } from "react"
import { cartReducer } from "./CartReducer"

export const CartContext = React.createContext()

export const CartProvider = props => {
  const localData = localStorage ? localStorage.getItem("cart") : undefined

  const [cart, dispatch] = useReducer(
    cartReducer,
    localData ? JSON.parse(localData) : []
  )

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const providerValue = {
    cart,
    cartTotal,
    dispatch,
  }

  return (
    <CartContext.Provider value={providerValue}>
      {props.children}
    </CartContext.Provider>
  )
}
