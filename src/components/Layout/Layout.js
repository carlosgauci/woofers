import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { pageVariants } from "../../framer/variants"
import Header from "../Header/Header"
import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children, location }) => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <AnimatePresence>
        <motion.div
          className={styles.content}
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className={styles.main}>{children}</main>
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
