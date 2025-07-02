import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NBA2K24() {
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
            src="https://i.pinimg.com/736x/c0/af/ee/c0afee2a5e127d0b819863edb740fd41.jpg"
            alt="NBA 2K24"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>NBA 2K24</h1>
          <p className="genre">Sports | 2K Sports</p>
          <p className="release">Release Date: September 8, 2023</p>
          <p className="desc">
            NBA 2K24 brings the next level of basketball simulation with realistic gameplay, enhanced MyCareer, MyTeam, and ProPLAY technology. Experience cross-play, iconic NBA moments, and customizable teams while competing online or dominating offline.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://nba.2k.com/2k24/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=Ruq6sE-KF1I', '_blank')}
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
            <li>ProPLAY animation system</li>
            <li>MyCareer with story progression</li>
            <li>MyTeam with new salary cap mode</li>
            <li>Cross-play on next-gen platforms</li>
            <li>Blacktop, MyNBA, The City, and more</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 5, PlayStation 4</p>
          <p><FaXbox /> Xbox Series X|S, Xbox One</p>
          <p><FaWindows /> Windows PC (Steam)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i3-2100 / AMD FX-6200</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: NVIDIA GT 450 / AMD HD 7770</li>
              <li>Storage: 110 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 64-bit</li>
              <li>Processor: Intel Core i5-4430 / AMD FX-8370</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 770 / AMD R9 270</li>
              <li>Storage: SSD with 110 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
