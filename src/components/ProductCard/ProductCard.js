import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"
import {
  buttonVariants,
  imageVariants,
  cardVariants,
} from "../../framer/variants"
import { AiFillCheckCircle } from "react-icons/ai"
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

  // Framer motion control for added to cart confirmation
  const controls = useAnimation()

  const addToCart = item => {
    dispatch({ type: "ADD_ITEM", item })
    controls.start({
      opacity: [0, 1, 1, 1, 0],
      transition: { duration: 3 },
    })
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
          <Img fluid={fluid} alt={`${name} - ${subCategory || category}`} />
        </motion.div>
      </Link>
      <div className={styles.text}>
        <Link to={productLink}>
          <p className={styles.name}>{name}</p>
          <p className={styles.category}>
            {toSingular(subCategory || category)}
          </p>
        </Link>
        <p className={styles.price}>{formatPrice(price)}</p>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hoverNoScale"
          whileTap="pressed"
          className={styles.cart}
          onClick={() => addToCart(item)}
        >
          add to cart
          <motion.span className={styles.icon} animate={controls}>
            <AiFillCheckCircle />
          </motion.span>
        </motion.button>
        <VariantSelect category={category} setVariant={setVariant} />
      </div>
    </motion.section>
  )
}

export default ProductCard
