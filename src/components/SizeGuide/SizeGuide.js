import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"
import { IoIosArrowBack } from "react-icons/io"
import styles from "./SizeGuide.module.scss"

const SizeGuide = () => {
  const { model } = useStaticQuery(query)
  return (
    <div className={styles.container}>
      <section className={styles.measure}>
        <Img
          alt="Size guide"
          className={styles.modelImage}
          fixed={model.childImageSharp.fixed}
        />
        <div className={styles.text}>
          <h3>T-shirt Measurements</h3>
          <p>
            Pro tip! Measure one of your T-shirts at home and compare with the
            measurements you see in this guide.
          </p>
          <h4>A - Length</h4>
          <p>
            Place the end of the tape beside the collar at the top of the tee
            (Highest Point Shoulder). Pull the tape measure to the bottom of the
            shirt.
          </p>
          <h4>B - Width</h4>
          <p>
            Place the end of the tape at the seam under the sleeve and pull the
            tape measure across the shirt to the seam under the opposite sleeve.
          </p>
          <h3>Find your size</h3>
          <section className={styles.sizeGrid}>
            <h4>Size</h4>
            <h4>Length</h4>
            <h4>Width</h4>
            {/* XS */}
            <p>XS</p>
            <p>27"</p>
            <p>16.5"</p>
            {/* S */}
            <p>S</p>
            <p>28"</p>
            <p>18"</p>
            {/* S */}
            <p>M</p>
            <p>29"</p>
            <p>20"</p>
            {/* S */}
            <p>L</p>
            <p>30"</p>
            <p>22"</p>
            {/* S */}
            <p>XL</p>
            <p>31"</p>
            <p>24"</p>
          </section>
          <button onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            Back
          </button>
        </div>
      </section>
    </div>
  )
}

const query = graphql`
  {
    model: file(relativePath: { eq: "size.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default SizeGuide
