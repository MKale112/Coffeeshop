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
