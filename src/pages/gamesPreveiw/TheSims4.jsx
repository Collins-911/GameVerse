import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TheSims4() {
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
            src="https://i.pinimg.com/736x/04/04/27/0404275e4e2a219d3bba838a2d29c5f0.jpg"
            alt="The Sims 4"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>The Sims 4</h1>
          <p className="genre">Life Simulation | Maxis / EA</p>
          <p className="release">Release Date: September 2, 2014</p>
          <p className="desc">
            The Sims 4 is a life simulation game where you create and control people in a customizable world. Design homes, develop relationships, pursue careers, and shape your Sims' lives with limitless possibilities. The base game is free-to-play with optional expansion packs.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.ea.com/games/the-sims/the-sims-4', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=5bjx4hE8X8I', '_blank')}
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
            <li>Create-a-Sim customization tool</li>
            <li>Build Mode for home design</li>
            <li>Emotional Sim AI system</li>
            <li>Career paths and life goals</li>
            <li>Massive DLC and mod support</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4</p>
          <p><FaXbox /> Xbox One</p>
          <p><FaWindows /> Windows PC (Origin / Steam)</p>
          <p>macOS</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 (64-bit)</li>
              <li>Processor: Intel Core i3 / AMD Ryzen 3</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: NVIDIA GTX 650 / AMD Radeon HD 7750</li>
              <li>Storage: 26 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 (64-bit)</li>
              <li>Processor: Intel Core i5 / AMD Ryzen 5</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 960 / AMD Radeon R9 380</li>
              <li>Storage: SSD with 26+ GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
