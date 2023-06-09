import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { useTranslation } from "react-i18next";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import song from "../assets/audio/dano.mp3";
import songDos from "../assets/audio/somosMAs.MP3";
import songTres from "../assets/audio/amorStyle.mp3";
import portada from "../assets/logo_uno.jpg";
import portadaDos from "../assets/backOne.jpg";
import portadaTres from "../assets/agrupacion.jpeg";

import "../styles/MusicDos.css";

const MusicDos = () => {
  const [t, i18n] = useTranslation("global");

  const getYear = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    return year;
  };

  const actual = getYear();

  const songs = [
    {
      title: "Me haces Daño",
      cover: portada,
      file: song,
    },
    {
      title: "Somos Mas",
      cover: portadaDos,
      file: songDos,
    },
    {
      title: "Amor Style",
      cover: portadaTres,
      file: songTres,
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length; // calcular el índice de la siguiente canción circularmente
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(currentSong.file, {
    onend: playNextSong, // Llamar a la función playNextSong cuando la canción actual termine de reproducirse
  });

  useEffect(() => {
    play();
    setIsPlaying(true);
  }, [currentSong.file]);

  useEffect(() => {
    pause();
    setIsPlaying(false);
  }, [currentSongIndex]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // pausar la canción actual
      setIsPlaying(false);
    } else {
      play(); // reproducir la canción actual
      setIsPlaying(true);
    }
  };

  const playPreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length; // calcular el índice de la canción anterior circularmente
    setCurrentSongIndex(previousIndex);
  };

  return (
    <div className="footer">
      <div className="textFooter">
        <p>
          Copyright &copy; {actual} - {t("footer.text_one")}
        </p>
        <p>
          {t("footer.text_two")} <strong>King Kong Five</strong>
        </p>
      </div>
      <div className="component">
        <div className="musicCover">
          <img src={currentSong.cover} alt="cover" />
        </div>

        <div className="text">
          <h3 className="title">{currentSong.title}</h3>
        </div>

        <div className="buttonsMusic">
          <button className="playButton" onClick={playPreviousSong}>
            <IconContext.Provider value={{ size: "30px" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "30px" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "30px" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="playButton" onClick={playNextSong}>
            <IconContext.Provider value={{ size: "30px" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicDos;
