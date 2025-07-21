import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../../src/css/signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  // Email format checker
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirm = confirm.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirm) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in all fields.',
        background: 'black',
        color: '#fff',
        width: '400px',
      });
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        background: 'black',
        color: '#fff',
        width: '400px',
      });
      return;
    }

    if (trimmedPassword.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Weak Password',
        text: 'Password must be at least 6 characters long.',
        background: 'black',
        color: '#fff',
        width: '400px',
      });
      return;
    }

    if (trimmedPassword !== trimmedConfirm) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match.',
        background: 'black',
        color: '#fff',
        width: '400px',
      });
      return;
    }

    try {
      const response = await axios.post('https://your-api.com/api/signup', {
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful',
          text: 'Welcome to GameVerse!',
          timer: 1500,
          showConfirmButton: false,
          background: 'black',
          color: '#fff',
          width: '400px',
        }).then(() => {
          navigate('/home');
        });
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Signup Error',
        text: error.response?.data?.message || 'Something went wrong. Try again.',
        background: 'black',
        color: '#fff',
        width: '400px',
      });
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
