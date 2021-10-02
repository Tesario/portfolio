import React from "react";
import { useTranslation } from "react-i18next";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./WhoIAm.scss";

const WhoIAm = ({ desc }) => {
  const { t } = useTranslation();

  return (
    <section id="who-i-am">
      <div className="container">
        <div className="content">
          <h2 className="title-2">{t("whoIAm?")}</h2>
          {renderRichText(desc)}
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
