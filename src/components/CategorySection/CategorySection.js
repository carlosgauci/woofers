import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./CategorySection.module.scss"

const CategorySection = ({ categories }) => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h3 className={styles.title}>Shop By Category</h3>
        <div className={styles.grid}>
          {categories.map(category => {
            return (
              <Link to={category.url}>
                <section className={styles.categoryCard}>
                  <Img fluid={category.image.fluid} />
                  <h4 className={styles.name}>{category.name}</h4>
                </section>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
