import React from "react";
import Plx from "react-plx";
import agrupacion from "../assets/agrupacion.jpeg";
import "../styles/SecondComponent.css";

const SecondComponent = () => {
  const exampleParallaxData = [
    // {
    //   start: "0vh", //document.getElementById("blurImage"), //"500vh",
    //   end: "400vh",
    //   properties: [
    //     {
    //       startValue: 10,
    //       endValue: 0,
    //       property: "blur",
    //     },
    //   ],
    // },
  ];

  const headingParalaxData = [
    // {
    //   start: "0vh",
    //   end: "50vh",
    //   properties: [
    //     {
    //       startValue: "block",
    //       endValue: "none",
    //       property: "display",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="all_content">
      <Plx className="content_second" parallaxData={headingParalaxData}>
        <div className="blur-text">
          <h1>Biografía</h1>
          <p>
            kingkong five{" "}
            <strong> nace en usme, localidad al sur de bogotá/colombia</strong>;
            y desde el año 2019 hemos estado en la busqueda constante de un
            sonido propio, trabajamos por alimentar la idea de la música como un
            viaje emocional. Por eso indagamos en sonidos que nos haga sentir
            mas
            <strong> latinoamericanos.</strong>
          </p>
          <p>
            <strong>"King Kong Five en vivo" es una experiencia musical</strong>
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
              yoki barrios la familia & el barragán, ras jahonnann, barbero 507,
              la severa matacera, blamblam fever, elemento rustico, entre otras.
            </strong>
          </p>

          <p>
            Podrán disfrutar de una mezcla de diferentes influencias musicales
            que han marcado nuestro nacimiendo
          </p>

          <p>Sean bienvenid@s y buen viaje</p>

          <p>
            <strong>
              "King Kong Five en la actualidad está trabajando en su primer ep."
            </strong>
          </p>
        </div>
        <div className="blur-img">
          <img src={agrupacion} />
        </div>
      </Plx>
    </div>
  );
};

export default SecondComponent;
