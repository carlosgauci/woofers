import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "../SectionTitle/SectionTitle"
import styles from "./CategorySection.module.scss"

const CategorySection = ({ categories }) => {
  return (
    <section className={styles.categories}>
      <SectionTitle title={`Shop by Category`} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map(category => {
            return (
              <section key={category.order} className={styles.categoryCard}>
                <Link to={category.url}>
                  <Img fluid={category.image.fluid} alt={category.name} />
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
