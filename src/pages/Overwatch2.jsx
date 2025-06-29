import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Overwatch2() {
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
            src="https://i.pinimg.com/736x/57/c6/01/57c6019c1c7ca1db67a88aee6c0d5cf7.jpg"
            alt="Overwatch 2"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Overwatch 2</h1>
          <p className="genre">FPS / Hero Shooter | Blizzard Entertainment</p>
          <p className="release">Release Date: October 4, 2022</p>
          <p className="desc">
            Overwatch 2 is a free-to-play team-based shooter set in a vibrant future where every match is a fast-paced clash of unique heroes. With evolving seasonal content, PvP and PvE modes, and iconic team combat, Overwatch 2 expands the universe with new stories and dynamic gameplay.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://overwatch.blizzard.com', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=dushZybUYnM', '_blank')}
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
            <li>5v5 multiplayer battles</li>
            <li>Over 30 unique heroes with distinct roles</li>
            <li>Seasonal events and battle pass</li>
            <li>New PvE story missions (live service)</li>
            <li>Cross-play and cross-progression</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Battle.net)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i3 / AMD Phenom X3 8650</li>
              <li>Memory: 6 GB RAM</li>
              <li>Graphics: NVIDIA GTX 600 series / AMD HD 7000 series</li>
              <li>Storage: 50 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 64-bit</li>
              <li>Processor: Intel Core i7 / AMD Ryzen 5</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 1060 / AMD RX 580</li>
              <li>Storage: SSD with 50 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
