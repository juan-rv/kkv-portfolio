import React, { useRef } from "react";
import logo from "../assets/logo_big.png";
import "../styles/Trayectoria.css";

const Trayectoria = () => {
  const sectionRef = useRef();

  return (
    <div className="trayectoria" id="trayectoria" ref={sectionRef}>
      <div className="info_trayectoria">
        <h1> Trayectoria</h1>
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
        <img src={logo} alt="logo kkv" />
      </div>
      <div className="info_dos_trayectoria">
        <h2>Aqui lo que van son las imagenes</h2>
      </div>
    </div>
  );
};

export default Trayectoria;
