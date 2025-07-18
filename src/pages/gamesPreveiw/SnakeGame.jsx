import '../gamesMade/css/snakeGame.css';
import { FaArrowLeft, FaStar, FaRegStar, FaGamepad, FaChrome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SnakeGame() {
  const navigate = useNavigate();

  return (
    <div className="sg-page">
      <button className="gtav-back-btn" onClick={() => navigate('/game')}>
               <FaArrowLeft />
             </button>

      <div className="sg-hero">
        <div className="sg-info">
          <h1>Snake Game</h1>
          <p className="sg-meta">Arcade | June 2025</p>
          <p className="sg-desc">
            A fast-paced remake of the classic. Eat, grow, and avoid hitting yourself. Clean animations, retro-modern style, and addictive gameplay!
          </p>

          <button className="sg-play-btn" onClick={() => navigate('/playsnake')}>Play Snake Now</button>
          <button className="sg-play-btn trailer" onClick={() => window.open('https://www.youtube.com/watch?v=GeyDf4ooPdo', '_blank')}>Watch Gameplay</button>

          <div className="sg-rating">
            <strong>Rating:</strong>
            <span>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </span>
          </div>
        </div>
      </div>

      <div className="sg-extra-section">
        <div className="sg-features">
          <h2>Game Features</h2>
          <ul>
            <li>Classic arcade-style gameplay</li>
            <li>Modern graphics and animation</li>
            <li>Mobile and desktop friendly</li>
            <li>Score tracking and growth system</li>
            <li>Keyboard control (WASD or arrow keys)</li>
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
