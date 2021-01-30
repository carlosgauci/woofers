import React, { useState, useEffect } from "react"

export const CartContext = React.createContext()

export const CartProvider = props => {
  const localData = localStorage.getItem("cart")
  const [cart, setCart] = useState(localData ? JSON.parse(localData) : [])
  const addItem = item => {
    setCart(cart => [...cart, item])
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  return (
    <CartContext.Provider value={[cart, setCart, addItem]}>
      {props.children}
    </CartContext.Provider>
  )
}
