import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const projects = (props) => {
  const {
    pageContext: { language },
    data: { projects },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>
          <Projects projects={projects.nodes} />
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
    projects: allContentfulProjects(
      filter: { node_locale: { eq: $language } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date
        description {
          raw
        }
        link
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        technologies
      }
    }
  }
`;

export default projects;
