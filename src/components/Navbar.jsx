import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaGamepad,
  FaMusic,
  FaBroadcastTower,
  FaSignOutAlt,
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../css/navbar.css';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: 'You have been successfully logged out.',
      confirmButtonColor: '#00ff6a',
      background: '#1e1e1e',
      color: 'white',
    }).then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      window.location.href = '/';
    });
  };

  const renderNavItem = (to, icon, text, extraClass = '', onClick = null) => (
    <li onClick={onClick}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `nav-link ${extraClass} active-link bounce`
            : `nav-link ${extraClass}`
        }
      >
        {icon}
        <span className="link-text">{text}</span>
      </NavLink>
    </li>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-full">
            <span className="logo-green">Game</span>
            <span className="logo-white">Verse</span>
          </span>
          <span className="logo-short">
            <span className="logo-green">G</span>
            <span className="logo-white">V</span>
          </span>
        </div>

        <ul className="navbar-links">
          {renderNavItem('/home', <FaHome className="nav-icon" />, 'Home')}
          {renderNavItem('/game', <FaGamepad className="nav-icon" />, 'Games')}
          {renderNavItem('/music', <FaMusic className="nav-icon" />, 'Music')}
          {renderNavItem('/livestream', <FaBroadcastTower className="nav-icon" />, 'Livestream')}
          {renderNavItem('/', <FaSignOutAlt className="nav-icon" />, 'Logout', 'logout', handleLogout)}
        </ul>
      </div>
    </nav>
  );
}
