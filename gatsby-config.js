/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Cakealicious`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-mdx`,

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
        typeName: 'Json',
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cakealicious`,
        short_name: `CK`,
        lang: 'en',
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#655DBB`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    }
  ],
};
