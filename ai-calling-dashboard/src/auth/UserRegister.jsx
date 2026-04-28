import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserAuth.css';
// import api from '../api';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    userId: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
    setLoading(false);
    return;
  }

  try {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  employeeId: formData.userId,   // ✅ FIXED
  password: formData.password,
  fullName: formData.fullName,
  email: formData.email,
  phone: formData.phone
}),
    });

    const data = await res.text();

    if (!res.ok) {
      throw new Error(data || "Registration failed");
    }

    setSuccess('Registration successful! Redirecting...');

    setTimeout(() => navigate('/login'), 1500);

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="user-auth-container">
      <div className="user-auth-card">
        <h2 className="user-auth-title">User Registration</h2>
        
        {error && <div className="user-auth-error">{error}</div>}
        {success && <div className="user-auth-success">{success}</div>}
        
        <form onSubmit={handleSubmit} className="user-auth-form">
          <div className="user-form-group">
            <label>User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="user-form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="user-form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="user-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="user-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>
          
          <div className="user-form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>
          
          <button type="submit" className="user-auth-btn" disabled={loading}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;