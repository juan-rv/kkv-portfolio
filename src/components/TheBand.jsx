import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TheBand.css";
import img1 from "../assets/logo_uno.jpg";
import img2 from "../assets/papel.jpg";
import img3 from "../assets/forest.jpg";

const TheBand = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 50,
    lazyLoad: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="content_band">
      <div className="first_content">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="imagen 1" />
          </div>
          <div>
            <img src={img2} alt="imagen 2" />
          </div>
          <div>
            <img src={img3} alt="imagen 3" />
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
