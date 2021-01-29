import React, { useContext } from "react"
import { Link } from "gatsby"
import NavLinks from "../NavLinks/NavLinks"
import { RiMenuFill } from "react-icons/ri"
import { FaShoppingCart } from "react-icons/fa"

import styles from "./Header.module.scss"

import { CartContext } from "../../context/CartContext"

const Header = () => {
  const [cart] = useContext(CartContext)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <Link to="/">Woofers</Link>
        </h1>
        <section className={styles.nav}>
          <NavLinks />
        </section>
        <section className={styles.icons}>
          <Link to="/cart">
            <FaShoppingCart className={styles.cart} />
          </Link>
          <span>{cart.length}</span>
          <RiMenuFill className={styles.navIcon} />
        </section>
      </div>
    </header>
  )
}

export default Header
