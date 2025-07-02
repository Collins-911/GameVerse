import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Fortnite() {
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
            src="https://i.pinimg.com/736x/f4/e0/35/f4e035d56c43d6ec0a4993511e15440d.jpg"
            alt="Fortnite"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Fortnite</h1>
          <p className="genre">Battle Royale | Epic Games</p>
          <p className="release">Release Date: July 25, 2017</p>
          <p className="desc">
            Fortnite is a battle royale game where up to 100 players fight to be the last one standing. Build structures, loot weapons, and explore ever-changing maps. Known for its colorful visuals, frequent events, and creative modes, Fortnite is more than just a shooter—it's a global gaming phenomenon.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.fortnite.com', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=2gUtfBmw86Y', '_blank')}
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
            <li>Fast-paced 100-player battle royale</li>
            <li>Creative building mechanics</li>
            <li>Frequent content updates & live events</li>
            <li>Multiple game modes (Creative, Save the World, etc.)</li>
            <li>Cross-platform multiplayer</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows, macOS</p>
          <p>Also available on Android, iOS (via cloud), and Nintendo Switch</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7/8/10 64-bit</li>
              <li>Processor: Core i3-3225 3.3 GHz</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: Intel HD 4000</li>
              <li>Storage: 30 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Average</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Core i5-7300U 3.5 GHz</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 960 / AMD R9 280</li>
              <li>Storage: 30 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
