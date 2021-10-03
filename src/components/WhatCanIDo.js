import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Chart from "chart.js/auto";
import "./WhatCanIDo.scss";

const WhatCanIDo = ({ technologies }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [technologies.map((technology) => technology.title)][0],
        datasets: [
          {
            data: [technologies.map((technology) => technology.graphValue)][0],
            backgroundColor: [
              technologies.map((technology) => technology.color),
            ][0],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            reverse: true,
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              label: (tooltipItem) => tooltipItem.label,
            },
            padding: "6",
          },
        },
      },
    });
  }, [technologies]);

  return (
    <section id="what-can-i-do">
      <div className="container">
        <h2 className="title-2">{t("whatCanIDo?")}</h2>
        <div className="grid-tech">
          <div className="column">
            {technologies.slice(0, 2).map((technology) => {
              return (
                <div key={technology.title} className="tech">
                  <div className="title-3">{technology.title}</div>
                  <ul className="list">
                    {technology.technology.map((tech, index) => {
                      return (
                        <li key={index} className="item">
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="graph">
            <canvas id="myChart" width="520"></canvas>
          </div>
          <div className="column">
            {technologies.slice(2).map((technology) => {
              return (
                <div key={technology.title} className="tech">
                  <div className="title-3">{technology.title}</div>
                  <ul className="list">
                    {technology.technology.map((tech, index) => {
                      return (
                        <li key={index} className="item">
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatCanIDo;
