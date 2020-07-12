module.exports = {
  siteMetadata: {
    name: "Aircrew Alliance – Sharepic Generator",
    title: "Aircrew Alliance – Sharepic Generator",
    siteURL: "https://share.aircrewalliance.com",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tilman Miraß – Campaigning und Webentwicklung`,
        short_name: `Tilman Miraß – Campaigning und Webentwicklung`,
        start_url: `/`,
        background_color: `#f8645b`,
        theme_color: `#f8645b`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
  ],
};
