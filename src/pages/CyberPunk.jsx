import '../css/gtav.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Cyberpunk2077() {
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
            src="https://i.pinimg.com/736x/41/ba/c5/41bac54a9d7a8bfc2306a4054d6727a4.jpg"
            alt="Cyberpunk 2077"
            className="gtav-img"
          />
        </div>
        <div className="gtav-info">
          <h1>Cyberpunk 2077</h1>
          <p className="genre">Action RPG | CD Projekt Red</p>
          <p className="release">Release Date: December 10, 2020</p>
          <p className="desc">
            Cyberpunk 2077 is a narrative-driven open-world RPG set in Night City, a dystopian future metropolis obsessed with power, glamour, and body modification. Players assume the role of V, a mercenary outlaw in search of a one-of-a-kind implant that holds the key to immortality. With deep customization, branching storylines, and intense combat, it's a bold vision of the future.
          </p>
          <button
            className="gtav-play-btn"
            onClick={() => window.open('https://www.cyberpunk.net', '_blank')}
          >
            Visit Official Site
          </button>
          <button
            className="gtav-play-btn trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=qIcTM8WXFjk', '_blank')}
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
            <li>Immersive open-world experience</li>
            <li>Customizable character cyberware and skills</li>
            <li>Branching storylines with multiple endings</li>
            <li>First-person combat and hacking mechanics</li>
            <li>Phantom Liberty DLC expansion</li>
          </ul>
        </div>

        <div className="gtav-platforms gtav-box">
          <h2>Available On</h2>
          <p><FaPlaystation /> PlayStation 5</p>
          <p><FaXbox /> Xbox Series X|S</p>
          <p><FaWindows /> Windows PC (Steam, GOG, Epic)</p>
        </div>
      </div>

      <div className="gtav-system-req gtav-box">
        <h2>System Requirements</h2>
        <div className="gtav-req-section">
          <div className="gtav-min">
            <h3>Minimum</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i5-3570K / AMD FX-8310</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: GTX 970 / RX 470</li>
              <li>Storage: 70 GB HDD (SSD recommended)</li>
            </ul>
          </div>

          <div className="gtav-rec">
            <h3>Recommended</h3>
            <ul>
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel Core i7-4790 / AMD Ryzen 3 3200G</li>
              <li>Memory: 12 GB RAM</li>
              <li>Graphics: GTX 1060 / GTX 1660 Super / RX 590</li>
              <li>Storage: SSD with 70 GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
