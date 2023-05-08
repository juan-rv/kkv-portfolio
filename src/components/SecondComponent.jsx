import React, { useRef } from "react";
import Plx from "react-plx";
import { useTranslation } from "react-i18next";
import agrupacion from "../assets/agrupacion.jpeg";
import "../styles/SecondComponent.css";

const SecondComponent = () => {
  const sectionRef = useRef();
  const headingParalaxData = [];

  const [t, i18n] = useTranslation("global");

  return (
    <div className="all_content" id="bio" ref={sectionRef}>
      <Plx className="content_second" parallaxData={headingParalaxData}>
        <div className="blur-text">
          <div className="title_bio">
            <h1>{t("biography.title")}</h1>
          </div>
          <div className="p_bio">
            <p>
              kingkong five <strong>{t("biography.first_st")}</strong>
              {t("biography.first_p")}
              <strong> {t("biography.second_st")}</strong>
            </p>
            <p>
              <strong>
                "King Kong Five en vivo" es una experiencia musical
              </strong>
              , un viaje que se ha caracterizado por mezclar ritmos de percusión
              latina como la cumbia, merengue y salsa llevandolos a géneros como
              el ska y el reggae.
            </p>
            <p>
              A la agrupación se le ha convocado en diferentes escenarios;
              compartiendo tarima con artistas y bandas de la escena distrital y
              nacional como:{" "}
              <strong>
                {" "}
                yoki barrios la familia & el barragán, ras jahonnann, barbero
                507, la severa matacera, blamblam fever, elemento rustico, entre
                otras.
              </strong>
            </p>

            <p>
              Podrán disfrutar de una mezcla de diferentes influencias musicales
              que han marcado nuestro nacimiendo
            </p>

            <p>Sean bienvenid@s y buen viaje</p>

            <p>
              <strong>
                "King Kong Five en la actualidad está trabajando en su primer
                ep."
              </strong>
            </p>
          </div>
        </div>
        <div className="blur-img">
          <img src={agrupacion} alt="agrupacion" />
        </div>
      </Plx>
    </div>
  );
};

export default SecondComponent;
