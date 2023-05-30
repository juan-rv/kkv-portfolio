import React, { useState, useEffect } from "react";
import useScrollInto from "../utils/hooks/useScrollInto";
import { useTranslation } from "react-i18next";
import es from "../assets/colombia.png";
import en from "../assets/jamaica.png";
import "../styles/NavBarDos.css";

const NavBarDos = () => {
  const [active, setActive] = useState("intro");
  const [isOpen, setIsOpen] = useState(false);

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

  const scrollTo = useScrollInto();

  const handleLink = (section) => {
    scrollTo(section);
    setActive(section);
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navdos">
      <div className="burger-button-container">
        <button className="burger-button" onClick={handleMenuClick}>
          <div className={`burger-line ${isOpen ? "open" : ""}`} />
          <div className={`burger-line ${isOpen ? "open" : ""}`} />
          <div className={`burger-line ${isOpen ? "open" : ""}`} />
        </button>
        {isOpen && (
          <ul className="burger-menu">
            <a title="intro" href="#home" onClick={() => handleLink("intro")}>
              {t("nav.home")}
            </a>
            <a title="bio" href="#bio" onClick={() => handleLink("bio")}>
              {t("nav.bio")}
            </a>

            <a title="band" href="#band" onClick={() => handleLink("band")}>
              {t("nav.band")}
            </a>
            <a
              title="trayectoria"
              href="#trayectoria"
              onClick={() => handleLink("trayectoria")}
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
              Contact
            </a>
          </ul>
        )}
      </div>

      <div className="buttons_lang">
        <buttom
          className={`eng ${isSelected("es")}`}
          onClick={() => changeLanguage("es")}
        >
          <img src={es} alt="es" />
        </buttom>
        <buttom
          className={`eng ${isSelected("en")}`}
          onClick={() => changeLanguage("en")}
        >
          <img src={en} alt="en" />
        </buttom>
      </div>
    </div>
  );
};

export default NavBarDos;
