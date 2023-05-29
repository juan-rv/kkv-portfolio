import React, { useRef } from "react";
import "../styles/BackLine.css";

const Backline = () => {
  const sectionRef = useRef();

  return (
    <div className="backline" id="backLine" ref={sectionRef}>
      <div className="backText">
        <h1>BackLine</h1>
      </div>
      <div className="back">
        <div className="backIzq">
          <div className="a">
            <h3>Audio Sala</h3>
            <p>Sistema Profesional con las siguientes caracteristicas:</p>
            <ul>
              <li>
                2 vias minimo estereo 110 db promedio en FOH, sin Caida mayor.
              </li>
              <li>
                Sistemas Profesionales, marcas sugeridas: DAS, JBL, Electro
                Voice.
              </li>
            </ul>
          </div>
          <div className="b">
            <h3>Consolas Sugeridas</h3>
            <ul>
              <li>m7cl,ls9</li>
              <li>tascam dm4800</li>
              <li>allen & heakth gl o ml series min 32ch</li>
              <li>chrest min 32ch</li>
              <li>mackie min 32ch</li>
            </ul>
            <p>
              8 grupo, 4 bandas parametricas y minimo 8 auxiliares pre/post e
              inset point en todos los canales y subgrupos.
            </p>
          </div>
          <div className="c">
            <h3>Procesadores de Mezcla consola Analoga</h3>
            <ul>
              <li>2 ecualizador ashly gqx estereo</li>
              <li>1 procesador multiefectos yamaha lexicon, tc</li>
            </ul>
          </div>
          <div className="d">
            <h3>Monitor</h3>
            <ul>
              <li>5 mezclas de monitores</li>
              <li>mezcla 1 (1 altavoz min 1000 w c/u)</li>
              <li>mezcla 2 (1 altavoz min 1000 w c/u)</li>
              <li>mezcla 3 & 4 (sistema 2 vias o minimo fullrange con sub)</li>
              <li>mezcla 5 (bateria)</li>
              <li> 3 ecualizadores ashly gqx estereo</li>
              <li>1 procesador multiefectos yamaha</li>
            </ul>
          </div>
        </div>

        <div className="backDer">
          <div>
            <h3>BackLine</h3>
            <ul>
              <li>
                <strong>Guitarra: </strong> 2 Amplificadores de 100w
                respectivamente
              </li>
              <li>
                <strong>Bajo: </strong>Amplificador laney sistema 4 X 10 con 1 X
                15 bi amplificado 500W minimo.
              </li>
              <li>
                <stron>Bateria: </stron>Yamaha, mapex alta Gama.
              </li>
            </ul>
          </div>
          <div>
            <h3>Obligatorio</h3>
            <ul>
              <li>Base para piano</li>
              <li>Hidratacion</li>
              <li>Proyeccion visual de imagenes ofificiales del grupo</li>
              <li>Atriles</li>
            </ul>
          </div>
          <div>
            <h3>Registro audio Visual y fotograficos</h3>
            <h4>
              La organizacion del evento ademas autoriza a la banda a realizar
              fotografias y grabaciones en audio y/o video, antes, durante y
              despues de la presentacion en la tarima y zona de prensa, oara los
              usos que la banda estime convenientes.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backline;
