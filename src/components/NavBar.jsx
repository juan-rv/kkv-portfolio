import React, { useEffect } from "react";
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
import "../styles/Nav.css";

const HeaderNav = () => {
  const scrollTo = useScrollInto();

  const handleLink = (section) => {
    scrollTo(section);
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
    <header className="header">
      <img src={logo} alt="logo kkv" />
      <nav className="nav">
        <ul>
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
            title="plataformas"
            href="#plataformas"
            onClick={() => handleLink("plataformas")}
          >
            {t("nav.platforms")}
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
        <button onClick={() => changeLanguage("es")}>es</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
    </header>
  );
};
export default HeaderNav;
