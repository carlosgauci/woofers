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
          <h2>WLW</h2>
          <p>Apparel, accessories & gifts made for dog lovers</p>
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
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    model2: file(relativePath: { eq: "model2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Hero
