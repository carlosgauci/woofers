import React from "react"
import styles from "./VariantSelect.module.scss"

const VariantSelect = ({ category, setVariant, singleProduct }) => {
  return (
    <>
      {category === "T-shirts" && (
        <select
          className={`${styles.select} ${
            singleProduct && styles.singleProduct
          }`}
          onBlur={e => setVariant(e.target.value)}
          name="size"
          id="shirtSize"
        >
          <option value="XS">Size: XS</option>
          <option value="S">Size: S</option>
          <option value="M">Size: M</option>
          <option value="L">Size: L</option>
          <option value="XL">Size: XL</option>
        </select>
      )}
      {category === "Laptop Covers" && (
        <select
          className={`${styles.select} ${
            singleProduct && styles.singleProduct
          }`}
          onBlur={e => setVariant(e.target.value)}
          name="size"
          id="laptopSize"
        >
          <option value="13x13">Size: 13"x13"</option>
          <option value="15x15">Size: 15"x15"</option>
        </select>
      )}
    </>
  )
}

export default VariantSelect
