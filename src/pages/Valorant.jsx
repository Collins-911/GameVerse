import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Valorant() {
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
            src="https://i.pinimg.com/736x/d0/19/7a/d0197a30b65d0af127feabee4fd7808b.jpg"
            alt="Call of Duty Warzone"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1> Valorant</h1>
          <p className="genre">Battle Royale | Activision</p>
          <p className="release">Release Date: March 10, 2020</p>
          <p className="desc">
            Call of Duty: Warzone is a free-to-play battle royale game set in the Call of Duty universe. Drop into a massive combat arena, loot for weapons, and fight to be the last one standing. With regular updates, new maps, and high-paced action, Warzone offers one of the most thrilling multiplayer experiences available.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.callofduty.com/warzone', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=9wAAqFWEGdY', '_blank')}
          >
            Watch Trailer
          </button>
          <div className="gtav-rating">
            <strong>Rating:</strong>
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>

      <div className="gtav-extra-section">
        <div className="gtav-features gtav-box">
          <h2>Key Features</h2>
          <ul>
            <li>Battle Royale and Resurgence modes</li>
            <li>Massive maps and diverse terrain</li>
            <li>Weapons loadouts and killstreaks</li>
            <li>Squad-based tactical combat</li>
            <li>Cross-platform play</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Battle.net / Steam)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i3-4340 / AMD FX-6300</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 670 / GTX 1650 / Radeon HD 7950</li>
              <li>Storage: 125 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i5-2500K / Ryzen R5 1600X</li>
              <li>Memory: 12 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 970 / GTX 1660 / Radeon R9 390</li>
              <li>Storage: SSD with 125 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
