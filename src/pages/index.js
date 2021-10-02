import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import WhoIAm from "../components/WhoIAm";
import "../assets/css/global.scss";

const Index = (props) => {
  const {
    pageContext: { language },
    data: { whoIAm, infoCards },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>
          <Hero />
          <WhoIAm desc={whoIAm.text} infoCards={infoCards.nodes} />
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
    whoIAm: contentfulDescriptions(
      title: { eq: "Kdo jsem?" }
      node_locale: { eq: $language }
    ) {
      text {
        raw
      }
    }
    infoCards: allContentfulInfoCards(
      filter: { node_locale: { eq: $language } }
    ) {
      nodes {
        icon {
          file {
            url
          }
        }
        title
        description {
          raw
        }
      }
    }
  }
`;

export default Index;
