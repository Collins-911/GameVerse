import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/login.css';

export default function Login() {
  return (
    <div className="login-page">
      <form className="login-form" action="#" method="post">
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />

       
        <Link to="/home" className="login-btn">Login</Link>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
