import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./Footer.module.scss"

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"

const query = graphql`
  {
    file(relativePath: { eq: "payments.png" }) {
      childImageSharp {
        fixed(width: 250, height: 58, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const Footer = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.payments}>
          <Img fixed={fixed} alt="Payments accepted" />
        </section>
        <section className={styles.social}>
          <div className={styles.iconFlex}>
            <AiFillFacebook className={styles.icon} />
            <AiFillInstagram className={styles.icon} />
          </div>
          <p>
            <Link to="/terms">Terms</Link> | <Link to="/privacy">Privacy</Link>{" "}
            | <Link to="/shipping">Shipping | Returns</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </p>
        </section>
        <section className={styles.copyright}>
          <p>Copyright © {new Date().getFullYear()} We Love Woofers</p>
          <p>woofers@welovewoofers.com</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
