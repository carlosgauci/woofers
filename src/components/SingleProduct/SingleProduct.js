import React, { useContext, useState } from "react"
import Img from "gatsby-image"
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
      <div className={styles.image}>
        <Img fluid={fluid} />
      </div>
      <section className={styles.infoSection}>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{toSingular(subCategory || category)}</p>
          <p className={styles.price}>{(price / 100).toFixed(2)}€</p>
          {/* <p>{description}</p> */}
          <VariantSelect
            category={category}
            setVariant={setVariant}
            singleProduct={true}
          />
          <button onClick={() => dispatch({ type: "ADD_ITEM", item })}>
            Add to cart
          </button>
        </div>
        <ProductInfo category={category} subCategory={subCategory} />
      </section>
    </div>
  )
}

export default SingleProduct
