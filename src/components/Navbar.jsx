import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGamepad, FaMusic, FaSignOutAlt } from 'react-icons/fa';
import '../../src/css/navbar.css';

export default function Navbar() {
  const iconStyle = {
    fontSize: '24px',
    marginRight: '8px',
    verticalAlign: 'middle',
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ color: '#00ff6a', fontSize: '28px', fontWeight: 'bold' }}>
        GameVerse
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">
            <FaHome style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="/game">
            <FaGamepad style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="/music">
            <FaMusic style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: 'red' }}>
            <FaSignOutAlt style={iconStyle} />
          </Link>
        </li>
      </ul> 
    </nav>
  );
}
