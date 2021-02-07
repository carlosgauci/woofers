import React from "react"
import styles from "./ProductInfo.module.scss"

const ProductInfo = ({ category, subCategory }) => {
  return (
    <section className={styles.info}>
      <h4>Additional Info:</h4>
      {category === "Laptop Covers" && (
        <ul>
          <li>
            Made from 100% neoprene which is a durable, water resistant and
            flexible material.
          </li>
          <li>
            Interior is lined with faux fur (don't worry, we would never use
            real fur) to keep your device safe and prevent any scratches.
          </li>
          <li>Printed front, solid black rear.</li>
          <li>Available in 2 sizes: 13'' x 13'' & 15'' x 15''.</li>
        </ul>
      )}
      {category === "Bags" && subCategory === "Tote Bags" && (
        <ul>
          <li>Made from 100% spun polyester fabric.</li>
          <li>Printed on both sides.</li>
          <li>Size: 15" x 15" (38cm x 38cm.)</li>
          <li>Durable, can carry up to 20kg in weight.</li>
        </ul>
      )}
      {category === "Coffee Mugs" && (
        <ul>
          <li>Ceramic 11oz mug.</li>
          <li>Printed on both sides.</li>
          <li>
            Dimensions: height - 3.85" (9.8 cm), diameter - 3.35" (8.5 cm).
          </li>
          <li>Dishwasher and microwave safe.</li>
        </ul>
      )}
      {category === "T-shirts" && subCategory === "Crop Tops" && (
        <ul>
          <li>Made from 100% organic cotton.</li>
          <li>Relaxed fit.</li>
        </ul>
      )}
      {category === "T-shirts" && subCategory === "T-shirts" && (
        <ul>
          <li>Soft and light, with just the right amount of stretch.</li>
          <li>100% combed and ring-spun cotton.</li>
          <li>Unisex cut is flattering on both men and women.</li>
        </ul>
      )}
      {category === "Phone Cases" && (
        <ul>
          <li>A sleek, solid case that fits your phone perfectly.</li>
          <li>Wireless charging compatible.</li>
          <li>
            Made from a BPA free hybrid Thermoplastic Polyurethane and
            Polycarbonate material.
          </li>
        </ul>
      )}
    </section>
  )
}

export default ProductInfo
