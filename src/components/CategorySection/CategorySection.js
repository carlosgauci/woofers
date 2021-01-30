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
              <section key={category.order} className={styles.categoryCard}>
                <Link to={category.url}>
                  <Img fluid={category.image.fluid} />
                  <h4 className={styles.name}>{category.name}</h4>
                </Link>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
