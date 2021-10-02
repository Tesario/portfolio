import React from "react";
import { useTranslation } from "react-i18next";
import "./WhoIAm.scss";

const WhoIAm = () => {
  const { t } = useTranslation();

  return (
    <section id="who-i-am">
      <div className="container">
        <div className="content">
          <h2 className="title-2">{t("whoIAm?")}</h2>
          <p>
            Jmenuji se Vojtěch Tesař a vše pro mě začlo od roku 2021, kdy jsem
            si vývoj webů zamiloval. Už na začátku mé cesty mě bavilo poznávat a
            hledat funkční řešení. Zdokonaloval jsem se a získal jsem spoustu
            zkušeností.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
