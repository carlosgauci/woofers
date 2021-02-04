import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

const query = graphql`
  {
    allContentfulWooferCategories(sort: { fields: order, order: ASC }) {
      nodes {
        order
        name
        navLabel
        url
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`

const NavLinks = ({ mobile, setMobileNav }) => {
  const {
    allContentfulWooferCategories: { nodes: data },
  } = useStaticQuery(query)

  const links = data.map(link => {
    return (
      <motion.li
        initial={{ scale: 1, color: "#202020" }}
        whileHover={{ scale: 1.1, color: "#a95695" }}
        transition={{ duration: 0.15 }}
        key={link.order}
      >
        <Link
          onClick={mobile ? () => setMobileNav(false) : undefined}
          to={link.url}
        >
          {link.navLabel ? link.navLabel : link.name}
        </Link>
      </motion.li>
    )
  })

  return <ul>{links}</ul>
}

export default NavLinks
