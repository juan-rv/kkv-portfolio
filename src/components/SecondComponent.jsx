import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import agrupacion from "../assets/agrupacion.jpeg";
import "../styles/SecondComponent.css";

const SecondComponent = () => {
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
    <div className="all_content" id="bio" ref={sectionRef}>
      <div className="blur-text">
        <div className="title_bio">
          <h1>{t("biography.title")}</h1>
        </div>
        <div className="blur-img_dos">
          <img src={agrupacion} alt="agrupacion" />
        </div>
        <div className="p_bio">
          <p>
            kingkong five <strong>{t("biography.first_st")}</strong>
            {t("biography.first_p")}
            <strong> {t("biography.second_st")}</strong>
          </p>
          <p>
            <strong>{t("biography.third_st")}</strong>
            {t("biography.second_p")}
          </p>
          <p>
            {t("biography.third_p")}
            <strong>
              {" "}
              yoki barrios la familia & el barragán, ras jahonnann, barbero 507,
              la severa matacera, blamblam fever, elemento rustico, entre otras.
            </strong>
          </p>

          <p>{t("biography.four_p")}</p>

          <p>{t("biography.five_p")}</p>

          <p>
            <strong>{t("biography.four_st")}</strong>
          </p>
        </div>
      </div>
      <div className="blur-img">
        <img src={agrupacion} alt="agrupacion" />
      </div>
    </div>
  );
};

export default SecondComponent;
