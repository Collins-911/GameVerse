import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox, FaMobileAlt } from 'react-icons/fa';


export default function AmongUs() {


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
            src="https://i.pinimg.com/736x/cc/dd/b8/ccddb85e9c34b05438bc12466d706a27.jpg"
            alt="Among Us"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Among Us</h1>
          <p className="genre">Party | Innersloth</p>
          <p className="release">Release Date: June 15, 2018</p>
          <p className="desc">
            Among Us is a multiplayer party game where players work together to complete tasks aboard a spaceship while trying to identify the impostors among the crew. With deception, teamwork, and chaos, it’s a fun and engaging social game that’s perfect for groups of friends or online matches.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.innersloth.com/games/among-us/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=NSJ4cESNQfE', '_blank')}
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
            <li>Multiplayer with up to 15 players</li>
            <li>Play as a Crewmate or Impostor</li>
            <li>Voice and text chat support</li>
            <li>Cross-platform play</li>
            <li>Customizable characters and settings</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaWindows /> Windows PC</p>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaMobileAlt /> Android & iOS</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 7 SP1+</li>
              <li>Processor: SSE2 instruction set support</li>
              <li>Memory: 1 GB RAM</li>
              <li>Graphics: Any integrated or dedicated GPU</li>
              <li>Storage: 250 MB available space</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10</li>
              <li>Processor: 2.0+ GHz</li>
              <li>Memory: 2 GB RAM</li>
              <li>Graphics: Dedicated GPU for stable frame rate</li>
              <li>Storage: SSD with 250 MB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
