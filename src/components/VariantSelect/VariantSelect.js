import React from "react"
import Select from "react-select"
import styles from "./VariantSelect.module.scss"

const shirtOptions = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
]

const laptopOptions = [
  { value: "13x13", label: `13"x13"` },
  { value: "15x15", label: `15"x15"` },
]

const VariantSelect = ({ category, variant, setVariant, singleProduct }) => {
  const options = category === "T-shirts" ? shirtOptions : laptopOptions
  const placeholder = category === "T-shirts" ? "XS" : `13"x13"`
  const show =
    category === "T-shirts" || category === "Laptop Covers" ? true : false

  return (
    <>
      {show && (
        <Select
          className={`${styles.selectNew} ${
            singleProduct && styles.singleProduct
          }`}
          onChange={e => setVariant(e.value)}
          isSearchable={false}
          options={options}
          defaultValue={{ label: placeholder, value: variant }}
        />
      )}
    </>
  )
}

export default VariantSelect
