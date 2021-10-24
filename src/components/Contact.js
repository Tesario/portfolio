import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("xayazlka", {
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
                  id="name"
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
                  id="email"
                  name="E-mail"
                />
              </div>
              <div className="textarea">
                <label htmlFor="Message">{t("message")}</label>
                <textarea
                  onFocus={(e) => inputFocused(e)}
                  onChange={(e) => inputFocused(e)}
                  onBlur={(e) => inputFocused(e, true)}
                  id="message"
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
              <div className="message">Díky za zprávu</div>
            </form>
          </div>
          <div className="card card-about">
            <div className="name">Vojtěch Tesař</div>
            <div className="job">Full-stack developer</div>
            <a href="/#" className="link">
              <FontAwesomeIcon icon={faDownload} />
              CV
            </a>
            <a
              href="https://github.com/"
              rel="noreferrer"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon icon={faGithub} />
              Github
            </a>
          </div>
          <div className="card card-skills">
            <div className="lang-group">
              <div className="desc">{t("czech")}</div>
              <div className="lang cs">
                <div className="value">C2</div>
              </div>
            </div>
            <div className="lang-group">
              <div className="desc">{t("english")}</div>
              <div className="lang en">
                <div className="value">B1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
