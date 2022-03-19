import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  const {
    site: {
      siteMetadata: { title, description, siteUrl, author, image, themeColor },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
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
  const metaUrl = props.siteUrl || siteUrl;

  return (
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: "title",
          content: metaTitle,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: metaUrl,
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
          property: "og:image",
          content: metaImage,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:url`,
          content: metaUrl,
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
          name: `twitter:image`,
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
      ]}
    >
      <html lang={props.lang} />
    </Helmet>
  );
};

export default Seo;
