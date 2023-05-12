import React from "react";
import "../styles/Music.css";

const Music = () => {
  return (
    <div className="music-player">
      <audio controls>
        <source
          src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
          type="audio/mp3"
        />
        Tu navegador no soporta audio HTML5.
      </audio>
      <div className="button-container">
        <button className="play-button">Play</button>
        <button className="pause-button">Pause</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default Music;
