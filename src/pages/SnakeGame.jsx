import '../css/snake.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaGamepad, FaChrome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SnakeGame() {
  const navigate = useNavigate();

  return (
    <div className="snake-page">
      <div className="snake-header">
        <button className="snake-back-btn" onClick={() => navigate('/game')}>
          <FaArrowLeft />
        </button>
      </div>

      <div className="snake-hero snake-box">
     
        <div className="snake-info">
          <h1>Snake Game</h1>
          <p className="genre">Arcade | Classic Remake</p>
          <p className="release">Released: June 2025</p>
          <p className="desc">
            Snake Game is a fast-paced remake of the legendary arcade classic. Control the snake, eat food, grow longer—but avoid crashing into yourself. Featuring smooth animations, responsive controls, and a retro-modern aesthetic, it's a must-play time killer!
          </p>
          <button
            className="snake-play-btn"
            onClick={() => navigate('/playsnake')}
          >
            Play Snake Now
          </button>
          <button
            className="snake-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=GeyDf4ooPdo', '_blank')}
          >
            Watch Gameplay
          </button>
          <div className="snake-rating">
            <strong>Rating:</strong>
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>

      <div className="snake-extra-section">
        <div className="snake-features snake-box">
          <h2>Game Features</h2>
          <ul>
            <li>Classic arcade-style gameplay</li>
            <li>Modern graphics and animation</li>
            <li>Mobile and desktop friendly</li>
            <li>Score tracking and growth system</li>
            <li>Keyboard control (WASD or arrow keys)</li>
          </ul>
        </div>

        <div className="snake-platforms snake-box">
          <h2>Available On</h2>
          <p><FaChrome /> Web Browser (Desktop & Mobile)</p>
          <p><FaGamepad /> HTML5 Game Engine</p>
        </div>
      </div>

    </div>
  );
}
