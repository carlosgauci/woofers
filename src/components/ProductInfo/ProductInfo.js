import React from "react"
import styles from "./ProductInfo.module.scss"

const ProductInfo = ({ category }) => {
  return (
    <section className={styles.info}>
      <h4>Additional Info:</h4>
      {category === "Laptop Sleeve" && (
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
      {category === "Tote Bag" && (
        <ul>
          <li>Made from 100% spun polyester fabric.</li>
          <li>Printed on both sides.</li>
          <li>Size: 15" x 15" (38cm x 38cm.)</li>
          <li>Durable, can carry up to 20kg in weight.</li>
        </ul>
      )}
      {category === "Coffee Mug" && (
        <ul>
          <li>Ceramic 11oz mug.</li>
          <li>Printed on both sides.</li>
          <li>
            Dimensions: height - 3.85" (9.8 cm), diameter - 3.35" (8.5 cm).
          </li>
          <li>Dishwasher and microwave safe.</li>
        </ul>
      )}
      {category === "Crop Top" && (
        <ul>
          <li>Made from 100% organic cotton.</li>
          <li>Relaxed fit.</li>
        </ul>
      )}
      {category === "Phone Case" && (
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
