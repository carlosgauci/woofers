import React, { useEffect, useReducer } from "react"
import { cartReducer } from "./CartReducer"

export const CartContext = React.createContext()

export const CartProvider = props => {
  // Check if window exists to avoid build errors
  const localData =
    typeof window !== "undefined" && localStorage.getItem("cart")

  // Ue cart localStorage value if we have one stored
  const [cart, dispatch] = useReducer(
    cartReducer,
    localData ? JSON.parse(localData) : []
  )

  // Total items in cart
  const cartItems = cart.reduce((total, item) => total + item.quantity, 0)

  // Cart total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  // Update localStorage every time cart is updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const providerValue = {
    cart,
    cartItems,
    cartTotal,
    dispatch,
  }

  return (
    <CartContext.Provider value={providerValue}>
      {props.children}
    </CartContext.Provider>
  )
}
