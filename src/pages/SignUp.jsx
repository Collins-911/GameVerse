import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URL } from '../utilities/config.js';
import '../css/signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in all fields',
        confirmButtonColor: '#00ff6a',
        background: '#0b0b0b',
        color: '#ffffff',
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords Do Not Match',
        text: 'Please ensure both passwords are the same',
        confirmButtonColor: '#ff4e4e',
        background: '#0b0b0b',
        color: '#ffffff',
      });
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

     if (res.ok) {
  localStorage.setItem('token', data.token);
  Swal.fire({
    icon: 'success',
    title: 'Registration Successful',
    text: 'Welcome! You are now signed in.',
    confirmButtonColor: '#00ff6a',
    background: '#0b0b0b',
    color: '#ffffff',
    timer: 2000,
    showConfirmButton: false,
  });
  navigate('/home');
}
 else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: data.message || 'An error occurred',
          confirmButtonColor: '#ff4e4e',
          background: '#0b0b0b',
          color: '#ffffff',
        });
      }
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Please try again later',
        confirmButtonColor: '#ff4e4e',
        background: '#0b0b0b',
        color: '#ffffff',
      });
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="row">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <div className="password-field">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Confirm password"
                onChange={handleChange}
                required
              />
              <span onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
