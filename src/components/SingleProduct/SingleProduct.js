import React, { useContext, useState } from "react"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { buttonVariants, singleProductVariants } from "../../framer/variants"
import ProductInfo from "../ProductInfo/ProductInfo"
import toSingular from "../../utils/toSingular"
import VariantSelect from "../VariantSelect/VariantSelect"
import styles from "./SingleProduct.module.scss"
import { CartContext } from "../../context/CartContext"

const SingleProduct = ({
  product: {
    name,
    sku,
    category,
    subCategory,
    price,
    slug,
    description: { description },
    image: { fluid },
    cartImage: { fixed },
  },
}) => {
  const [variant, setVariant] = useState(
    category === "T-shirts"
      ? "XS"
      : category === "Laptop Covers"
      ? "13x13"
      : undefined
  )

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

  const { dispatch } = useContext(CartContext)

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.image}
        variants={singleProductVariants}
        initial="hiddenLeft"
        animate="show"
      >
        <Img fluid={fluid} />
      </motion.div>
      <motion.section
        className={styles.infoSection}
        variants={singleProductVariants}
        initial="hiddenRight"
        animate="show"
      >
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{toSingular(subCategory || category)}</p>
          <p className={styles.price}>{(price / 100).toFixed(2)}€</p>
          <VariantSelect
            category={category}
            setVariant={setVariant}
            singleProduct={true}
          />
          <motion.button
            onClick={() => dispatch({ type: "ADD_ITEM", item })}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="pressed"
          >
            Add to cart
          </motion.button>
        </div>
        <ProductInfo category={category} subCategory={subCategory} />
      </motion.section>
    </div>
  )
}

export default SingleProduct
