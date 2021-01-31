import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
      <li key={link.order}>
        <Link
          onClick={mobile ? () => setMobileNav(false) : undefined}
          to={link.url}
        >
          {link.navLabel ? link.navLabel : link.name}
        </Link>
      </li>
    )
  })

  return <ul>{links}</ul>
}

export default NavLinks
