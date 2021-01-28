export default function toSingular(category) {
  if (category === "T-shirts") {
    return "T-shirt"
  } else if (category === "Tote Bags") {
    return "Tote Bag"
  } else if (category === "Coffee Mugs") {
    return "Coffee Mug"
  } else if (category === "Crop Tops") {
    return "Crop Top"
  } else if (category === "Laptop Covers") {
    return "Laptop Cover"
  } else if (category === "Phone Cases") {
    return "Phone Case"
  } else {
    return category
  }
}
