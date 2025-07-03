import '../gamesMade/css/snakeGame.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaGamepad, FaChrome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TicTacToeGame() {
  const navigate = useNavigate();

  return (
    <div className="sg-page">
      <button className="sg-back-btn" onClick={() => navigate('/game')}>
        <FaArrowLeft />
      </button>

      <div className="sg-hero">
        <div className="sg-info">
          <h1>Tic Tac Toe</h1>
          <p className="sg-meta">Strategy | July 2025</p>
          <p className="sg-desc">
            Outsmart your opponent in this timeless 3x3 strategy game. Simple yet engaging with a smooth interface and responsive design.
          </p>

          <button className="sg-play-btn" onClick={() => navigate('/tictactoe')}>Play Tic Tac Toe</button>
          <button
            className="sg-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=1LqZ7dhBBcM', '_blank')}
          >
            Watch Gameplay
          </button>

          <div className="sg-rating">
            <strong>Rating:</strong>
            <span>
              <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            </span>
          </div>
        </div>
      </div>

      <div className="sg-extra-section">
        <div className="sg-features">
          <h2>Game Features</h2>
          <ul>
            <li>Classic two-player mode</li>
            <li>Minimalist and clean interface</li>
            <li>Responsive design for all devices</li>
            <li>Restart and reset functionality</li>
            <li>Click-based intuitive gameplay</li>
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
