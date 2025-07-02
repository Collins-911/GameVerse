import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function GOW() {
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
            src="https://i.pinimg.com/736x/52/45/0c/52450ce16805ce1c0ef4bb1473877b55.jpg"
            alt="God of War"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>God of War</h1>
          <p className="genre">Action-Adventure | Santa Monica Studio</p>
          <p className="release">Release Date: April 20, 2018 (PS4) | January 14, 2022 (PC)</p>
          <p className="desc">
            God of War reimagines the iconic PlayStation franchise with a new Norse mythology setting, introducing Kratos as a father guiding his son Atreus. Experience intense combat, emotional storytelling, and breathtaking environments in one of the most critically acclaimed action-adventure games ever made.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.playstation.com/en-us/games/god-of-war/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=K0u_kAWLJOA', '_blank')}
          >
            Watch Trailer
          </button>
          <div className="gtav-rating">
            <strong>Rating:</strong>
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </div>
        </div>
      </div>

      <div className="gtav-extra-section">
        <div className="gtav-features gtav-box">
          <h2>Key Features</h2>
          <ul>
            <li>Deep, story-driven single-player campaign</li>
            <li>Brutal and cinematic third-person combat</li>
            <li>Immersive Norse mythology world</li>
            <li>Upgrade system for weapons and skills</li>
            <li>Dynamic father-son relationship with Atreus</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaWindows /> Windows PC (Steam / Epic)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel i5-2500k / AMD Ryzen 3 1200</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 960 / AMD R9 290X</li>
              <li>Storage: 70 GB HDD</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 64-bit</li>
              <li>Processor: Intel i5-6600k / AMD Ryzen 5 2400 G</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: NVIDIA GTX 1060 / AMD RX 570</li>
              <li>Storage: SSD with 70 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
