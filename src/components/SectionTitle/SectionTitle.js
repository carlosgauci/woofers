import React from "react"
import { FaPaw } from "react-icons/fa"
import styles from "./SectionTitle.module.scss"

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.title}>
      <FaPaw />
      <h3>{title}</h3>
      <FaPaw />
    </div>
  )
}

export default SectionTitle
