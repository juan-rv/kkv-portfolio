import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import song from "../assets/audio/dano.mp3";

import "../styles/MusicDos.css";

const MusicDos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(song);

  //   const [playlist, setPlaylist] = useState([
  //     {
  //       url: { song },
  //       title: "Canción 1",
  //       artist: "Artista 1",
  //     },
  //     {
  //       url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
  //       title: "Canción 2",
  //       artist: "Artista 2",
  //     },
  //     {
  //       url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
  //       title: "Canción 3",
  //       artist: "Artista 3",
  //     },
  //   ]);

  //   const audioRef = useRef();

  //   useEffect(() => {
  //     // Opcional: Lógica adicional al cargar el componente
  //   }, []);

  //   const handlePlay = (index) => {
  //     audioRef.current.playIndex(index);
  //   };

  //   const handlePause = () => {
  //     audioRef.current.pause();
  //   };

  //   const handleNext = () => {
  //     audioRef.current.playNext();
  //   };

  //   const handlePrevious = () => {
  //     audioRef.current.playPrevious();
  //   };

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
      <h2>Playing Now</h2>
      <img className="musicCover" src="https://picsum.photos/200/200" />
      <div>
        <h3 className="title">Me HAces Dan</h3>
        <p className="subTitle">Qala</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default MusicDos;
