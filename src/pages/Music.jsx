// MusicPlayer.jsx
import { useState } from 'react';
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
  const [currentSongIndex] = useState(0); // no set function, static only

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
    },
     {
      title: "Chicken Lava",
      artist: "Steve",
      album: "Minecraft Mayhem",
      duration: "2:36",
      cover: "https://i.pinimg.com/736x/f4/0f/7f/f40f7f05fc20eec499f9fb8eb2814f62.jpg",
      audio: '',
      game: "Minecraft",
      onClick: () => navigate('/game/minecraft')
    },
     {
      title: "Chicken Lava",
      artist: "Steve",
      album: "Minecraft Mayhem",
      duration: "2:36",
      cover: "https://i.pinimg.com/736x/f4/0f/7f/f40f7f05fc20eec499f9fb8eb2814f62.jpg",
      audio: '',
      game: "Minecraft",
      onClick: () => navigate('/game/minecraft')
    },
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
                <p className="game-link" onClick={currentSong.onClick}>
                  From: {currentSong.game}
                </p>
              </div>
            </div>

            <div className="player-controls">
              <button className="shuffle-btn">
                <FaRandom />
              </button>
              <button className="control-btn">
                <FaStepBackward />
              </button>
              <button className="play-pause-btn">
                <FaPlay />
              </button>
              <button className="control-btn">
                <FaStepForward />
              </button>
              
            </div>

          </div>
        </div>

        <audio src={currentSong.audio} />
      </div>
    </>
  );
}
