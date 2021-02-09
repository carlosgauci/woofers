import React from "react"
import { Link } from "gatsby"
import styles from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">
        <button>Back to store</button>
      </Link>
    </div>
  )
}

export default NotFound
