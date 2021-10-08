import React from "react";
import { useTranslation } from "react-i18next";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faEye,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "gatsby-image";
import "./WhatDidICreate.scss";

const WhatDidICreate = ({ desc, projects }) => {
  const { t } = useTranslation();

  const toggleProject = (e, image) => {
    e.preventDefault();
    document.querySelector(image).classList.toggle("show");
  };

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
        {/* <div className="project-grid">
          {projects.map((project) => {
            return (
              <div key={project.title} className="project">
                <div className={"image-wrapper " + project.title}>
                  <div className="bg">
                    <a
                      href="/#"
                      onClick={(e) =>
                        toggleProject(e, ".image-wrapper." + project.title)
                      }
                      className="btn-close"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </a>
                  </div>
                  <Image fluid={project.image.fluid} />
                </div>
                <div className="wrapper">
                  <div className="card-header">
                    <div className="icon">
                      <img src={project.icon.file.url} alt={project.title} />
                    </div>
                    <div className="btn-group">
                      <a
                        href="/#"
                        onClick={(e) =>
                          toggleProject(e, ".image-wrapper." + project.title)
                        }
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                      <a
                        href={project.link}
                        aria-label={project.title}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    </div>
                  </div>
                  <div className="project-desc">
                    <div className="title-3">{project.title}</div>
                    {renderRichText(project.description)}
                  </div>
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
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default WhatDidICreate;
