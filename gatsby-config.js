require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `We Love Woofers`,
    description: `Apparel, gifts and accessories made for dog lovers.`,
    titleTemplate: `%s | WLW`,
    url: `https://welovewoofers.com`,
    image: `/image.png`,
    author: `@WeLoveWoofers`,
    twitterUsername: `@weLoveWoofers`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `we-love-woofers`,
        short_name: `woofers`,
        start_url: `/`,
        background_color: `#a95695`,
        theme_color: `#a95695`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Poppins",
    //           variants: ["400", "600"],
    //           fontDisplay: "swap",
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`poppins\:400,600`],
    //     display: "swap",
    //   },
    // },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        duration: 500,
      },
    },
  ],
}
