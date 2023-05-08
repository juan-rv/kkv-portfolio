import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TheBand.css";
import logo from "../assets/logo_big.png";
import uno from "../assets/live/1.jpeg";
import dos from "../assets/live/2.jpg";
import tres from "../assets/live/3.jpg";
import cuatro from "../assets/live/4.jpg";
import cinco from "../assets/live/5.jpg";
import seis from "../assets/live/6.jpg";

const TheBand = () => {
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

  const settings = {
    autoplay: true,
    autoplaySpeed: 60,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="content_band" id="band" ref={sectionRef}>
      <div className="first_content">
        <Slider {...settings}>
          <div className="color">
            <img src={uno} alt="imagen 1" />
          </div>
          <div>
            <img src={dos} alt="imagen 2" />
          </div>
          <div>
            <img src={tres} alt="imagen 3" />
          </div>
          <div>
            <img src={cuatro} alt="imagen 3" />
          </div>
          <div>
            <img src={cinco} alt="imagen 3" />
          </div>
          <div>
            <img src={seis} alt="imagen 3" />
          </div>
        </Slider>
      </div>

      <div className="second_content">
        <h2>{t("theBand.title")}</h2>
        <ul>
          <li>
            {" "}
            Andres Vargas - <strong>{t("theBand.vocalist")}</strong>
          </li>
          <li>
            {" "}
            Fernando Arango - <strong>{t("theBand.bassist")}</strong>
          </li>
          <li>
            {" "}
            Joan Torres - <strong>{t("theBand.drummer")}</strong>
          </li>
          <li>
            {" "}
            Jesus Marquez - <strong>{t("theBand.guitarrist")}</strong>
          </li>
          <li>
            {" "}
            Juan Rodriguez - <strong>{t("theBand.pianist")}</strong>
          </li>
          <li>
            {" "}
            Fernando Martinez - <strong>{t("theBand.saxophonist")}</strong>
          </li>
          <li>
            {" "}
            Fabian Salazar - <strong>{t("theBand.saxophonist")}</strong>
          </li>
        </ul>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default TheBand;
