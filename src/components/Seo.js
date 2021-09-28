import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  const {
    site: {
      siteMetadata: { title, description, url, author },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          author
        }
      }
    }
  `);

  const metaDescription = props.description || description;
  const metaTitle = props.title || title;
  const metaAuthor = props.author || author;
  const metaUrl = props.url || url;
  const metaKeywords = props.keywords || [
    "Vojtěch Tesař",
    "Full-stack developer",
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
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: "keywords",
              content: metaKeywords.join(", "),
            }
          : []
      )}
    />
  );
};

export default Seo;
