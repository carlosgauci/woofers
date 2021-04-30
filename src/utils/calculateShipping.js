export default function calculateShipping(cart) {
  const shirtOrBag = 250
  const laptopOrMug = 500

  // Filter, reduce items and calculate price
  const getPrice = (category, price) => {
    return (
      cart
        .filter(item => item.category === category)
        .reduce((prev, current) => prev + current.quantity, 0) * price
    )
  }

  const total =
    getPrice("T-shirts", shirtOrBag) +
    getPrice("Bags", shirtOrBag) +
    getPrice("Laptop Covers", laptopOrMug) +
    getPrice("Coffee Mugs", laptopOrMug)

  return total
}
