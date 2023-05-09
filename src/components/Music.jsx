import React from "react";
import ReactPlayer from "react-player";

const Music = () => {
  return (
    <div>
      <h1>Reproductor de musica</h1>
      <ReactPlayer
        url="https://drive.google.com/file/d/1-50Z9Bh9zp0p4FSgc7bfkkrbDhksOg_P/view"
        playing
      />
    </div>
  );
};

export default Music;
