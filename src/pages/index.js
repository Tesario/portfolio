import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import WhoAmI from "../components/WhoAmI";
import WhatCanIDo from "../components/WhatCanIDo";
import WhatDidICreate from "../components/WhatDidICreate";
import Contact from "../components/Contact";
import "../assets/css/global.scss";

const Index = (props) => {
  const {
    pageContext: { language },
    data: {
      whoAmI,
      whatCanIDo,
      whatDidICreate,
      infoCards,
      technologies,
      projects,
      cv,
      languages,
    },
  } = props;

  return (
    <>
      <Seo lang={language} />
      <Layout lang={language}>
        <main>
          <Hero />
          <WhoAmI desc={whoAmI.text} infoCards={infoCards.nodes} />
          <WhatCanIDo
            desc={whatCanIDo.text}
            technologies={technologies.nodes}
          />
          <WhatDidICreate
            desc={whatDidICreate.text}
            projects={projects.nodes}
          />
          <Contact cv={cv.file} languages={languages.nodes} />
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
    whoAmI: contentfulDescriptions(
      title: { eq: "Kdo jsem?" }
      node_locale: { eq: $language }
    ) {
      text {
        raw
      }
    }
    whatCanIDo: contentfulDescriptions(
      title: { eq: "Co umím?" }
      node_locale: { eq: $language }
    ) {
      text {
        raw
      }
    }
    whatDidICreate: contentfulDescriptions(
      title: { eq: "Co jsem vytvořil?" }
      node_locale: { eq: $language }
    ) {
      text {
        raw
      }
    }
    infoCards: allContentfulInfoCards(
      filter: { node_locale: { eq: $language } }
      sort: { fields: order }
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
    technologies: allContentfulTechnologies(
      filter: { node_locale: { eq: $language } }
      sort: { order: DESC, fields: graphValue }
    ) {
      nodes {
        technology
        title
        graphValue
        color
      }
    }
    projects: allContentfulProjects(
      filter: { node_locale: { eq: $language } }
      sort: { fields: order }
    ) {
      nodes {
        description {
          raw
        }
        link
        title
        technologies
        icon {
          file {
            url
          }
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    cv: contentfulFiles(name: { eq: "CV" }, node_locale: { eq: $language }) {
      file {
        file {
          url
        }
      }
    }
    languages: allContentfulLanguages(
      filter: { node_locale: { eq: $language } }
    ) {
      nodes {
        language
        level
        percentages
      }
    }
  }
`;

export default Index;
