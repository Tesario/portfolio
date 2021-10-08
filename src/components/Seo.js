import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  const {
    site: {
      siteMetadata: { title, description, url, author, image, themeColor },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          author
          image
          themeColor
        }
      }
    }
  `);

  const metaDescription = props.description || description;
  const metaTitle = props.title || title;
  const metaAuthor = props.author || author;
  const metaImage = image;
  const metaUrl = props.url || url;
  const metaKeywords = props.keywords || [
    "Vojtěch Tesař",
    "Full-stack developer",
    "Fullstack",
    "Vývojář",
    "Vývoj webů a webových aplikací",
    "Web design",
    "Responsivita",
    "Responsivita",
    "Kódování",
    "Web design",
  ];

  return (
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:url",
          content: metaUrl,
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "theme-color",
          content: themeColor,
        },
        {
          name: "google-site-verification",
          content: "Xvc_bLyCKhp7sGsVcjA4aPMHKb4fR5XLWrNjqH24Yds",
        },
        {
          name: "robots",
          content: "noindex",
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: "keywords",
              content: metaKeywords.join(", "),
            }
          : []
      )}
    >
      <html lang={props.lang} />
    </Helmet>
  );
};

export default Seo;
