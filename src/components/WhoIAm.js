import React from "react";
import { useTranslation } from "react-i18next";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./WhoIAm.scss";

const WhoIAm = ({ desc, infoCards }) => {
  const { t } = useTranslation();
  return (
    <section id="who-i-am">
      <div className="container">
        <div className="content">
          <h2 className="title-2">{t("whoIAm?")}</h2>
          {renderRichText(desc)}
        </div>
        <div className="flex-cards">
          {infoCards.map((card, index) => {
            // Přemístit karty do sekce vytvořené pod tím, aby se to respontivně rozšiřovalo
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
    </section>
  );
};

export default WhoIAm;
