import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/Seo";
import Image from "gatsby-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";

const NotFoundPage = (props) => {
  const { t } = useTranslation();
  const {
    pageContext: { language },
    data: {
      contentfulHeroSection: {
        background: { fluid },
      },
    },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <section id="not-found">
          <div className="bg-image">
            <Image fluid={fluid} alt="Background" />
          </div>
          <div className="container">
            <div className="content">
              <h1 className="title-2">{t("404")}</h1>
              <Link to="/" className="btn btn-primary">
                {t("backToHome")}
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const data = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulHeroSection {
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
