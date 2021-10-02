import React, { useRef } from "react";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import Image from "gatsby-image";
import "./Layout.scss";

const Layout = (props) => {
  const { children, lang } = props;
  const menuRef = useRef("");
  const darkOverlayRef = useRef("");
  const hamburgerRef = useRef("");
  const { t } = useTranslation();
  const { originalPath } = useI18next();
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(query);

  const toggleMenu = (e, alwaysClose = false) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      if (!alwaysClose) {
        menuRef.current.classList.toggle("show");
        hamburgerRef.current.classList.toggle("active");
        darkOverlayRef.current.classList.toggle("show");
        document.body.classList.toggle("scroll-lock");
      } else {
        menuRef.current.classList.remove("show");
        hamburgerRef.current.classList.remove("active");
        darkOverlayRef.current.classList.remove("show");
        document.body.classList.remove("scroll-lock");
      }
    }
  };

  const scrollToSection = (selector, e) => {
    e.preventDefault();
    const y =
      document.querySelector(selector).getBoundingClientRect().top +
      window.pageYOffset -
      75;

    window.scrollTo(0, y);
  };

  return (
    <>
      <span
        aria-hidden="true"
        id="dark-overlay"
        ref={darkOverlayRef}
        onClick={(e) => toggleMenu(e)}
      ></span>
      <nav id="navbar">
        <div className="container">
          <a
            href="/#"
            className="brand"
            onClick={(e) => {
              toggleMenu(e, true);
              scrollToSection("#hero", e);
            }}
          >
            <Image fluid={nodes[0].fluid} alt="Icon" />
          </a>
          <div className="menu-wrapper" ref={menuRef}>
            <ul className="menu">
              <li>
                <a
                  href="/#"
                  onClick={(e) => {
                    scrollToSection("#hero", e);
                    toggleMenu(e);
                  }}
                >
                  {t("whoIAm")}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  onClick={(e) => {
                    scrollToSection("#features", e);
                    toggleMenu(e);
                  }}
                >
                  {t("whatCanIDo")}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  onClick={(e) => {
                    scrollToSection("#development", e);
                    toggleMenu(e);
                  }}
                >
                  {t("whatDidICreate")}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  onClick={(e) => {
                    scrollToSection("#technology", e);
                    toggleMenu(e);
                  }}
                >
                  {t("contact")}
                </a>
              </li>
              <li>
                {lang === "cs" ? (
                  <Link className="lang" to={originalPath} language="en">
                    EN
                  </Link>
                ) : (
                  <Link className="lang" to={originalPath} language="cs">
                    CZ
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="hamburger">
            <svg
              onClick={(e) => {
                toggleMenu(e);
              }}
              ref={hamburgerRef}
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 200 200"
            >
              <g strokeWidth="6.5" strokeLinecap="round">
                <path
                  d="M72 82.286h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M72 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M100.75 82.286h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </nav>
      {children}
      <footer id="footer">Code & design by Vojtěch Tesař</footer>
    </>
  );
};

const query = graphql`
  {
    allImageSharp(filter: { fluid: { originalName: { eq: "icon.png" } } }) {
      nodes {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Layout;
