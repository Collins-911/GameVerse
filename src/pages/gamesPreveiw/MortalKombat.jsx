import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function MortalKombat() {
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
            src="https://i.pinimg.com/736x/db/19/79/db1979efe375808b1f207ed080a66d22.jpg"
            alt="Mortal Kombat"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Mortal Kombat</h1>
          <p className="genre">Fighting | NetherRealm Studios</p>
          <p className="release">Release Date: April 23, 2019</p>
          <p className="desc">
            Mortal Kombat is a legendary fighting game series known for its intense combat, iconic characters, and brutal fatalities. Choose your fighter and master powerful combos as you battle through the tournament of realms.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.mortalkombat.com/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=7zwQPJmg-Kg', '_blank')}
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
            <li>Intense 1v1 combat with cinematic finishers</li>
            <li>Iconic characters like Scorpion, Sub-Zero, Raiden</li>
            <li>Story mode, Towers, and online multiplayer</li>
            <li>Brutal Fatalities and crushing blows</li>
            <li>Customizable fighters and gear</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaWindows /> Windows PC</p>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7/10 (64-bit)</li>
              <li>Processor: Intel Core i5-750 / AMD Phenom II X4 965</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 670 / AMD Radeon HD 7950</li>
              <li>Storage: 100 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 (64-bit)</li>
              <li>Processor: Intel Core i7-3770 / AMD Ryzen 5 2600</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 980 / AMD Radeon RX 470</li>
              <li>Storage: SSD with 100 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
