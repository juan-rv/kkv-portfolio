import React from "react";
import HeaderNav from "../components/NavBar";
import Intro from "../components/Intro";
import SecondComponent from "../components/SecondComponent";
import TheBand from "../components/TheBand";
import Trayectoria from "../components/Trayectoria";
import Backline from "../components/Backline";
import Contacto from "../components/Contacto";
import MusicDos from "../components/MusicDos";

const Rutas = () => {
  return (
    <div>
      <HeaderNav />
      <Intro />
      <SecondComponent />
      <TheBand />
      <Trayectoria />
      <Backline />
      <Contacto/>
      <MusicDos/>
    </div>
  );
};

export default Rutas;
