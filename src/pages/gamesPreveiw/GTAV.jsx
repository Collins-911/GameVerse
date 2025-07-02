import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function GtaV() {
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
            src="https://i.pinimg.com/736x/81/85/25/818525eae1a735b5fccd011a946c3917.jpg"
            alt="GTA V"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Grand Theft Auto V</h1>
          <p className="genre">Action-Adventure | Rockstar Games</p>
          <p className="release">Release Date: September 17, 2013</p>
          <p className="desc">
            GTA V is an open-world action-adventure game that immerses players in the lives of three criminals as they commit heists and survive the underworld of Los Santos. Explore a massive world, engage in thrilling missions, or simply roam free in a vibrant city full of chaos, vehicles, weapons, and fun.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.rockstargames.com/V', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=QkkoHAzjnUs', '_blank')}
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
            <li>Three-playable character storylines</li>
            <li>Expansive open-world environment (Los Santos & Blaine County)</li>
            <li>Wide variety of vehicles, weapons, and side missions</li>
            <li>Highly detailed graphics and weather systems</li>
            <li>Massive online multiplayer (GTA Online)</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 3, 4, 5</p>
          <p><FaXbox /> Xbox 360, One, Series X|S</p>
          <p><FaWindows /> Microsoft Windows (PC)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 64-bit</li>
              <li>Processor: Intel Core 2 Quad CPU Q6600</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB</li>
              <li>Storage: 72 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Average</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i5 3470 / AMD FX-8350</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 660 2GB / AMD HD7870 2GB</li>
              <li>Storage: 72 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
