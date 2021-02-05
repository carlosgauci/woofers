import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

import Header from "../Header/Header"
import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"

// Set durations and settings for page transition
const duration = 0.25

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main>{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
