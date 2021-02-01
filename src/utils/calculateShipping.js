// Shipping costs €6 for the first item and +2€ for each extra item
export default function calculateShipping(cart) {
  const totalItems = cart.reduce((prev, current) => prev + current.quantity, 0)
  return 400 + 200 * totalItems
}
