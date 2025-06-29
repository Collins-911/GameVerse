import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox, FaMobileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FallGuys() {
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
            src="https://i.pinimg.com/736x/70/fb/7e/70fb7eb36aa360a5fe2ee01649183fff.jpg"
            alt="Fall Guys"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Fall Guys</h1>
          <p className="genre">Battle Royale / Party | Mediatonic</p>
          <p className="release">Release Date: August 4, 2020</p>
          <p className="desc">
            Fall Guys is a massively multiplayer party game where dozens of contestants battle through rounds of wacky obstacle courses until one victor remains. With colorful visuals, chaotic physics, and endless fun, it's a delightful spin on the battle royale genre.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.fallguys.com', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=Q73Uxxrz6P4', '_blank')}
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
            <li>Fun and chaotic 60-player rounds</li>
            <li>Lots of obstacle courses and mini-games</li>
            <li>Seasonal themes and costumes</li>
            <li>Cross-platform multiplayer</li>
            <li>Frequent updates and collaborations</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Epic Games)</p>
          <p><FaMobileAlt /> Coming Soon to Mobile</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i5 or equivalent</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 660 / AMD Radeon HD 7950</li>
              <li>Storage: 2 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i7 / AMD Ryzen 5</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 1060 / AMD RX 580</li>
              <li>Storage: SSD with 2 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
