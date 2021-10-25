module.exports = {
  siteMetadata: {
    siteUrl: "https://begh.in",
    title: "begh.in",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `begh.in`,
        short_name: `begh.in`,
        start_url: `/`,
        background_color: `#eae2b7`,
        theme_color: `#232129`,
        display: `standalone`,
        icon: `./src/images/favicon-512x512.png`,
      },
    },
  ],
};
