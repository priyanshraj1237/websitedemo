import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import earn from "../assets/earn.jpg";  // Earn image
import learn from "../assets/learn.jpg"; // Learn image

import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle "Earn" button click
  const handleEarnClick = () => {
    navigate('/EarnHomePage'); // Navigate to EarnHomePage when clicked
  };

  return (
    <div className="homeScreen-container">
      <header className="header-container">
        <div className="logo-container" aria-label="Logo">
          <img src={logo} alt="Cresify Logo" className="logo" />
        </div>

        <nav className="navigation" role="navigation" aria-label="Main Navigation">
          <a href="/home" aria-label="Go to Home">Home</a>
          <a href="/aboutus" aria-label="Learn more About Us">About Us</a>
          <a href="/faq" aria-label="Frequently Asked Questions">FAQ</a>
          <a href="/loginsignup" aria-label="Login or Signup">Login/Signup</a>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="main-heading">What do you want to learn?</h1>
        <div className="links-container">
          <button 
            onClick={handleEarnClick} 
            aria-label="Explore Earning Opportunities"
            className="link-box earn"
          >
            <img src={earn} alt="Earn Money through our platform" className="link-image" />
          </button>
          <a href="/learn" className="link-box learn" aria-label="Explore Learning Opportunities">
            <img src={learn} alt="Learn New Skills with our Courses" className="link-image" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
