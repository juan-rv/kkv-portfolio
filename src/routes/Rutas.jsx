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

      <SecondComponent />
      <TheBand />
      <Trayectoria />

      <Backline />
      <Contacto/>
      <Footer />
    </div>
  );
};

export default Rutas;
