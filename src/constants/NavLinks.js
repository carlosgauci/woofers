import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "Clothing",
    url: "/shop/clothing",
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
    id: 3,
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
