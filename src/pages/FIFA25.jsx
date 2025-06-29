import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function  FIFA25() {
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
            src="https://i.pinimg.com/736x/03/12/a8/0312a82b5a31474dab63f2a99e40eff6.jpg"
            alt="FIFA 25"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>EA SPORTS FC 25</h1>
          <p className="genre">Sports | EA Sports</p>
          <p className="release">Release Date: Expected September 2024</p>
          <p className="desc">
            EA SPORTS FC 25 is the next evolution in football gaming, delivering realistic gameplay, updated teams, immersive Career Mode, and improved Ultimate Team mechanics. Featuring licensed leagues, real-world atmospheres, and cross-play capabilities, it offers the most complete football simulation experience yet.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.ea.com/games/ea-sports-fc', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=UT2f7fdEHxU', '_blank')}
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
            <li>Real-player motion capture and HyperMotion V</li>
            <li>Ultimate Team with ICONs and Evolutions</li>
            <li>Manager and Player Career modes</li>
            <li>Cross-play enabled multiplayer</li>
            <li>Official licenses for leagues and clubs</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 5</p>
          <p><FaXbox /> Xbox Series X|S</p>
          <p><FaWindows /> Windows PC (EA App / Steam / Epic)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i5-6600k / AMD Ryzen 5 1600</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 1050 Ti / AMD RX 570</li>
              <li>Storage: 100 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 64-bit</li>
              <li>Processor: Intel Core i7-6700 / AMD Ryzen 7 2700X</li>
              <li>Memory: 12 GB RAM</li>
              <li>Graphics: NVIDIA RTX 2060 / AMD RX 6700 XT</li>
              <li>Storage: SSD with 100 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
