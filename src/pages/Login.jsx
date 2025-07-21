import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../../src/css/login.css'; 

export default function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  // Simple email regex for validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!emailInput || !passwordInput) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Fields',
        text: 'Please fill in both email and password.',
        background: 'black',
        color: 'white',
        width: '350px',
      });
      return;
    }

    // Validate email format
    if (!isValidEmail(emailInput)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        background: 'black',
        color: 'white',
        width: '350px',
      });
      return;
    }

    // Check password length
    if (passwordInput.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Weak Password',
        text: 'Password must be at least 6 characters long.',
        background: 'black',
        color: 'white',
        width: '350px',
      });
      return;
    }

    try {
      const response = await axios.post('https://auth/login', {
        email: emailInput,
        password: passwordInput,
      });

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token); 

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          timer: 1500,
          showConfirmButton: false,
          background: 'black',
          color: '#00ff6a',
          width: '350px',
        }).then(() => {
          navigate('/home');
        });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response?.data?.message || 'Invalid email or password.',
        background: 'black',
        width: '350px',
        color: 'white',
      });
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />

        <button type="submit" className="login-btn">Login</button>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
