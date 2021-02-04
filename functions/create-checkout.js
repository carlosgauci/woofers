require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const fetch = require("cross-fetch")

async function getData(url) {
  const response = await fetch(url)

  return response.json()
}

// Get the actual prices for items in the cart from the api, to prevent someone messing with prices
async function getSelectedProducts(items) {
  const inventory = await getData(
    "https://gallant-wilson-45079a.netlify.app/api/get-products"
  )
  let selected = []
  items.forEach(item => {
    const found = inventory.find(p => p.sku === item.sku)
    if (found) {
      selected.push({
        ...found,
        quantity: item.quantity,
        description: item.description || undefined,
      })
    }
  })

  return selected
}

// Create product data for stripe checkout
const getLineItems = products => {
  return products.map(product => ({
    name: product.name,
    description: product.description,
    images: product.image && [product.image.url],
    amount: product.price,
    currency: "EUR",
    quantity: product.quantity,
  }))
}

// Add shipping cost
const addShipping = products => {
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
  const tshirtQuantity = products
    .filter(item => item.category === "T-shirts")
    .reduce((prev, current) => prev + current.quantity, 0)
  const bagQuantity = products
    .filter(item => item.category === "Bags")
    .reduce((prev, current) => prev + current.quantity, 0)
  const laptopCoverQuantity = products
    .filter(item => item.category === "Laptop Covers")
    .reduce((prev, current) => prev + current.quantity, 0)
  const mugQuantity = products
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

  products.push({
    name: "Shipping",
    price: total,
    quantity: 1,
  })
  return products
}

exports.handler = async event => {
  const { items } = JSON.parse(event.body)
  const products = await getSelectedProducts(items)
  const productsWithShipping = addShipping(products)
  const lineItems = getLineItems(productsWithShipping)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: [
        "US",
        "AT",
        "AL",
        "AD",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "GB",
        "DE",
        "GR",
        "HU",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
        "UA",
      ],
    },
    success_url: `${process.env.URL}/success`,
    cancel_url: process.env.URL,
    line_items: lineItems,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  }
}
