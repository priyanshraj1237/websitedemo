import React, { useState } from 'react';
import '../styles/ProjectReview.css'

const initialReviews = [
  {
    id: 1,
    projectTitle: "E-commerce Website",
    freelancerName: "John Doe",
    submissionSummary: "Built a React frontend and Firebase backend",
    submissionDate: "2025-04-18",
    status: "Pending",
  },
  {
    id: 2,
    projectTitle: "Portfolio Website",
    freelancerName: "Jane Smith",
    submissionSummary: "Developed responsive pages with animations",
    submissionDate: "2025-04-17",
    status: "Selected",
  },
  {
    id: 3,
    projectTitle: "Mobile App UI Design",
    freelancerName: "Alex Ray",
    submissionSummary: "Submitted design screens in Figma",
    submissionDate: "2025-04-15",
    status: "Needs Rework",
  },
];

const ProjectReview = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const updateStatus = (id, newStatus) => {
    const updated = reviews.map(review =>
      review.id === id ? { ...review, status: newStatus } : review
    );
    setReviews(updated);
  };

  return (
    <div className="review-container">
      <h2>📋 Project Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <h3>{review.projectTitle}</h3>
            <span className={`status ${review.status.toLowerCase()}`}>
              {review.status}
            </span>
          </div>
          <p><strong>Freelancer:</strong> {review.freelancerName}</p>
          <p><strong>Submitted On:</strong> {review.submissionDate}</p>
          <p><strong>Summary:</strong> {review.submissionSummary}</p>

          {review.status === 'Pending' && (
            <div className="actions">
              <button onClick={() => updateStatus(review.id, 'Selected')} className="approve">✅ Approve</button>
              <button onClick={() => updateStatus(review.id, 'Needs Rework')} className="rework">❌ Request Rework</button>
            </div>
          )}

          {review.status === 'Needs Rework' && (
            <p className="note">⚠️ Project not up to mark. Please resubmit after improvements.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectReview;