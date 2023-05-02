import React from "react";
import HeaderNav from "../components/NavBar";
import Intro from "../components/Intro";
import SecondComponent from "../components/SecondComponent";
import TheBand from "../components/TheBand";
import Trayectoria from "../components/Trayectoria";

const Rutas = () => {
  return (
    <div>
      <HeaderNav />
      <Intro />
      <div className="division"></div>
      <SecondComponent />
      <div className="division"></div>
      <TheBand />
      <Trayectoria />
    </div>
  );
};

export default Rutas;
