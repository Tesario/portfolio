import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import "../components/Layout.scss";
import "../assets/css/global.scss";

const Index = (props) => {
  const { t } = useTranslation();
  const {
    pageContext: { language },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>
          <Hero />
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

export default Index;
