import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../css/login.css';
import { BASE_URL } from '../utilities/config.js';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.token && data.user) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        Swal.fire({
          icon: 'success',
          title: `Welcome ${data.user.name || 'User'}!`,
          text: 'Login successful',
          timer: 2000,
          showConfirmButton: false,
          background: '#0b0b0b',
          color: '#ffffff',
        });

        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.message || 'Invalid email or password',
          background: '#0b0b0b',
          color: '#ffffff',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
        background: '#0b0b0b',
        color: '#ffffff',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="on">
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
          autoComplete="email"
        />

        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            autoComplete="current-password"
          />
          <span
            className="password-icon"
            onClick={togglePassword}
            title={showPassword ? 'Hide Password' : 'Show Password'}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="login-btn" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
