import React from "react";
import HeaderNav from "../components/NavBar";
import Intro from "../components/Intro";
import SecondComponent from "../components/SecondComponent";
import TheBand from "../components/TheBand";
import Trayectoria from "../components/Trayectoria";
import Footer from "../components/Footer";

const Rutas = () => {
  return (
    <div>
      <HeaderNav />
      <Intro />
      <div className="division"></div>
      <SecondComponent />
      <div className="division"></div>
      <TheBand />
      <div className="division"></div>
      <Trayectoria />
      <Footer />
    </div>
  );
};

export default Rutas;
