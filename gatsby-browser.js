import React from "react"
import Layout from "./src/components/Layout/Layout"
import { CartProvider } from "./src/context/CartContext"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "./src/css/global-styles.scss"

export const wrapPageElement = ({ element, props }) => {
  return (
    <CartProvider>
      <Layout {...props} location={props.location}>
        {element}
      </Layout>
    </CartProvider>
  )
}

// Set a delay for scroll position so it doesn't jump before page transition
const transitionDelay = 250

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}
