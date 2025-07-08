import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/signup.css';

export default function Signup() {
  return (
    <div className="signup-page">
      <form className="signup-form" action="#" method="post">
        <h2>Sign Up</h2>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Create a password" />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />
          </div>
        </div>

        <Link to="/home" className="signup-btn">Sign Up</Link>

        <p className="login-link">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
  );
}
