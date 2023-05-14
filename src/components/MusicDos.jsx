import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import song from "../assets/audio/dano.mp3";
import portada from "../assets/logo_uno.jpg";

import "../styles/MusicDos.css";

const MusicDos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(song);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  return (
    <div className="component">
      <div className="musicCover">
        <img src={portada} />
      </div>

      <div className="text">
        <h3 className="title">Me haces Daño</h3>
      </div>

      <div className="buttonsMusic">
        <button className="playButton">
          <IconContext.Provider value={{ size: "17px", color: "#000000" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "17px", color: "#000000" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "17px", color: "#000000" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "17px", color: "#000000" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default MusicDos;
