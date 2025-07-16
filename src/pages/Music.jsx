import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import '../../src/css/music.css';

export default function Music() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const gameColors = {
    Minecraft: '#62b957',
    Cyberpunk: '#ff0055',
    COD: '#ff6d00',
    Fortnite: '#ff66c4',
    Zelda: '#5dadec',
    'League of Legends': '#ff9900',
    'Genshin Impact': '#ee5a8a',
    'The Witcher': '#c3954e',
    'Among Us': '#ba3e3e',
    'Valorant': '#ff4655'
  };

  const songList = [
    {
      title: "Chicken Lava",
      artist: "Steve",
      album: "Minecraft Mayhem",
      duration: "2:36",
      game: "Minecraft",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "Diamond Hustle",
      artist: "Alex",
      album: "Block Beats",
      duration: "3:02",
      game: "Minecraft",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      title: "Cyber Pulse",
      artist: "Glitchbyte",
      album: "Night Synth",
      duration: "4:11",
      game: "Cyberpunk",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      title: "Warfare Echo",
      artist: "Sniper X",
      album: "COD Beats",
      duration: "2:45",
      game: "COD",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
      title: "Battle Royale Anthem",
      artist: "Jonesy",
      album: "Fortnite Official",
      duration: "3:18",
      game: "Fortnite",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      title: "Hyrule Dreams",
      artist: "Zelda Orchestra",
      album: "Breath of the Wild",
      duration: "5:22",
      game: "Zelda",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
      title: "Summoner's Rift",
      artist: "League Sound Team",
      album: "LoL Champions",
      duration: "3:45",
      game: "League of Legends",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
      title: "Teyvat Overture",
      artist: "Hoyomix",
      album: "Genshin Impact OST",
      duration: "4:30",
      game: "Genshin Impact",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
      title: "Toss a Coin",
      artist: "Percival",
      album: "The Witcher 3",
      duration: "2:58",
      game: "The Witcher",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    {
      title: "Suspicious Activity",
      artist: "Crewmate Collective",
      album: "Among Us OST",
      duration: "1:45",
      game: "Among Us",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    {
      title: "Spike Rush",
      artist: "Valorant Sound Team",
      album: "Valorant Official",
      duration: "3:12",
      game: "Valorant",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    },
    {
      title: "Nether Steps",
      artist: "Steve & Alex",
      album: "Minecraft Nether",
      duration: "3:40",
      game: "Minecraft",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    }
  ];

  const filteredSongs = songList.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSongClick = (song) => {
    if (currentSong && currentSong.title === song.title) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current.play();
      }, 0);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {currentSong && (
          <div className="now-playing" style={{ backgroundColor: gameColors[currentSong.game] }}>
            <div className="now-playing-info">
              <div 
                className="now-playing-disc"
                style={{ backgroundColor: gameColors[currentSong.game] }}
              >
                {isPlaying && <div className="disc-inner-spin"></div>}
              </div>
              <div>
                <h4>{currentSong.title}</h4>
                <p>{currentSong.artist}</p>
              </div>
            </div>
            <div className="now-playing-controls">
              <button onClick={() => {
                if (isPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
                setIsPlaying(!isPlaying);
              }}>
                {isPlaying ? '⏸' : '▶'}
              </button>
            </div>
            <audio
              ref={audioRef}
              src={currentSong.audio}
              onEnded={handleAudioEnd}
            />
          </div>
        )}

        <div className="song-grid">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song, idx) => (
              <div 
                key={idx} 
                className={`song-card ${currentSong?.title === song.title ? 'active' : ''}`}
                onClick={() => handleSongClick(song)}
              >
                <div 
                  className="song-disc"
                  style={{ backgroundColor: gameColors[song.game] }}
                >
                  {currentSong?.title === song.title && isPlaying && (
                    <div className="disc-inner-spin"></div>
                  )}
                </div>
                <div className="song-meta">
                  <h4>{song.title}</h4>
                  <p>{song.artist}</p>
                  <p className="song-game" style={{ color: gameColors[song.game] }}>
                    {song.game}
                  </p>
                  <p className="song-duration">{song.duration}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-songs">No songs match your search.</p>
          )}
        </div>
      </div>
    </>
  );
}