export default function calculateShipping(cart) {
  // Configure shipping prices for the first item of each type and additional items of that type (printful's shipping is weired)
  const tshirtFirst = 400
  const tshirtAdditional = 150
  const bagFirst = 400
  const bagAdditional = 150
  const laptopFirst = 600
  const laptopAdditional = 200
  const mugFirst = 600
  const mugAdditional = 360

  // Get the quantity of items from each category
  const tshirtQuantity = cart
    .filter(item => item.category === "T-shirts")
    .reduce((prev, current) => prev + current.quantity, 0)
  const bagQuantity = cart
    .filter(item => item.category === "Bags")
    .reduce((prev, current) => prev + current.quantity, 0)
  const laptopCoverQuantity = cart
    .filter(item => item.category === "Laptop Covers")
    .reduce((prev, current) => prev + current.quantity, 0)
  const mugQuantity = cart
    .filter(item => item.category === "Coffee Mugs")
    .reduce((prev, current) => prev + current.quantity, 0)

  // Calculate shipping costs for each category and add them up
  const tshirtCost =
    tshirtQuantity > 0
      ? tshirtFirst + (tshirtQuantity - 1) * tshirtAdditional
      : 0

  const bagCost =
    bagQuantity > 0 ? bagFirst + (bagQuantity - 1) * bagAdditional : 0

  const laptopCost =
    laptopCoverQuantity > 0
      ? laptopFirst + (laptopCoverQuantity - 1) * laptopAdditional
      : 0

  const mugCost =
    mugQuantity > 0 ? mugFirst + (mugQuantity - 1) * mugAdditional : 0

  const total = tshirtCost + bagCost + laptopCost + mugCost

  return total
}
