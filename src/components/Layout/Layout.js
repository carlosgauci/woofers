import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import MobileNav from "../MobileNav/MobileNav"
import Announcement from "../Announcement/Announcement"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(true)

  return (
    <>
      <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
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
