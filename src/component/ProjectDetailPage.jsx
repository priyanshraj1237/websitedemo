import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import '../styles/ProjectDetailPage.css';
import { FaRegCalendarAlt, FaDollarSign } from 'react-icons/fa';

const ProjectDetailPage = () => {
  const { state } = useLocation();
  const { project } = state || {};
  const [bidAmount, setBidAmount] = useState('');
  const [status, setStatus] = useState('Open');
  const [error, setError] = useState('');

  const handleBidSubmit = () => {
    const amount = parseFloat(bidAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid bid amount.');
      return;
    }

    console.log(`Bid amount submitted: $${amount}`);
    setStatus('Bid Submitted');
    setBidAmount('');
    setError('');
  };

  if (!project) return <p>Project not found!</p>;

  const skillsList = Array.isArray(project.skills) ? project.skills.join(', ') : '';

  return (
    <div className="project-detail-page">
      <Navbar />
      <div className="project-detail-container">
        <div className="project-header">
          <h2 className="project-title">{project.title}</h2>
          <div className="project-meta">
            <p className="category">{project.category}</p>
            <p className="budget"><FaDollarSign /> ${project.budget}</p>
            <p className="skills"><strong>Skills:</strong> {skillsList}</p>
          </div>
        </div>

        <div className="project-status">
          <h3>Status: <span className={`status-${status.toLowerCase().replace(/\s+/g, '-')}`}>{status}</span></h3>
        </div>

        <div className="project-description">
          <h3>Description</h3>
          <p>{project.description}</p>
        </div>

        <div className="bid-section">
          <h3>Submit Your Bid</h3>
          <input
            type="number"
            placeholder="Enter bid amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            className="bid-input"
            aria-label="Bid amount input"
          />
          <button className="submit-bid-btn" onClick={handleBidSubmit}>Submit Bid</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;