require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: "Vojtěch Tesař | Vývojář a kodér",
    description:
      "Vojtěch Tesař, vývojář a kodér, vývoj a optimalizace webových stránek a aplikací.",
    siteUrl: "https://tesarvojtech.cz/",
    author: "Vojtěch Tesař",
    image: "https://tesarvojtech.cz/icons/icon-512x512.png",
    themeColor: "#18a0fb",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
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
        siteUrl: `https://tesarvojtech.cz/`,
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ "User-agent": "googlebot-image", Disallow: "/" }],
      },
    },
  ],
};
