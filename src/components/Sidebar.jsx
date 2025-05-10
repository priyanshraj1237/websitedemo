import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaProjectDiagram,
  FaWallet,
  FaGavel,
  FaUserCircle,
  FaTasks,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = ({ onLogout }) => {
  const location = useLocation();

  const links = [
    { name: 'My Projects', path: '/MyProjects', icon: <FaProjectDiagram /> },
    { name: 'Wallet', path: '/Wallet', icon: <FaWallet /> },
    { name: 'ManageBid', path: '/ManageBid', icon: <FaGavel /> },
    { name: 'Profile', path: '/ProfilePage', icon: <FaUserCircle /> },
    { name: 'Task Management', path: '/TaskManagement', icon: <FaTasks /> },
  ];

  return (
    <div className="sidebar">
      <style>{`
        .sidebar {
          height: 100vh;
          width: 16rem;
          background-color: #1f2937; /* gray-900 */
          color: white;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }

        .sidebar-header {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid #374151;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: white;
          transition: background 0.2s ease;
        }

        .sidebar-link:hover {
          background-color: #374151;
        }

        .sidebar-link.active {
          background-color: #374151;
        }

        .sidebar-icon {
          margin-right: 0.75rem;
          font-size: 1.2rem;
        }

        .sidebar-logout {
          display: flex;
          align-items: center;
          padding: 1rem;
          color: #f87171;
          background: none;
          border: none;
          width: 100%;
          cursor: pointer;
          border-top: 1px solid #374151;
          transition: color 0.2s, background 0.2s;
        }

        .sidebar-logout:hover {
          color: #f43f5e;
          background-color: #374151;
        }
      `}</style>

      <div className="sidebar-header">Freelencar</div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>

      <button className="sidebar-logout" onClick={onLogout}>
        <FaSignOutAlt className="sidebar-icon" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;


