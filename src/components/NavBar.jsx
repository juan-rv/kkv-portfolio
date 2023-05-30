import React, { useEffect, useState } from "react";
import useScrollInto from "../utils/hooks/useScrollInto";
import { useTranslation } from "react-i18next";
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

import logo from "../assets/logoPrincipalBlanco.png";
import espanol from "../assets/colombia.png";
import ingles from "../assets/jamaica.png";
import "../styles/Nav.css";

const HeaderNav = () => {
  const [active, setActive] = useState("intro");

  const scrollTo = useScrollInto();

  const handleLink = (section) => {
    scrollTo(section);
    setActive(section);
  };

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

  function isSelected(lang) {
    return i18n.language === lang ? "active" : "";
  }

  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo kkv" />

      <nav className="nav">
        <ul>
          <a
            title="intro"
            href="#home"
            onClick={() => handleLink("intro")}
            className={active === "intro" ? "active" : ""}
          >
            {t("nav.home")}
          </a>
          <a
            title="bio"
            href="#bio"
            onClick={() => handleLink("bio")}
            className={active === "bio" ? "active" : ""}
          >
            {t("nav.bio")}
          </a>
          <a
            title="band"
            href="#band"
            onClick={() => handleLink("band")}
            className={active === "band" ? "active" : ""}
          >
            {t("nav.band")}
          </a>
          <a
            title="trayectoria"
            href="#trayectoria"
            onClick={() => handleLink("trayectoria")}
            className={active === "trayectoria" ? "active" : ""}
          >
            {t("nav.trajectory")}
          </a>

          <a
            title="backLine"
            href="#backLine"
            onClick={() => handleLink("backLine")}
          >
            BackLine
          </a>
          <a
            title="contacto"
            href="#contacto"
            onClick={() => handleLink("contact")}
          >
            Contacto
          </a>
          <div className="icons">
            <a href="">
              <FaSpotify />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTiktok />
            </a>
          </div>
        </ul>
      </nav>
      <div className="buttons_lang">
        <buttom
          className={`eng ${isSelected("es")}`}
          onClick={() => changeLanguage("es")}
        >
          <img className="flag" src={espanol} alt="espanol" />
        </buttom>
        <buttom
          className={`eng ${isSelected("en")}`}
          onClick={() => changeLanguage("en")}
        >
          <img className="flag" src={ingles} alt="ingles" />
        </buttom>
      </div>
    </div>
  );
};
export default HeaderNav;
