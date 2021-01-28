import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulWooferCategories(sort: { fields: order, order: ASC }) {
      nodes {
        order
        name
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

const NavLinks = () => {
  const {
    allContentfulWooferCategories: { nodes: data },
  } = useStaticQuery(query)

  const links = data.map(link => {
    return (
      <li key={link.order}>
        <Link to={link.url}>{link.name}</Link>
      </li>
    )
  })

  return <ul>{links}</ul>
}

export default NavLinks
