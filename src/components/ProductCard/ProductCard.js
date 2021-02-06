import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import {
  buttonVariants,
  imageVariants,
  cardVariants,
} from "../../framer/variants"
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

  // Create a new object from the product with the required info needed for cart / Stripe checkout
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
    <motion.section className={styles.card} variants={cardVariants}>
      <Link to={productLink}>
        <motion.div
          className={styles.image}
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Img fluid={fluid} />
        </motion.div>
      </Link>
      <div className={styles.text}>
        <Link to={productLink}>
          <p className={styles.name}>{name}</p>
          <p className={styles.category}>
            {toSingular(subCategory || category)}
          </p>
          <p className={styles.price}>{formatPrice(price)}</p>
        </Link>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="pressed"
          className={styles.cart}
          onClick={() => dispatch({ type: "ADD_ITEM", item })}
        >
          add to cart
        </motion.button>
        <VariantSelect
          category={category}
          setVariant={setVariant}
          // variant={variant}
        />
      </div>
    </motion.section>
  )
}

export default ProductCard
