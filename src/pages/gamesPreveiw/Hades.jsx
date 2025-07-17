import '../../css/gamepreview.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

export default function Hades() {
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
            src="https://i.pinimg.com/1200x/16/42/34/1642347946121d4fb51be5319ac878a4.jpg"
            alt="Hades"
            className="game-img"
          />
        </div>
        <div className="game-info">
          <h1>Hades</h1>
          <p className="genre">Roguelike / Action | Supergiant Games</p>
          <p className="release">Release Date: September 17, 2020</p>
          <p className="desc">
            Defy the god of the dead as you battle out of the Underworld in this rogue-like dungeon crawler.
            Wield the powers and mythic weapons of Olympus, build relationships with colorful characters,
            and experience a story that unfolds across multiple escape attempts.
            With addictive combat and stunning hand-painted art, no two runs are ever the same.
          </p>
          <button
            className="game-play-btn"
            onClick={() => window.open('https://www.supergiantgames.com/games/hades/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="game-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=zgAU3LQqC7I', '_blank')}
          >
            Watch Trailer
          </button>
          <div className="game-rating">
            <strong>Rating:</strong>
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <span className="rating-text"> (97% Overwhelmingly Positive on Steam)</span>
          </div>
        </div>
      </div>

      <div className="game-extra-section">
        <div className="game-features game-box">
          <h2>Key Features</h2>
          <ul>
            <li>Dynamic hack-and-slash combat</li>
            <li>6 unique weapons with 4 aspects each</li>
            <li>100+ Olympian Boon combinations</li>
            <li>Fully voice-acted characters</li>
            <li>New story reveals after every run</li>
          </ul>
        </div>

        <div className="game-platforms game-box">
          <h2>Available On</h2>
          <p><FaWindows /> Windows PC (Steam/Epic)</p>
          <p><FaPlaystation /> PlayStation 4/5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><SiNintendoswitch /> Nintendo Switch</p>
        </div>
      </div>

      <div className="game-system-req game-box">
        <h2>System Requirements</h2>
        <div className="game-req-section">
          <div className="game-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 SP1 (64-bit)</li>
              <li>Processor: Dual Core 2.4 GHz</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: 1GB VRAM / DirectX 10+</li>
              <li>Storage: 15 GB available space</li>
            </ul>
          </div>

          <div className="game-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 (64-bit)</li>
              <li>Processor: Quad Core 3.0 GHz</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: 2GB VRAM / DirectX 12</li>
              <li>Storage: SSD with 15 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
