import React from "react";
import { useTranslation } from "react-i18next";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./WhoAmI.scss";

const WhoAmI = ({ desc, infoCards }) => {
  const { t } = useTranslation();
  return (
    <section id="who-i-am">
      <div className="content-wrapper">
        <div className="container">
          <div className="content">
            <h2 className="title-2">{t("whoAmI?")}</h2>
            {renderRichText(desc)}
          </div>
        </div>
        <span className="polygon reverse"></span>
      </div>
      <div className="card-wrapper">
        <div className="container">
          <div className="flex-cards">
            {infoCards.map((card, index) => {
              return (
                <div key={index} className="card">
                  <div className="icon">
                    <img src={card.icon.file.url} alt={card.title} />
                  </div>
                  <div className="title-3">{card.title}</div>
                  <div className="desc">{renderRichText(card.description)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
