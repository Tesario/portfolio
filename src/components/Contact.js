import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.scss";

const Contact = ({ cv, languages }) => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY, {
    data: {
      _subject: "Zpráva z portfólia",
    },
  });
  const [send, setSend] = useState(false);
  const { t } = useTranslation();

  const inputFocused = (e, focusOut = false) => {
    if (focusOut && !e.target.value) {
      e.target.parentNode.querySelector("label").classList.remove("focused");
    } else {
      e.target.parentNode.querySelector("label").classList.add("focused");
    }

    if (e.target.value) {
      e.target.parentNode.classList.remove("is-invalid");
    }
  };

  const formValidation = (e) => {
    const inputs = document.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        input.parentNode.classList.add("is-invalid");
        isValid = false;
      }

      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (
        input.name === "E-mail" &&
        !emailPattern.test(String(input.value).toLowerCase())
      ) {
        input.parentNode.classList.add("is-invalid");
        isValid = false;
      }
    });

    return isValid;
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="content">
          <h2 className="title-2">{t("contact")}</h2>
        </div>
        <div className="card-grid">
          <div className="card card-form">
            <form
              className={send ? "sended" : ""}
              onSubmit={(e) => {
                if (formValidation(e)) {
                  setSend(true);
                  handleSubmit(e);
                } else {
                  e.preventDefault();
                }
              }}
            >
              <div className="input">
                <label htmlFor="Name">{t("name")}</label>
                <input
                  onFocus={(e) => inputFocused(e)}
                  onChange={(e) => inputFocused(e)}
                  onBlur={(e) => inputFocused(e, true)}
                  type="text"
                  id="Name"
                  name="Name"
                />
              </div>
              <div className="input">
                <label htmlFor="E-mail">E-mail</label>
                <input
                  onFocus={(e) => inputFocused(e)}
                  onChange={(e) => inputFocused(e)}
                  onBlur={(e) => inputFocused(e, true)}
                  type="text"
                  id="E-mail"
                  name="E-mail"
                />
              </div>
              <div className="textarea">
                <label htmlFor="Message">{t("message")}</label>
                <textarea
                  onFocus={(e) => inputFocused(e)}
                  onChange={(e) => inputFocused(e)}
                  onBlur={(e) => inputFocused(e, true)}
                  id="Message"
                  name="Message"
                ></textarea>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={state.submitting}
              >
                {t("send")}
              </button>
              <div className="message">{t("thanks")}</div>
            </form>
          </div>
          <div className="card card-about">
            <div className="name">Vojtěch Tesař</div>
            <div className="job">{t("developer")}</div>
            <a href={cv.file.url} className="link" rel="nofollow">
              <FontAwesomeIcon icon={faDownload} />
              CV
            </a>
            <a
              href="https://linkedin.com/in/vojtěch-tesař-91a819242"
              rel="noreferrer"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Tesario"
              rel="noreferrer"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon icon={faGithub} />
              Github
            </a>
          </div>
          <div className="card card-skills">
            {languages.map(({ language, level, percentages }, index) => {
              return (
                <div className="lang-group" key={index}>
                  <div className="desc">{language}</div>
                  <div
                    className="lang"
                    style={{ "--value": percentages + "%" }}
                  >
                    <div className="value">{level}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
