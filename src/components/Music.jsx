import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "../styles/Music.css"; // Importa tu archivo de estilos CSS personalizado aquí
import song from "../assets/audio/dano.mp3";

const Music = () => {
  const audioRef = useRef();

  useEffect(() => {
    // Inicializar el reproductor Plyr cuando el componente se monta
    const player = new Plyr(audioRef.current, { autoplay: true });

    // Opcional: Suscribirse a eventos de Plyr según tus necesidades
    player.on("play", () => {
      console.log("El audio ha comenzado a reproducirse");
    });

    // Opcional: Limpieza al desmontar el componente
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="audio-player-container">
      {/* Agrega la clase para el contenedor */}
      <audio ref={audioRef}>
        <source src={song} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Music;
