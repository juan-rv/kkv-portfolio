import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logoPrincipalBlanco.png";

import "../styles/BackLine.css";

const Backline = () => {
  const sectionRef = useRef();
  const [t, i18n] = useTranslation("global");

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  return (
    <div className="backline" id="backLine" ref={sectionRef}>
      <h1 className="title_back">BackLine</h1>
      <div className="back">
        <div className="backIzq">
          <div className="logoBack">
            <img src={logo} alt="logo" />
          </div>
          <div className="a">
            <h3>{t("backline.audio_sala")}</h3>
            <p>{t("backline.audiosalap")}</p>
            <ul>
              <li>{t("backline.audio_sala_li_uno")}</li>
              <li>{t("backline.audio_sala_li_dos")}</li>
            </ul>
          </div>
          <div className="b">
            <h3>{t("backline.consolas")}</h3>
            <ul>
              <li>m7cl,ls9</li>
              <li>tascam dm4800</li>
              <li>allen & heakth gl o ml series min 32ch</li>
              <li>chrest min 32ch</li>
              <li>mackie min 32ch</li>
            </ul>
            <p>{t("backline.text_consola")}</p>
          </div>
          <div className="c">
            <h3>{t("backline.procesador")}</h3>
            <ul>
              <li>{t("backline.procesador_li")}</li>
              <li>{t("backline.procesador_li_dos")}</li>
            </ul>
          </div>
        </div>

        <div className="backDer">
          <div className="backText">
            <h1>BackLine</h1>
          </div>
          <div>
            <h3>BackLine</h3>
            <ul>
              <li>
                <strong>{t("backline.backline")}</strong>{" "}
                {t("backline.guitarra")}
              </li>
              <li>
                <strong>{t("backline.bass")} </strong>
                {t("backline.bass_text")}
              </li>
              <li>
                <stron>{t("backline.bateria")}</stron>Yamaha, mapex alta Gama.
              </li>
            </ul>
          </div>
          <div>
            <h3>{t("backline.obligatorio")}</h3>
            <ul>
              <li>{t("backline.base")}</li>
              <li>{t("backline.hidratacion")}</li>
              <li>{t("backline.proyeccion")}</li>
              <li>{t("backline.atriles")}</li>
            </ul>
          </div>
          <div className="d">
            <h3>Monitor</h3>
            <ul>
              <li>{t("backline.mezcla_uno")}</li>
              <li>{t("backline.mezcla_dos")}</li>
              <li>{t("backline.mezcla_tres")}</li>
              <li>{t("backline.mezcla_cuatro")}</li>
              <li>{t("backline.mezcla_cinco")}</li>
              <li>{t("backline.mezcla_seis")}</li>
              <li>{t("backline.mezcla_siete")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="register">
        <h3>{t("backline.registro")}</h3>
        <h4>{t("backline.registro_text")}</h4>
      </div>
    </div>
  );
};

export default Backline;
