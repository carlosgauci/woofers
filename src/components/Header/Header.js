import { Link } from "gatsby"
import React from "react"
import NavLinks from "../../constants/NavLinks"
import { RiMenuFill } from "react-icons/ri"
import { FaShoppingCart } from "react-icons/fa"

import styles from "./Header.module.scss"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1>
        <Link to="/">Woofers</Link>
      </h1>
      <section className={styles.nav}>
        <ul>
          <NavLinks />
        </ul>
      </section>
      <section>
        <FaShoppingCart className={styles.cart} />
        <RiMenuFill className={styles.navIcon} />
      </section>
    </div>
  </header>
)

export default Header
