import React, { useRef } from "react";
import "../styles/BackLine.css";

const Backline = () => {
  const sectionRef = useRef();

  return (
    <div className="backline" id="backLine" ref={sectionRef}>
      <h1>
        En esta seccion va el backline y los requerimientos minimos que se
        necesitasn para poder tocar
      </h1>

      <h2>
        Una lista con los requerimientos basicos de la agrupacion musical kkv
      </h2>
    </div>
  );
};

export default Backline;
