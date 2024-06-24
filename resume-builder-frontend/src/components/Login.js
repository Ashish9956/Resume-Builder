// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full p-3 border rounded mt-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="block w-full p-3 border rounded mt-2"
        />
        <button type="submit" className="block w-full p-3 bg-blue-500 text-white rounded mt-4">
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
