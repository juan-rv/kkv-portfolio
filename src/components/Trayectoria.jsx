import React, { useRef } from "react";
import "../styles/Trayectoria.css";

const Trayectoria = () => {
  const sectionRef = useRef();

  return (
    <div className="trayectoria" id="trayectoria" ref={sectionRef}>
      <div className="info_trayectoria">
        <h1> Trayectoria</h1>
      </div>
      <div className="info_dos_trayectoria">
        <h2>Aqui lo que van son las imagenes</h2>
      </div>
    </div>
  );
};

export default Trayectoria;
