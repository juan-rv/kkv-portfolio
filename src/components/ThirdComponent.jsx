import React, { useRef } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import Plx from "react-plx";

import "../styles/ThirdComponent.css";

const ThirdComponent = () => {
  const { scrollY } = useViewportScroll();
  const translateY = useTransform(scrollY, [0, window.innerHeight], [0, -200]);

  const sectionRef = useRef();
  return (
    <Plx
      parallaxData={[
        {
          start: "self",
          duration: "100%",
          properties: [{ startValue: 1, endValue: 0, property: "opacity" }],
        },
      ]}
    >
      <div
        className="box"
        id="third"
        ref={sectionRef}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <h2>Titulo de la caja</h2>
        <p>Contenido de la caja</p>
      </div>
    </Plx>
  );
};

export default ThirdComponent;
