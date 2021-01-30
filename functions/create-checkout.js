require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const fetch = require("cross-fetch")

async function getData(url) {
  const response = await fetch(url)

  return response.json()
}

// Get the actual items in the cart from the api, to prevent someone messing with prices
async function getSelectedProducts(items) {
  const inventory = await getData(
    "https://elated-nobel-9eb8d0.netlify.app/api/get-products"
  )
  let selected = []
  items.forEach(item => {
    const found = inventory.find(p => p.sku === item.sku)
    if (found) {
      selected.push({ ...found, quantity: item.quantity })
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
  const newProducts = products
  newProducts.push({
    name: "Shipping",
    price: 400 + newProducts.length * 200,
    quantity: 1,
  })
  return newProducts
}

exports.handler = async event => {
  const { items } = JSON.parse(event.body)
  const products = await getSelectedProducts(items)
  const productsWithShipping = addShipping(products)
  const lineItems = getLineItems(productsWithShipping)

  console.log(products)
  console.log(lineItems)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: [
        "US",
        "AT",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
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
