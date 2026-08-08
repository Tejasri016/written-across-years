import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "./MusicPlayer.css";

const Music_URL = "https://res.cloudinary.com/dnvi0vxwa/video/upload/v1786167976/Hoyila_Hoyila_Instrumental_Chennai_Love_Story_Mani_Sharma_Instro_Music_xuo02u.mp3";
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (error) {
      console.log("Music could not be played:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={Music_URL}
        preload="auto"
      />

      <button
        className={`music-player ${playing ? "is-playing" : ""}`}
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className="music-icon">
          {playing ? <FaPause /> : <FaPlay />}
        </span>

        <span className="music-text">
          {playing ? "Playing" : "Our little soundtrack"}
        </span>

        <span className="music-bars">
          <i />
          <i />
          <i />
          <i />
        </span>
      </button>
    </>
  );
}