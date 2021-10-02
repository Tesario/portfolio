import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Image from "gatsby-image";
import "./Hero.scss";

const Hero = () => {
  const {
    contentfulHeroSection: {
      motto,
      background: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <section id="hero">
      <div className="bg-image">
        <Image fluid={fluid} alt="Background" />
      </div>
      <div className="container">
        <div className="content">
          <h1 className="title">Full-stack developer</h1>
          <h2 className="title-2">Vojtěch Tesař</h2>
          <h3 className="title-3">{renderRichText(motto)}</h3>
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  {
    contentfulHeroSection {
      motto {
        raw
      }
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default Hero;
