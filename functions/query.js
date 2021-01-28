const fetch = require("cross-fetch")
const axios = require("axios")
require("dotenv").config()

module.exports = async (query, variables) => {
  const result = await axios({
    url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  })

  return result.data
}
