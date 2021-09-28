module.exports = {
  siteMetadata: {
    title: "Vojtěch Tesař",
    description: "Vojtěch Tesař - Full-stack developer",
    url: "https://www.vojtech-tesar.cz",
    author: "Vojtěch Tesař",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "15rzbJT0iZ0v7R2pbP32-Lry4YTOFQTVkeBHuGl-OXA",
        spaceId: "21wj6gzely1i",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `cs`],
        defaultLanguage: `cs`,
        siteUrl: `http://localhost:8000/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `source sans pro\:300,400,700`],
        display: "swap",
      },
    },
  ],
};
