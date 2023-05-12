import React from "react";

const Music = () => {
  return (
    <div>
      <audio controls>
        <source
          src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
          type="audio/mp3"
        />
        Tu navegador no soporta audio HTML5.
      </audio>
    </div>
  );
};

export default Music;
