import React, { useRef } from "react";
import "../styles/BackLine.css";

const Backline = () => {
  const sectionRef = useRef();

  return (
    <div className="backline" id="backLine" ref={sectionRef}>
      <h1>BackLine</h1>
      <div className="backIzq">
        <div className="a">
          <h2>Audio Sala</h2>
        </div>
        <div className="b">
          <h2>Consolas Sugeridas</h2>
        </div>
        <div className="c">
          <h2>Procesadores de Mezcla Consola Analoga</h2>
        </div>
        <div className="d">
          <h2>Monitoreo</h2>
        </div>
      </div>
      <div className="backDer">
        <div>
          <h2>Backline</h2>
        </div>
        <div>
          <h2>Obligatorio</h2>
        </div>
        <div>
          <h2>Registro audio visual y fotograficos</h2>
        </div>
      </div>
    </div>
  );
};

export default Backline;
