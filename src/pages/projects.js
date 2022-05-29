import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const projects = (props) => {
  const {
    pageContext: { language },
    data: { projects, projectsCount, whatDidICreate },
  } = props;

  return (
    <>
      <Seo
        lang={language}
        title="Vojtěch Tesař | Projekty"
        description="Vojtěch Tesař, kompletní seznam projektů"
      />
      <Layout lang={language}>
        <main>
          <Projects
            projects={projects.nodes}
            projectsCount={projectsCount}
            desc={whatDidICreate.text}
          />
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
    projectsCount: allContentfulProjects(
      filter: { node_locale: { eq: "cs" } }
    ) {
      totalCount
    }
    whatDidICreate: contentfulDescriptions(
      title: { eq: "Co jsem vytvořil?" }
      node_locale: { eq: $language }
    ) {
      text {
        raw
      }
    }
  }
`;

export default projects;
