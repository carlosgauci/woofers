import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.payments}>visa</section>
        <section className={styles.social}>facebook</section>
        <section className={styles.copyright}>copyright</section>
      </div>
    </footer>
  )
}

export default Footer
