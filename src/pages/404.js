import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";

const NotFoundPage = (props) => {
  const { t } = useTranslation();
  const {
    pageContext: { language },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>
          <section id="not-found">
            <div className="container">
              <div className="content">
                <h1 className="title-2">{t("404")}</h1>
                <Link to="/" className="btn btn-primary">
                  {t("backToHome")}
                </Link>
              </div>
            </div>
          </section>
        </main>
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
  }
`;

export default NotFoundPage;
