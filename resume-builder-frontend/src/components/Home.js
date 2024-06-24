import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container maxWidth="md" className="py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Resume Builder</h1>
          <p className="text-lg text-gray-700 mb-8">
            Create your professional resume easily with our intuitive tool. Get started by logging in or registering an account.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/login">
              <Button variant="contained" color="primary" className="px-6 py-3">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" color="success" className="px-6 py-3">
                Register
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <img src="https://s.tmimgcdn.com/scr/1200x627/122000/claire-divas-professional-cv-resume-template_122096-original.jpg" alt="Resume Builder" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </Container>
      <footer className="bg-gray-300 text-center py-4">
        <p className="text-gray-600">&copy; 2024 Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
