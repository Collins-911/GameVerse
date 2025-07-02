import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function StardewValley() {
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
            src="https://i.pinimg.com/736x/2c/4b/f1/2c4bf1b641c57e84b40df079ec16984c.jpg"
            alt="Stardew Valley"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Stardew Valley</h1>
          <p className="genre">Farming Sim / RPG | ConcernedApe</p>
          <p className="release">Release Date: February 26, 2016</p>
          <p className="desc">
            Stardew Valley is a relaxing and addictive farming simulator where you inherit a rundown farm and turn it into a thriving homestead. Grow crops, raise animals, befriend villagers, explore mines, and even fall in love in this charming pixel-art open-ended RPG.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.stardewvalley.net/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=ot7uXNQskhs', '_blank')}
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
            <li>Farming, fishing, mining, and crafting</li>
            <li>Marriage and relationship system</li>
            <li>Customizable farm and character</li>
            <li>Seasonal events and festivals</li>
            <li>Multiplayer co-op up to 4 players</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, PS Vita</p>
          <p><FaXbox /> Xbox One</p>
          <p><FaWindows /> Windows PC (Steam / GOG)</p>
          <p>Nintendo Switch, iOS, Android</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows Vista or greater</li>
              <li>Processor: 2 GHz</li>
              <li>Memory: 2 GB RAM</li>
              <li>Graphics: 256 MB video memory, shader model 3.0+</li>
              <li>Storage: 500 MB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11</li>
              <li>Processor: 2.5 GHz dual-core</li>
              <li>Memory: 4 GB RAM</li>
              <li>Graphics: Integrated or dedicated GPU</li>
              <li>Storage: SSD with 500 MB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
