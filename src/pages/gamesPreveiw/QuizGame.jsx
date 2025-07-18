import '../gamesMade/css/snakeGame.css';
import { FaArrowLeft, FaStar, FaRegStar, FaQuestionCircle, FaChrome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function QuizGame() {
  const navigate = useNavigate();

  return (
    <div className="sg-page">
      <button className="gtav-back-btn" onClick={() => navigate('/game')}>
        <FaArrowLeft />
      </button>

      <div className="sg-hero">
        <div className="sg-info">
          <h1>Quiz Challenge</h1>
          <p className="sg-meta">Trivia | July 2025</p>
          <p className="sg-desc">
            Test your brain power! Pick categories, race against time, and dominate the scoreboard. Learn while having fun!
          </p>

          <button className="sg-play-btn" onClick={() => navigate('/playquiz')}>Play Quiz Now</button>
          <button className="sg-play-btn trailer" onClick={() => window.open('https://www.youtube.com/watch?v=HZp7e1jLk5E', '_blank')}>Watch Gameplay</button>

          <div className="sg-rating">
            <strong>Rating:</strong>
            <span>
              <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
            </span>
          </div>
        </div>
      </div>

      <div className="sg-extra-section">
        <div className="sg-features">
          <h2>Game Features</h2>
          <ul>
            <li>Category & difficulty selection</li>
            <li>Countdown timer per question</li>
            <li>Mobile & desktop friendly</li>
            <li>Leaderboard & performance tracking</li>
            <li>Sound effects & feedback animations</li>
          </ul>
        </div>

        <div className="sg-platforms">
          <h2>Available On</h2>
          <p><FaChrome /> Web Browser (Desktop & Mobile)</p>
          <p><FaQuestionCircle /> React + HTML5 Quiz Engine</p>
        </div>
      </div>
    </div>
  );
}
