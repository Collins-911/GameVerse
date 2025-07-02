import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TheLegendOfZelda() {
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
            src="https://i.pinimg.com/736x/0e/5e/1c/0e5e1c87589a9c928ec578b3456c735d.jpg"
            alt="Zelda Tears of the Kingdom"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>The Legend of Zelda: Tears of the Kingdom</h1>
          <p className="genre">Action-Adventure | Nintendo</p>
          <p className="release">Release Date: May 12, 2023</p>
          <p className="desc">
            The Legend of Zelda: Tears of the Kingdom is the highly anticipated sequel to Breath of the Wild. Explore a vast open world that spans land and sky, uncover secrets, solve puzzles, and harness new powers to defeat the darkness threatening Hyrule.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.zelda.com/tears-of-the-kingdom/', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=uHGShqcAHlQ', '_blank')}
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
            <li>Massive open world with vertical exploration</li>
            <li>New powers like Ultrahand and Fuse</li>
            <li>Dynamic weather and environmental puzzles</li>
            <li>Story-rich quests with deep lore</li>
            <li>Weapon crafting and custom vehicles</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p>Nintendo Switch</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>Platform: Nintendo Switch console</li>
              <li>Storage: 16.3 GB available space</li>
              <li>Internet: Required for updates</li>
              <li>Controller: Joy-Con or Pro Controller</li>
              <li>Account: Nintendo Account for cloud saves</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>Platform: Nintendo Switch OLED / Lite / Base</li>
              <li>Storage: microSD card with extra space</li>
              <li>Play Mode: TV or handheld supported</li>
              <li>Resolution: 1080p docked / 720p handheld</li>
              <li>Battery: Extended for long sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
