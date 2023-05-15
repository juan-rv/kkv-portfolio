import React from "react";
import HeaderNav from "../components/NavBar";
import Intro from "../components/Intro";
import SecondComponent from "../components/SecondComponent";
import TheBand from "../components/TheBand";
import Trayectoria from "../components/Trayectoria";
import Footer from "../components/Footer";
import Backline from "../components/Backline";

import MusicDos from "../components/MusicDos";
import Contacto from "../components/Contacto";

const Rutas = () => {
  return (
    <div>
      <HeaderNav />
      <MusicDos />
      <Intro />
      <div className="division"></div>
      <SecondComponent />
      <div className="division"></div>
      <TheBand />
      <div className="division"></div>
      <Trayectoria />
      <div className="division"></div>
\
      <div className="division"></div>
      <Backline />
      <Contacto/>
      <Footer />
    </div>
  );
};

export default Rutas;
