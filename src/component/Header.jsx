import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBell, FaEnvelope, FaWallet, FaSignOutAlt, FaCog } from 'react-icons/fa';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dashboardDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        dashboardDropdownRef.current && !dashboardDropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
        setDashboardDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    alert('Logged out!');
    setDropdownOpen(false);
    setDashboardDropdownOpen(false);
    navigate('/LoginPage');
  };

  const navigateToFreelancerDashboard = () => {
    setDashboardDropdownOpen(false);
    navigate('/FreelancerDashboard');
  };

  const navigateToJobProviderDashboard = () => {
    setDashboardDropdownOpen(false);
    navigate('/DashboardJobProvider');
  };

  const navigateToProfile = () => {
    setDropdownOpen(false);
    navigate('/ProfilePage');
  };

  return (
    <header className="header-box">
      {/* Logo */}
      <div className="header-logo">
        <Link to="/" className="logo-link">
          Zeepo
        </Link>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Right Section */}
      <div className="header-right">
        {/* Dashboard Dropdown */}
        <div className="dashboard-container" ref={dashboardDropdownRef}>
          <button 
            className="icon-btn dashboard-btn"
            onClick={() => setDashboardDropdownOpen(!dashboardDropdownOpen)}
          >
            Dashboard
          </button>
          {dashboardDropdownOpen && (
            <div className="dropdown-menu">
              <button 
                className="dropdown-item" 
                onClick={navigateToFreelancerDashboard}
              >
                View Freelancer Dashboard
              </button>
              <button 
                className="dropdown-item" 
                onClick={navigateToJobProviderDashboard}
              >
                View Job Provider Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Notification and Messages */}
        <Link to="/notifications" className="icon-btn"><FaBell /></Link>
        <Link to="/messages" className="icon-btn"><FaEnvelope /></Link>

        {/* Profile Dropdown */}
        <div className="profile-container" ref={dropdownRef}>
          <FaUserCircle
            className="icon-btn profile-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button 
                className="dropdown-item" 
                onClick={navigateToProfile}
              >
                <FaUserCircle /> View Profile
              </button>
              <Link to="/wallet" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <FaWallet /> Wallet
              </Link>
              <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <FaCog /> Settings
              </Link>
              <button onClick={handleLogout} className="dropdown-item logout">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;