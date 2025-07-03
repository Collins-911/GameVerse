import '../gamesMade/css/snakeGame.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaGamepad, FaChrome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Typing() {
  const navigate = useNavigate();

  return (
    <div className="sg-page">
      <button className="sg-back-btn" onClick={() => navigate('/game')}>
        <FaArrowLeft />
      </button>

      <div className="sg-hero">
        <div className="sg-info">
          <h1>Fast Typing Game</h1>
          <p className="sg-meta">Skill | July 2025</p>
          <p className="sg-desc">
            Test your typing speed and accuracy! Type the words as fast as you can before time runs out. Great for improving keyboard skills.
          </p>

          <button className="sg-play-btn" onClick={() => navigate('/typinggame')}>Play Typing Game</button>
          <button
            className="sg-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=zF8sSSr8tbs', '_blank')}
          >
            Watch Gameplay
          </button>

          <div className="sg-rating">
            <strong>Rating:</strong>
            <span>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </span>
          </div>
        </div>
      </div>

      <div className="sg-extra-section">
        <div className="sg-features">
          <h2>Game Features</h2>
          <ul>
            <li>Word speed challenge</li>
            <li>Timer-based scoring system</li>
            <li>Real-time feedback</li>
            <li>Great for practicing typing skills</li>
            <li>Works on both desktop and mobile</li>
          </ul>
        </div>

        <div className="sg-platforms">
          <h2>Available On</h2>
          <p><FaChrome /> Web Browser (Desktop & Mobile)</p>
          <p><FaGamepad /> HTML5 Game Engine</p>
        </div>
      </div>
    </div>
  );
}
