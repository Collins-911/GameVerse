import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function RocketLeague() {
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
            src="https://i.pinimg.com/736x/a5/91/f9/a591f986e9e7dd2e1c8004e642249edc.jpg"
            alt="Rocket League"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Rocket League</h1>
          <p className="genre">Sports / Action | Psyonix</p>
          <p className="release">Release Date: July 7, 2015</p>
          <p className="desc">
            Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem. Customize your ride, hit the pitch, and take on players in fast-paced matches that blend teamwork, speed, and explosive aerial moves. With cross-platform play and a huge competitive scene, it's a must-play.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.rocketleague.com/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=omYv4v0p2oQ', '_blank')}
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
            <li>Car-soccer competitive gameplay</li>
            <li>Cross-platform multiplayer</li>
            <li>Extensive car customization</li>
            <li>Casual, ranked, and tournament modes</li>
            <li>Seasonal events and Rocket Pass</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Epic Games)</p>
          <p>Nintendo Switch</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 (64-bit)</li>
              <li>Processor: Dual core 2.5 GHz</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: NVIDIA GTX 260 / AMD HD 4850</li>
              <li>Storage: 20 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 (64-bit)</li>
              <li>Processor: Quad core 3.0 GHz</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 1060 / AMD RX 470</li>
              <li>Storage: SSD with 20 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
