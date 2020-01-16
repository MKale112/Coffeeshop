module.exports = {
  siteMetadata: {
    title: `The Brew Crew`,
    description: `A place for you to order your favourite flavours of roasts. And enjoy good coffee at our shop in town.`,
    menuItems: [
      {
        text: "THE CREW",
        link: "../",
      },
      {
        text: "SHOP",
        link: "../shop",
      },
      {
        text: "BLOG",
        link: "../blog",
      },
    ],
    footerItems: [
      {
        text: "Privacy Policy",
        link: "",
      },
      {
        text: "©THEBREWCREW",
        link: "../",
      },
      {
        text: "Terms of Use",
        link: "",
      },
    ],
    productItems: [
      {
        imgPath:
          "/Users/admin/Documents/GitHub/Coffeeshop/Coffeeshop/Coffeeshop-site/static/mockup1.jpg",
        productName: "Colombian Blue",
        itemDescription: "From the rolling hills of Columbia.",
        price: "7.25$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Costa Rica Tarrazu",
        itemDescription: "Costa Rica's finest beans. Do partake!",
        price: "8$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Colombian Bucaramanga",
        itemDescription:
          "A mainstay in our classic coffee selection since the start.",
        price: "8.99$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Monsooned Malabar",
        itemDescription:
          "Survived the worst and absorbed the best from the monsoon.",
        price: "10$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Foundation",
        itemDescription:
          "Notes of FUDGE, TREANCE and DARK CHOCOLATE. Our darkest roast.",
        price: "7.50$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Bright Note",
        itemDescription:
          "Notes of TANGERINE, CHOCOLATE & MACADAMIA. Sunshine in a cup.",
        price: "5.75$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "House Roast",
        itemDescription:
          "Notes of CHOCOLATE, CARAMEL and CITRUS. The perfect roast.",
        price: "9.50$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "The Mount Blend",
        itemDescription:
          "Notes of MILK CHOCOLATE, RED GRAPES and CARAMEL. Bold as hell.",
        price: "7.84$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Firehouse Blend",
        itemDescription:
          "Notes of CHOCOLATE ORANGE, FOREST FRUITS and CINNAMON. A free spirit.",
        price: "6.44$",
      },
      {
        imgPath: "src/images/product image/mockup1.jpg",
        productName: "Crisis Coffee",
        itemDescription:
          "Notes of BLACKCURRANT, HAZELNUTS and CINNAMON. When you need a lift.",
        price: "5.84$",
      },
    ],
    author: `@gatsbyjs`,
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
    {
      // we added this plugin (which is a copy from the one above) to add the content
      resolve: `gatsby-source-filesystem`, // directory to the allFiles option in GraphiQL
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
