import React, { useState, useEffect, useReducer } from "react"
import { cartReducer } from "./CartReducer"

export const CartContext = React.createContext()

export const CartProvider = props => {
  const localData = localStorage.getItem("cart")
  // const [cart, setCart] = useState(localData ? JSON.parse(localData) : [])

  const [cart, dispatch] = useReducer(
    cartReducer,
    localData ? JSON.parse(localData) : []
  )

  // const addItem = item => {
  //   setCart(cart => [...cart, item])
  // }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const providerValue = {
    cart,
    // setCart,
    // addItem,
    dispatch,
  }

  return (
    <CartContext.Provider value={providerValue}>
      {props.children}
    </CartContext.Provider>
  )
}
