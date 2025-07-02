import '../../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function HogwartsLegacy() {
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
            src="hhttps://i.pinimg.com/736x/af/bf/cf/afbfcfcaf49486a63eafbd6e845beccf.jpg"
            alt="Hogwarts Legacy"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Hogwarts Legacy</h1>
          <p className="genre">Action RPG | Portkey Games</p>
          <p className="release">Release Date: February 10, 2023</p>
          <p className="desc">
            Hogwarts Legacy is an open-world action RPG set in the Wizarding World of Harry Potter. Explore a fully realized 1800s Hogwarts, attend magical classes, uncover hidden secrets, and master spellcasting. Shape your wizarding legacy in a story-driven adventure filled with choice and discovery.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.hogwartslegacy.com', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=BtyBjOW8sGY', '_blank')}
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
            <li>Immersive open-world Hogwarts and surrounding areas</li>
            <li>Character customization and house selection</li>
            <li>Learn and upgrade powerful spells</li>
            <li>Beasts, broom flight, and dueling mechanics</li>
            <li>Multiple quest paths and moral decisions</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 4, 5</p>
          <p><FaXbox /> Xbox One, Series X|S</p>
          <p><FaWindows /> Windows PC (Steam / Epic)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i5-6600 / AMD Ryzen 5 1400</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: NVIDIA GTX 960 / AMD RX 470</li>
              <li>Storage: 85 GB HDD</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10/11 64-bit</li>
              <li>Processor: Intel Core i7-8700 / AMD Ryzen 5 3600</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: NVIDIA RTX 2060 / AMD RX 6700 XT</li>
              <li>Storage: SSD with 85 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
