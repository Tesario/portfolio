import React from "react";
import { useTranslation } from "react-i18next";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "gatsby-image";

import "./Projects.scss";

const Projects = ({ projects, projectsCount }) => {
  const { t } = useTranslation();
  let prevYear = 0;

  return (
    <section id="projects">
      <div className="container">
        <div className="content">
          <h1 className="title-2">{t("projects")}</h1>
          <p>{t("projects-1") + projectsCount.totalCount + t("projects-2")} </p>
        </div>
        <div className="projects">
          {projects.map(
            ({ date, title, description, link, technologies, image }) => {
              const newDate = new Date(date);
              const year = newDate.getFullYear();
              const month = "month-" + (1 + newDate.getMonth());

              const project = (
                <div key={title} className="project">
                  <div className="date">
                    <div className="year">{year !== prevYear && year}</div>
                    <div className="month">{t(month)}</div>
                  </div>
                  <div className="info">
                    <div className="card-header">
                      <h2 className="title-3">{title}</h2>
                      <a
                        href={link}
                        aria-label={title}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    </div>
                    <div className="project-desc">
                      {renderRichText(description)}
                    </div>
                    <div className="tech-flex">
                      {technologies.map((technology) => {
                        return (
                          <div className="tech" key={technology}>
                            {technology}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="image">
                    <Image fluid={image.fluid} />
                  </div>
                </div>
              );
              prevYear = year;

              return project;
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
