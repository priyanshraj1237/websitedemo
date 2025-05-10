import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import '../styles/ProjectList.css';

const ProjectList = ({ projects }) => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleApplyNow = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <div className="project-list-container">
      <Navbar />

      <header className="project-list-header">
        <h2>📋 Browse Freelance Projects</h2>
        <p>Find projects that match your skills and submit a bid.</p>
      </header>

      {message && (
        <div className={`bid-message ${message.type}`}>
          {message.text}
        </div>
      )}

      {projects.length === 0 ? (
        <div className="empty-state">
          <p>No projects available.</p>
        </div>
      ) : (
        <div className="project-cards-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-category">{project.category}</div>
              <p className="project-budget">${project.budget} Budget</p>
              <p className="project-skills">
                <strong>Skills:</strong> {project.skills}
              </p>
              <p className="project-description">{project.description}</p>
              <button
                className="apply-now-btn"
                onClick={() => handleApplyNow(project)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;