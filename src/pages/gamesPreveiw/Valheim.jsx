import '../../css/gamepreview.css'
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaWindows } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Valheim() {
  const navigate = useNavigate();

  return (
    <div className="game-page">
      <div className="game-header">
        <button className="game-back-btn" onClick={() => navigate('/game')}>
          <FaArrowLeft />
        </button>
      </div>

      <div className="game-hero game-box">
        <div className="game-img-container">
          <img
            src="https://i.pinimg.com/1200x/a4/aa/ba/a4aaba2332db8964682f8c694acf79ef.jpg"
            alt="Valheim"
            className="game-img"
          />
        </div>
        <div className="game-info">
          <h1>Valheim</h1>
          <p className="game-genre">Survival / Sandbox | Iron Gate AB</p>
          <p className="game-release">Release Date: February 2, 2021</p>
          <p className="game-desc">
            Valheim is a brutal exploration and survival game set in a procedurally generated world inspired by Norse mythology. Craft powerful weapons, build mighty longhouses, and defeat ancient evils to prove yourself to Odin. Play solo or with up to 10 players in this Viking purgatory.
          </p>
          <button
            className="game-play-btn"
            onClick={() => window.open('https://www.valheimgame.com/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="game-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=liQLtCLq3tc', '_blank')}
          >
            Watch Trailer
          </button>
          <div className="game-rating">
            <strong>Rating:</strong>
            <span className="game-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </div>
        </div>
      </div>

      <div className="game-extra-section">
        <div className="game-features game-box">
          <h2>Key Features</h2>
          <ul>
            <li>Procedurally generated Viking world</li>
            <li>Co-op survival for 1-10 players</li>
            <li>Build ships, mead halls, and fortresses</li>
            <li>Boss fights inspired by Norse legends</li>
            <li>Dynamic weather and day/night cycles</li>
          </ul>
        </div>

        <div className="game-platforms game-box">
          <h2>Available On</h2>
          <p><FaWindows /> Windows PC (Steam)</p>
          <p>Linux</p>
          <p>Xbox One, Series X|S (Game Preview)</p>
        </div>
      </div>

      <div className="game-system-req game-box">
        <h2>System Requirements</h2>
        <div className="game-req-section">
          <div className="game-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 (64-bit)</li>
              <li>Processor: Dual core 2.6 GHz</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: GTX 500 series / AMD Radeon HD 6000</li>
              <li>Storage: 1 GB available space</li>
            </ul>
          </div>

          <div className="game-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 (64-bit)</li>
              <li>Processor: Quad core 3.0 GHz</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: GTX 970 / Radeon RX 580</li>
              <li>Storage: SSD with 2 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
