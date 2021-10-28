import React, { useEffect } from "react";
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

  const scrollEffect = () => {
    const content = document.querySelector(".content");
    const bgLinear = document.querySelector(".bg-linear");

    if (content) {
      content.style.top = window.scrollY * 0.06 + "%";
      content.style.opacity = 1 - window.scrollY / 500;
      bgLinear.style.setProperty("--scroll-y", window.scrollY * 0.05 + "%");
      bgLinear.style.setProperty("--opacity", 1 - window.scrollY / 700);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      scrollEffect();
      window.addEventListener("scroll", scrollEffect);
    }
  }, []);

  return (
    <section id="hero">
      <div className="bg-image">
        <Image fluid={fluid} alt="Background" />
      </div>
      <span className="bg-linear"></span>
      <span className="polygon"></span>
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
