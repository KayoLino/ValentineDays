import { useRef, useState, useEffect } from "react";
import ContainerWhite from '../../components/ContainerWhite';
import styles from './MusicPage.module.css';

// Musics
import blueHair from '../../assets/music/TVGirl-BlueHair.mp3';
import beabadoobee from '../../assets/music/beabadoobee-theperfectpair.mp3';
import stillWoozy from '../../assets/music/StillWoozy-GoodieBag.mp3';
import chevyUwu from '../../assets/music/chevy-uwu.mp3';
import howDemo from '../../assets/music/Howdemo.mp3';
import cucoMelting from '../../assets/music/Cuco-Melting.mp3';
import everyThingStays from '../../assets/music/EverythingStays.mp3';
import stevenEscapism from '../../assets/music/StevenUniverse-Escapism.mp3';

// Images Music
import blueHairImg from '../../assets/musicImages/blueHairImg.jpg';
import beabadoobeeImg from '../../assets/musicImages/beabadoobeeImg.jpg';
import stillWoozyImg from '../../assets/musicImages/stillWoozyImg.jpg';
import chevyUwuImg from '../../assets/musicImages/chevyUwuImg.jpg';
import howDemoImg from '../../assets/musicImages/howDemoImg.jpg';
import cucoMeltingImg from '../../assets/musicImages/cucoMeltingImg.jpg';
import everyThingStaysImg from '../../assets/musicImages/everythingStaysImg.jpg';
import stevenEscapismImg from '../../assets/musicImages/stevenEscapismImg.jpg';

//Images 
import pause from '../../assets/images/pause.png';
import play from '../../assets/images/play.png';
import next from '../../assets/images/next.png';
import back from '../../assets/images/back.png';


const playlist = [
  { name: "Blue Hair", src: blueHair, image: blueHairImg },
  { name: "The Perfect Pair", src: beabadoobee, image: beabadoobeeImg },
  { name: "Goodie Bag", src: stillWoozy, image: stillWoozyImg },
  { name: "Chevy - uwu", src: chevyUwu, image: chevyUwuImg },
  { name: "How Demo - Clairo", src: howDemo, image: howDemoImg },
  { name: "Cuco - Melting", src: cucoMelting, image: cucoMeltingImg },
  { name: "Everything Stays", src: everyThingStays, image: everyThingStaysImg },
  { name: "Escapism - AJ Michalka", src: stevenEscapism, image: stevenEscapismImg },
];

function MusicPage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleUserInteraction = () => {
    setHasInteracted(true);
  };

  useEffect(() => {
    window.addEventListener("click", handleUserInteraction);
    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleMetadata = () => {
    if (audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    if (audioRef.current && hasInteracted) {
      audioRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  }, [currentSongIndex, hasInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <ContainerWhite>
      <h1 className={styles.title_music}>Musiquinhas</h1>
      <div className={styles.section_music}>
        <ul>
          {playlist.slice(0, 4).map((song, index) => (
            <li key={index}>{index + 1}. {song.name}</li>
          ))}
        </ul>
        <ul>
          {playlist.slice(4).map((song, index) => (
            <li key={index + 4}>{index + 5}. {song.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section_player}>
        {/* Player de Áudio */}
        <audio
          ref={audioRef}
          src={playlist[currentSongIndex].src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleMetadata}
        ></audio>

        {/* Imagem e Nome da Música Atual */}
        <div className={styles.currentSongInfo}>
          <img src={playlist[currentSongIndex].image} alt={playlist[currentSongIndex].name} className={styles.songImage} />
          <h2>{playlist[currentSongIndex].name}</h2>
        </div>

        {/* Botões de Navegação entre as Músicas */}
        <div>
          <span onClick={prevSong} className={styles.navButton}>
            <span><img src={back} /></span>
          </span>
          <span onClick={togglePlay} className={styles.playButton}>
            {isPlaying ? <img src={play} alt="Play" /> : <img src={pause} alt="Pause" />}
          </span>
          <span onClick={nextSong} className={styles.navButton}>
            <span><img src={next} /></span>
          </span>
        </div>


        {/* Barra de Progresso */}
        <div className={styles.timer_play}>{formatTime(currentTime)} / {formatTime(duration)}</div>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            const newTime = Number(e.target.value);
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
          }}
        />

        {/* Controle de Volume */}
        <div className={styles.volumeControl}>
          <span>volume:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </ContainerWhite>
  );
}

export default MusicPage;
