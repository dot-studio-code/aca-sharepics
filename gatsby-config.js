module.exports = {
  siteMetadata: {
    name: "Tear this down",
    title: "Kolonialismus jetzt beseitigen",
    description:
      "Koloniale Namen finden sich auch 2020 in vielen Ortsbezeichnungen! Diese Karte schafft einen Überblick über die Problematik.",
    shortDescription:
      "Koloniale Namen finden sich auch 2020 in vielen Ortsbezeichnungen! Diese Karte schafft einen Überblick über die Problematik.",
    keywords: [
      "Kolonialismus",
      "Postkolonialismus",
      "Straßennamen",
      "Bismarck",
      "Lüderitz",
      "Deutschland Karte",
    ],
    siteURL: "https://www.tearthisdown.com",
    ogImagePath: "/assets/images/og-image.jpg",
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
