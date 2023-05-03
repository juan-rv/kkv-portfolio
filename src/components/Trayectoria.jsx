import React, { useRef } from "react";
import "../styles/Trayectoria.css";

const Trayectoria = () => {
  const sectionRef = useRef();

  return (
    <div className="trayectoria" id="trayectoria" ref={sectionRef}>
      <div className="info_trayectoria">
        <h1> Trayectoria</h1>
        <ul>
          <li>bogot</li>
          <li>Fusa</li>
          <li>Mexico</li>
          <li>Espa;a</li>
          <li>Ecuador</li>
          <li>Westcoast</li>
          <li>Francia</li>
          <li>Liverpool</li>
          <li>Manchester</li>
        </ul>
      </div>
      <div className="info_dos_trayectoria">
        <h2>Aqui lo que van son las imagenes</h2>
      </div>
    </div>
  );
};

export default Trayectoria;
