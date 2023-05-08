import React, { useRef } from "react";

const Plataformas = () => {
  const sectionRef = useRef();

  return (
    <div id="plataformas" ref={sectionRef}>
      <h1>Plataformas Digitales</h1>
      <h3>Spotify</h3>
      <h3>Youtube</h3>
      <h3>Instagram</h3>
      <h3>Facebook</h3>
    </div>
  );
};

export default Plataformas;
