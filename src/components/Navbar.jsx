import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  FaHome,
  FaGamepad,
  FaMusic,
  FaBroadcastTower,
  FaSignOutAlt,
} from 'react-icons/fa';
import '../css/navbar.css';

export default function Navbar() {
  const handleLogout = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of GameVerse.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00ff6a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      background: 'black',
      color: 'white',
      width: '350px',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('authToken');

        Swal.fire({
          title: 'Logged Out',
          text: 'You have been logged out successfully.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          background: 'black',
          color: '#00ff6a',
          width: '350px',
        }).then(() => {
          // Full page reload to re-trigger animations on entry page
          window.location.href = '/';
        });
      }
    });
  };

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
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'nav-link active-link bounce' : 'nav-link'
              }
              end
            >
              <FaHome className="nav-icon" />
              <span className="link-text">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/game"
              className={({ isActive }) =>
                isActive ? 'nav-link active-link bounce' : 'nav-link'
              }
            >
              <FaGamepad className="nav-icon" />
              <span className="link-text">Games</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/music"
              className={({ isActive }) =>
                isActive ? 'nav-link active-link bounce' : 'nav-link'
              }
            >
              <FaMusic className="nav-icon" />
              <span className="link-text">Music</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/livestream"
              className={({ isActive }) =>
                isActive ? 'nav-link active-link bounce' : 'nav-link'
              }
            >
              <FaBroadcastTower className="nav-icon" />
              <span className="link-text">Livestream</span>
            </NavLink>
          </li>

          <li>
            <a href="/" onClick={handleLogout} className="nav-link logout">
              <FaSignOutAlt className="nav-icon" />
              <span className="link-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
