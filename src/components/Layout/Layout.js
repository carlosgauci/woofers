import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import Announcement from "../Announcement/Announcement"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Announcement />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
