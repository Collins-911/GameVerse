import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Minecraft() {
  const navigate = useNavigate();

  return (
    <div className="gtav-page">
      <div className="gtav-header">
        <button className="gtav-back-btn" onClick={() => navigate('/game')}>
          <FaArrowLeft />
        </button>
      </div>

      <div className="gtav-hero gtav-box">
        <div className="gtav-img-container">
          <img
            src="https://i.pinimg.com/736x/de/ce/65/dece6598fdf563de127c78ca5c0e3c68.jpg"
            alt="Minecraft"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Minecraft</h1>
          <p className="genre">Sandbox | Mojang Studios</p>
          <p className="release">Release Date: November 18, 2011</p>
          <p className="desc">
            Minecraft is a sandbox game that lets players explore, build, and survive in an infinite blocky world. Mine resources, craft tools, and unleash your creativity in survival, creative, or multiplayer modes. From redstone machines to sprawling cities, anything is possible in Minecraft.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.minecraft.net', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=MmB9b5njVbA', '_blank')}
          >
            Watch Trailer
          </button>
          <div className="gtav-rating">
            <strong>Rating:</strong>
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>

      <div className="gtav-extra-section">
        <div className="gtav-features gtav-box">
          <h2>Key Features</h2>
          <ul>
            <li>Creative and Survival modes</li>
            <li>Infinite, procedurally generated worlds</li>
            <li>Crafting, building, farming, and redstone circuits</li>
            <li>Multiplayer servers and Realms</li>
            <li>Cross-platform play and mods support</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows, macOS, Linux</p>
          <p>Also available on Android, iOS, and Nintendo Switch</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 or later</li>
              <li>Processor: Intel Core i3-3210 / AMD A8-7600</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: Intel HD Graphics 4000 / AMD Radeon R5</li>
              <li>Storage: 1 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Average</h3>
            <ul>
              <li>OS: Windows 10</li>
              <li>Processor: Intel Core i5-4690 / AMD A10-7800</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GeForce 700 Series / AMD Radeon Rx 200</li>
              <li>Storage: 4 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
