import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TheBand.css";
import uno from "../assets/live/1.jpeg";
import dos from "../assets/live/2.jpg";
import tres from "../assets/live/3.jpg";
import cuatro from "../assets/live/4.jpg";
import cinco from "../assets/live/5.jpg";
import seis from "../assets/live/6.jpg";

const TheBand = () => {
  const sectionRef = useRef();

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
        <h2>The Band</h2>
        <ul>
          <li>
            {" "}
            Andres Vargas - <strong>Vocalista</strong>
          </li>
          <li>
            {" "}
            Fernando Arango - <strong>Bajista</strong>
          </li>
          <li>
            {" "}
            Joan Torres - <strong>Bajista</strong>
          </li>
          <li>
            {" "}
            Jesus Marquez - <strong>Guitarrista</strong>
          </li>
          <li>
            {" "}
            Juan Rodriguez - <strong>Pianista</strong>
          </li>
          <li>
            {" "}
            Fernando Martinez - <strong>Saxofonista</strong>
          </li>
          <li>
            {" "}
            Fabian Salazar - <strong>Saxofonista</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheBand;
