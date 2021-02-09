import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import NavLinks from "../NavLinks/NavLinks"
import Announcement from "../Announcement/Announcement"
import DogSVG from "../DogSVG/DogSVG"
import { RiMenuFill } from "react-icons/ri"
import { AiOutlineShoppingCart } from "react-icons/ai"
import formatPrice from "../../utils/formatPrice"
import CountUp from "react-countup"
import { CartContext } from "../../context/CartContext"
import styles from "./Header.module.scss"

const Header = ({ setMobileNav }) => {
  const { cartTotal, cartItems } = useContext(CartContext)
  const formattedTotal = formatPrice(cartTotal, true)

  // Framer motion
  const { scrollY } = useViewportScroll()
  const headerSize = useTransform(scrollY, [0, 50], ["6rem", "3.5rem"])
  const announcementSize = useTransform(scrollY, [280, 300], ["2.5rem", "0rem"])
  const headerShadow = useTransform(
    scrollY,
    [200, 300],
    ["0px 0px 0px 0px #000", "0px 0px 6px 1px rgba(0,0,0,0.1)"]
  )

  return (
    <>
      <motion.header
        className={styles.header}
        style={{
          height: headerSize,
          boxShadow: headerShadow,
        }}
      >
        <div className={styles.container}>
          <section className={styles.title}>
            <div className={styles.titleContainer}>
              <Link to="/">
                <h1>WLW</h1>
                <DogSVG />
              </Link>
            </div>
          </section>
          <section className={styles.nav}>
            <NavLinks />
          </section>
          <section className={styles.icons}>
            <Link to="/cart">
              <div className={styles.cartContainer}>
                <p className={styles.total}>
                  <CountUp
                    start={formattedTotal < 40 ? 0 : formattedTotal - 10}
                    end={formattedTotal}
                    duration={0.5}
                    decimals={2}
                    suffix="€"
                  />
                </p>
                <div>
                  <AiOutlineShoppingCart className={styles.cart} />
                  {cartItems > 0 && (
                    <span className={styles.cartIndicator}>{cartItems}</span>
                  )}
                </div>
              </div>
            </Link>

            <RiMenuFill
              className={styles.navIcon}
              onClick={() => setMobileNav(true)}
            />
          </section>
        </div>
        <Announcement announcementSize={announcementSize} />
      </motion.header>
    </>
  )
}

export default Header
