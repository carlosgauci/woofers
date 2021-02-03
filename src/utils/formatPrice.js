// Convert prices from cents and add currency sign
export default function formatPrice(price, countup) {
  // If the price is used with react-countup, dont add currency sign and return a number
  if (countup) {
    return (price / 100).toFixed(2)
  } else {
    return `${(price / 100).toFixed(2)}€`
  }
}
