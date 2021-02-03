import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./Hero.module.scss"

const Hero = () => {
  const { model1, model2 } = useStaticQuery(query)

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.text}>
          <h1>WLW</h1>
          <h2>Apparel, gifts & accessories</h2>
          <h2>made for dog lovers</h2>
          <button>Shop Now</button>
        </section>
        <section className={styles.images}>
          <Img className={styles.model1} fluid={model1.childImageSharp.fluid} />
          <Img className={styles.model2} fluid={model2.childImageSharp.fluid} />
        </section>
      </div>
    </section>
  )
}

const query = graphql`
  {
    model1: file(relativePath: { eq: "model1.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    model2: file(relativePath: { eq: "model2.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Hero
