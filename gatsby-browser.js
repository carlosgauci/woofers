import "./src/css/global-styles.scss"
import React from "react"
import Layout from "./src/components/Layout/Layout"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props} location={props.location}>
      {element}
    </Layout>
  )
}
