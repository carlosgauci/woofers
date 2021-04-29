require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const fetch = require("cross-fetch")

async function getData(url) {
  const response = await fetch(url)

  return response.json()
}

// Get the item prices from the api
async function getSelectedProducts(items) {
  const inventory = await getData("https://welovewoofers.com/api/get-products")
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

// Create product data for stripe checkout session
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
  // Shipping prices
  const shirtOrBag = 250
  const laptopOrMug = 500

  // Filter, reduce items and calculate price
  const getPrice = (category, categoryTwo, price) => {
    return (
      products
        .filter(item => item.category === (category | categoryTwo))
        .reduce((prev, current) => prev + current.quantity, 0) * price
    )
  }

  const total =
    getPrice("T-shirts", "Bags", shirtOrBag) +
    getPrice("Laptop Covers", "Coffee Mugs", laptopOrMug)

  products.push({
    name: "Shipping",
    price: total,
    quantity: 1,
  })
  return products
}

// Create stripe session
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
    cancel_url: `${process.env.URL}/cart`,
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
