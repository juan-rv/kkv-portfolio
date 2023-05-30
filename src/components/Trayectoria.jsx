import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import uno from "../assets/flyers/1.jpg";
import dos from "../assets/flyers/2.jpg";
import tres from "../assets/flyers/3.jpg";
import cuatro from "../assets/flyers/4.jpeg";
import cinco from "../assets/flyers/5.jpeg";
import seis from "../assets/flyers/6.jpeg";
import siete from "../assets/flyers/7.jpeg";
import ocho from "../assets/flyers/8.jpeg";
import nueve from "../assets/flyers/9.jpeg";
import diez from "../assets/flyers/10.jpeg";
import once from "../assets/flyers/11.jpeg";
import doce from "../assets/flyers/12.jpeg";
import trece from "../assets/flyers/13.jpeg";
import catorce from "../assets/flyers/14.jpeg";
import quince from "../assets/flyers/15.jpeg";
import diezyseis from "../assets/flyers/16.jpeg";
import diezysiete from "../assets/flyers/17.jpeg";
import diezyocho from "../assets/flyers/18.jpeg";
import diezynueve from "../assets/flyers/19.jpeg";
import veinte from "../assets/flyers/20.jpeg";

import logo from "../assets/logoBlanco.png";
import "../styles/Trayectoria.css";

const Trayectoria = () => {
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
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="contentTrayectoria">
      <div className="trayectoria" id="trayectoria" ref={sectionRef}>
        <h1 className="title_sub">{t("trajectory.title")}</h1>
        <div className="info_trayectoria">
          <h1>{t("trajectory.title")}</h1>
          <ul>
            <li>
              <strong>02/2016</strong>
              Noche de Ska & Reggae
            </li>
            <li>
              <strong>02/2016</strong>V festival circo/cultural
            </li>
            <li>
              <strong>11/2017</strong>
              El Frailejon
            </li>
            <li>
              <strong>12/2017</strong>
              Rumba Navideña gansters
            </li>
            <li>
              <strong>01/2018</strong>
              festival reyes magos
            </li>
            <li>
              <strong>04/2018</strong>
              ii festival de artes el camello
            </li>
            <li>
              <strong>06/2021</strong>
              Puente de la dignidad
            </li>
            <li>
              <strong>06/2021</strong>
              Arte vida y dignidad
            </li>
            <li>
              <strong>11/2021</strong>
              La joda del Fracking #2
            </li>
            <li>
              <strong>01/2022</strong>
              Festival reyes magos
            </li>
            <li>
              <strong>02/2022</strong>
              Festival usmeka
            </li>
            <li>
              <strong>12/2022</strong>
              ska christmas fest
            </li>
            <li>
              <strong>02/2023</strong>
              Rock at night vol. 9
            </li>
          </ul>
        </div>
        <div className="info_dos_trayectoria">
          <Slider {...settings}>
            <div>
              {" "}
              <img src={uno} alt="uno" />{" "}
            </div>
            <div>
              {" "}
              <img src={dos} alt="dos" />{" "}
            </div>
            <div>
              {" "}
              <img src={tres} alt="tres" />{" "}
            </div>
            <div>
              {" "}
              <img src={cuatro} alt="cuatro" />{" "}
            </div>
            <div>
              {" "}
              <img src={cinco} alt="cinco" />{" "}
            </div>
            <div>
              {" "}
              <img src={seis} alt="seis" />{" "}
            </div>
            <div>
              {" "}
              <img src={siete} alt="siete" />{" "}
            </div>
            <div>
              {" "}
              <img src={ocho} alt="ocho" />{" "}
            </div>
            <div>
              {" "}
              <img src={nueve} alt="nueve" />{" "}
            </div>
            <div>
              {" "}
              <img src={diez} alt="diez" />{" "}
            </div>
            <div>
              {" "}
              <img src={once} alt="once" />{" "}
            </div>
            <div>
              {" "}
              <img src={doce} alt="doce" />{" "}
            </div>
            <div>
              {" "}
              <img src={trece} alt="trece" />{" "}
            </div>
            <div>
              {" "}
              <img src={catorce} alt="catorce" />{" "}
            </div>
            <div>
              {" "}
              <img src={quince} alt="quince" />{" "}
            </div>
            <div>
              {" "}
              <img src={diezyseis} alt="diezyseis" />{" "}
            </div>
            <div>
              {" "}
              <img src={diezysiete} alt="diezysiete" />{" "}
            </div>
            <div>
              {" "}
              <img src={diezyocho} alt="diezyocho" />{" "}
            </div>
            <div>
              {" "}
              <img src={diezynueve} alt="diezynueve" />{" "}
            </div>
            <div>
              {" "}
              <img src={veinte} alt="veinte" />{" "}
            </div>
          </Slider>
        </div>
      </div>
      <img src={logo} alt="logo kkv" className="logo_img" />
    </div>
  );
};

export default Trayectoria;
