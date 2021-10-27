import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const projects = (props) => {
  const {
    pageContext: { language },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>Projects</main>
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

export default projects;
