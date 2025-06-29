import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function LeagueOfLegends() {
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
            src="https://i.pinimg.com/736x/e0/08/87/e008871e4a503cb16ab780575401f5f7.jpg"
            alt="League of Legends"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>League of Legends</h1>
          <p className="genre">MOBA | Riot Games</p>
          <p className="release">Release Date: October 27, 2009</p>
          <p className="desc">
            League of Legends is a fast-paced competitive online game that blends the speed and intensity of RTS with RPG elements. Players take on the role of a "champion" with unique abilities, battling in teams to destroy the enemy's base. With a huge roster of champions, frequent updates, and global tournaments, it’s a staple in the esports world.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.leagueoflegends.com', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=BGtROJeMPeE', '_blank')}
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
            <li>Massive roster of champions</li>
            <li>Strategic 5v5 team battles</li>
            <li>Ranked and casual matchmaking</li>
            <li>Frequent patches and seasonal events</li>
            <li>Esports scene with global tournaments</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaWindows /> Windows PC</p>
          <p><FaApple /> macOS</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 / macOS 10.12</li>
              <li>Processor: Intel Core i3-530</li>
              <li>Memory: 2 GB RAM</li>
              <li>Graphics: AMD Radeon HD 6570 / NVIDIA GeForce 9600GT</li>
              <li>Storage: 16 GB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 / Latest macOS</li>
              <li>Processor: Intel Core i5-3300</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: AMD Radeon HD 6950 / NVIDIA GeForce GTX 560</li>
              <li>Storage: SSD with 16 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
