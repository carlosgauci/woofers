import React, { useContext, useState } from "react"
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
    image: { fluid },
    cartImage: { fixed },
  },
}) => {
  const productLink = `/${category.toLowerCase().replace(/\s+/g, "-")}/${slug}`
  const [variant, setVariant] = useState(
    category === "T-shirts"
      ? "XS"
      : category === "Laptop Covers"
      ? "13x13"
      : undefined
  )

  const { dispatch } = useContext(CartContext)

  const item = {
    name: name,
    sku: sku,
    price: price,
    category: category,
    subCategory: subCategory || null,
    quantity: 1,
    image: fixed,
    slug: slug,
    description: variant,
    variantIdentifier: name + category + variant,
  }

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

        <button
          className={styles.cart}
          onClick={() => dispatch({ type: "ADD_ITEM", item })}
        >
          add to cart
        </button>
        {category === "T-shirts" && (
          <select
            onBlur={e => setVariant(e.target.value)}
            name="size"
            id="size"
          >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        )}
        {category === "Laptop Covers" && (
          <select
            onBlur={e => setVariant(e.target.value)}
            name="size2"
            id="size2"
          >
            <option value="13x13">13x13</option>
            <option value="15x15">15x15</option>
          </select>
        )}
      </div>
    </section>
  )
}

export default ProductCard
