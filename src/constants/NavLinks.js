import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "T-shirts",
    url: "/t-shirts",
  },
  {
    id: 2,
    text: "Bags",
    url: "/tote-bags",
  },
  {
    id: 3,
    text: "Laptop Covers",
    url: "/laptop-covers",
  },
  {
    id: 4,
    text: "Mugs",
    url: "/coffee-mugs",
  },
  {
    id: 5,
    text: "Phone Cases",
    url: "/phone-cases",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default () => {
  return <ul>{links}</ul>
}
