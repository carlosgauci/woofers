import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "T-shirts",
    url: "/shop/t-shirts",
  },
  {
    id: 2,
    text: "Bags",
    url: "/shop/bags",
  },
  {
    id: 3,
    text: "Laptop Covers",
    url: "/shop/laptop-covers",
  },
  {
    id: 4,
    text: "Mugs",
    url: "/shop/mugs",
  },
  {
    id: 5,
    text: "Phone Cases",
    url: "/shop/phone-cases",
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
