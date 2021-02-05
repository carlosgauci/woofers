import React from "react"
import { motion } from "framer-motion"

import styles from "./Announcement.module.scss"

const Announcement = ({ announcementSize }) => {
  return (
    <motion.div
      className={styles.announcement}
      style={{ height: announcementSize }}
    >
      <p>Now shipping to over 25 countries!</p>
    </motion.div>
  )
}

export default Announcement
