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
          <Img fixed={fixed} />
        </section>
        <section className={styles.social}>
          <div className={styles.iconFlex}>
            <AiFillFacebook className={styles.icon} />
            <AiFillInstagram className={styles.icon} />
          </div>
          <p>
            <Link to="/terms">Terms</Link> | <Link to="/privacy">Privacy</Link>{" "}
            | <Link to="/shipping">Shipping | Returns</Link>
          </p>
        </section>
        <section className={styles.copyright}>
          <p>Copyright © {new Date().getFullYear()} Woofers</p>
          <p>Web Design by CGDEV</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
