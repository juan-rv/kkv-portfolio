import React, {useRef} from "react";

const Backline = () => {
  const sectionRef = useRef();


  return (
    <div id="backLine" ref ={sectionRef}>
      <h1>
        En esta seccion va el backline y los requerimientos minimos que se
        necesitasn para poder tocar
      </h1>
      <hr />
    </div>
  );
};

export default Backline;
