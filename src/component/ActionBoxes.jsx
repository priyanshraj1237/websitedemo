import React from 'react';
import { FaEdit, FaBriefcase, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/ActionBoxes.css';

const ActionBoxes = () => {
  const navigate = useNavigate();

  const boxes = [
    {
      title: 'Post a Project',
      description: 'Get work done by professionals across the globe.',
      icon: <FaEdit aria-hidden="true" />,
      onClick: () => navigate('/ProjectPostForm'),
      ariaLabel: 'Post a Project',
    },
    {
      title: 'Hire a Freelancer',
      description: 'Find talented freelancers to match your needs.',
      icon: <FaBriefcase aria-hidden="true" />,
      onClick: () => navigate('/FreelancerList'),
      ariaLabel: 'Hire a Freelancer',
    },
    {
      title: 'Work as Freelancer',
      description: 'Start earning by doing what you love.',
      icon: <FaHandshake aria-hidden="true" />,
      onClick: () => navigate('/projectlist'),
      ariaLabel: 'Work as Freelancer',
    },
  ];

  return (
    <div className="action-boxes-wrapper">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="action-box"
          onClick={box.onClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              box.onClick();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={box.ariaLabel}
        >
          <div className="action-icon" aria-hidden="true">
            {box.icon}
          </div>
          <h3>{box.title}</h3>
          <p>{box.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ActionBoxes;

