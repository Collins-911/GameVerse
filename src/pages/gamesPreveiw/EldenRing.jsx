import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function EldenRing() {
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
            src="https://i.pinimg.com/736x/9e/50/01/9e5001b87cef5ad8a499409e4fb996f1.jpg"
            alt="Elden Ring"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Elden Ring</h1>
          <p className="genre">Action RPG | FromSoftware</p>
          <p className="release">Release Date: February 25, 2022</p>
          <p className="desc">
            Elden Ring is an open-world action RPG developed by FromSoftware and published by Bandai Namco. Set in the Lands Between, players explore a massive world filled with secrets, challenging enemies, dungeons, and powerful bosses. With a gripping story written in collaboration with George R.R. Martin, it's one of the most acclaimed games of its generation.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://en.bandainamcoent.eu/elden-ring/elden-ring', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=E3Huy2cdih0', '_blank')}
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
            <li>Massive open-world exploration</li>
            <li>Dynamic day-night and weather systems</li>
            <li>Challenging boss battles</li>
            <li>Customizable character builds</li>
            <li>Online multiplayer co-op and PvP</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Steam)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10</li>
              <li>Processor: Intel Core i5-8400 / AMD Ryzen 3 3300X</li>
              <li>Memory: 12 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 1060 / AMD Radeon RX 580</li>
              <li>Storage: 60 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11</li>
              <li>Processor: Intel Core i7-8700K / AMD Ryzen 5 3600X</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: NVIDIA GeForce GTX 1070 / AMD Radeon RX Vega 56</li>
              <li>Storage: SSD with 60 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
