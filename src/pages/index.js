import React from "react";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Image from "gatsby-image";
import "../assets/css/global.scss";

const Index = (props) => {
  const { t } = useTranslation();
  return (
    <main>
      <div>{t("helloWorld")}</div>
      <div>
        <Link to="/" language="cs">
          <Trans>ČJ</Trans>
        </Link>
      </div>
      <Link to="/" language="en">
        <Trans>EN</Trans>
      </Link>
      <div className="tech">
        {props.data.allContentfulExperiences.nodes.map((node, index) => {
          return (
            <div key={index} className="item">
              <div className="text">{node.text}</div>
              <div className="image">
                <Image fluid={node.image.fluid} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export const query = graphql`
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
    allContentfulExperiences(filter: { node_locale: { eq: $language } }) {
      nodes {
        text
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default Index;
