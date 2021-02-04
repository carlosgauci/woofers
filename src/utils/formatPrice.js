// Convert prices from cents and add currency sign
export default function formatPrice(price, countup) {
  // If the price is used with react-countup, just convert from cents to euros and return number
  if (countup) {
    return price / 100
    // Else convert, toFixed(), add currency sign and return string
  } else {
    return `${(price / 100).toFixed(2)}€`
  }
}
