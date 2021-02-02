import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import toSingular from "../../utils/toSingular"
import formatPrice from "../../utils/formatPrice"
import VariantSelect from "../VariantSelect/VariantSelect"
import styles from "./ProductCard.module.scss"
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

  // Set default variant for laptop covers and t-shirts
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
          <p className={styles.price}>{formatPrice(price)}</p>
        </Link>

        <button
          className={styles.cart}
          onClick={() => dispatch({ type: "ADD_ITEM", item })}
        >
          add to cart
        </button>
        <VariantSelect category={category} setVariant={setVariant} />
      </div>
    </section>
  )
}

export default ProductCard
