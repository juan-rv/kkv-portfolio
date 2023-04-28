import React from "react";
import HeaderNav from "../components/NavBar";
import Intro from "../components/Intro";
import SecondComponent from "../components/SecondComponent";
import ThirdComponent from "../components/ThirdComponent";

const Rutas = () => {
  return (
    <div>
      <HeaderNav />
      <Intro />
      <div className="division"></div>
      <SecondComponent />
      <div className="division"></div>
      <ThirdComponent />
    </div>
  );
};

export default Rutas;
