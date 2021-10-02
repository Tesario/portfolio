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
    data: {
      whoIAm: { nodes },
    },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>
          <Hero />
          <WhoIAm desc={nodes[0].text} />
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
    whoIAm: allContentfulDescriptions(
      filter: { title: { eq: "Kdo jsem?" }, node_locale: { eq: $language } }
    ) {
      nodes {
        text {
          raw
        }
      }
    }
  }
`;

export default Index;
