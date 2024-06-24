// AuthContext.js

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Create a context object
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle login
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user); // Assuming the API returns user data
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      throw new Error(error.response ? error.response.data : 'An error occurred during login');
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
