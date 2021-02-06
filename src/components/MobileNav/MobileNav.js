import React from "react"
import { Link } from "gatsby"
import NavLinks from "../NavLinks/NavLinks"
import { RiCloseLine } from "react-icons/ri"
import styles from "./MobileNav.module.scss"

const MobileNav = ({ mobileNav, setMobileNav }) => {
  return (
    <nav
      className={styles.nav}
      style={{ transform: mobileNav ? "translateX(0)" : "translateX(100vw)" }}
    >
      <div className={styles.container}>
        <RiCloseLine
          className={styles.icon}
          onClick={() => setMobileNav(!mobileNav)}
        />
        <NavLinks setMobileNav={setMobileNav} mobile={true} />
        <ul className={styles.links}>
          <li>
            <Link to="/" onClick={() => setMobileNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setMobileNav(false)}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav
