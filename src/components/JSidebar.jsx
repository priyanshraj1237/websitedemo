import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaDollarSign, FaUser, FaComments, FaBell, FaDownload } from 'react-icons/fa';  // You can use any icons as per your preference

const JSidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <h2 style={{ color: '#fff' }}>JobProvider</h2>
      </div>
      <ul style={menuStyle}>
        <li style={menuItemStyle}>
          <Link to="/JpMyProjects" style={linkStyle}>
            <FaBriefcase style={iconStyle} /> My Projects
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/ManageBids" style={linkStyle}>
            <FaHome style={iconStyle} /> Bids
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/paymentstatus" style={linkStyle}>
            <FaDollarSign style={iconStyle} /> Payment Status
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/ProfilePage" style={linkStyle}>
            <FaUser style={iconStyle} /> Profile
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/ProjectReview" style={linkStyle}>
            <FaComments style={iconStyle} /> Project Review
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/projectAnalytics" style={linkStyle}>
            <FaBriefcase style={iconStyle} /> Project Analytics
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/messaging" style={linkStyle}>
            <FaComments style={iconStyle} /> Messaging
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/notifications" style={linkStyle}>
            <FaBell style={iconStyle} /> Notifications
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/download-contracts" style={linkStyle}>
            <FaDownload style={iconStyle} /> Download Contracts
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Styles for Sidebar
const sidebarStyle = {
  backgroundColor: '#2C3E50',
  color: '#fff',
  width: '250px',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
};

const logoStyle = {
  textAlign: 'center',
  marginBottom: '30px',
};

const menuStyle = {
  listStyleType: 'none',
  padding: 0,
};

const menuItemStyle = {
  marginBottom: '15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '20px',
};

export default JSidebar;
