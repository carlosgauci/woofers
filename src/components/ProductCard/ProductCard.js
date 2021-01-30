import React, { useContext } from "react"
import { Link } from "gatsby"
import styles from "./ProductCard.module.scss"
import Img from "gatsby-image"
import toSingular from "../../utils/toSingular"
import formatPrice from "../../utils/formatPrice"

import { CartContext } from "../../context/CartContext"

const ProductCard = ({
  product: {
    name,
    category,
    subCategory,
    price,
    sku,
    slug,
    // image: { fluid },
    image: { fluid },
    cartImage: { fixed },
  },
}) => {
  const productLink = `/${category.toLowerCase().replace(/\s+/g, "-")}/${slug}`

  const [cart, setCart, addItem] = useContext(CartContext)

  const item = {
    name: name,
    id: sku,
    price: price,
    category: subCategory || category,
    amount: 1,
    image: fixed,
  }

  // const addItem = item => {
  //   setCart(cart => [...cart, item])
  // }

  return (
    <section className={styles.card}>
      <Link to={productLink}>
        <div className={styles.image}>
          <Img fluid={fluid} />
        </div>
      </Link>
      <div className={styles.text}>
        <Link to={productLink}>
          <p className={styles.name}>{name}</p>
          <p className={styles.category}>
            {toSingular(subCategory || category)}
          </p>
        </Link>
        <p className={styles.price}>{formatPrice(price)}</p>
        <button className={styles.cart} onClick={() => addItem(item)}>
          add to cart
        </button>
      </div>
    </section>
  )
}

export default ProductCard
