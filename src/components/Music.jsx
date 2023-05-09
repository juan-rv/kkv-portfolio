import React from "react";
import { useEffect, useState, useRef } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi({
  clientId: "79f8d8b094e9485fa1eb8b664e16792e",
  clientSecret: "6a50792759e141adbd37a45a145a4beb",
});

const Music = () => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    spotifyApi
      .getArtist("2QM0o1LMlCWVIFDfNEbXxA")
      .then((data) => setArtist(data))
      .catch((error) => console.log(error));
  }, []);

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    spotifyApi
      .getArtistTopTracks("2QM0o1LMlCWVIFDfNEbXxA", "US")
      .then((data) => setTracks(data.tracks))
      .catch((error) => console.log(error));
  }, []);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const index = tracks.indexOf(currentTrack);
    if (index < tracks.length - 1) {
      setCurrentTrack(tracks[index + 1]);
    } else {
      setCurrentTrack(tracks[0]);
    }
    setIsPlaying(true);
  };

  const audioRef = useRef();

  return (
    <div>
      <h1>artist</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <span>{track.name}</span>
            <button onClick={() => setCurrentTrack(track)}>Play</button>
          </li>
        ))}
      </ul>
      {currentTrack && (
        <div>
          <audio src={currentTrack.preview_url} ref={audioRef} />
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Music;
