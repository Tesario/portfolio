import React, { useState } from "react";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Image from "gatsby-image";
import Seo from "../components/Seo";
import "../assets/css/global.scss";

const Index = (props) => {
  const { t } = useTranslation();

  return (
    <main>
      <Seo lang={props.pageContext.language} />
      <div>{t("helloWorld")}</div>
      <div>
        <Link to="/" language="cs">
          <Trans>ČJ</Trans>
        </Link>
      </div>
      <Link to="/" language="en">
        <Trans>EN</Trans>
      </Link>
    </main>
  );
};

export const data = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default Index;
