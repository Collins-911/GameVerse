import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaGamepad,
  FaMusic,
  FaBroadcastTower,
  FaSignOutAlt,
} from 'react-icons/fa';
import '../css/navbar.css';

export default function Navbar() {
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
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
              end
            >
              <FaHome className="nav-icon" />
              <span className="link-text">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/game"
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
            >
              <FaGamepad className="nav-icon" />
              <span className="link-text">Games</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/music"
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
            >
              <FaMusic className="nav-icon" />
              <span className="link-text">Music</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/livestream"
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
            >
              <FaBroadcastTower className="nav-icon" />
              <span className="link-text">Livestream</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link logout active-link' : 'nav-link logout'}
            >
              <FaSignOutAlt className="nav-icon" />
              <span className="link-text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
