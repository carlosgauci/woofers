import React from "react"
import styles from "./InfoPage.module.scss"
import ReactMarkdown from "react-markdown"

const InfoPage = ({ page }) => {
  return (
    <section className={styles.container}>
      <h2>{page.title}</h2>
      <ReactMarkdown>{page.content.content}</ReactMarkdown>
    </section>
  )
}

export default InfoPage
