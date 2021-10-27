import React from "react";
import { useTranslation } from "react-i18next";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "gatsby-image";
import "./WhatDidICreate.scss";

const WhatDidICreate = ({ desc, projects }) => {
  const { t } = useTranslation();

  return (
    <section id="what-did-i-create">
      <div className="container">
        <div className="content">
          <h2 className="title-2">{t("whatDidICreate?")}</h2>
          {renderRichText(desc)}
        </div>
        <div className="project-flex">
          {projects.map((project) => {
            return (
              <div key={project.title} className="project">
                <div className="info">
                  <div className="card-header">
                    <h3 className="title-3">{project.title}</h3>
                    <a
                      href={project.link}
                      aria-label={project.title}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                  <div className="project-desc">
                    {renderRichText(project.description)}
                  </div>
                  <div className="tech-flex">
                    {project.technologies.map((technology) => {
                      return (
                        <div className="tech" key={technology}>
                          {technology}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="image">
                  <Image fluid={project.image.fluid} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <span className="polygon reverse"></span>
    </section>
  );
};

export default WhatDidICreate;
