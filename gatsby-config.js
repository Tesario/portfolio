require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: "Vojtěch Tesař",
    description: "Vojtěch Tesař - Full-stack developer",
    url: "https://www.vojtech-tesar.cz",
    author: "Vojtěch Tesař",
    image: "./src/assets/images/icon.png",
    themeColor: "#18a0fb",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vojtěch Tesař",
        short_name: "Vojtěch Tesař",
        start_url: "/",
        background_color: "#26283d",
        theme_color: "#18a0fb",
        display: "standalone",
        icon: "./src/assets/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
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
    "gatsby-plugin-offline",
  ],
};
