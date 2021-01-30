import "./src/css/global-styles.scss"
import React from "react"
import Layout from "./src/components/Layout/Layout"
import { CartProvider } from "./src/context/CartContext"

export const wrapPageElement = ({ element, props }) => {
  return (
    <CartProvider>
      <Layout {...props} location={props.location}>
        {element}
      </Layout>
    </CartProvider>
  )
}
