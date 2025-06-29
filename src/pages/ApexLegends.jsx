import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ApexLegends() {
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
            src= 'https://i.pinimg.com/736x/5f/38/b3/5f38b345d89d5f835a1715fa87147f11.jpg'
            alt="Apex Legends"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Apex Legends</h1>
          <p className="genre">Battle Royale | Respawn Entertainment</p>
          <p className="release">Release Date: February 4, 2019</p>
          <p className="desc">
            Apex Legends is a fast-paced, squad-based battle royale game set in the Titanfall universe. Choose from a roster of unique Legends, each with their own abilities, and work together to survive in dynamic, ever-changing environments. With smooth gunplay, ping communication, and exciting seasonal content, it’s one of the most competitive free-to-play shooters.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.ea.com/games/apex-legends', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=innmNewjkuk', '_blank')}
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
            <li>Unique Legends with abilities</li>
            <li>Fast-paced squad gameplay</li>
            <li>Ping system for communication</li>
            <li>Seasonal events and Battle Pass</li>
            <li>Cross-platform multiplayer</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Origin / Steam)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 64-bit</li>
              <li>Processor: Intel Core i3-6300 / AMD FX-4350</li>
              <li>Memory: 6 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GT 640 / Radeon HD 7730</li>
              <li>Storage: 22 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel i5 3570K / Ryzen 5 CPU</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 970 / AMD Radeon R9 290</li>
              <li>Storage: SSD with 22+ GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
