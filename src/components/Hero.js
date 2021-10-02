import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Image from "gatsby-image";
import "./Hero.scss";

const Hero = () => {
  const windowWidth = useWindowSize().width;
  const {
    contentfulHeroSection: {
      motto,
      background: { fluid },
    },
    allImageSharp: { nodes },
  } = useStaticQuery(query);

  return (
    <section id="hero">
      <div className="bg-image">
        <Image fluid={fluid} alt="Background" />
      </div>
      <div className="curve">
        {windowWidth > 768 ? (
          <Image fluid={nodes[1].fluid} alt="Background" />
        ) : (
          <Image fluid={nodes[0].fluid} alt="Background" />
        )}
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
    allImageSharp(
      filter: {
        fluid: { originalName: { in: ["bg-curve.png", "bg-curve-mobile.png"] } }
      }
    ) {
      nodes {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default Hero;
