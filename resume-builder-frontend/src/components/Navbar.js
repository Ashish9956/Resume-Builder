import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = (props) => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  const handleLogout = () => {
    // Call logout function from context or perform logout logic
    setIsLoggedIn(false);
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button component={RouterLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={RouterLink} to="/Resume" color="inherit">
          ResumeTemplate
        </Button>
        {!isLoggedIn ? (
          <>
            <Button component={RouterLink} to="/login" color="inherit">
              Login
            </Button>
            <Button component={RouterLink} to="/register" color="inherit">
              Register
            </Button>
          </>
        ) : (
          <>
            <Button component={RouterLink} to="/dashboard" color="inherit">
              Dashboard
            </Button>
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
