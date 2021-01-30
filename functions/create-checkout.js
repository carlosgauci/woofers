require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const axios = require("axios")

async function getData(url) {
  const response = await axios(url)

  return response.json()
}

async function getSelectedProducts(items) {
  const inventory = await getData(
    "https://elated-nobel-9eb8d0.netlify.app/api/get-products"
  )
  let selected = []
  items.forEach(item => {
    const found = inventory.find(p => p.sku === item.sku)
    if (found) {
      selected.push(found)
    }
  })

  return selected
}

const getLineItems = products => {
  return products.map(obj => ({
    name: obj.name,
    description: obj.description,
    images: [obj.image.url],
    amount: obj.price,
    currency: "EUR",
    quantity: validatedQuantity,
  }))
}

exports.handler = async event => {
  const { items } = JSON.parse(event.body)
  const products = getSelectedProducts(items)
  const validatedQuantity = 1
  const lineItems = getLineItems(products)

  console.log(products)
  console.log(lineItems)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "IN"],
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
