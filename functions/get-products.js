const query = require("./query")

const GET_PRODUCTS = `
     query myQuery {
        wooferProductsCollection {
            items {
                name
                id:sku
                category
                price
                image {
                    url
                }
            }
        }
    }
`

exports.handler = async () => {
  const { data, errors } = await query(GET_PRODUCTS)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data.wooferProductsCollection.items),
  }
}
