// MusicPlayer.jsx
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../../src/css/music.css';

import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaRandom,
} from 'react-icons/fa';

export default function MusicPlayer() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const audioRef = useRef(null);

  const songList = [
     
  {
  title: "Chicken Lava",
  artist: "Steve",
  album: "Minecraft Mayhem",
  duration: "2:36",
  cover: "https://i.pinimg.com/736x/f4/0f/7f/f40f7f05fc20eec499f9fb8eb2814f62.jpg",
  audio: '',
  game: "Minecraft",
  onClick: () => navigate('/game/minecraft')
}

    
  ];

  const filteredSongs = songList.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSong = songList[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;
      setProgress((currentTime / duration) * 100);
    };
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayPause = () => setIsPlaying(prev => !prev);

  const handleNext = () => {
    const nextIndex = isShuffleOn
      ? Math.floor(Math.random() * songList.length)
      : (currentSongIndex + 1) % songList.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const prevIndex =
      currentSongIndex === 0 ? songList.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleVolumeChange = e => {
    const vol = e.target.value;
    setVolume(vol);
    audioRef.current.volume = vol / 100;
  };

  const handleProgressChange = e => {
    const value = e.target.value;
    audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    setProgress(value);
  };

  const toggleShuffle = () => setIsShuffleOn(prev => !prev);

  return (
    <>
      <div className="nav-container">
        <Navbar />
      </div>

      <div className="music-page">
        <div className="music-header">
          <h1 className="music-title">Game Soundtracks</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search songs..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="music-container">
          <div className="song-list">
            {filteredSongs.map((song, idx) => (
              <div
                key={idx}
                className={`song-item ${currentSongIndex === idx ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSongIndex(idx);
                  setIsPlaying(true);
                }}
              >
                <img src={song.cover} alt={song.title} className="song-cover" />
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p>{song.artist} • {song.album}</p>
                  <p
                    className="game-link"
                    onClick={e => {
                      e.stopPropagation();
                      song.onClick();
                    }}
                  >
                    From: {song.game}
                  </p>
                </div>
                <span className="song-duration">{song.duration}</span>
              </div>
            ))}
          </div>

          <div className="player-container">
            <div className="now-playing">
              <img src={currentSong.cover} alt="Now Playing" className="now-playing-cover" />
              <div className="now-playing-info">
                <h2>{currentSong.title}</h2>
                <p>{currentSong.artist} • {currentSong.album}</p>
                <p className="game-link" onClick={currentSong.onClick}>From: {currentSong.game}</p>
              </div>
            </div>

            <div className="player-controls">
              <button className="shuffle-btn" onClick={toggleShuffle}>
                <FaRandom className={isShuffleOn ? 'active' : ''} />
              </button>
              <button className="control-btn" onClick={handlePrevious}>
                <FaStepBackward />
              </button>
              <button className="play-pause-btn" onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="control-btn" onClick={handleNext}>
                <FaStepForward />
              </button>
              <div className="volume-control">
                <FaVolumeUp />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>

            <div className="progress-container">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="progress-bar"
              />
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={currentSong.audio} />
      </div>
    </>
  );
}