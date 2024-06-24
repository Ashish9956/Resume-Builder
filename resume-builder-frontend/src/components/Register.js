// Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      navigate('/login');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data : { message: 'An error occurred' });
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">Register</h2>
      {error && <p className="text-red-500 text-center">{error.message || 'An error occurred'}</p>}
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
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
