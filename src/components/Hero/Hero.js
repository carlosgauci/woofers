import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { buttonVariants, heroVariants } from "../../framer/variants"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./Hero.module.scss"

const Hero = () => {
  const { model1, model2 } = useStaticQuery(query)

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.text}>
          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 0.75 }}
          >
            WLW
          </motion.h1>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 1 }}
          >
            <h2>Apparel, gifts & accessories</h2>
            <h2>made for dog lovers</h2>
          </motion.div>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 1.25 }}
          >
            <AnchorLink to="/#featured">
              <motion.button
                variants={buttonVariants}
                initial="heroBtnInitial"
                animate="heroBtnAnimate"
                whileHover="hover"
                whileTap="pressed"
              >
                Shop Now
              </motion.button>
            </AnchorLink>
          </motion.div>
        </section>
        <section className={styles.images}>
          <motion.span
            variants={heroVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 0.25 }}
          >
            <Img
              alt="Model 1"
              className={styles.model1}
              fluid={model1.childImageSharp.fluid}
            />
          </motion.span>
          <motion.span
            variants={heroVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Img
              alt="Model 2"
              className={styles.model2}
              fluid={model2.childImageSharp.fluid}
            />
          </motion.span>
        </section>
      </div>
    </section>
  )
}

const query = graphql`
  {
    model1: file(relativePath: { eq: "model1.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    model2: file(relativePath: { eq: "model2.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Hero
